import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Users, Clock, BookOpen, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PaymentModal from '@/components/PaymentModal';
import { useToast } from '@/components/ui/use-toast';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { toast } = useToast();

  const categories = ['All', 'Web Development', 'Data Science', 'Design', 'Marketing', 'Business', 'Mobile Development'];

  const courses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 2847,
      duration: "12 hours",
      price: "$89",
      image: "Modern React development course with hooks and context",
      category: "Web Development",
      description: "Master advanced React concepts including hooks, context, and performance optimization.",
      level: "Advanced"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      students: 1923,
      duration: "16 hours",
      price: "$129",
      image: "Introduction to machine learning algorithms and applications",
      category: "Data Science",
      description: "Learn the fundamentals of machine learning with hands-on projects and real-world applications.",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "UI/UX Design Mastery",
      instructor: "Emma Rodriguez",
      rating: 4.9,
      students: 3156,
      duration: "14 hours",
      price: "$79",
      image: "Complete guide to user interface and experience design",
      category: "Design",
      description: "Complete guide to creating beautiful and functional user interfaces and experiences.",
      level: "Beginner"
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      instructor: "James Wilson",
      rating: 4.7,
      students: 2134,
      duration: "10 hours",
      price: "$99",
      image: "Comprehensive digital marketing and social media strategy",
      category: "Marketing",
      description: "Comprehensive digital marketing strategies for modern businesses and social media.",
      level: "Intermediate"
    },
    {
      id: 5,
      title: "Python for Data Analysis",
      instructor: "Dr. Lisa Wang",
      rating: 4.8,
      students: 1876,
      duration: "18 hours",
      price: "$119",
      image: "Python programming for data analysis and visualization",
      category: "Data Science",
      description: "Learn Python programming specifically for data analysis, visualization, and statistics.",
      level: "Beginner"
    },
    {
      id: 6,
      title: "Mobile App Development with React Native",
      instructor: "Alex Thompson",
      rating: 4.6,
      students: 1543,
      duration: "20 hours",
      price: "$149",
      image: "Cross-platform mobile app development with React Native",
      category: "Mobile Development",
      description: "Build cross-platform mobile applications using React Native and modern development practices.",
      level: "Intermediate"
    },
    {
      id: 7,
      title: "Business Strategy & Leadership",
      instructor: "Robert Davis",
      rating: 4.7,
      students: 2987,
      duration: "8 hours",
      price: "$69",
      image: "Strategic business planning and leadership development",
      category: "Business",
      description: "Develop strategic thinking and leadership skills for modern business environments.",
      level: "Advanced"
    },
    {
      id: 8,
      title: "Full-Stack Web Development",
      instructor: "Maria Garcia",
      rating: 4.9,
      students: 3421,
      duration: "25 hours",
      price: "$199",
      image: "Complete full-stack web development bootcamp",
      category: "Web Development",
      description: "Complete bootcamp covering front-end and back-end web development technologies.",
      level: "Beginner"
    }
  ];

  useEffect(() => {
    let filtered = courses;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategory, courses]);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl float-animation"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-2xl float-animation" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore Our Courses
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover world-class courses designed by industry experts to advance your career
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search courses, instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 input-3d"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all btn-3d ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="course-grid"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="course-card"
              >
                <Card className="h-full overflow-hidden glass">
                  <div className="relative">
                    <img  
                      className="w-full h-48 object-cover" 
                      alt={`${course.title} course thumbnail`}
                     src="https://images.unsplash.com/photo-1635251595512-dc52146d5ae8" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg btn-3d"
                      >
                        <Play className="w-5 h-5 text-blue-600" />
                      </motion.button>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 hover:text-blue-600 transition-colors">
                          {course.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          by {course.instructor}
                        </CardDescription>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        {course.price}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          {course.rating}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <motion.div whileHover={{ scale: 1.02 }} className="flex-1 btn-3d">
                        <Button className="w-full" onClick={() => handleEnrollNow(course)}>
                          <BookOpen className="w-4 h-4 mr-2" />
                          Enroll Now
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} className="btn-3d">
                        <Button variant="outline" size="icon">
                          <Play className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
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

export default Courses;