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

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
              {/* العنوان الرئيسي - بحجم أصغر وألوان تفاعلية */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-fade-in-up hover:from-cyan-200 hover:via-blue-300 hover:to-indigo-300 transition-all duration-500 cursor-default">
                  سليمان الحويطي
                </span>
                <span className="block bg-gradient-to-r from-emerald-300 via-teal-400 to-green-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-300 hover:from-emerald-200 hover:via-teal-300 hover:to-green-300 transition-all duration-500 cursor-default">
                  للتخليص الجمركي والترانزيت
                </span>
              </h1>

              {/* العنوان الفرعي - بحجم أصغر وتأثيرات تفاعلية */}
              <h2 className="text-lg md:text-xl lg:text-2xl text-slate-200 mt-4 animate-fade-in-up animation-delay-500 hover:text-white transition-all duration-300 cursor-default leading-relaxed">
                <span className="inline-block hover:scale-105 transition-transform duration-300">مؤسسة رائدة في خدمات</span>{' '}
                <span className="inline-block hover:scale-105 transition-transform duration-300 text-cyan-300">التخليص الجمركي</span>{' '}
                <span className="inline-block hover:scale-105 transition-transform duration-300">والترانزيت في</span>{' '}
                <span className="inline-block hover:scale-105 transition-transform duration-300 text-green-300">المملكة العربية السعودية</span>
              </h2>
              
              {/* الوصف - بحجم أصغر وتأثيرات تفاعلية */}
              <p className="text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed animate-fade-in-up animation-delay-700 hover:text-blue-50 transition-all duration-300 cursor-default">
                <span className="inline-block hover:text-cyan-200 transition-colors duration-300">نقدم خدمات التخليص الجمركي والترانزيت</span>{' '}
                <span className="inline-block hover:text-emerald-200 transition-colors duration-300">بأعلى معايير الجودة والاحترافية</span>{' '}
                <span className="inline-block hover:text-yellow-200 transition-colors duration-300">في جميع أنحاء المملكة</span>
              </p>

              {/* Features - محسنة بألوان وتأثيرات جديدة */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-up animation-delay-700">
                <div className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm rounded-xl p-4 hover:from-amber-400/30 hover:to-yellow-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-amber-400/20 hover:border-amber-300/40 group">
                  <Star className="h-6 w-6 text-amber-300 group-hover:text-amber-200 group-hover:rotate-12 transition-all duration-300" />
                  <span className="font-medium text-amber-100 group-hover:text-amber-50 transition-colors duration-300">خبرة +15 سنة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-4 hover:from-cyan-400/30 hover:to-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-cyan-400/20 hover:border-cyan-300/40 group">
                  <Zap className="h-6 w-6 text-cyan-300 group-hover:text-cyan-200 group-hover:scale-110 transition-all duration-300" />
                  <span className="font-medium text-cyan-100 group-hover:text-cyan-50 transition-colors duration-300">خدمة 24/7</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-xl p-4 hover:from-emerald-400/30 hover:to-green-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-emerald-400/20 hover:border-emerald-300/40 group">
                  <Shield className="h-6 w-6 text-emerald-300 group-hover:text-emerald-200 group-hover:rotate-6 transition-all duration-300" />
                  <span className="font-medium text-emerald-100 group-hover:text-emerald-50 transition-colors duration-300">موثوقية عالية</span>
                </div>
              </div>
            </div>

            {/* Action Button - محسن بألوان وتأثيرات جديدة */}
            <div className="flex justify-center animate-fade-in-up animation-delay-700">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-full transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 border border-purple-400/30 hover:border-purple-300/50 group relative overflow-hidden"
                onClick={scrollToServices}
              >
                <span className="relative z-10 flex items-center">
                  اكتشف خدماتنا
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
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
                  className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 transition-all duration-300 shadow-sm"
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
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>
          </div>
        </div>

        {/* Stats Section - محسنة بألوان وتأثيرات جديدة */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-700">
          <div className="text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 hover:from-cyan-400/20 hover:to-blue-400/20 transition-all duration-300 transform hover:scale-105 border border-cyan-400/20 hover:border-cyan-300/40 group">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">2000+</div>
            <div className="text-cyan-100 group-hover:text-cyan-50 transition-colors duration-300">عميل راضي</div>
          </div>
          <div className="text-center bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl p-6 hover:from-emerald-400/20 hover:to-green-400/20 transition-all duration-300 transform hover:scale-105 border border-emerald-400/20 hover:border-emerald-300/40 group">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">8000+</div>
            <div className="text-emerald-100 group-hover:text-emerald-50 transition-colors duration-300">معاملة مكتملة</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 hover:from-purple-400/20 hover:to-pink-400/20 transition-all duration-300 transform hover:scale-105 border border-purple-400/20 hover:border-purple-300/40 group">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">5</div>
            <div className="text-purple-100 group-hover:text-purple-50 transition-colors duration-300">فروع ومواقع</div>
          </div>
          <div className="text-center bg-gradient-to-br from-amber-500/10 to-yellow-500/10 backdrop-blur-sm rounded-2xl p-6 hover:from-amber-400/20 hover:to-yellow-400/20 transition-all duration-300 transform hover:scale-105 border border-amber-400/20 hover:border-amber-300/40 group">
            <div className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
            <div className="text-amber-100 group-hover:text-amber-50 transition-colors duration-300">سنة خبرة</div>
          </div>
        </div>
      </div>
    </section>
  );
}