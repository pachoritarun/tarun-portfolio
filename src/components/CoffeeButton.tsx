import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, X, Heart, QrCode, Copy, Loader2, CheckCircle, Gift } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const COFFEE_OPTIONS = [
  { id: 'small', name: 'Small Coffee', emoji: '☕', price: 50, description: 'A quick espresso shot!' },
  { id: 'medium', name: 'Medium Coffee', emoji: '☕☕', price: 100, description: 'Perfect morning brew' },
  { id: 'large', name: 'Large Coffee', emoji: '☕☕☕', price: 200, description: 'Premium coffee experience' }
];

const CONFETTI_PARTICLES = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 2,
  duration: 2 + Math.random() * 2,
}));

export const CoffeeButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState(COFFEE_OPTIONS[1]);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [customerMessage, setCustomerMessage] = useState('');
  const { toast } = useToast();

  const upiId = 'tarun@paytm';

  const handleCoffeeSelect = (coffee: typeof COFFEE_OPTIONS[0]) => {
    setSelectedCoffee(coffee);
    setShowPayment(true);
  };

  const copyUPIId = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      toast({
        title: 'UPI ID Copied!',
        description: 'You can now paste it in your payment app',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: 'Copy failed',
        description: 'Please copy the UPI ID manually',
        variant: 'destructive',
      });
    }
  };

  const openUPIApp = () => {
    const upiUrl = `upi://pay?pa=${upiId}&pn=Tarun&am=${selectedCoffee.price}&cu=INR&tn=Coffee%20Support%20${selectedCoffee.name}`;
    window.open(upiUrl, '_blank');
    handlePaymentComplete();
  };

  const handlePaymentComplete = async () => {
    setPaymentStatus('processing');
    
    try {
      // Record the payment in Supabase
      const { error } = await supabase
        .from('coffee_payments')
        .insert({
          amount: selectedCoffee.price,
          coffee_type: selectedCoffee.name,
          message: customerMessage,
          payment_method: 'upi',
          status: 'completed',
        });

      if (error) {
        console.error('Error recording payment:', error);
      }

      // Simulate payment processing
      setTimeout(() => {
        setPaymentStatus('success');
        setShowConfetti(true);
        toast({
          title: '☕ Thank you!',
          description: `Your ${selectedCoffee.name} support means the world to me!`,
        });
        
        // Auto close after celebration
        setTimeout(() => {
          setIsOpen(false);
          setShowPayment(false);
          setPaymentStatus('idle');
          setShowConfetti(false);
          setCustomerMessage('');
        }, 4000);
      }, 2000);
    } catch (error) {
      console.error('Payment processing error:', error);
      setPaymentStatus('idle');
      toast({
        title: 'Something went wrong',
        description: 'Please try again or contact support',
        variant: 'destructive',
      });
    }
  };

  const resetModal = () => {
    setIsOpen(false);
    setShowPayment(false);
    setPaymentStatus('idle');
    setShowConfetti(false);
    setCustomerMessage('');
  };

  return (
    <>
      {/* Floating Coffee Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          className="group relative bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Coffee className="w-6 h-6" />
          
          {/* Steam Animation */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 opacity-70">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-3 bg-white rounded-full"
                style={{ marginLeft: i * 3 - 3 }}
                animate={{
                  y: [-5, -15],
                  opacity: [0.7, 0],
                  scale: [1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-amber-400"
            animate={{
              scale: [1, 1.4],
              opacity: [0.7, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          
          {/* Heart Beat */}
          <motion.div
            className="absolute -top-1 -right-1 text-red-500"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-4 h-4 fill-current" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Payment Modal */}
      <Dialog open={isOpen} onOpenChange={resetModal}>
        <DialogContent className="sm:max-w-md overflow-hidden">
          {/* Confetti Animation */}
          <AnimatePresence>
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none z-50">
                {CONFETTI_PARTICLES.map((particle) => (
                  <motion.div
                    key={particle.id}
                    className="absolute text-2xl"
                    style={{ left: `${particle.left}%` }}
                    initial={{ y: -50, opacity: 0, rotate: 0 }}
                    animate={{
                      y: window.innerHeight,
                      opacity: [0, 1, 1, 0],
                      rotate: 360,
                    }}
                    transition={{
                      duration: particle.duration,
                      delay: particle.delay,
                      ease: "easeOut",
                    }}
                  >
                    ☕
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-center">
              <Gift className="w-5 h-5 text-amber-600" />
              Buy Me a Coffee
              <Coffee className="w-5 h-5 text-amber-600" />
            </DialogTitle>
          </DialogHeader>

          {/* Success State */}
          {paymentStatus === 'success' && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: 2 }}
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Thank You! ☕
              </h3>
              <p className="text-muted-foreground">
                Your {selectedCoffee.name} support means everything to me!
              </p>
              <motion.div
                className="mt-4 text-4xl"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                🙏
              </motion.div>
            </motion.div>
          )}

          {/* Processing State */}
          {paymentStatus === 'processing' && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <Loader2 className="w-12 h-12 animate-spin text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Processing Payment...</h3>
              <p className="text-muted-foreground">
                Thank you for your generosity! ☕
              </p>
            </motion.div>
          )}

          {/* Coffee Selection */}
          {!showPayment && paymentStatus === 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <p className="text-center text-muted-foreground">
                Support my work with a virtual coffee! ☕
              </p>
              
              <div className="grid gap-3">
                {COFFEE_OPTIONS.map((coffee) => (
                  <motion.div
                    key={coffee.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      className="cursor-pointer hover:bg-accent border-2 hover:border-amber-200 transition-all"
                      onClick={() => handleCoffeeSelect(coffee)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{coffee.emoji}</span>
                            <div>
                              <h3 className="font-medium">{coffee.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {coffee.description}
                              </p>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                            ₹{coffee.price}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium mb-2 block">
                  Leave a message (optional)
                </label>
                <textarea
                  value={customerMessage}
                  onChange={(e) => setCustomerMessage(e.target.value)}
                  placeholder="Say something nice... ☕"
                  className="w-full p-3 border rounded-md resize-none"
                  rows={3}
                  maxLength={200}
                />
              </div>
            </motion.div>
          )}

          {/* Payment Options */}
          {showPayment && paymentStatus === 'idle' && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
                  {selectedCoffee.emoji} {selectedCoffee.name}
                  <Badge variant="outline">₹{selectedCoffee.price}</Badge>
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {selectedCoffee.description}
                </p>
              </div>

              <Separator />

              <div className="space-y-3">
                <Button
                  onClick={openUPIApp}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  size="lg"
                >
                  <QrCode className="w-4 h-4 mr-2" />
                  Pay with UPI App
                </Button>

                <div className="text-center text-sm text-muted-foreground">or</div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">UPI ID:</label>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-muted p-3 rounded-md font-mono text-center">
                      {upiId}
                    </div>
                    <Button
                      onClick={copyUPIId}
                      variant="outline"
                      size="icon"
                      className={copied ? 'bg-green-100 border-green-300' : ''}
                    >
                      {copied ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={handlePaymentComplete}
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  I've Made the Payment ✅
                </Button>
              </div>

              <Button
                onClick={() => setShowPayment(false)}
                variant="ghost"
                className="w-full"
              >
                ← Back to Coffee Selection
              </Button>
            </motion.div>
          )}

          {/* Close Button */}
          {paymentStatus === 'idle' && (
            <Button
              onClick={resetModal}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};