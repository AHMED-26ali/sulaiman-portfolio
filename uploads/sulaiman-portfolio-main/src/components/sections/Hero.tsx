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
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-blue-300 animate-fade-in-up">سليمان الحويطي</span>
                <span className="block text-green-300 animate-fade-in-up animation-delay-300">للتخليص الجمركي والترانزيت</span>
              </h1>
              <h2 className="block text-2xl md:text-3xl text-gray-300 mt-4 animate-fade-in-up animation-delay-500">
                مؤسسة رائدة في خدمات التخليص الجمركي والترانزيت في المملكة العربية السعودية
              </h2>
              
              <p className="text-xl md:text-2xl text-blue-200 leading-relaxed animate-fade-in-up animation-delay-700">
                نقدم خدمات التخليص الجمركي والترانزيت بأعلى معايير الجودة والاحترافية في جميع أنحاء المملكة العربية السعودية
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-up animation-delay-700">
                <div className="flex items-center space-x-3 space-x-reverse bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <span className="font-medium">خبرة +15 سنة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <Zap className="h-6 w-6 text-blue-400" />
                  <span className="font-medium">خدمة 24/7</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <Shield className="h-6 w-6 text-green-400" />
                  <span className="font-medium">موثوقية عالية</span>
                </div>
              </div>
            </div>

            {/* Action Button - Only Services Button */}
            <div className="flex justify-center animate-fade-in-up animation-delay-700">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                onClick={scrollToServices}
              >
                اكتشف خدماتنا
                <ArrowLeft className="mr-2 h-5 w-5" />
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
                  className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                  loading={currentImageIndex < 3 ? "eager" : "lazy"}
                />
                
                {/* طبقة تدرج للنص */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* نص على الصورة */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">خدمات التخليص الجمركي</h3>
                  <p className="text-lg opacity-90">حلول شاملة ومتطورة لجميع احتياجاتكم التجارية</p>
                </div>
              </div>

              {/* أزرار التحكم */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={prevImage}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="الصورة السابقة"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="الصورة التالية"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>

              {/* زر التشغيل/الإيقاف */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={togglePlayPause}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label={isPlaying ? "إيقاف التشغيل التلقائي" : "تشغيل التشغيل التلقائي"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
              </div>

              {/* مؤشر التقدم */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"
                  style={{ 
                    width: `${((currentImageIndex + 1) / images.length) * 100}%` 
                  }}
                ></div>
              </div>

              {/* نقاط التنقل */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {images.slice(0, 5).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex % 5 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`الانتقال إلى الصورة ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* تأثيرات بصرية إضافية */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-700">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl font-bold text-blue-400 mb-2">2000+</div>
            <div className="text-gray-300">عميل راضي</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl font-bold text-green-400 mb-2">8000+</div>
            <div className="text-gray-300">معاملة مكتملة</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl font-bold text-purple-400 mb-2">5</div>
            <div className="text-gray-300">فروع ومواقع</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
            <div className="text-gray-300">سنة خبرة</div>
          </div>
        </div>
      </div>
    </section>
  );
}

