import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Eye, Users, Award, BookOpen, Globe, Lightbulb, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const teamMembers = [
    {
      name: "Sujan K.",
      role: "Founder & CEO",
      image: "Professional headshot of Sujan K., CEO and founder",
      bio: "Visionary entrepreneur with 15+ years in educational technology and a passion for transforming online learning.",
      expertise: "Educational Technology"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "Professional headshot of Michael Chen, Chief Technology Officer",
      bio: "Tech visionary who led development teams at Google and Microsoft, specializing in 3D web technologies.",
      expertise: "3D Web Technologies"
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Design",
      image: "Professional headshot of Emma Rodriguez, Head of Design",
      bio: "Award-winning UX designer who creates intuitive and beautiful learning experiences for students worldwide.",
      expertise: "UX/UI Design"
    },
    {
      name: "Dr. James Wilson",
      role: "Head of Curriculum",
      image: "Professional headshot of Dr. James Wilson, Head of Curriculum",
      bio: "Educational psychologist and curriculum expert with a focus on personalized learning methodologies.",
      expertise: "Curriculum Development"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of educational technology to create groundbreaking learning experiences."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our team is driven by a genuine passion for education and helping students achieve their dreams."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in building a supportive community where learners and educators thrive together."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Quality education should be accessible to everyone, regardless of location or background."
    }
  ];

  const stats = [
    { number: "2019", label: "Founded" },
    { number: "50K+", label: "Students Worldwide" },
    { number: "500+", label: "Expert Instructors" },
    { number: "1200+", label: "Courses Available" },
    { number: "95%", label: "Completion Rate" },
    { number: "4.8/5", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-2xl float-animation"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-2xl float-animation" style={{ animationDelay: '3s' }}></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About EduTou Academy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing online education with cutting-edge 3D technology, 
              making learning more immersive, engaging, and effective than ever before.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-12">
                <div className="card-3d">
                  <Card className="glass">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center pulse3d-animation">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">Our Mission</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">
                        To democratize quality education by creating immersive, 
                        interactive learning experiences that adapt to each student's 
                        unique learning style and pace, making world-class education 
                        accessible to everyone, everywhere.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="card-3d">
                  <Card className="glass">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center pulse3d-animation">
                          <Eye className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">Our Vision</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">
                        To become the world's leading platform for immersive online 
                        education, where students from all backgrounds can unlock 
                        their potential through innovative 3D learning experiences 
                        and achieve their career aspirations.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
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
                  alt="Modern educational technology and 3D learning environment"
                 src="https://images.unsplash.com/photo-1635251595512-dc52146d5ae8" />
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate3d-animation opacity-80"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full pulse3d-animation opacity-80"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we're making a difference in the world of online education
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                viewport={{ once: true }}
                className="text-center card-3d"
              >
                <Card className="glass h-full">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at EduTou Academy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="card-3d"
              >
                <Card className="h-full text-center glass">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse3d-animation">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate educators and technologists dedicated to transforming online learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="team-card"
              >
                <Card className="h-full overflow-hidden card-flip-inner">
                  <div className="card-flip-front bg-white">
                    <div className="p-6 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <img  
                          className="w-full h-full object-cover" 
                          alt={`${member.name} profile photo`}
                         src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                    </div>
                  </div>
                  <div className="card-flip-back bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    <div className="p-6 h-full flex flex-col justify-center">
                      <h3 className="text-lg font-bold mb-3">{member.name}</h3>
                      <p className="text-blue-100 text-sm mb-4">{member.bio}</p>
                      <div className="mt-auto">
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                          {member.expertise}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 gradient-text">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed space-y-6">
              <p>
                EduTou Academy was born from a simple yet powerful vision: to make quality education 
                accessible to everyone, regardless of their location or circumstances. Our journey, led by our founder Sujan, began with noticing the 
                limitations of traditional online learning platforms.
              </p>
              <p>
                Frustrated by the lack of engagement and interaction in existing e-learning solutions, 
                Sujan assembled a team of passionate educators, technologists, and designers to 
                create something revolutionary. Together, they developed the first 3D interactive 
                learning platform that transforms how students engage with educational content.
              </p>
              <p>
                Today, EduTou Academy serves over 50,000 students worldwide, offering more than 1,200 
                courses across various disciplines. Our innovative approach has earned recognition from 
                educational institutions and technology leaders globally, but our greatest achievement 
                remains the success stories of our students who have transformed their careers and lives 
                through our platform.
              </p>
              <p>
                As we continue to grow, our commitment remains unchanged: to push the boundaries of 
                educational technology and create learning experiences that inspire, engage, and empower 
                students to achieve their dreams.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
