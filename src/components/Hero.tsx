import React from 'react';
import { Star, Award, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            اجعل سيارتك تلمع كـ<span className="text-yellow-400">الجديدة</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            منتجات عناية احترافية لسيارتك مع ShinePro - الخيار الأول للحصول على لمعان لا مثيل له
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-full px-4 py-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>جودة مضمونة</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-full px-4 py-2">
              <Award className="h-5 w-5 text-yellow-400" />
              <span>منتجات احترافية</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-full px-4 py-2">
              <Shield className="h-5 w-5 text-yellow-400" />
              <span>حماية طويلة المدى</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
              تسوق الآن
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all">
              اعرف المزيد
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
            <div className="text-blue-100">عميل راضي</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">5⭐</div>
            <div className="text-blue-100">تقييم العملاء</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">3</div>
            <div className="text-blue-100">منتجات احترافية</div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-yellow-400 rounded-full"></div>
      </div>
    </section>
  );
}