import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Heart, 
  X, 
  Copy, 
  Check, 
  Coffee, 
  Gift,
  Smartphone,
  QrCode
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DonationButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const upiId = 'tarunpancholi2006@axl';

  const copyUPIId = async () => {
    await navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "UPI ID Copied!",
      description: "You can now paste it in your payment app.",
    });
  };

  const openUPIApp = () => {
    const upiUrl = `upi://pay?pa=${upiId}&pn=Tarun%20Pancholi&cu=INR`;
    window.open(upiUrl, '_blank');
  };

  return (
    <>
      {/* Floating Donation Button */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-24 right-6 z-40"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 hover:scale-110 transition-all duration-300 shadow-2xl relative overflow-hidden group border-2 border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
              >
                <Heart className="h-4 w-4 text-white fill-white" />
              </motion.div>
            </Button>
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white shadow-lg"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Donation Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md"
            >
              <Card className="border-2 border-pink-500/30 bg-background/95 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-red-500/5 to-orange-500/10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/10 to-transparent"
                  animate={{ x: [-300, 300] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                
                <CardHeader className="p-4 border-b border-pink-500/20 relative z-10 bg-gradient-to-r from-pink-500/10 to-red-500/10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="p-2 rounded-full bg-gradient-to-br from-pink-500 to-red-600"
                      >
                        <Gift className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                          Support My Work
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Buy me a coffee ☕
                        </p>
                      </div>
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="h-8 w-8 hover:bg-red-500/20 text-red-400"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-6 relative z-10">
                  <div className="text-center space-y-2">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Coffee className="w-16 h-16 mx-auto text-amber-600" />
                    </motion.div>
                    <p className="text-sm text-muted-foreground">
                      Thank you so much for considering supporting my work! Your kindness means the world to me and helps me continue building amazing projects. Every contribution, no matter the size, fuels my passion for coding and innovation! 🙏✨
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* QR Code Payment */}
                    <div className="text-center space-y-3">
                      <Badge variant="secondary" className="mb-2">
                        <QrCode className="w-3 h-3 mr-1" />
                        QR Code Payment
                      </Badge>
                      <div className="bg-muted/50 p-4 rounded-lg border">
                        <img 
                          src="/lovable-uploads/8237ceae-db92-4158-aa0d-1ceeabf2e262.png" 
                          alt="Payment QR Code" 
                          className="w-32 h-32 mx-auto rounded-lg shadow-lg"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          Scan with any UPI app to pay
                        </p>
                      </div>
                    </div>

                    {/* UPI ID Payment */}
                    <div className="text-center">
                      <Badge variant="secondary" className="mb-2">
                        <Smartphone className="w-3 h-3 mr-1" />
                        UPI Payment
                      </Badge>
                      <div className="bg-muted/50 p-4 rounded-lg border">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-sm">{upiId}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={copyUPIId}
                            className="h-8 w-8 p-0"
                          >
                            {copied ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        onClick={copyUPIId}
                        variant="outline"
                        className="h-12 border-pink-500/30 hover:bg-pink-500/10"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy UPI ID
                      </Button>
                      <Button
                        onClick={openUPIApp}
                        className="h-12 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
                      >
                        <Smartphone className="w-4 h-4 mr-2" />
                        BHIM UPI Pay
                      </Button>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      Thank you for your support! 🙏
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DonationButton;