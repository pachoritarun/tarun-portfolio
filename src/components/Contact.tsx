import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  CheckCircle,
  Loader2
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pachoritarun05@gmail.com",
      link: "mailto:pachoritarun05@gmail.com",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "tarun-pancholi",
      link: "https://linkedin.com/in/tarun-pancholi-0433b9308",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "pachoritarun",
      link: "https://github.com/pachoritarun",
      color: "from-gray-500 to-gray-700"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jaipur, Rajasthan",
      link: "",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Initialize EmailJS with your service ID, template ID, and user ID
      const result = await emailjs.send(
        'service_x4zez2q', // EmailJS service ID
        'template_9oybm78', // EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Tarun Pancholi',
        },
        '0XbPKT--mR0-YXdzG' // EmailJS public key
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
            >
              Get In <span className="gradient-text">Touch</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 gradient-text">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with 
                  fellow developers, designers, and entrepreneurs. Whether you have 
                  a specific project in mind or just want to say hello, feel free 
                  to reach out!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="border-portfolio-neon/10 hover:border-portfolio-neon/30 transition-all duration-300 cursor-pointer group"
                          onClick={() => contact.link && window.open(contact.link, '_blank')}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${contact.color} shadow-lg group-hover:scale-110 transition-transform`}>
                            <contact.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{contact.label}</h4>
                            <p className="text-muted-foreground text-sm">{contact.value}</p>
                          </div>
                          {contact.link && (
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                              <Badge variant="secondary" className="text-xs">
                                Click to open
                              </Badge>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-portfolio-neon/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="h-5 w-5 text-portfolio-neon" />
                      <h4 className="font-semibold">Availability</h4>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span>Available for new projects</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-portfolio-neon" />
                        <span>Response time: Within 24 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span>Time zone: IST (GMT+5:30)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-portfolio-neon/10 hover:border-portfolio-neon/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">
                    Send Me a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name *</label>
                        <Input
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-portfolio-neon/20 focus:border-portfolio-neon"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-portfolio-neon/20 focus:border-portfolio-neon"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject *</label>
                      <Input
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="border-portfolio-neon/20 focus:border-portfolio-neon"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message *</label>
                      <Textarea
                        name="message"
                        placeholder="Tell me about your project or just say hello..."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="border-portfolio-neon/20 focus:border-portfolio-neon resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-portfolio-tech-blue to-portfolio-electric-purple hover:opacity-90 transition-opacity neon-glow"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By sending this message, you agree to be contacted about your inquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;