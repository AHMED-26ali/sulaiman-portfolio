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
    console.log('تم النقر على زر اكتشف خدماتنا');
    
    // البحث عن قسم الخدمات بطرق متعددة
    let servicesSection = document.getElementById('services');
    
    if (!servicesSection) {
      servicesSection = document.querySelector('[id="services"]');
    }
    
    if (!servicesSection) {
      servicesSection = document.querySelector('section[id*="service"]');
    }
    
    if (!servicesSection) {
      servicesSection = document.querySelector('.services');
    }
    
    if (!servicesSection) {
      // البحث عن أي عنصر يحتوي على كلمة "خدمات"
      const allElements = document.querySelectorAll('*');
      for (const element of allElements) {
        if (element.textContent && element.textContent.includes('خدماتنا المتميزة')) {
          servicesSection = element.closest('section') || element;
          break;
        }
      }
    }
    
    console.log('قسم الخدمات الموجود:', servicesSection);
    
    if (servicesSection) {
      console.log('تم العثور على قسم الخدمات، الانتقال إليه...');
      // إضافة تأخير قصير للتأكد من التحديث
      setTimeout(() => {
        servicesSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 100);
    } else {
      console.log('لم يتم العثور على قسم الخدمات، التمرير لأسفل...');
      // إذا لم يوجد، انتقل إلى القسم التالي
      const nextSection = document.querySelector('section:nth-of-type(2)');
      if (nextSection) {
        console.log('تم العثور على القسم التالي، الانتقال إليه...');
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log('التمرير لأسفل بمقدار ارتفاع الشاشة...');
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
              {/* العنوان الرئيسي - تحسين الألوان والتأثيرات */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="block animate-fade-in-up hover:scale-105 transition-all duration-700 cursor-default transform hover:rotate-1 animate-pulse" 
                      style={{
                        background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F8FF 50%, #E6F3FF 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.7))',
                        textShadow: '0 0 40px rgba(255, 255, 255, 0.9), 0 0 80px rgba(255, 255, 255, 0.7), 3px 3px 6px rgba(0,0,0,0.8)'
                      }}>
                  سليمان الحويطي
                </span>
                <span className="block animate-fade-in-up animation-delay-300 hover:scale-105 transition-all duration-700 cursor-default transform hover:-rotate-1 animate-pulse mt-2" 
                      style={{
                        background: 'linear-gradient(135deg, #32D74B 0%, #00FF7F 30%, #7FFF00 60%, #ADFF2F 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 30px rgba(50, 215, 75, 0.9)) drop-shadow(0 0 60px rgba(50, 215, 75, 0.7))',
                        textShadow: '0 0 40px rgba(50, 215, 75, 0.9), 0 0 80px rgba(50, 215, 75, 0.7), 3px 3px 6px rgba(0,0,0,0.8)'
                      }}>
                  للتخليص الجمركي والترانزيت
                </span>
              </h1>

              {/* العنوان الفرعي - تحسين الألوان */}
              <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-8 animate-fade-in-up animation-delay-500 leading-relaxed">
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="inline-block hover:scale-110 transition-all duration-500 animate-bounce font-bold px-3 py-1 rounded-lg" 
                        style={{
                          background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 50%, #FFB3B3 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 20px rgba(255, 107, 107, 0.8))',
                          textShadow: '0 0 25px rgba(255, 107, 107, 0.8), 2px 2px 4px rgba(0,0,0,0.8)',
                          animationDelay: '0s'
                        }}>مؤسسة</span>
                  <span className="inline-block hover:scale-110 transition-all duration-500 animate-bounce font-bold px-3 py-1 rounded-lg" 
                        style={{
                          background: 'linear-gradient(135deg, #4ECDC4 0%, #7FDBDA 50%, #B3E8E5 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 20px rgba(78, 205, 196, 0.8))',
                          textShadow: '0 0 25px rgba(78, 205, 196, 0.8), 2px 2px 4px rgba(0,0,0,0.8)',
                          animationDelay: '0.2s'
                        }}>رائدة</span>
                  <span className="inline-block hover:scale-110 transition-all duration-500 animate-bounce font-bold px-3 py-1 rounded-lg" 
                        style={{
                          background: 'linear-gradient(135deg, #FFE66D 0%, #FFEF96 50%, #FFF7C2 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 20px rgba(255, 230, 109, 0.8))',
                          textShadow: '0 0 25px rgba(255, 230, 109, 0.8), 2px 2px 4px rgba(0,0,0,0.8)',
                          animationDelay: '0.4s'
                        }}>في</span>
                  <span className="inline-block hover:scale-110 transition-all duration-500 animate-bounce font-bold px-3 py-1 rounded-lg" 
                        style={{
                          background: 'linear-gradient(135deg, #A8E6CF 0%, #C7F0DB 50%, #E6FAF0 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 20px rgba(168, 230, 207, 0.8))',
                          textShadow: '0 0 25px rgba(168, 230, 207, 0.8), 2px 2px 4px rgba(0,0,0,0.8)',
                          animationDelay: '0.6s'
                        }}>خدمات</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-3">
                  <span className="inline-block hover:scale-110 transition-all duration-500 animate-bounce font-bold px-3 py-1 rounded-lg" 
                        style={{
                          background: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 50%, #FECFEF 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 20px rgba(255, 154, 158, 0.8))',
                          textShadow: '0 0 25px rgba(255, 154, 158, 0.8), 2px 2px 4px rgba(0,0,0,0.8)',
                          animationDelay: '0.8s'
                        }}>التخليص</span>
                  <span className="inline-block hover:scale-110 transition-all duration-500 animate-bounce font-bold px-3 py-1 rounded-lg" 
                        style={{
                          background: 'linear-gradient(135deg, #A8EDEA 0%, #FED6E3 50%, #D299C2 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 20px rgba(168, 237, 234, 0.8))',
                          textShadow: '0 0 25px rgba(168, 237, 234, 0.8), 2px 2px 4px rgba(0,0,0,0.8)',
                          animationDelay: '1s'
                        }}>الجمركي</span>
                  <span className="inline-block hover:scale-110 transition-all duration-500 animate-bounce font-bold px-3 py-1 rounded-lg" 
                        style={{
                          background: 'linear-gradient(135deg, #FAD0C4 0%, #FFD1FF 50%, #E1BEE7 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 20px rgba(250, 208, 196, 0.8))',
                          textShadow: '0 0 25px rgba(250, 208, 196, 0.8), 2px 2px 4px rgba(0,0,0,0.8)',
                          animationDelay: '1.2s'
                        }}>والترانزيت</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-3">
                  <span className="inline-block hover:scale-110 transition-all duration-500 animate-bounce font-bold px-3 py-1 rounded-lg" 
                        style={{
                          background: 'linear-gradient(135deg, #FFC3A0 0%, #FFAFBD 50%, #FFC3A0 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 20px rgba(255, 195, 160, 0.8))',
                          textShadow: '0 0 25px rgba(255, 195, 160, 0.8), 2px 2px 4px rgba(0,0,0,0.8)',
                          animationDelay: '1.4s'
                        }}>في</span>
                  <span className="inline-block hover:scale-110 transition-all duration-500 animate-bounce font-bold px-3 py-1 rounded-lg" 
                        style={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 20px rgba(102, 126, 234, 0.8))',
                          textShadow: '0 0 25px rgba(102, 126, 234, 0.8), 2px 2px 4px rgba(0,0,0,0.8)',
                          animationDelay: '1.6s'
                        }}>المملكة</span>
                  <span className="inline-block hover:scale-110 transition-all duration-500 animate-bounce font-bold px-3 py-1 rounded-lg" 
                        style={{
                          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 20px rgba(240, 147, 251, 0.8))',
                          textShadow: '0 0 25px rgba(240, 147, 251, 0.8), 2px 2px 4px rgba(0,0,0,0.8)',
                          animationDelay: '1.8s'
                        }}>العربية</span>
                  <span className="inline-block hover:scale-110 transition-all duration-500 animate-bounce font-bold px-3 py-1 rounded-lg" 
                        style={{
                          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 20px rgba(79, 172, 254, 0.8))',
                          textShadow: '0 0 25px rgba(79, 172, 254, 0.8), 2px 2px 4px rgba(0,0,0,0.8)',
                          animationDelay: '2s'
                        }}>السعودية</span>
                </div>
              </div>
              
              {/* الوصف - تحسين الألوان */}
              <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed animate-fade-in-up animation-delay-700 mt-8">
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="inline-block hover:scale-105 transition-all duration-400 cursor-pointer font-semibold px-2 py-1 rounded" 
                        style={{
                          background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8787 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 15px rgba(255, 107, 107, 0.7))',
                          textShadow: '0 0 20px rgba(255, 107, 107, 0.7), 1px 1px 3px rgba(0,0,0,0.8)'
                        }}>نقدم</span>
                  <span className="inline-block hover:scale-105 transition-all duration-400 cursor-pointer font-semibold px-2 py-1 rounded" 
                        style={{
                          background: 'linear-gradient(135deg, #4ECDC4 0%, #6DD5DB 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 15px rgba(78, 205, 196, 0.7))',
                          textShadow: '0 0 20px rgba(78, 205, 196, 0.7), 1px 1px 3px rgba(0,0,0,0.8)'
                        }}>خدمات</span>
                  <span className="inline-block hover:scale-105 transition-all duration-400 cursor-pointer font-semibold px-2 py-1 rounded" 
                        style={{
                          background: 'linear-gradient(135deg, #FFE66D 0%, #FFF176 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 15px rgba(255, 230, 109, 0.7))',
                          textShadow: '0 0 20px rgba(255, 230, 109, 0.7), 1px 1px 3px rgba(0,0,0,0.8)'
                        }}>التخليص</span>
                  <span className="inline-block hover:scale-105 transition-all duration-400 cursor-pointer font-semibold px-2 py-1 rounded" 
                        style={{
                          background: 'linear-gradient(135deg, #A8E6CF 0%, #B8F7D1 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 15px rgba(168, 230, 207, 0.7))',
                          textShadow: '0 0 20px rgba(168, 230, 207, 0.7), 1px 1px 3px rgba(0,0,0,0.8)'
                        }}>الجمركي</span>
                  <span className="inline-block hover:scale-105 transition-all duration-400 cursor-pointer font-semibold px-2 py-1 rounded" 
                        style={{
                          background: 'linear-gradient(135deg, #FF9A9E 0%, #FFADB0 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 15px rgba(255, 154, 158, 0.7))',
                          textShadow: '0 0 20px rgba(255, 154, 158, 0.7), 1px 1px 3px rgba(0,0,0,0.8)'
                        }}>والترانزيت</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2">
                  <span className="inline-block hover:scale-105 transition-all duration-400 cursor-pointer font-semibold px-2 py-1 rounded" 
                        style={{
                          background: 'linear-gradient(135deg, #A8EDEA 0%, #B8F5F2 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 15px rgba(168, 237, 234, 0.7))',
                          textShadow: '0 0 20px rgba(168, 237, 234, 0.7), 1px 1px 3px rgba(0,0,0,0.8)'
                        }}>بأعلى</span>
                  <span className="inline-block hover:scale-105 transition-all duration-400 cursor-pointer font-semibold px-2 py-1 rounded" 
                        style={{
                          background: 'linear-gradient(135deg, #FAD0C4 0%, #FBD7CC 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 15px rgba(250, 208, 196, 0.7))',
                          textShadow: '0 0 20px rgba(250, 208, 196, 0.7), 1px 1px 3px rgba(0,0,0,0.8)'
                        }}>معايير</span>
                  <span className="inline-block hover:scale-105 transition-all duration-400 cursor-pointer font-semibold px-2 py-1 rounded" 
                        style={{
                          background: 'linear-gradient(135deg, #FFC3A0 0%, #FFD0B3 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 15px rgba(255, 195, 160, 0.7))',
                          textShadow: '0 0 20px rgba(255, 195, 160, 0.7), 1px 1px 3px rgba(0,0,0,0.8)'
                        }}>الجودة</span>
                  <span className="inline-block hover:scale-105 transition-all duration-400 cursor-pointer font-semibold px-2 py-1 rounded" 
                        style={{
                          background: 'linear-gradient(135deg, #667eea 0%, #7b8ceb 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 15px rgba(102, 126, 234, 0.7))',
                          textShadow: '0 0 20px rgba(102, 126, 234, 0.7), 1px 1px 3px rgba(0,0,0,0.8)'
                        }}>والاحترافية</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2">
                  <span className="inline-block hover:scale-105 transition-all duration-400 cursor-pointer font-semibold px-2 py-1 rounded" 
                        style={{
                          background: 'linear-gradient(135deg, #f093fb 0%, #f5a6fc 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 15px rgba(240, 147, 251, 0.7))',
                          textShadow: '0 0 20px rgba(240, 147, 251, 0.7), 1px 1px 3px rgba(0,0,0,0.8)'
                        }}>في</span>
                  <span className="inline-block hover:scale-105 transition-all duration-400 cursor-pointer font-semibold px-2 py-1 rounded" 
                        style={{
                          background: 'linear-gradient(135deg, #4facfe 0%, #64b5fe 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 15px rgba(79, 172, 254, 0.7))',
                          textShadow: '0 0 20px rgba(79, 172, 254, 0.7), 1px 1px 3px rgba(0,0,0,0.8)'
                        }}>جميع</span>
                  <span className="inline-block hover:scale-105 transition-all duration-400 cursor-pointer font-semibold px-2 py-1 rounded" 
                        style={{
                          background: 'linear-gradient(135deg, #00f2fe 0%, #1af3fe 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 15px rgba(0, 242, 254, 0.7))',
                          textShadow: '0 0 20px rgba(0, 242, 254, 0.7), 1px 1px 3px rgba(0,0,0,0.8)'
                        }}>أنحاء</span>
                  <span className="inline-block hover:scale-105 transition-all duration-400 cursor-pointer font-semibold px-2 py-1 rounded" 
                        style={{
                          background: 'linear-gradient(135deg, #43e97b 0%, #58eb8a 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 15px rgba(67, 233, 123, 0.7))',
                          textShadow: '0 0 20px rgba(67, 233, 123, 0.7), 1px 1px 3px rgba(0,0,0,0.8)'
                        }}>المملكة</span>
                </div>
              </div>

              {/* Features - ألوان مختلفة */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-700 mt-10">
                <div className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-4 hover:from-blue-400/30 hover:to-cyan-400/30 transition-all duration-500 transform hover:scale-110 hover:rotate-3 hover:shadow-2xl border border-blue-400/40 hover:border-cyan-400/60 group cursor-pointer animate-pulse">
                  <Star className="h-7 w-7 text-cyan-300 group-hover:text-blue-300 group-hover:rotate-180 group-hover:scale-125 transition-all duration-500 animate-spin" style={{filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.8))'}} />
                  <span className="font-black text-lg text-cyan-100 group-hover:text-blue-100 transition-all duration-500" style={{textShadow: '0 0 10px rgba(34, 211, 238, 0.6)'}}>خبرة +15 سنة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-4 hover:from-purple-400/30 hover:to-pink-400/30 transition-all duration-500 transform hover:scale-110 hover:-rotate-3 hover:shadow-2xl border border-purple-400/40 hover:border-pink-400/60 group cursor-pointer animate-pulse">
                  <Zap className="h-7 w-7 text-pink-300 group-hover:text-purple-300 group-hover:scale-125 transition-all duration-500 animate-bounce" style={{filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.8))'}} />
                  <span className="font-black text-lg text-pink-100 group-hover:text-purple-100 transition-all duration-500" style={{textShadow: '0 0 10px rgba(236, 72, 153, 0.6)'}}>خدمة 24/7</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-4 hover:from-orange-400/30 hover:to-red-400/30 transition-all duration-500 transform hover:scale-110 hover:rotate-3 hover:shadow-2xl border border-orange-400/40 hover:border-red-400/60 group cursor-pointer animate-pulse">
                  <Shield className="h-7 w-7 text-red-300 group-hover:text-orange-300 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500 animate-pulse" style={{filter: 'drop-shadow(0 0 10px rgba(248, 113, 113, 0.8))'}} />
                  <span className="font-black text-lg text-red-100 group-hover:text-orange-100 transition-all duration-500" style={{textShadow: '0 0 10px rgba(248, 113, 113, 0.6)'}}>موثوقية عالية</span>
                </div>
              </div>
            </div>

            {/* Action Button - أبيض وأخضر */}
            <div className="flex justify-center lg:justify-start animate-fade-in-up animation-delay-700 mt-10">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-white/20 via-green-500/80 to-white/20 hover:from-white/30 hover:via-green-400/90 hover:to-white/30 text-white font-black py-6 px-12 rounded-full transform hover:scale-125 hover:rotate-6 transition-all duration-700 shadow-2xl hover:shadow-green-500/80 border-2 border-white/40 hover:border-green-400/70 group relative overflow-hidden animate-pulse text-xl"
                onClick={handleDiscoverServices}
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(73, 235, 18, 0.8)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.6))'
                }}
              >
                <span className="relative z-10 flex items-center text-white font-black" style={{textShadow: '0 0 15px rgba(73, 235, 18, 0.8), 2px 2px 4px rgba(0,0,0,0.8)'}}>
                  اكتشف خدماتنا
                  <ArrowLeft className="mr-3 h-7 w-7 group-hover:translate-x-2 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
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
                  className="h-full bg-gradient-to-r from-white via-green-400 to-white transition-all duration-300 shadow-sm"
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
            <div className="absolute -inset-6 bg-gradient-to-r from-white/10 via-green-500/15 to-white/10 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>
          </div>
        </div>

        {/* Stats Section - ألوان مختلفة */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-700">
          <div className="text-center bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-6 hover:from-emerald-400/30 hover:to-teal-400/30 transition-all duration-500 transform hover:scale-110 hover:rotate-3 border border-emerald-400/40 hover:border-teal-400/60 group cursor-pointer hover:shadow-2xl animate-pulse">
            <div className="text-4xl md:text-5xl font-black text-emerald-200 mb-3 group-hover:scale-125 transition-transform duration-500" style={{textShadow: '0 0 20px rgba(16, 185, 129, 0.8)', filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.6))'}}>2000+</div>
            <div className="text-lg font-bold text-teal-100 group-hover:text-emerald-100 transition-colors duration-500" style={{textShadow: '0 0 10px rgba(20, 184, 166, 0.6)'}}>عميل راضي</div>
          </div>
          <div className="text-center bg-gradient-to-br from-violet-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-6 hover:from-violet-400/30 hover:to-indigo-400/30 transition-all duration-500 transform hover:scale-110 hover:-rotate-3 border border-violet-400/40 hover:border-indigo-400/60 group cursor-pointer hover:shadow-2xl animate-pulse">
            <div className="text-4xl md:text-5xl font-black text-violet-200 mb-3 group-hover:scale-125 transition-transform duration-500" style={{textShadow: '0 0 20px rgba(139, 92, 246, 0.8)', filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))'}}>8000+</div>
            <div className="text-lg font-bold text-indigo-100 group-hover:text-violet-100 transition-colors duration-500" style={{textShadow: '0 0 10px rgba(99, 102, 241, 0.6)'}}>معاملة مكتملة</div>
          </div>
          <div className="text-center bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl p-6 hover:from-amber-400/30 hover:to-yellow-400/30 transition-all duration-500 transform hover:scale-110 hover:rotate-3 border border-amber-400/40 hover:border-yellow-400/60 group cursor-pointer hover:shadow-2xl animate-pulse">
            <div className="text-4xl md:text-5xl font-black text-amber-200 mb-3 group-hover:scale-125 transition-transform duration-500" style={{textShadow: '0 0 20px rgba(245, 158, 11, 0.8)', filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.6))'}}>5</div>
            <div className="text-lg font-bold text-yellow-100 group-hover:text-amber-100 transition-colors duration-500" style={{textShadow: '0 0 10px rgba(234, 179, 8, 0.6)'}}>فروع ومواقع</div>
          </div>
          <div className="text-center bg-gradient-to-br from-rose-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 hover:from-rose-400/30 hover:to-pink-400/30 transition-all duration-500 transform hover:scale-110 hover:-rotate-3 border border-rose-400/40 hover:border-pink-400/60 group cursor-pointer hover:shadow-2xl animate-pulse">
            <div className="text-4xl md:text-5xl font-black text-rose-200 mb-3 group-hover:scale-125 transition-transform duration-500" style={{textShadow: '0 0 20px rgba(244, 63, 94, 0.8)', filter: 'drop-shadow(0 0 15px rgba(244, 63, 94, 0.6))'}}>15+</div>
            <div className="text-lg font-bold text-pink-100 group-hover:text-rose-100 transition-colors duration-500" style={{textShadow: '0 0 10px rgba(236, 72, 153, 0.6)'}}>سنة خبرة</div>
          </div>
        </div>
      </div>
    </section>
  );
}