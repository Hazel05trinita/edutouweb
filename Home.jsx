import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Users, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PaymentModal from '@/components/PaymentModal';
import { useToast } from '@/components/ui/use-toast';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import FeaturedCoursesSection from '@/components/home/FeaturedCoursesSection';
import AboutPreviewSection from '@/components/home/AboutPreviewSection';
import CTASection from '@/components/home/CTASection';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { toast } = useToast();

  const featuredCoursesData = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 2847,
      price: "$89",
      image: "Modern React development course with hooks and context",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      students: 1923,
      price: "$129",
      image: "Introduction to machine learning algorithms and applications",
      category: "Data Science"
    },
    {
      id: 3,
      title: "UI/UX Design Mastery",
      instructor: "Emma Rodriguez",
      rating: 4.9,
      students: 3156,
      price: "$79",
      image: "Complete guide to user interface and experience design",
      category: "Design"
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      instructor: "James Wilson",
      rating: 4.7,
      students: 2134,
      price: "$99",
      image: "Comprehensive digital marketing and social media strategy",
      category: "Marketing"
    }
  ];

  const statsData = [
    { icon: Users, label: "Active Students", value: "50,000+" },
    { icon: BookOpen, label: "Courses Available", value: "1,200+" },
    { icon: Award, label: "Expert Instructors", value: "500+" },
    { icon: Star, label: "Average Rating", value: "4.8/5" }
  ];

  const handleEnrollNow = (course) => {
    setSelectedCourse(course);
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    setIsPaymentModalOpen(false);
    toast({
      title: "Enrollment Successful!",
      description: `You have successfully enrolled in ${selectedCourse?.title}.`,
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen">
      <HeroSection y1={y1} y2={y2} />
      <StatsSection stats={statsData} />
      <FeaturedCoursesSection 
        courses={featuredCoursesData} 
        onEnrollNow={handleEnrollNow} 
      />
      <AboutPreviewSection y1={y1} />
      <CTASection y2={y2} />
      
      {selectedCourse && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          course={selectedCourse}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default Home;