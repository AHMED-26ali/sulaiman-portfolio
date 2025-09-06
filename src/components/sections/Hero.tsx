import { ArrowDown, Truck, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="https://i.pinimg.com/736x/7f/12/80/7f1280df00efb23c191881da5c430049.jpg" 
                alt="شعار سليمان الحويطي" 
                className="h-32 w-32 rounded-full object-cover shadow-2xl border-4 border-white/20 animate-pulse"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-green-400/20 animate-spin-slow"></div>
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                سليمان الحويطي
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-blue-200">
              للتخليص الجمركي والترانزيت
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            نقدم خدمات التخليص الجمركي الاحترافية بأعلى معايير الجودة والسرعة في جميع أنحاء المملكة العربية السعودية
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in-up animation-delay-500">
            <div className="flex items-center space-x-3 space-x-reverse bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Shield className="h-6 w-6 text-green-300" />
              <span className="font-medium">موثوق ومضمون</span>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Clock className="h-6 w-6 text-blue-300" />
              <span className="font-medium">سرعة في الإنجاز</span>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Truck className="h-6 w-6 text-yellow-300" />
              <span className="font-medium">خدمة شاملة</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 animate-fade-in-up animation-delay-700">
            <Button 
              onClick={scrollToServices}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              اكتشف خدماتنا
              <ArrowDown className="mr-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
}