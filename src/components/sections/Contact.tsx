import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    window.open(`tel:${phone}`, '_self');
  };

  const handleWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone.replace('+', '')}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const whatsappMessage = `السلام عليكم، اسمي ${formData.name}، رقم هاتفي ${formData.phone}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const ahmadAliPhone = "966551046758"; // أحمد علي
    
    window.open(`https://wa.me/${ahmadAliPhone}?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setFormData({ name: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const companyInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["alebawani.ksa@hotmail.com"],
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20"
    },
    {
      icon: MapPin,
      title: "المقر الرئيسي",
      details: ["المملكة العربية السعودية - تبوك - ضبا"],
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["متاح 24/7 لخدمتكم"],
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/20"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-300 via-white to-green-300 bg-clip-text text-transparent">
              تواصل معنا
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا لأي استفسار أو طلب خدمة
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl mb-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-white flex items-center justify-center gap-3">
                  <MessageCircle className="h-8 w-8 text-blue-400" />
                  رسالة سريعة
                </CardTitle>
                <CardDescription className="text-gray-300">
                  سيتم تحويل رسالتك مباشرة إلى أحمد علي عبر الواتساب
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      الاسم الكامل
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك الكامل"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      رقم الهاتف
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="05xxxxxxxx"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      الرسالة
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..."
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 rounded-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        جاري الإرسال...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        إرسال الرسالة
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Company Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-blue-400" />
                معلومات التواصل
              </h3>
              {companyInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group p-6 rounded-2xl ${info.bgColor} ${info.borderColor} border backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className={`p-3 rounded-full ${info.bgColor} ${info.borderColor} border group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-300 group-hover:text-white transition-colors duration-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-white">فريق العمل</h3>
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:rotate-1 group shadow-2xl">
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
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Map or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 animate-pulse shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">نخدمكم في جميع أنحاء المملكة</h3>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              مع شبكة واسعة من الفروع والمكاتب في أهم المنافذ الحدودية، نضمن لكم خدمة سريعة وموثوقة أينما كنتم
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}