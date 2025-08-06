import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            تواصل معنا الآن
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            احصل على استشارة مجانية أو اطلب منتجاتك المفضلة مباشرة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">رقم الهاتف</div>
                    <div className="text-blue-100">+966 50 123 4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MessageCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">واتساب</div>
                    <div className="text-blue-100">+966 50 123 4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">البريد الإلكتروني</div>
                    <div className="text-blue-100">info@shinepro.sa</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">الموقع</div>
                    <div className="text-blue-100">الرياض، المملكة العربية السعودية</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">ساعات العمل</div>
                    <div className="text-blue-100">السبت - الخميس: 9:00 ص - 9:00 م</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+966501234567"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>اتصل الآن</span>
              </a>
              <a
                href="https://wa.me/966501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>واتساب</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-blue-200 focus:outline-none focus:border-yellow-400 focus:bg-opacity-30 transition-all"
                  placeholder="اكتب اسمك هنا"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-blue-200 focus:outline-none focus:border-yellow-400 focus:bg-opacity-30 transition-all"
                  placeholder="رقم الهاتف"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-blue-200 focus:outline-none focus:border-yellow-400 focus:bg-opacity-30 transition-all resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}