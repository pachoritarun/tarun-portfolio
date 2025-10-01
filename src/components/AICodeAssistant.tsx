import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Code, Minimize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';


interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const AICodeAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const addMessage = (content: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const typeMessage = async (content: string) => {
    setIsTyping(true);
    const tempId = Date.now().toString();
    
    // Add empty message that will be typed into
    setMessages(prev => [...prev, {
      id: tempId,
      content: '',
      isUser: false,
      timestamp: new Date(),
    }]);

    // Type the message character by character
    for (let i = 0; i <= content.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 20));
      setMessages(prev => prev.map(msg => 
        msg.id === tempId 
          ? { ...msg, content: content.substring(0, i) }
          : msg
      ));
    }
    
    setIsTyping(false);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    addMessage(userMessage, true);
    setIsLoading(true);

    try {
      const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'AIzaSyAm-Yv-xW2S89BdjmVTY4y6EzhCAhEG1eM';
      
      const contextMessage = messages.length > 0 
        ? `Previous conversation context:\n${messages.slice(-10).map(m => `${m.isUser ? 'User' : 'Assistant'}: ${m.content}`).join('\n')}\n\nCurrent message: ${userMessage}`
        : userMessage;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`, {
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
        throw new Error(`Gemini API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        throw new Error('Invalid response from Gemini API');
      }
      
      const generatedResponse = data.candidates[0].content.parts[0].text;
      await typeMessage(generatedResponse);
    } catch (error) {
      console.error('Error sending message:', error);
      await typeMessage("🔌 Oops! I'm having trouble connecting to my servers. Please make sure you're connected to the internet and try again!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openChat = () => {
    setIsOpen(true);
    setIsMinimized(false);
    
    // Add greeting message if no messages exist
    if (messages.length === 0) {
      setTimeout(() => {
        typeMessage("Hi 👋, I'm your AI Coding Guide. Ask me anything about coding, DSA, or tech guidance!");
      }, 500);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  return (
    <>
      {/* Floating Button */}
      {(!isOpen || isMinimized) && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={openChat}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 hover:from-cyan-400 hover:via-purple-400 hover:to-blue-400 border-0 shadow-2xl transform transition-all duration-300 hover:scale-110 animate-pulse"
            style={{
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.6), 0 0 60px rgba(147, 51, 234, 0.4)',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          >
            <Code className="h-8 w-8 text-white" />
          </Button>
        </div>
      )}

      {/* Chat Panel */}
      {isOpen && !isMinimized && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-black/95 border border-cyan-500/30 rounded-2xl shadow-2xl backdrop-blur-md transform transition-all duration-300 animate-slide-in-right">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-cyan-500/20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
              <h3 className="text-white font-semibold text-sm">AI Coding Guide</h3>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={minimizeChat}
                className="h-8 w-8 text-cyan-400 hover:text-white hover:bg-cyan-500/20"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeChat}
                className="h-8 w-8 text-cyan-400 hover:text-white hover:bg-red-500/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="h-[360px] p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white ml-auto'
                        : 'bg-gray-800/80 text-gray-100 border border-cyan-500/20'
                    }`}
                  >
                    {message.content}
                    {!message.isUser && isTyping && message.content === '' && (
                      <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1"></span>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-cyan-500/20">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about coding, DSA, or tech..."
                disabled={isLoading}
                className="flex-1 bg-gray-800/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                size="icon"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 border-0 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default AICodeAssistant;