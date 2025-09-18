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
              {/* العنوان الرئيسي - بسيط وأنيق */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-center lg:text-right">
                <span className="block text-white mb-2 hover:scale-105 transition-all duration-500">
                  سليمان الحويطي
                </span>
                <span className="block text-green-400 hover:scale-105 transition-all duration-500">
                  للتخليص الجمركي والترانزيت
                </span>
              </h1>

              {/* العنوان الفرعي - بسيط */}
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed text-center lg:text-right">
                مؤسسة رائدة في خدمات التخليص الجمركي والترانزيت في المملكة العربية السعودية
              </h2>
              
              {/* الوصف - واضح ومقروء */}
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed text-center lg:text-right">
                نقدم خدمات التخليص الجمركي والترانزيت بأعلى معايير الجودة والاحترافية في جميع أنحاء المملكة
              </p>

              {/* Features - تصميم نظيف */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 space-x-reverse bg-blue-500/10 backdrop-blur-sm rounded-xl p-4 hover:bg-blue-500/20 transition-all duration-300 border border-blue-500/20">
                  <Star className="h-6 w-6 text-blue-400" />
                  <span className="font-semibold text-white">خبرة +15 سنة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-purple-500/10 backdrop-blur-sm rounded-xl p-4 hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20">
                  <Zap className="h-6 w-6 text-purple-400" />
                  <span className="font-semibold text-white">خدمة 24/7</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-orange-500/10 backdrop-blur-sm rounded-xl p-4 hover:bg-orange-500/20 transition-all duration-300 border border-orange-500/20">
                  <Shield className="h-6 w-6 text-orange-400" />
                  <span className="font-semibold text-white">موثوقية عالية</span>
                </div>
              </div>
            </div>

            {/* Action Button - بسيط وواضح */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={handleDiscoverServices}
              >
                <span className="flex items-center text-lg">
                  اكتشف خدماتنا
                  <ArrowLeft className="mr-3 h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>

          {/* شاشة عرض الصور */}
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
                
                {/* طبقة تدرج خفيفة */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* أزرار التحكم */}
              <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  onClick={prevImage}
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/20"
                  aria-label="الصورة السابقة"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/20"
                  aria-label="الصورة التالية"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>

              {/* زر التشغيل/الإيقاف */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  onClick={togglePlayPause}
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/20"
                  aria-label={isPlaying ? "إيقاف التشغيل التلقائي" : "تشغيل التشغيل التلقائي"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
              </div>

              {/* مؤشر التقدم */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                <div 
                  className="h-full bg-green-500 transition-all duration-300"
                  style={{ 
                    width: `${((currentImageIndex + 1) / images.length) * 100}%` 
                  }}
                ></div>
              </div>

              {/* نقاط التنقل */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {images.slice(0, 5).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex % 5 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/80 hover:scale-110'
                    }`}
                    aria-label={`الانتقال إلى الصورة ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - بسيط ونظيف */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-emerald-500/20 transition-all duration-300 border border-emerald-500/20">
            <div className="text-4xl md:text-5xl font-black text-emerald-400 mb-2">2000+</div>
            <div className="text-lg font-semibold text-white">عميل راضي</div>
          </div>
          <div className="text-center bg-violet-500/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-violet-500/20 transition-all duration-300 border border-violet-500/20">
            <div className="text-4xl md:text-5xl font-black text-violet-400 mb-2">8000+</div>
            <div className="text-lg font-semibold text-white">معاملة مكتملة</div>
          </div>
          <div className="text-center bg-amber-500/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-amber-500/20 transition-all duration-300 border border-amber-500/20">
            <div className="text-4xl md:text-5xl font-black text-amber-400 mb-2">5</div>
            <div className="text-lg font-semibold text-white">فروع ومواقع</div>
          </div>
          <div className="text-center bg-rose-500/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-rose-500/20 transition-all duration-300 border border-rose-500/20">
            <div className="text-4xl md:text-5xl font-black text-rose-400 mb-2">15+</div>
            <div className="text-lg font-semibold text-white">سنة خبرة</div>
          </div>
        </div>
      </div>
    </section>
  );
}