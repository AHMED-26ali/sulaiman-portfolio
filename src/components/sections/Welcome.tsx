import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Truck, Shield, Star } from 'lucide-react';

interface WelcomeProps {
  onEnter: () => void;
}

export default function Welcome({ onEnter }: WelcomeProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Auto enter after 5 seconds
    const timer = setTimeout(() => {
      onEnter();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onEnter]);

  const floatingImages = [
    "https://i.pinimg.com/736x/7f/19/fd/7f19fd90ee55a370e0b552886a445838.jpg",
    "https://i.pinimg.com/736x/dc/4b/4f/dc4b4fd304c9f371d9e281824c556908.jpg",
    "https://i.pinimg.com/736x/0b/b4/93/0bb493c3bf38e9c8232c4e6fc9049a5e.jpg",
    "https://i.pinimg.com/736x/7a/3e/6b/7a3e6b37bb734ad84392cfb8041236f1.jpg",
    "https://i.pinimg.com/1200x/14/7f/d0/147fd06865daf64022dc1a12ad9120c9.jpg",
    "https://i.pinimg.com/1200x/9a/64/2b/9a642b476f24bfedec8db1e6cee5904f.jpg"
  ];

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating Images */}
      {floatingImages.map((image, index) => (
        <div
          key={index}
          className="absolute opacity-20 animate-bounce"
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index % 3) * 20}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + index * 0.5}s`
          }}
        >
          <img
            src={image}
            alt={`خدمات ${index + 1}`}
            className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover shadow-2xl"
          />
        </div>
      ))}

      {/* Main Content */}
      <div className={`text-center space-y-8 px-4 transition-all duration-2000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Company Logo */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <img 
              src="https://i.pinimg.com/736x/c8/22/3e/c8223e47ed75b5aafd4adb5f1bf7611c.jpg" 
              alt="شعار مؤسسة سليمان الحويطي" 
              className="w-28 h-28 rounded-full object-cover animate-bounce"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-spin">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
            <Shield className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            <span className="block animate-fadeInUp">مرحباً بكم في</span>
          </h1>
          
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 via-green-300 to-purple-300 bg-clip-text text-transparent animate-pulse">
              مؤسسة سليمان الحويطي
            </h2>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <Star className="w-8 h-8 text-yellow-400 animate-spin" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-blue-200 font-semibold animate-fadeInUp animation-delay-500">
            للتخليص الجمركي والترانزيت
          </p>
          
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-700">
            رحلتك نحو أفضل خدمات التخليص الجمركي تبدأ من هنا
          </p>
        </div>

        {/* Animated Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fadeInUp animation-delay-1000">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 animate-bounce animation-delay-1000">
            <Star className="w-10 h-10 text-yellow-400 mx-auto mb-2" />
            <p className="text-white font-bold text-sm">خبرة +15 سنة</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 animate-bounce animation-delay-1500">
            <Shield className="w-10 h-10 text-green-400 mx-auto mb-2" />
            <p className="text-white font-bold text-sm">موثوقية عالية</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 animate-bounce animation-delay-2000">
            <Truck className="w-10 h-10 text-blue-400 mx-auto mb-2" />
            <p className="text-white font-bold text-sm">خدمة شاملة</p>
          </div>
        </div>

        {/* Enter Button */}
        <div className="animate-fadeInUp animation-delay-1500">
          <Button
            onClick={onEnter}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 animate-pulse"
          >
            <span>ادخل إلى الموقع</span>
            <ArrowRight className="w-5 h-5 mr-2 animate-bounce" />
          </Button>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2 animate-fadeInUp animation-delay-2000">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-0"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-ping animation-delay-500"></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-green-400/30 rounded-full animate-ping animation-delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400/30 rounded-full animate-ping animation-delay-1500"></div>
      <div className="absolute bottom-10 right-10 w-4 h-4 bg-yellow-400/30 rounded-full animate-ping animation-delay-2000"></div>
    </div>
  );
}