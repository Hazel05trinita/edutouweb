
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@edutou.academy",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9812345867",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Chennai, India",
      description: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Online Support",
      description: "We're always here to help"
    }
  ];

  const supportTypes = [
    {
      icon: MessageCircle,
      title: "General Inquiry",
      description: "Questions about our platform or services"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Interested in partnering with us"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Need help with technical issues"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store in localStorage for demo purposes
      const contacts = JSON.parse(localStorage.getItem('edutou_contacts') || '[]');
      contacts.push({
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('edutou_contacts', JSON.stringify(contacts));

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general'
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-2xl float-animation"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-2xl float-animation" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="card-3d"
              >
                <Card className="text-center h-full glass">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse3d-animation">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-900 mb-2">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass card-3d">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Support Type Selection */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">What can we help you with?</Label>
                      <div className="grid grid-cols-1 gap-3">
                        {supportTypes.map((type) => (
                          <motion.label
                            key={type.title}
                            whileHover={{ scale: 1.02 }}
                            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                              formData.type === type.title.toLowerCase().replace(' ', '')
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="type"
                              value={type.title.toLowerCase().replace(' ', '')}
                              checked={formData.type === type.title.toLowerCase().replace(' ', '')}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                formData.type === type.title.toLowerCase().replace(' ', '')
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-100 text-gray-600'
                              }`}>
                                <type.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="font-medium">{type.title}</div>
                                <div className="text-sm text-gray-600">{type.description}</div>
                              </div>
                            </div>
                          </motion.label>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this regarding?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 input-3d resize-none"
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} className="btn-3d">
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="spinner-3d w-4 h-4"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
                            {/* FAQ Section */}
              <Card className="glass card-3d">
                <CardHeader>
                  <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How quickly do you respond?</h4>
                    <p className="text-gray-600 text-sm">We typically respond to all inquiries within 24 hours during business days.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Do you offer phone support?</h4>
                    <p className="text-gray-600 text-sm">Yes! Our phone support is available Monday-Friday, 9AM-6PM EST.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Can I schedule a demo?</h4>
                    <p className="text-gray-600 text-sm">Absolutely! Contact us to schedule a personalized demo of our platform.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
