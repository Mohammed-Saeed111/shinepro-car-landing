import React from 'react';
import { ShoppingCart, Star, Sparkles } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Compound المركب',
      price: '150 ريال',
      originalPrice: '180 ريال',
      image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'لإزالة الخدوش والبقع العميقة من طلاء السيارة واستعادة اللمعان الأصلي',
      features: ['إزالة الخدوش', 'استعادة اللمعان', 'آمن على الطلاء'],
      badge: 'الأكثر مبيعاً'
    },
    {
      id: 2,
      name: 'بوليش اللمعان',
      price: '120 ريال',
      originalPrice: '140 ريال',
      image: 'https://images.pexels.com/photos/13065695/pexels-photo-13065695.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'لإعطاء السيارة لمعان عالي الجودة وحماية مؤقتة من العوامل الجوية',
      features: ['لمعان عالي', 'سهولة التطبيق', 'نتائج فورية'],
      badge: 'مُوصى به'
    },
    {
      id: 3,
      name: 'شمع الحماية',
      price: '100 ريال',
      originalPrice: '120 ريال',
      image: 'https://images.pexels.com/photos/13065692/pexels-photo-13065692.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'لحماية طلاء السيارة من الأشعة فوق البنفسجية والملوثات البيئية',
      features: ['حماية UV', 'يدوم 3 أشهر', 'طبيعي 100%'],
      badge: 'حماية مضمونة'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            منتجاتنا المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مجموعة متكاملة من منتجات العناية بالسيارات المصممة لتحقيق أفضل النتائج
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  وفر {parseInt(product.originalPrice) - parseInt(product.price)} ريال
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-blue-600">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-gray-600 mr-2">(4.9)</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center space-x-2 group">
                  <ShoppingCart className="h-5 w-5 group-hover:animate-bounce" />
                  <span>أضف للسلة</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-8 py-4 rounded-full inline-flex items-center space-x-2 font-bold text-lg shadow-xl">
            <Sparkles className="h-6 w-6" />
            <span>عرض خاص: خصم 20% على الطقم الكامل!</span>
          </div>
        </div>
      </div>
    </section>
  );
}