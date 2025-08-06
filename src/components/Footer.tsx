import React from 'react';
import { Car, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Car className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold">ShinePro</span>
            </div>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              نحن متخصصون في توفير أفضل منتجات العناية بالسيارات لضمان حصولك على أفضل النتائج. 
              منتجاتنا مصممة لتلبية احتياجات جميع أنواع السيارات.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">
                  المنتجات
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">
                  المميزات
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  تواصل معنا
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  الشروط والأحكام
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">معلومات التواصل</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">العنوان</div>
                  <div className="text-gray-400 text-sm">الرياض، المملكة العربية السعودية</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold">الهاتف</div>
                  <div className="text-gray-400 text-sm">+966 50 123 4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold">البريد الإلكتروني</div>
                  <div className="text-gray-400 text-sm">info@shinepro.sa</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center lg:text-right mb-8">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">اشترك في نشرتنا الإخبارية</h3>
            <p className="text-gray-400 mb-6">احصل على أحدث العروض والنصائح مباشرة في بريدك الإلكتروني</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all">
                اشتراك
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ShinePro. جميع الحقوق محفوظة. صُمم بـ ❤️ في المملكة العربية السعودية
          </p>
        </div>
      </div>
    </footer>
  );
}