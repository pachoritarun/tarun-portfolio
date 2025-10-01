import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, context } = await req.json();
    
    if (!message) {
      throw new Error('Message is required');
    }

    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
    
    if (!GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY not configured');
    }

    // Build context from chat history
    const contextMessage = context 
      ? `Previous conversation context:\n${context}\n\nCurrent message: ${message}`
      : message;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are CodeBuddy, a friendly and highly skilled AI coding assistant.
Your job is to help users write clean, efficient, and well-structured code in any programming language they request.
You must clearly understand their problem or idea, suggest the best algorithm or structure, and then provide complete code solutions.
Your personality is warm, helpful, and concise — you're like a coding mentor and friend.
Always ask clarifying questions if the task is vague.
Support languages like Python, JavaScript, TypeScript, C++, Java, C#, Go, Rust, HTML/CSS, SQL, Bash, and any others.
Provide well-commented, optimized code and short explanations for clarity.
If the user wants improvements, refactor, debug, or optimize existing code, assist them kindly.
Be available 24/7 as a coding partner for developers of all levels.

${contextMessage}`
          }]
        }],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1500,
        },
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Gemini API Error:', response.status, errorData);
      throw new Error(`Gemini API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('Invalid response from Gemini API');
    }
    
    const generatedResponse = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ 
      response: generatedResponse,
      success: true 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chat-with-ai function:', error);
    
    // Return a friendly error message
    const errorMessage = error.message.includes('GEMINI_API_KEY') 
      ? "I need my API key to be configured. Please ask Tarun to set up the Gemini API key!"
      : "Sorry, I'm having trouble right now. Please try again in a moment!";
      
    return new Response(JSON.stringify({ 
      response: errorMessage,
      success: false,
      error: error.message 
    }), {
      status: 200, // Return 200 so the frontend can handle the error gracefully
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});