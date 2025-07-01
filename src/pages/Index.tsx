
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Mail, Phone, News, Video, ArrowDown, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  const stats = [
    { number: '500M+', label: 'Lives Touched Globally' },
    { number: '85+', label: 'Countries Served' },
    { number: '30+', label: 'Years of Excellence' },
    { number: '98%', label: 'Quality Assurance Rate' }
  ];

  const products = [
    {
      name: 'Human Albumin',
      description: 'Critical plasma protein for volume expansion and protein replacement therapy',
      applications: ['Hypovolemia', 'Burns', 'Liver Disease', 'Nephrotic Syndrome'],
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      name: 'Intravenous Immunoglobulin',
      description: 'Essential antibody therapy for immunodeficiency and autoimmune disorders',
      applications: ['Primary Immunodeficiency', 'Autoimmune Diseases', 'Neurological Disorders'],
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      name: 'Snake Antivenom',
      description: 'Life-saving treatment for venomous snake bites in critical regions',
      applications: ['Emergency Treatment', 'Rural Healthcare', 'Tropical Medicine'],
      image: '/placeholder.svg?height=300&width=400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Advancing Life Sciences
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Leading the development and manufacturing of critical biopharmaceuticals that save lives worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3">
              Healthcare Professionals
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
              Emergency Contact
            </Button>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white opacity-70" />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover-scale">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Products Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Life-Saving Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of expertise in manufacturing critical biopharmaceuticals that address urgent medical needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-6xl text-blue-600 opacity-20">⚗️</div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 group-hover:text-blue-700 transition-colors">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Applications:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.applications.map((app, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">Healthcare Professionals</h3>
                <p className="text-blue-100 mb-4">Access clinical resources, product information, and training materials</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Professional Portal
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">Emergency Support</h3>
                <p className="text-blue-100 mb-4">24/7 medical information and emergency assistance hotline</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Contact Emergency
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <News className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">Latest Research</h3>
                <p className="text-blue-100 mb-4">Stay updated with our latest clinical studies, publications, and news</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  View Research
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on product developments, research breakthroughs, and industry insights
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input 
              placeholder="Enter your email address" 
              className="flex-1"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
