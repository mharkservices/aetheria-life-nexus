
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationItems = [
    {
      label: 'Products',
      items: [
        { name: 'Human Albumin', path: '/products/human-albumin' },
        { name: 'Intravenous Immunoglobulin', path: '/products/intravenous-immunoglobulin' },
        { name: 'Snake Antivenom', path: '/products/snake-antivenom' }
      ]
    },
    {
      label: 'Company',
      items: [
        { name: 'About Us', path: '/about' },
        { name: 'Research & Development', path: '/research' },
        { name: 'Quality Assurance', path: '/quality' },
        { name: 'Global Presence', path: '/global' }
      ]
    },
    {
      label: 'Resources',
      items: [
        { name: 'Healthcare Professionals', path: '/healthcare-professionals' },
        { name: 'Patient Information', path: '/patient-information' },
        { name: 'News & Updates', path: '/news' },
        { name: 'Careers', path: '/careers' }
      ]
    },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold text-blue-900">AetheriaLife</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.items ? (
                  <div className="dropdown">
                    <button className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors">
                      {item.label}
                    </button>
                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg border mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t animate-fade-in">
            <div className="relative max-w-md">
              <Input
                placeholder="Search products, resources..."
                className="pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t animate-fade-in">
          <div className="px-6 py-4 space-y-4">
            {navigationItems.map((item, index) => (
              <div key={index}>
                {item.items ? (
                  <div>
                    <div className="font-medium text-gray-900 py-2">{item.label}</div>
                    <div className="pl-4 space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block text-gray-600 hover:text-blue-600 py-1 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
