import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, Zap, Shield, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeBackground from '@/components/effects/ThreeBackground';

export default function Hero() {
  // مصفوفة الصور الجديدة
  const images = [
    "https://i.pinimg.com/736x/10/00/a8/1000a89b5f57ba2118f823884f23dd01.jpg",
    "https://i.pinimg.com/736x/44/8b/87/448b879530978dd4dff3683357562267.jpg",
    "https://i.pinimg.com/736x/08/0b/f7/080bf7d23fe74366fbd7a0f93b3ebda1.jpg",
    "https://i.pinimg.com/736x/13/2d/87/132d87a87454d05f2970f127b806cd74.jpg",
    "https://i.pinimg.com/736x/8d/2c/0e/8d2c0ebb452eda5260c8e4c728bee04a.jpg",
    "https://i.pinimg.com/736x/69/e2/69/69e2696213e925c713b67a38dd796619.jpg",
    "https://i.pinimg.com/736x/39/54/09/395409b14b2ef732c1909231c6d6e60c.jpg",
    "https://i.pinimg.com/736x/72/14/1c/72141cd1f1de867d006bd74e64e40299.jpg",
    "https://i.pinimg.com/736x/96/b1/40/96b1401f36348d55779a1246f7b2a809.jpg",
    "https://i.pinimg.com/736x/17/73/f8/1773f8f358b2fb3360b67169dd536385.jpg",
    "https://i.pinimg.com/1200x/85/b5/96/85b5966c6b37f156b91335bac4262983.jpg",
    "https://i.pinimg.com/1200x/2f/8a/dc/2f8adc9602309ad71b5b90bfe1893257.jpg",
    "https://i.pinimg.com/1200x/53/cb/b2/53cbb26aefdc506c7d2d978e675be67e.jpg",
    "https://i.pinimg.com/1200x/b2/80/3a/b2803a9b719efca9dabbfed307c062a5.jpg",
    "https://i.pinimg.com/1200x/64/c5/ec/64c5ec9259622dbd7d2bc0036678b6ee.jpg",
    "https://i.pinimg.com/1200x/28/21/ac/2821ac050143da4ec61f6f0c75b0b2be.jpg",
    "https://i.pinimg.com/736x/e1/ad/29/e1ad29604916676e9afe96c0eb077d2d.jpg",
    "https://i.pinimg.com/736x/e0/45/c7/e045c7ee2b3c886016db8f5c89721390.jpg",
    "https://i.pinimg.com/1200x/9d/57/47/9d5747c43997b50774de8b6ec450adfa.jpg",
    "https://i.pinimg.com/736x/24/9b/cf/249bcf9ebf45f49f79f10d462cc3a0b4.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // التمرير التلقائي للصور
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // تغيير الصورة كل 4 ثوانٍ

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDiscoverServices = () => {
    // البحث عن قسم الخدمات
    const servicesSection = document.querySelector('#services, .services, [id*="service"], [class*="service"]');
    
    if (servicesSection) {
      // إذا وُجد قسم الخدمات، انتقل إليه
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // إذا لم يوجد، انتقل إلى القسم التالي أو أسفل الصفحة
      const nextSection = document.querySelector('section:nth-of-type(2), .section:nth-of-type(2)');
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // كحل أخير، انتقل لأسفل بمقدار ارتفاع الشاشة
        window.scrollBy({
          top: window.innerHeight * 0.8,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="home" className="min-h-screen text-white relative overflow-hidden pt-16 section-transparent">
      {/* 3D Background - Always Enabled */}
      <ThreeBackground enabled={true} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-6">
              {/* العنوان الرئيسي - ألوان زاهية تفاعلية */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-fade-in-up hover:from-cyan-200 hover:via-blue-300 hover:to-purple-400 transition-all duration-700 cursor-default transform hover:scale-110 hover:rotate-2 animate-pulse" 
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.8)) drop-shadow(0 0 40px rgba(147, 51, 234, 0.6))',
                        textShadow: '0 0 30px rgba(34, 211, 238, 0.8), 0 0 60px rgba(147, 51, 234, 0.6), 2px 2px 4px rgba(0,0,0,0.8)'
                      }}>
                  سليمان الحويطي
                </span>
                <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-300 hover:from-orange-300 hover:via-red-400 hover:to-pink-500 transition-all duration-700 cursor-default transform hover:scale-110 hover:-rotate-2 animate-pulse" 
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(251, 146, 60, 0.8)) drop-shadow(0 0 40px rgba(244, 63, 94, 0.6))',
                        textShadow: '0 0 30px rgba(251, 146, 60, 0.8), 0 0 60px rgba(244, 63, 94, 0.6), 2px 2px 4px rgba(0,0,0,0.8)'
                      }}>
                  للتخليص الجمركي والترانزيت
                </span>
              </h1>

              {/* العنوان الفرعي - ألوان متحركة */}
              <h2 className="text-lg md:text-xl lg:text-2xl mt-6 animate-fade-in-up animation-delay-500 leading-relaxed">
                <span className="inline-block hover:scale-125 transition-all duration-500 bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent hover:from-yellow-200 hover:via-amber-300 hover:to-orange-400 mx-1 animate-bounce" 
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.7))',
                        textShadow: '0 0 20px rgba(255, 215, 0, 0.7), 1px 1px 3px rgba(0,0,0,0.8)',
                        animationDelay: '0s'
                      }}>مؤسسة</span>
                <span className="inline-block hover:scale-125 transition-all duration-500 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent hover:from-emerald-300 hover:via-teal-400 hover:to-cyan-500 mx-1 animate-bounce" 
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.7))',
                        textShadow: '0 0 20px rgba(16, 185, 129, 0.7), 1px 1px 3px rgba(0,0,0,0.8)',
                        animationDelay: '0.2s'
                      }}>رائدة</span>
                <span className="inline-block hover:scale-125 transition-all duration-500 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-600 bg-clip-text text-transparent hover:from-violet-300 hover:via-purple-400 hover:to-fuchsia-500 mx-1 animate-bounce" 
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(139, 69, 219, 0.7))',
                        textShadow: '0 0 20px rgba(139, 69, 219, 0.7), 1px 1px 3px rgba(0,0,0,0.8)',
                        animationDelay: '0.4s'
                      }}>في</span>
                <span className="inline-block hover:scale-125 transition-all duration-500 bg-gradient-to-r from-rose-400 via-pink-500 to-red-600 bg-clip-text text-transparent hover:from-rose-300 hover:via-pink-400 hover:to-red-500 mx-1 animate-bounce" 
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(244, 63, 94, 0.7))',
                        textShadow: '0 0 20px rgba(244, 63, 94, 0.7), 1px 1px 3px rgba(0,0,0,0.8)',
                        animationDelay: '0.6s'
                      }}>خدمات</span>
                <br />
                <span className="inline-block hover:scale-125 transition-all duration-500 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent hover:from-sky-300 hover:via-blue-400 hover:to-indigo-500 mx-1 animate-bounce" 
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.7))',
                        textShadow: '0 0 20px rgba(59, 130, 246, 0.7), 1px 1px 3px rgba(0,0,0,0.8)',
                        animationDelay: '0.8s'
                      }}>التخليص</span>
                <span className="inline-block hover:scale-125 transition-all duration-500 bg-gradient-to-r from-lime-400 via-green-500 to-emerald-600 bg-clip-text text-transparent hover:from-lime-300 hover:via-green-400 hover:to-emerald-500 mx-1 animate-bounce" 
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.7))',
                        textShadow: '0 0 20px rgba(34, 197, 94, 0.7), 1px 1px 3px rgba(0,0,0,0.8)',
                        animationDelay: '1s'
                      }}>الجمركي</span>
                <span className="inline-block hover:scale-125 transition-all duration-500 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent hover:from-amber-300 hover:via-yellow-400 hover:to-orange-500 mx-1 animate-bounce" 
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.7))',
                        textShadow: '0 0 20px rgba(245, 158, 11, 0.7), 1px 1px 3px rgba(0,0,0,0.8)',
                        animationDelay: '1.2s'
                      }}>والترانزيت</span>
                <br />
                <span className="inline-block hover:scale-125 transition-all duration-500 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent hover:from-teal-300 hover:via-cyan-400 hover:to-blue-500 mx-1 animate-bounce" 
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(20, 184, 166, 0.7))',
                        textShadow: '0 0 20px rgba(20, 184, 166, 0.7), 1px 1px 3px rgba(0,0,0,0.8)',
                        animationDelay: '1.4s'
                      }}>في</span>
                <span className="inline-block hover:scale-125 transition-all duration-500 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-indigo-300 hover:via-blue-400 hover:to-purple-500 mx-1 animate-bounce" 
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(99, 102, 241, 0.7))',
                        textShadow: '0 0 20px rgba(99, 102, 241, 0.7), 1px 1px 3px rgba(0,0,0,0.8)',
                        animationDelay: '1.6s'
                      }}>المملكة</span>
                <span className="inline-block hover:scale-125 transition-all duration-500 bg-gradient-to-r from-pink-400 via-rose-500 to-red-600 bg-clip-text text-transparent hover:from-pink-300 hover:via-rose-400 hover:to-red-500 mx-1 animate-bounce" 
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.7))',
                        textShadow: '0 0 20px rgba(236, 72, 153, 0.7), 1px 1px 3px rgba(0,0,0,0.8)',
                        animationDelay: '1.8s'
                      }}>العربية</span>
                <span className="inline-block hover:scale-125 transition-all duration-500 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent hover:from-green-300 hover:via-emerald-400 hover:to-teal-500 mx-1 animate-bounce" 
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.7))',
                        textShadow: '0 0 20px rgba(34, 197, 94, 0.7), 1px 1px 3px rgba(0,0,0,0.8)',
                        animationDelay: '2s'
                      }}>السعودية</span>
              </h2>
              
              {/* الوصف - كلمات ملونة تفاعلية */}
              <p className="text-base md:text-lg lg:text-xl leading-relaxed animate-fade-in-up animation-delay-700">
                <span className="inline-block hover:scale-110 transition-all duration-400 bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent hover:from-violet-300 hover:via-purple-400 hover:to-indigo-500 cursor-pointer mx-1" 
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(139, 69, 219, 0.6))',
                        textShadow: '0 0 15px rgba(139, 69, 219, 0.6), 1px 1px 2px rgba(0,0,0,0.8)'
                      }}>نقدم</span>
                <span className="inline-block hover:scale-110 transition-all duration-400 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 cursor-pointer mx-1" 
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.6))',
                        textShadow: '0 0 15px rgba(34, 211, 238, 0.6), 1px 1px 2px rgba(0,0,0,0.8)'
                      }}>خدمات</span>
                <span className="inline-block hover:scale-110 transition-all duration-400 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent hover:from-emerald-300 hover:via-teal-400 hover:to-cyan-500 cursor-pointer mx-1" 
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.6))',
                        textShadow: '0 0 15px rgba(16, 185, 129, 0.6), 1px 1px 2px rgba(0,0,0,0.8)'
                      }}>التخليص</span>
                <span className="inline-block hover:scale-110 transition-all duration-400 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent hover:from-orange-300 hover:via-red-400 hover:to-pink-500 cursor-pointer mx-1" 
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(251, 146, 60, 0.6))',
                        textShadow: '0 0 15px rgba(251, 146, 60, 0.6), 1px 1px 2px rgba(0,0,0,0.8)'
                      }}>الجمركي</span>
                <span className="inline-block hover:scale-110 transition-all duration-400 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent hover:from-yellow-300 hover:via-amber-400 hover:to-orange-500 cursor-pointer mx-1" 
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.6))',
                        textShadow: '0 0 15px rgba(245, 158, 11, 0.6), 1px 1px 2px rgba(0,0,0,0.8)'
                      }}>والترانزيت</span>
                <br />
                <span className="inline-block hover:scale-110 transition-all duration-400 bg-gradient-to-r from-rose-400 via-pink-500 to-red-600 bg-clip-text text-transparent hover:from-rose-300 hover:via-pink-400 hover:to-red-500 cursor-pointer mx-1" 
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(244, 63, 94, 0.6))',
                        textShadow: '0 0 15px rgba(244, 63, 94, 0.6), 1px 1px 2px rgba(0,0,0,0.8)'
                      }}>بأعلى</span>
                <span className="inline-block hover:scale-110 transition-all duration-400 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent hover:from-blue-300 hover:via-indigo-400 hover:to-purple-500 cursor-pointer mx-1" 
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))',
                        textShadow: '0 0 15px rgba(59, 130, 246, 0.6), 1px 1px 2px rgba(0,0,0,0.8)'
                      }}>معايير</span>
                <span className="inline-block hover:scale-110 transition-all duration-400 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent hover:from-green-300 hover:via-emerald-400 hover:to-teal-500 cursor-pointer mx-1" 
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.6))',
                        textShadow: '0 0 15px rgba(34, 197, 94, 0.6), 1px 1px 2px rgba(0,0,0,0.8)'
                      }}>الجودة</span>
                <span className="inline-block hover:scale-110 transition-all duration-400 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent hover:from-purple-300 hover:via-fuchsia-400 hover:to-pink-500 cursor-pointer mx-1" 
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.6))',
                        textShadow: '0 0 15px rgba(147, 51, 234, 0.6), 1px 1px 2px rgba(0,0,0,0.8)'
                      }}>والاحترافية</span>
                <br />
                <span className="inline-block hover:scale-110 transition-all duration-400 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent hover:from-amber-300 hover:via-yellow-400 hover:to-orange-500 cursor-pointer mx-1" 
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.6))',
                        textShadow: '0 0 15px rgba(245, 158, 11, 0.6), 1px 1px 2px rgba(0,0,0,0.8)'
                      }}>في</span>
                <span className="inline-block hover:scale-110 transition-all duration-400 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent hover:from-teal-300 hover:via-cyan-400 hover:to-blue-500 cursor-pointer mx-1" 
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(20, 184, 166, 0.6))',
                        textShadow: '0 0 15px rgba(20, 184, 166, 0.6), 1px 1px 2px rgba(0,0,0,0.8)'
                      }}>جميع</span>
                <span className="inline-block hover:scale-110 transition-all duration-400 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent hover:from-indigo-300 hover:via-purple-400 hover:to-pink-500 cursor-pointer mx-1" 
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.6))',
                        textShadow: '0 0 15px rgba(99, 102, 241, 0.6), 1px 1px 2px rgba(0,0,0,0.8)'
                      }}>أنحاء</span>
                <span className="inline-block hover:scale-110 transition-all duration-400 bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 bg-clip-text text-transparent hover:from-red-300 hover:via-rose-400 hover:to-pink-500 cursor-pointer mx-1" 
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.6))',
                        textShadow: '0 0 15px rgba(239, 68, 68, 0.6), 1px 1px 2px rgba(0,0,0,0.8)'
                      }}>المملكة</span>
              </p>

              {/* Features - ألوان زاهية متحركة */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-700">
                <div className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-4 hover:from-yellow-400/30 hover:via-orange-400/30 hover:to-red-400/30 transition-all duration-500 transform hover:scale-110 hover:rotate-3 hover:shadow-2xl border border-yellow-400/50 hover:border-yellow-300/70 group cursor-pointer animate-pulse">
                  <Star className="h-7 w-7 text-yellow-300 group-hover:text-yellow-200 group-hover:rotate-180 group-hover:scale-125 transition-all duration-500 animate-spin" style={{filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))'}} />
                  <span className="font-black text-lg bg-gradient-to-r from-yellow-200 via-orange-300 to-red-400 bg-clip-text text-transparent group-hover:from-yellow-100 group-hover:via-orange-200 group-hover:to-red-300 transition-all duration-500" style={{textShadow: '0 0 10px rgba(255, 215, 0, 0.6)'}}>خبرة +15 سنة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-4 hover:from-cyan-400/30 hover:via-blue-400/30 hover:to-purple-400/30 transition-all duration-500 transform hover:scale-110 hover:-rotate-3 hover:shadow-2xl border border-cyan-400/50 hover:border-cyan-300/70 group cursor-pointer animate-pulse">
                  <Zap className="h-7 w-7 text-cyan-300 group-hover:text-cyan-200 group-hover:scale-125 transition-all duration-500 animate-bounce" style={{filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.8))'}} />
                  <span className="font-black text-lg bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-100 group-hover:via-blue-200 group-hover:to-purple-300 transition-all duration-500" style={{textShadow: '0 0 10px rgba(34, 211, 238, 0.6)'}}>خدمة 24/7</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 backdrop-blur-sm rounded-xl p-4 hover:from-purple-400/30 hover:via-pink-400/30 hover:to-rose-400/30 transition-all duration-500 transform hover:scale-110 hover:rotate-3 hover:shadow-2xl border border-purple-400/50 hover:border-purple-300/70 group cursor-pointer animate-pulse">
                  <Shield className="h-7 w-7 text-purple-300 group-hover:text-purple-200 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500 animate-pulse" style={{filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.8))'}} />
                  <span className="font-black text-lg bg-gradient-to-r from-purple-200 via-pink-300 to-rose-400 bg-clip-text text-transparent group-hover:from-purple-100 group-hover:via-pink-200 group-hover:to-rose-300 transition-all duration-500" style={{textShadow: '0 0 10px rgba(147, 51, 234, 0.6)'}}>موثوقية عالية</span>
                </div>
              </div>
            </div>

            {/* Action Button - زاهي ومتحرك */}
            <div className="flex justify-center animate-fade-in-up animation-delay-700">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 text-white font-black py-4 px-8 rounded-full transform hover:scale-125 hover:rotate-6 transition-all duration-700 shadow-2xl hover:shadow-purple-500/80 border-2 border-white/40 hover:border-white/70 group relative overflow-hidden animate-pulse"
                onClick={handleDiscoverServices}
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.8)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.6))'
                }}
              >
                <span className="relative z-10 flex items-center text-white font-black text-xl" style={{textShadow: '0 0 15px rgba(255,255,255,0.8), 2px 2px 4px rgba(0,0,0,0.8)'}}>
                  اكتشف خدماتنا
                  <ArrowLeft className="mr-3 h-6 w-6 group-hover:translate-x-2 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              </Button>
            </div>
          </div>

          {/* شاشة عرض الصور الاحترافية */}
          <div className="animate-fade-in-left">
            <div 
              className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* الصورة الحالية */}
              <div className="relative w-full h-full">
                <img
                  src={images[currentImageIndex]}
                  alt={`خدمات التخليص الجمركي والترانزيت - مؤسسة سليمان الحويطي ${currentImageIndex + 1}`}
                  title={`خدمات التخليص الجمركي والترانزيت في السعودية - صورة ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform group-hover:scale-105"
                  loading={currentImageIndex < 3 ? "eager" : "lazy"}
                />
                
                {/* طبقة تدرج خفيفة للتأثير البصري فقط */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* أزرار التحكم - محسنة */}
              <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  onClick={prevImage}
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/20"
                  aria-label="الصورة السابقة"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/20"
                  aria-label="الصورة التالية"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>

              {/* زر التشغيل/الإيقاف - محسن */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  onClick={togglePlayPause}
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/20"
                  aria-label={isPlaying ? "إيقاف التشغيل التلقائي" : "تشغيل التشغيل التلقائي"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
              </div>

              {/* مؤشر التقدم - محسن */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300 shadow-sm"
                  style={{ 
                    width: `${((currentImageIndex + 1) / images.length) * 100}%` 
                  }}
                ></div>
              </div>

              {/* نقاط التنقل - محسنة */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {images.slice(0, 5).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 border border-white/30 ${
                      index === currentImageIndex % 5 
                        ? 'bg-white scale-125 shadow-lg' 
                        : 'bg-white/30 hover:bg-white/60 hover:scale-110'
                    }`}
                    aria-label={`الانتقال إلى الصورة ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* تأثيرات بصرية إضافية محسنة */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-pink-600/15 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>
          </div>
        </div>

        {/* Stats Section - ألوان زاهية متحركة */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-700">
          <div className="text-center bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-2xl p-6 hover:from-cyan-400/40 hover:via-blue-400/40 hover:to-purple-400/40 transition-all duration-500 transform hover:scale-110 hover:rotate-3 border border-cyan-400/50 hover:border-cyan-300/70 group cursor-pointer hover:shadow-2xl animate-pulse">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-3 group-hover:scale-125 transition-transform duration-500" style={{textShadow: '0 0 20px rgba(34, 211, 238, 0.8)', filter: 'drop-shadow(0 0 15px rgba(34, 211, 238, 0.6))'}}>2000+</div>
            <div className="text-lg font-bold bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-100 group-hover:via-blue-200 group-hover:to-purple-300 transition-colors duration-500" style={{textShadow: '0 0 10px rgba(34, 211, 238, 0.6)'}}>عميل راضي</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-rose-500/30 backdrop-blur-sm rounded-2xl p-6 hover:from-purple-400/40 hover:via-pink-400/40 hover:to-rose-400/40 transition-all duration-500 transform hover:scale-110 hover:-rotate-3 border border-purple-400/50 hover:border-purple-300/70 group cursor-pointer hover:shadow-2xl animate-pulse">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-300 via-pink-400 to-rose-500 bg-clip-text text-transparent mb-3 group-hover:scale-125 transition-transform duration-500" style={{textShadow: '0 0 20px rgba(147, 51, 234, 0.8)', filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.6))'}}>8000+</div>
            <div className="text-lg font-bold bg-gradient-to-r from-purple-200 via-pink-300 to-rose-400 bg-clip-text text-transparent group-hover:from-purple-100 group-hover:via-pink-200 group-hover:to-rose-300 transition-colors duration-500" style={{textShadow: '0 0 10px rgba(147, 51, 234, 0.6)'}}>معاملة مكتملة</div>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-500/30 via-red-500/30 to-pink-500/30 backdrop-blur-sm rounded-2xl p-6 hover:from-orange-400/40 hover:via-red-400/40 hover:to-pink-400/40 transition-all duration-500 transform hover:scale-110 hover:rotate-3 border border-orange-400/50 hover:border-orange-300/70 group cursor-pointer hover:shadow-2xl animate-pulse">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-300 via-red-400 to-pink-500 bg-clip-text text-transparent mb-3 group-hover:scale-125 transition-transform duration-500" style={{textShadow: '0 0 20px rgba(251, 146, 60, 0.8)', filter: 'drop-shadow(0 0 15px rgba(251, 146, 60, 0.6))'}}>5</div>
            <div className="text-lg font-bold bg-gradient-to-r from-orange-200 via-red-300 to-pink-400 bg-clip-text text-transparent group-hover:from-orange-100 group-hover:via-red-200 group-hover:to-pink-300 transition-colors duration-500" style={{textShadow: '0 0 10px rgba(251, 146, 60, 0.6)'}}>فروع ومواقع</div>
          </div>
          <div className="text-center bg-gradient-to-br from-yellow-500/30 via-amber-500/30 to-orange-500/30 backdrop-blur-sm rounded-2xl p-6 hover:from-yellow-400/40 hover:via-amber-400/40 hover:to-orange-400/40 transition-all duration-500 transform hover:scale-110 hover:-rotate-3 border border-yellow-400/50 hover:border-yellow-300/70 group cursor-pointer hover:shadow-2xl animate-pulse">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent mb-3 group-hover:scale-125 transition-transform duration-500" style={{textShadow: '0 0 20px rgba(245, 158, 11, 0.8)', filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.6))'}}>15+</div>
            <div className="text-lg font-bold bg-gradient-to-r from-yellow-200 via-amber-300 to-orange-400 bg-clip-text text-transparent group-hover:from-yellow-100 group-hover:via-amber-200 group-hover:to-orange-300 transition-colors duration-500" style={{textShadow: '0 0 10px rgba(245, 158, 11, 0.6)'}}>سنة خبرة</div>
          </div>
        </div>
      </div>
    </section>
  );
}