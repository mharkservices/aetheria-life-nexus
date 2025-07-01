
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowDown } from 'lucide-react';

const HumanAlbumin = () => {
  const clinicalApplications = [
    {
      condition: 'Hypovolemia',
      description: 'Volume expansion in cases of severe blood loss or fluid depletion',
      indication: 'Critical care, trauma, surgery'
    },
    {
      condition: 'Burns',
      description: 'Protein replacement and volume restoration in severe burn patients',
      indication: 'Emergency medicine, critical care'
    },
    {
      condition: 'Liver Disease',
      description: 'Albumin replacement in patients with liver cirrhosis and ascites',
      indication: 'Hepatology, gastroenterology'
    },
    {
      condition: 'Nephrotic Syndrome',
      description: 'Protein replacement in patients with severe proteinuria',
      indication: 'Nephrology, internal medicine'
    }
  ];

  const qualityStandards = [
    'FDA Approved Manufacturing',
    'WHO Good Manufacturing Practices',
    'European Pharmacopoeia Standards',
    'ISO 13485 Medical Device Quality',
    'ICH Q7 Active Pharmaceutical Ingredients'
  ];

  const safetyProtocols = [
    'Viral Inactivation Process',
    'Pathogen Reduction Technology',
    'Sterile Filtration',
    'Endotoxin Testing',
    'Microbiological Testing'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <Badge className="bg-blue-200 text-blue-900 mb-4">Plasma Protein Therapy</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Human Albumin
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Critical plasma protein solution for volume expansion and protein replacement therapy. 
              Manufactured to the highest pharmaceutical standards for patient safety and efficacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Download Product Information
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Contact Medical Affairs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Essential Plasma Protein Therapy
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Human Albumin is a sterile, pyrogen-free solution containing 20% or 25% human albumin 
                in an isotonic solution. It is prepared from pooled human plasma obtained from healthy donors 
                and processed using advanced fractionation techniques.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900 mb-1">20-25%</div>
                  <div className="text-sm text-gray-600">Albumin Concentration</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900 mb-1">98%+</div>
                  <div className="text-sm text-gray-600">Purity Level</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-8xl text-blue-600 opacity-30">⚗️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Clinical Applications
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Human Albumin is indicated for various clinical conditions requiring volume expansion and protein replacement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {clinicalApplications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{app.condition}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{app.description}</p>
                  <Badge variant="secondary">{app.indication}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Manufacturing Excellence
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art manufacturing process ensures the highest quality and safety standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              'Plasma Collection',
              'Fractionation',
              'Purification',
              'Viral Inactivation',
              'Final Formulation'
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step}</h3>
                {index < 4 && <ArrowDown className="h-6 w-6 text-gray-400 mx-auto mt-2" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Safety */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Standards</h2>
              <p className="text-blue-100 mb-6">
                Our manufacturing processes comply with the most stringent international quality standards
              </p>
              <ul className="space-y-3">
                {qualityStandards.map((standard, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-blue-100">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Safety Protocols</h2>
              <p className="text-blue-100 mb-6">
                Multiple safety measures ensure viral safety and product integrity
              </p>
              <ul className="space-y-3">
                {safetyProtocols.map((protocol, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-blue-100">{protocol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory & Distribution */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Approvals</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-green-600 font-bold text-lg">FDA</div>
                  <div className="text-sm text-gray-600">United States</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-green-600 font-bold text-lg">EMA</div>
                  <div className="text-sm text-gray-600">Europe</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-green-600 font-bold text-lg">WHO</div>
                  <div className="text-sm text-gray-600">Global</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-green-600 font-bold text-lg">85+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Distribution</h3>
              <p className="text-gray-600 mb-4">
                Available worldwide through our network of authorized distributors and healthcare partners
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Cold chain temperature control</li>
                <li>• 24/7 supply chain monitoring</li>
                <li>• Emergency inventory management</li>
                <li>• Direct hospital delivery</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HumanAlbumin;
