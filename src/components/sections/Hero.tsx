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
              {/* العنوان الرئيسي - أحجام أصغر ووضوح أفضل */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up hover:from-blue-300 hover:via-cyan-300 hover:to-purple-300 transition-all duration-500 cursor-default transform hover:scale-105 hover:rotate-1" style={{filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.4))'}}>
                  سليمان الحويطي
                </span>
                <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-300 hover:from-orange-300 hover:via-red-300 hover:to-pink-300 transition-all duration-500 cursor-default transform hover:scale-105 hover:-rotate-1" style={{filter: 'drop-shadow(0 0 10px rgba(251, 146, 60, 0.4))'}}>
                  للتخليص الجمركي والترانزيت
                </span>
              </h1>

              {/* العنوان الفرعي - حجم أصغر */}
              <h2 className="text-lg md:text-xl lg:text-2xl mt-4 animate-fade-in-up animation-delay-500 leading-relaxed">
                <span className="inline-block hover:scale-110 transition-all duration-300 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent hover:from-yellow-200 hover:to-orange-300" style={{filter: 'drop-shadow(0 0 6px rgba(255, 215, 0, 0.3))'}}>مؤسسة رائدة في خدمات</span>{' '}
                <span className="inline-block hover:scale-110 transition-all duration-300 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 animate-pulse" style={{filter: 'drop-shadow(0 0 6px rgba(0, 191, 255, 0.3))'}}>التخليص الجمركي</span>{' '}
                <span className="inline-block hover:scale-110 transition-all duration-300 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-400" style={{filter: 'drop-shadow(0 0 6px rgba(147, 51, 234, 0.3))'}}>والترانزيت في</span>{' '}
                <span className="inline-block hover:scale-110 transition-all duration-300 bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-teal-400 animate-pulse" style={{filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.3))'}}>المملكة العربية السعودية</span>
              </h2>
              
              {/* الوصف - حجم أصغر ووضوح أفضل */}
              <p className="text-base md:text-lg lg:text-xl leading-relaxed animate-fade-in-up animation-delay-700">
                <span className="inline-block hover:scale-105 transition-all duration-300 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent hover:from-violet-300 hover:to-purple-400 cursor-pointer" style={{filter: 'drop-shadow(0 0 4px rgba(139, 69, 219, 0.3))'}}>نقدم خدمات التخليص الجمركي والترانزيت</span>{' '}
                <span className="inline-block hover:scale-105 transition-all duration-300 bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent hover:from-rose-300 hover:to-red-400 cursor-pointer" style={{filter: 'drop-shadow(0 0 4px rgba(244, 63, 94, 0.3))'}}>بأعلى معايير الجودة والاحترافية</span>{' '}
                <span className="inline-block hover:scale-105 transition-all duration-300 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent hover:from-amber-300 hover:to-orange-400 cursor-pointer" style={{filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.3))'}}>في جميع أنحاء المملكة</span>
              </p>

              {/* Features - أحجام أصغر */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-up animation-delay-700">
                <div className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-yellow-500/30 to-orange-500/30 backdrop-blur-sm rounded-xl p-3 hover:from-yellow-400/40 hover:to-orange-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 border border-yellow-400/40 hover:border-yellow-300/60 group cursor-pointer">
                  <Star className="h-5 w-5 text-yellow-300 group-hover:text-yellow-200 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 animate-pulse" />
                  <span className="font-medium text-sm bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent group-hover:from-yellow-100 group-hover:to-orange-100 transition-all duration-300 drop-shadow-md">خبرة +15 سنة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-sm rounded-xl p-3 hover:from-cyan-400/40 hover:to-blue-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 border border-cyan-400/40 hover:border-cyan-300/60 group cursor-pointer">
                  <Zap className="h-5 w-5 text-cyan-300 group-hover:text-cyan-200 group-hover:scale-110 transition-all duration-300 animate-pulse" />
                  <span className="font-medium text-sm bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent group-hover:from-cyan-100 group-hover:to-blue-100 transition-all duration-300 drop-shadow-md">خدمة 24/7</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-xl p-3 hover:from-purple-400/40 hover:to-pink-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 border border-purple-400/40 hover:border-purple-300/60 group cursor-pointer">
                  <Shield className="h-5 w-5 text-purple-300 group-hover:text-purple-200 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 animate-pulse" />
                  <span className="font-medium text-sm bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300 drop-shadow-md">موثوقية عالية</span>
                </div>
              </div>
            </div>

            {/* Action Button - محسن مع وظيفة أفضل */}
            <div className="flex justify-center animate-fade-in-up animation-delay-700">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 hover:rotate-1 transition-all duration-500 shadow-2xl hover:shadow-purple-500/50 border border-purple-400/40 hover:border-purple-300/60 group relative overflow-hidden"
                onClick={handleDiscoverServices}
              >
                <span className="relative z-10 flex items-center text-white font-semibold">
                  اكتشف خدماتنا
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </div>
          </div>

          {/* شاشة عرض الصور الاحترافية - بدون نصوص */}
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

        {/* Stats Section - أحجام أصغر ووضوح أفضل */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-700">
          <div className="text-center bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-sm rounded-2xl p-4 hover:from-cyan-400/40 hover:to-blue-400/40 transition-all duration-300 transform hover:scale-105 hover:rotate-1 border border-cyan-400/40 hover:border-cyan-300/60 group cursor-pointer hover:shadow-lg hover:shadow-cyan-500/30">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">2000+</div>
            <div className="text-sm bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent group-hover:from-cyan-100 group-hover:to-blue-100 transition-colors duration-300 drop-shadow-md">عميل راضي</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-2xl p-4 hover:from-purple-400/40 hover:to-pink-400/40 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 border border-purple-400/40 hover:border-purple-300/60 group cursor-pointer hover:shadow-lg hover:shadow-purple-500/30">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">8000+</div>
            <div className="text-sm bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent group-hover:from-purple-100 group-hover:to-pink-100 transition-colors duration-300 drop-shadow-md">معاملة مكتملة</div>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-500/30 to-red-500/30 backdrop-blur-sm rounded-2xl p-4 hover:from-orange-400/40 hover:to-red-400/40 transition-all duration-300 transform hover:scale-105 hover:rotate-1 border border-orange-400/40 hover:border-orange-300/60 group cursor-pointer hover:shadow-lg hover:shadow-orange-500/30">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">5</div>
            <div className="text-sm bg-gradient-to-r from-orange-200 to-red-200 bg-clip-text text-transparent group-hover:from-orange-100 group-hover:to-red-100 transition-colors duration-300 drop-shadow-md">فروع ومواقع</div>
          </div>
          <div className="text-center bg-gradient-to-br from-yellow-500/30 to-amber-500/30 backdrop-blur-sm rounded-2xl p-4 hover:from-yellow-400/40 hover:to-amber-400/40 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 border border-yellow-400/40 hover:border-yellow-300/60 group cursor-pointer hover:shadow-lg hover:shadow-yellow-500/30">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">15+</div>
            <div className="text-sm bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent group-hover:from-yellow-100 group-hover:to-amber-100 transition-colors duration-300 drop-shadow-md">سنة خبرة</div>
          </div>
        </div>
      </div>
    </section>
  );
}