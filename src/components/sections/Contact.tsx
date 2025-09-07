import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const contactInfo = [
    {
      name: "سليمان الحويطي",
      phone: "+966559586786"
    },
    {
      name: "إبراهيم جمعة",
      phone: "+966509457627"
    },
    {
      name: "أحمد علي",
      phone: "+966551046758"
    },
    {
      name: "علاء جاد",
      phone: "+966553992052"
    }
  ];

  const handleCall = (phone: string) => {
    // Direct call functionality
    window.open(`tel:${phone}`, '_self');
  };

  const handleWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone.replace('+', '')}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    const whatsappMessage = `السلام عليكم، اسمي ${name}، رقم هاتفي ${phone}. ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const ahmadAliPhone = "966551046758"; // أحمد علي
    
    window.open(`https://wa.me/${ahmadAliPhone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            تواصل معنا
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا لأي استفسار أو طلب خدمة
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3 space-x-reverse">
                <MessageCircle className="h-6 w-6 text-blue-400" />
                <span>معلومات التواصل</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">البريد الإلكتروني</p>
                    <p className="text-blue-200">alebawani.ksa@hotmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-green-500 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">المقر الرئيسي</p>
                    <p className="text-blue-200">المملكة العربية السعودية - تبوك - ضبا</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">ساعات العمل</p>
                    <p className="text-blue-200">متاح 24/7 لخدمتكم</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">رسالة سريعة</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="الاسم الكامل" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 text-right focus:outline-none focus:border-blue-400"
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="رقم الهاتف" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 text-right focus:outline-none focus:border-blue-400"
                />
                <textarea 
                  name="message"
                  placeholder="رسالتك" 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 text-right focus:outline-none focus:border-blue-400 resize-none"
                ></textarea>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 font-bold py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl animate-pulse">
                  إرسال الرسالة
                </Button>
              </form>
            </div>
          </div>

          {/* Team Contact Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-center">فريق العمل</h3>
            {contactInfo.map((contact, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:rotate-1 group"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg text-center group-hover:text-blue-300 transition-colors">
                    {contact.name}
                  </CardTitle>
                  <div className="text-center">
                    <p className="text-blue-200 font-mono text-lg">{contact.phone}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex space-x-3 space-x-reverse w-full">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-orange-400 text-orange-300 bg-orange-500/20 hover:bg-orange-500 hover:border-orange-500 hover:text-white flex-1 transform hover:scale-110 transition-all duration-300 hover:shadow-lg animate-bounce font-bold"
                        onClick={() => handleCall(contact.phone)}
                        style={{
                          animationDelay: `${index * 200}ms`,
                          animationDuration: '2s'
                        }}
                      >
                        <Phone className="ml-2 h-4 w-4" />
                        اتصال
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-green-600 text-green-100 hover:bg-green-700 hover:text-white hover:shadow-2xl flex-1 transform hover:scale-110 transition-all duration-300 animate-pulse font-bold"
                        onClick={() => handleWhatsApp(contact.phone)}
                        style={{
                          animationDelay: `${index * 300}ms`,
                          animationDuration: '3s'
                        }}
                      >
                        <MessageCircle className="ml-2 h-4 w-4" />
                        واتساب
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 animate-pulse">
            <h3 className="text-2xl font-bold mb-4">نخدمكم في جميع أنحاء المملكة</h3>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              مع شبكة واسعة من الفروع والمكاتب في أهم المنافذ الحدودية، نضمن لكم خدمة سريعة وموثوقة أينما كنتم
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}