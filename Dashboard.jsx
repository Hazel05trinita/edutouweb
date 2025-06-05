import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, Edit3, Settings, User, LogOut, ChevronRight, PlusCircle, CalendarDays, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('edutou_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      toast({
        title: "Access Denied",
        description: "Please log in to access the dashboard.",
        variant: "destructive",
      });
      navigate('/login');
    }
    setIsLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('edutou_user');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="spinner-3d w-12 h-12"></div>
      </div>
    );
  }

  if (!user) {
    return null; 
  }

  const studentDashboardItems = [
    { title: "My Courses", icon: BookOpen, description: "View your enrolled courses and progress.", link: "/dashboard/my-courses" },
    { title: "Assignments", icon: Edit3, description: "Check upcoming assignments and grades.", link: "/dashboard/assignments" },
    { title: "Schedule", icon: CalendarDays, description: "View your class schedule and upcoming events.", link: "/dashboard/schedule" },
    { title: "Messages", icon: MessageSquare, description: "Communicate with instructors and peers.", link: "/dashboard/messages" },
  ];

  const instructorDashboardItems = [
    { title: "Manage Courses", icon: BookOpen, description: "Create and manage your courses.", link: "/dashboard/manage-courses" },
    { title: "Student Submissions", icon: Edit3, description: "Review and grade student assignments.", link: "/dashboard/submissions" },
    { title: "Create Content", icon: PlusCircle, description: "Add new lectures, quizzes, and resources.", link: "/dashboard/create-content" },
    { title: "Messages", icon: MessageSquare, description: "Communicate with students.", link: "/dashboard/messages" },
  ];

  const dashboardItems = user.userType === 'instructor' ? instructorDashboardItems : studentDashboardItems;

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl float-animation"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-2xl float-animation" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-center text-white"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome, {user.name}!
              </h1>
              <p className="text-lg text-white/90">
                This is your {user.userType === 'instructor' ? 'Instructor' : 'Student'} Dashboard.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <motion.div whileHover={{ scale: 1.05 }} className="btn-3d">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  <Settings className="w-4 h-4 mr-2" />
                  Account Settings
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="btn-3d">
                <Button variant="destructive" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Stats / Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-1 md:col-span-2"
            >
              <Card className="dashboard-card h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center pulse3d-animation">
                      <LayoutDashboard className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Overview</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-700">Account Type:</span>
                    <span className="font-semibold text-blue-600 capitalize">{user.userType}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-700">Email:</span>
                    <span className="font-semibold text-gray-800">{user.email}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-700">Member Since:</span>
                    <span className="font-semibold text-gray-800">{new Date(user.registrationDate || Date.now()).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Dashboard Items */}
            {dashboardItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <Card className="dashboard-card h-full hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center pulse3d-animation">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{item.description}</CardDescription>
                    <motion.div whileHover={{ scale: 1.02 }} className="btn-3d">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => navigate(item.link)}
                      >
                        Go to {item.title}
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity / Notifications (Placeholder) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
                <CardDescription>Stay updated with your latest activities and notifications.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <User className="w-5 h-5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Placeholder Activity {i}</p>
                        <p className="text-sm text-gray-600">This is a placeholder for a recent activity or notification.</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="link" className="text-blue-600">View All Activity</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;