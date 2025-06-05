
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, GraduationCap, BookOpen, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const Register = () => {
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    expertise: '',
    bio: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Validation Error",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Validation Error",
        description: "Please agree to the terms and conditions.",
        variant: "destructive",
      });
      return false;
    }

    if (userType === 'instructor' && !formData.expertise.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your area of expertise.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate registration process
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Check if user already exists
      const users = JSON.parse(localStorage.getItem('edutou_users') || '[]');
      const existingUser = users.find(u => u.email === formData.email);

      if (existingUser) {
        toast({
          title: "Registration Failed",
          description: "An account with this email already exists.",
          variant: "destructive",
        });
        return;
      }

      // Create new user
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
        userType,
        expertise: formData.expertise,
        bio: formData.bio,
        registrationDate: new Date().toISOString(),
        isActive: true
      };

      users.push(newUser);
      localStorage.setItem('edutou_users', JSON.stringify(users));

      // Auto-login the user
      localStorage.setItem('edutou_user', JSON.stringify({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        userType: newUser.userType,
        loginTime: new Date().toISOString()
      }));

      toast({
        title: "Registration Successful!",
        description: `Welcome to EduTou Academy, ${formData.name}!`,
      });

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="glass card-3d">
            <CardHeader className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse3d-animation"
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
              <CardTitle className="text-2xl font-bold gradient-text">Join EduTou Academy</CardTitle>
              <CardDescription>
                Create your account and start your learning journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* User Type Selection */}
              <div className="mb-8">
                <Label className="text-base font-medium mb-4 block">I want to join as:</Label>
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setUserType('student')}
                    className={`p-6 border-2 rounded-xl transition-all card-3d ${
                      userType === 'student'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <BookOpen className={`w-8 h-8 mx-auto mb-3 ${
                      userType === 'student' ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <div className="font-semibold">Student</div>
                    <div className="text-sm text-gray-600 mt-1">Learn new skills</div>
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setUserType('instructor')}
                    className={`p-6 border-2 rounded-xl transition-all card-3d ${
                      userType === 'instructor'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <GraduationCap className={`w-8 h-8 mx-auto mb-3 ${
                      userType === 'instructor' ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <div className="font-semibold">Instructor</div>
                    <div className="text-sm text-gray-600 mt-1">Teach others</div>
                  </motion.button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a password"
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Instructor-specific fields */}
                <AnimatePresence>
                  {userType === 'instructor' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="expertise">Area of Expertise</Label>
                        <Input
                          id="expertise"
                          name="expertise"
                          value={formData.expertise}
                          onChange={handleInputChange}
                          placeholder="e.g., Web Development, Data Science, Design"
                          required={userType === 'instructor'}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Professional Bio</Label>
                        <textarea
                          id="bio"
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          placeholder="Tell us about your background and teaching experience..."
                          rows={4}
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 input-3d resize-none"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 rounded border-gray-300"
                    required
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the{' '}
                    <Link to="/terms" className="text-blue-600 hover:text-blue-800">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-blue-600 hover:text-blue-800">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} className="btn-3d">
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="spinner-3d w-4 h-4"></div>
                        <span>Creating Account...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Create Account</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </motion.div>

                <div className="text-center">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Floating 3D Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-16 h-16 bg-blue-400/20 rounded-xl rotate3d-animation hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-20 h-20 bg-purple-400/20 rounded-full pulse3d-animation hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        />
      </div>
    </div>
  );
};

export default Register;
