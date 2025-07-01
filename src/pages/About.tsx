
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const timeline = [
    {
      year: '1994',
      title: 'Company Founded',
      description: 'AetheriaLife established with a mission to develop life-saving biopharmaceuticals'
    },
    {
      year: '2000',
      title: 'First FDA Approval',
      description: 'Human Albumin receives FDA approval, marking our entry into critical care therapeutics'
    },
    {
      year: '2008',
      title: 'Global Expansion',
      description: 'International manufacturing facilities established across three continents'
    },
    {
      year: '2015',
      title: 'Innovation Center',
      description: 'State-of-the-art R&D facility opened, advancing next-generation therapies'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implementation of AI-driven quality control and supply chain optimization'
    },
    {
      year: '2024',
      title: 'Sustainability Initiative',
      description: 'Launch of carbon-neutral manufacturing program and green chemistry initiatives'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief Executive Officer',
      background: '20+ years in biopharmaceuticals, former VP at Genentech'
    },
    {
      name: 'Dr. Michael Rodriguez',
      position: 'Chief Scientific Officer',
      background: 'Leading immunology researcher, 15+ years in drug development'
    },
    {
      name: 'Jennifer Park',
      position: 'Chief Operating Officer',
      background: 'Global manufacturing expert, former Director at Pfizer'
    },
    {
      name: 'Dr. James Wilson',
      position: 'Chief Medical Officer',
      background: 'Clinical development specialist, former FDA reviewer'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About AetheriaLife
            </h1>
            <p className="text-xl mb-8 opacity-90">
              For three decades, we have been at the forefront of developing and manufacturing 
              critical biopharmaceuticals that save lives and improve patient outcomes worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-t-4 border-blue-600">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To develop, manufacture, and deliver critical biopharmaceuticals that address urgent 
                  medical needs and save lives globally, while maintaining the highest standards of 
                  quality, safety, and efficacy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-t-4 border-green-600">
              <CardHeader>
                <CardTitle className="text-2xl text-green-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be the global leader in life sciences, pioneering innovative therapies that 
                  transform patient care and create a healthier world for future generations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-t-4 border-purple-600">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-900">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• Patient-first approach</li>
                  <li>• Scientific excellence</li>
                  <li>• Quality and integrity</li>
                  <li>• Innovation and collaboration</li>
                  <li>• Global accessibility</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Three decades of innovation, growth, and dedication to improving global health
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{event.year}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in biopharmaceuticals, 
              manufacturing, and global healthcare
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-300 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 text-2xl font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <Badge className="mb-3">{leader.position}</Badge>
                  <p className="text-sm text-gray-600">{leader.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Global Impact</h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Our commitment to global health extends beyond manufacturing to education, 
              access programs, and humanitarian initiatives
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500M+</div>
              <div className="text-blue-200">Lives Touched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85+</div>
              <div className="text-blue-200">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Humanitarian Programs</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
