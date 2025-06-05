import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = ({ y2 }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: y2 }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl float-animation"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-2xl float-animation" style={{ animationDelay: '3s' }}></div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful learners who have advanced their careers 
            with EduTou Academy's innovative learning platform.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="btn-3d"
          >
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/register" className="flex items-center space-x-2">
                <span>Start Your Journey Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;