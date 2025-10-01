-- Create coffee payments table for tracking coffee purchases
CREATE TABLE public.coffee_payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT,
  amount DECIMAL(10,2) NOT NULL,
  payment_method TEXT NOT NULL DEFAULT 'upi',
  status TEXT NOT NULL DEFAULT 'pending',
  transaction_id TEXT,
  coffee_type TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.coffee_payments ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert coffee payments (for guest purchases)
CREATE POLICY "Anyone can create coffee payments" 
ON public.coffee_payments 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow users to view all coffee payments (for thank you wall)
CREATE POLICY "Coffee payments are viewable by everyone" 
ON public.coffee_payments 
FOR SELECT 
USING (true);

-- Add trigger for updating timestamps
CREATE TRIGGER update_coffee_payments_updated_at
BEFORE UPDATE ON public.coffee_payments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();