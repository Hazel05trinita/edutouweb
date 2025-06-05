import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Calendar, Lock, User, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PaymentModal = ({ isOpen, onClose, course, onPaymentSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required.';
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits.';
    }
    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = 'Expiry date is required.';
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Expiry date must be MM/YY format.';
    }
    if (!formData.cvv.trim()) {
      newErrors.cvv = 'CVV is required.';
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3 or 4 digits.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    onPaymentSuccess();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.2 } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            className="w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="bg-white shadow-2xl rounded-xl overflow-hidden card-3d-form">
              <CardHeader className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">Enroll in {course?.title}</CardTitle>
                  <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
                    <X className="w-6 h-6" />
                  </Button>
                </div>
                <CardDescription className="text-blue-100">
                  Complete your payment to get instant access. Price: {course?.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-gray-700">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`pl-10 ${errors.fullName ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                     <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber" className="text-gray-700">Card Number</Label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        type="text"
                        placeholder="•••• •••• •••• ••••"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className={`pl-10 ${errors.cardNumber ? 'border-red-500' : ''}`}
                        maxLength="19" 
                      />
                    </div>
                    {errors.cardNumber && <p className="text-sm text-red-500">{errors.cardNumber}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate" className="text-gray-700">Expiry Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          type="text"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          className={`pl-10 ${errors.expiryDate ? 'border-red-500' : ''}`}
                          maxLength="5"
                        />
                      </div>
                      {errors.expiryDate && <p className="text-sm text-red-500">{errors.expiryDate}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv" className="text-gray-700">CVV</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="cvv"
                          name="cvv"
                          type="text"
                          placeholder="•••"
                          value={formData.cvv}
                          onChange={handleChange}
                          className={`pl-10 ${errors.cvv ? 'border-red-500' : ''}`}
                          maxLength="4"
                        />
                      </div>
                      {errors.cvv && <p className="text-sm text-red-500">{errors.cvv}</p>}
                    </div>
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full text-lg py-3 btn-3d-primary" disabled={isProcessing}>
                      {isProcessing ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </div>
                      ) : (
                        'Pay & Enroll'
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;
