import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CoffeePaymentRequest {
  amount: number;
  coffee_type: string;
  message?: string;
  user_email?: string;
  payment_method: string;
}

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[COFFEE-PAYMENT] ${step}${detailsStr}`);
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Coffee payment processing started");

    // Create Supabase client with service role for secure writes
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { persistSession: false } }
    );

    const { amount, coffee_type, message, user_email, payment_method }: CoffeePaymentRequest = await req.json();
    
    logStep("Payment data received", { amount, coffee_type, payment_method });

    // Validate required fields
    if (!amount || !coffee_type || !payment_method) {
      throw new Error("Missing required payment information");
    }

    // Validate amount (should be one of our coffee prices)
    const validAmounts = [50, 100, 200];
    if (!validAmounts.includes(amount)) {
      throw new Error("Invalid payment amount");
    }

    // Generate a simple transaction ID
    const transaction_id = `coffee_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    // Record the payment in the database
    const { data, error } = await supabase
      .from('coffee_payments')
      .insert({
        amount,
        coffee_type,
        message: message || null,
        user_email: user_email || null,
        payment_method,
        transaction_id,
        status: 'completed',
      })
      .select()
      .single();

    if (error) {
      logStep("Database error", { error: error.message });
      throw new Error(`Failed to record payment: ${error.message}`);
    }

    logStep("Payment recorded successfully", { paymentId: data.id, transactionId: transaction_id });

    // Send success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your coffee! ☕",
        transaction_id,
        payment_id: data.id,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    logStep("ERROR in coffee payment processing", { error: errorMessage });

    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});