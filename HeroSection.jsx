import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = ({ y1, y2 }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl float-animation"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }}></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 slide-in-3d"
            style={{ y: y2 }}
          >
            Learn Without
            <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Limits
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of learners in our immersive 3D learning environment. 
            Experience education like never before with cutting-edge technology and expert instructors.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="btn-3d">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                <Link to="/register" className="flex items-center space-x-2">
                  <span>Start Learning Today</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute top-1/4 left-10 w-16 h-16 bg-white/10 rounded-xl rotate3d-animation hidden lg:block"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-20 h-20 bg-white/10 rounded-full pulse3d-animation hidden lg:block"
        style={{ y: y2 }}
      />
    </section>
  );
};

export default HeroSection;