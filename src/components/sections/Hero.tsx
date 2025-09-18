import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeBackground from '@/components/effects/ThreeBackground';

export default function Hero() {
  // مصفوفة الصور عالية الجودة
  const images = [
    // صور عالية الجودة للتخليص الجمركي والترانزيت
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1578662015974-3e512eeaf1ef?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1578662018446-dc2e0c6dfa86?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1578662015974-3e512eeaf1ef?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1578662018446-dc2e0c6dfa86?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1578662015974-3e512eeaf1ef?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1578662018446-dc2e0c6dfa86?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1578662015974-3e512eeaf1ef?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1578662018446-dc2e0c6dfa86?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&h=1600&fit=crop&crop=center&q=90",
    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&h=1600&fit=crop&crop=center&q=90"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // التمرير التلقائي للصور - بدون إيقاف
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // تغيير الصورة كل 3 ثوانٍ

    return () => clearInterval(interval);
  }, [images.length]);

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-right">
                <span className="block text-white mb-2">
                  سليمان الحويطي
                </span>
                <span className="block text-green-400">
                  للتخليص الجمركي والترانزيت
                </span>
              </h1>

              {/* العنوان الفرعي - بسيط */}
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed text-center lg:text-right">
                مؤسسة رائدة في خدمات التخليص الجمركي والترانزيت في المملكة العربية السعودية
              </h2>
              
              {/* الوصف - بسيط */}
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed text-center lg:text-right">
                نقدم خدمات التخليص الجمركي والترانزيت بأعلى معايير الجودة والاحترافية في جميع أنحاء المملكة
              </p>

              {/* Features - بسيط */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 space-x-reverse bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/30">
                  <Star className="h-6 w-6 text-blue-400" />
                  <span className="font-semibold text-white">خبرة +15 سنة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-purple-500/20 backdrop-blur-sm rounded-xl p-4 hover:bg-purple-500/30 transition-all duration-300 border border-purple-400/30">
                  <Zap className="h-6 w-6 text-purple-400" />
                  <span className="font-semibold text-white">خدمة 24/7</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-orange-500/20 backdrop-blur-sm rounded-xl p-4 hover:bg-orange-500/30 transition-all duration-300 border border-orange-400/30">
                  <Shield className="h-6 w-6 text-orange-400" />
                  <span className="font-semibold text-white">موثوقية عالية</span>
                </div>
              </div>
            </div>

            {/* Action Button - بسيط */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleDiscoverServices}
              >
                <span className="flex items-center">
                  اكتشف خدماتنا
                  <ArrowLeft className="mr-3 h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>

          {/* شاشة عرض الصور على شكل هاتف - حجم أكبر مع جودة عالية */}
          <div className="animate-fade-in-left flex justify-center">
            <div className="relative">
              {/* إطار الهاتف - حجم أكبر */}
              <div className="relative bg-gray-900 rounded-[4rem] p-4 shadow-2xl border-4 border-gray-800">
                {/* الشاشة - حجم أكبر */}
                <div className="relative w-96 h-[700px] bg-black rounded-[3rem] overflow-hidden">
                  {/* الصورة الحالية - جودة عالية */}
                  <div className="relative w-full h-full">
                    <img
                      src={images[currentImageIndex]}
                      alt={`خدمات التخليص الجمركي والترانزيت - مؤسسة سليمان الحويطي ${currentImageIndex + 1}`}
                      title={`خدمات التخليص الجمركي والترانزيت في السعودية - صورة ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                      loading={currentImageIndex < 3 ? "eager" : "lazy"}
                      style={{
                        imageRendering: 'high-quality',
                        WebkitImageSmoothing: true,
                        imageSmoothing: true
                      }}
                    />
                  </div>

                  {/* مؤشر التقدم فقط */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                    <div 
                      className="h-full bg-green-500 transition-all duration-300"
                      style={{ 
                        width: `${((currentImageIndex + 1) / images.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>

                {/* الكاميرا الأمامية */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full"></div>
                
                {/* السماعة */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 translate-x-10 w-10 h-1.5 bg-gray-800 rounded-full"></div>
              </div>

              {/* تأثيرات الوهج حول الهاتف */}
              <div className="absolute -inset-6 bg-gradient-to-r from-green-400/10 via-blue-500/10 to-purple-400/10 rounded-[5rem] blur-2xl opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Stats Section - بسيط */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-emerald-500/30 transition-all duration-300 border border-emerald-400/30">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">2000+</div>
            <div className="text-sm font-medium text-gray-300">عميل راضي</div>
          </div>
          <div className="text-center bg-violet-500/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-violet-500/30 transition-all duration-300 border border-violet-400/30">
            <div className="text-3xl md:text-4xl font-bold text-violet-400 mb-2">8000+</div>
            <div className="text-sm font-medium text-gray-300">معاملة مكتملة</div>
          </div>
          <div className="text-center bg-amber-500/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-amber-500/30 transition-all duration-300 border border-amber-400/30">
            <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">5</div>
            <div className="text-sm font-medium text-gray-300">فروع ومواقع</div>
          </div>
          <div className="text-center bg-rose-500/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-rose-500/30 transition-all duration-300 border border-rose-400/30">
            <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">15+</div>
            <div className="text-sm font-medium text-gray-300">سنة خبرة</div>
          </div>
        </div>
      </div>
    </section>
  );
}