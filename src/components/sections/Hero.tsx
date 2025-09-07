import { ArrowLeft, Star, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const images = [
    "https://i.pinimg.com/1200x/c7/99/10/c799102f79aac7aba1762c9db3bae850.jpg",
    "https://i.pinimg.com/1200x/36/c9/85/36c985640937681da6c4523a2fa1cf5e.jpg",
    "https://i.pinimg.com/736x/27/98/a9/2798a95728d6c4475f8f3f4284e8d7d8.jpg",
    "https://i.pinimg.com/736x/b1/06/86/b1068640d04e24604769dc6130f21189.jpg",
    "https://i.pinimg.com/736x/7c/6b/76/7c6b768775fa08cbc03f19d42c3ff8a4.jpg",
    "https://i.pinimg.com/736x/7f/19/fd/7f19fd90ee55a370e0b552886a445838.jpg",
    "https://i.pinimg.com/736x/c8/22/3e/c8223e47ed75b5aafd4adb5f1bf7611c.jpg",
    "https://i.pinimg.com/736x/8c/fc/5a/8cfc5aa5a15efea60228f54ebc7d5e67.jpg",
    "https://i.pinimg.com/1200x/42/42/6f/42426f02b7f95d24e7e0de8a698512d1.jpg",
    "https://i.pinimg.com/1200x/66/83/a7/6683a7d84cc283a2dd62465bb794e1ba.jpg",
    "https://i.pinimg.com/1200x/0f/b9/2a/0fb92a8c4734f081262a2e8f467795ff.jpg",
    "https://i.pinimg.com/736x/22/4f/1a/224f1a4df591b86b6582aad0bb3b50b2.jpg"
  ];

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 text-white relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-blue-300 animate-fade-in-up">سليمان</span>
                <span className="block text-green-300 animate-fade-in-up animation-delay-300">الحويطي</span>
                <span className="block text-2xl md:text-3xl text-gray-300 mt-4 animate-fade-in-up animation-delay-500">
                  للتخليص الجمركي والترانزيت
                </span>
              </h1>
              
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

          {/* Images Gallery */}
          <div className="animate-fade-in-left">
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-2 ${
                    index % 3 === 0 ? 'animate-bounce' : 
                    index % 3 === 1 ? 'animate-pulse' : 'animate-ping'
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationDuration: index % 3 === 0 ? '3s' : index % 3 === 1 ? '2s' : '4s'
                  }}
                >
                  <img 
                    src={image} 
                    alt={`خدمات التخليص الجمركي ${index + 1}`}
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
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