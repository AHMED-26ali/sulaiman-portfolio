import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <img 
                src="https://i.pinimg.com/736x/7f/12/80/7f1280df00efb23c191881da5c430049.jpg" 
                alt="شعار سليمان الحويطي" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">سليمان الحويطي</h3>
                <p className="text-gray-400 text-sm">للتخليص الجمركي والترانزيت</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              نقدم خدمات التخليص الجمركي والترانزيت بأعلى معايير الجودة والاحترافية في جميع أنحاء المملكة العربية السعودية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">خدماتنا</a></li>
              <li><a href="#branches" className="text-gray-400 hover:text-white transition-colors">الفروع</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-white transition-colors">لماذا نحن</a></li>
              <li><a href="#vision" className="text-gray-400 hover:text-white transition-colors">رؤيتنا</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">المدونة</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">التواصل</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+966559586786</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-gray-400">
                <Mail className="h-4 w-4" />
                <span>alebawani.ksa@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>المملكة العربية السعودية - تبوك - ضبا</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} سليمان الحويطي للتخليص الجمركي والترانزيت. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">سياسة الخصوصية</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">الشروط والأحكام</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">اتصل بنا</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}