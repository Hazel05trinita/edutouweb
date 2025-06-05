import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Users, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const FeaturedCoursesSection = ({ courses, onEnrollNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courses.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [courses.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular courses designed by industry experts
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {courses.map((course) => (
                <div key={course.id} className="w-full flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="card-flip mx-4"
                  >
                    <Card className="h-96 card-flip-inner">
                      <div className="card-flip-front bg-gradient-to-br from-white to-gray-50 p-8 flex flex-col justify-center items-center text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 rotate3d-animation">
                          <BookOpen className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                        <p className="text-gray-600 mb-4">by {course.instructor}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            {course.rating}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {course.students}
                          </div>
                        </div>
                      </div>
                      <div className="card-flip-back bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex flex-col justify-center items-center text-center text-white">
                        <img  className="w-full h-32 object-cover rounded-lg mb-4" alt={`${course.title} course preview`} src="https://images.unsplash.com/photo-1635251595512-dc52146d5ae8" />
                        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                        <p className="text-blue-100 mb-4">{course.category}</p>
                        <div className="text-2xl font-bold mb-4">{course.price}</div>
                        <Button variant="secondary" className="w-full" onClick={() => onEnrollNow(course)}>
                          Enroll Now
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all btn-3d"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all btn-3d"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;