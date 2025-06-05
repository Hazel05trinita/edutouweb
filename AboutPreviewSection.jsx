import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPreviewSection = ({ y1 }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose 
              <span className="gradient-text"> EduTou Academy?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're revolutionizing online education with immersive 3D experiences, 
              personalized learning paths, and cutting-edge technology that makes 
              learning engaging and effective.
            </p>
            <div className="space-y-4">
              {[
                "Interactive 3D Learning Environment",
                "Expert-Led Live Sessions",
                "Personalized Learning Paths",
                "Industry-Recognized Certificates"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="mt-8 btn-3d"
            >
              <Button asChild size="lg">
                <Link to="/about" className="flex items-center space-x-2">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 card-3d">
              <img   
                className="w-full h-96 object-cover rounded-2xl shadow-2xl" 
                alt="Students learning in modern classroom environment"
                src="https://images.unsplash.com/photo-1679316481049-4f6549df499f" />
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate3d-animation opacity-80"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full pulse3d-animation opacity-80"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;