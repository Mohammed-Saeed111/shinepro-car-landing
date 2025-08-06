import React from 'react';
import { Car, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ShinePro</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              الرئيسية
            </a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">
              المنتجات
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">
              المميزات
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              تواصل معنا
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl">
              اطلب الآن
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                الرئيسية
              </a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                المنتجات
              </a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                المميزات
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                تواصل معنا
              </a>
              <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all">
                اطلب الآن
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}