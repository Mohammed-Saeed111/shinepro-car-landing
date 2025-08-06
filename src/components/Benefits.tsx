import React from 'react';
import { Shield, Clock, Award, Zap, CheckCircle, Star } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'حماية شاملة',
      description: 'حماية طلاء السيارة من الأشعة فوق البنفسجية والملوثات البيئية والخدوش السطحية',
      color: 'bg-blue-500'
    },
    {
      icon: Clock,
      title: 'نتائج طويلة المدى',
      description: 'حماية تدوم حتى 6 أشهر مع الاستخدام المنتظم للمنتجات الثلاثة معاً',
      color: 'bg-green-500'
    },
    {
      icon: Award,
      title: 'جودة احترافية',
      description: 'منتجات مطابقة للمعايير العالمية ومستخدمة في أفضل مراكز العناية بالسيارات',
      color: 'bg-yellow-500'
    },
    {
      icon: Zap,
      title: 'سهولة الاستخدام',
      description: 'تطبيق سريع وسهل في المنزل بدون الحاجة لأدوات متخصصة أو خبرة سابقة',
      color: 'bg-purple-500'
    }
  ];

  const steps = [
    {
      step: '1',
      title: 'التنظيف',
      description: 'ابدأ بتنظيف السيارة بالماء والصابون'
    },
    {
      step: '2',
      title: 'المركب',
      description: 'استخدم المركب لإزالة الخدوش والبقع'
    },
    {
      step: '3',
      title: 'البوليش',
      description: 'طبق البوليش لاستعادة اللمعان'
    },
    {
      step: '4',
      title: 'الشمع',
      description: 'اختتم بالشمع للحماية والبريق'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            لماذا تختار ShinePro؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن نقدم أكثر من مجرد منتجات - نقدم تجربة عناية شاملة لسيارتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`${benefit.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* How to Use Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              كيفية الاستخدام
            </h3>
            <p className="text-lg text-gray-600">
              خطوات بسيطة للحصول على أفضل النتائج
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-blue-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ماذا يقول عملاؤنا؟
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'أحمد محمد',
                text: 'منتجات رائعة وجودة عالية. سيارتي أصبحت تلمع كالجديدة!',
                rating: 5
              },
              {
                name: 'سارة أحمد',
                text: 'سهولة في الاستخدام ونتائج مذهلة. أنصح الجميع بتجربة المنتجات.',
                rating: 5
              },
              {
                name: 'محمد العلي',
                text: 'خدمة ممتازة ومنتجات عالية الجودة. تستحق كل ريال مدفوع.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}