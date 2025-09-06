import { MapPin, Navigation, Building, Zap, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Branches() {
  const branches = [
    {
      name: "منفذ الدرة",
      type: "منفذ حدودي",
      description: "خدمات تخليص جمركي متكاملة في منفذ الدرة الحدودي مع فريق متخصص",
      icon: Navigation,
      features: ["تخليص سريع", "خدمة 24/7", "فريق متخصص"]
    },
    {
      name: "منفذ البطحاء",
      type: "منفذ حدودي",
      description: "تسهيل إجراءات التخليص الجمركي في منفذ البطحاء بأحدث التقنيات",
      icon: Navigation,
      features: ["تقنيات حديثة", "إجراءات مبسطة", "دعم فني"]
    },
    {
      name: "منفذ السلوي",
      type: "منفذ حدودي",
      description: "خدمات احترافية في منفذ السلوي للتجارة الحدودية والترانزيت",
      icon: Navigation,
      features: ["خدمات ترانزيت", "تجارة حدودية", "استشارات مجانية"]
    },
    {
      name: "جسر الملك فهد",
      type: "معبر دولي",
      description: "تخليص جمركي سريع وموثوق عبر جسر الملك فهد للتجارة الخليجية",
      icon: Building,
      features: ["تجارة خليجية", "إجراءات سريعة", "خبرة واسعة"]
    },
    {
      name: "ضبا",
      type: "المقر الرئيسي",
      description: "المقر الرئيسي ومركز العمليات الرئيسي في مدينة ضبا مع جميع الخدمات",
      icon: Building,
      isMain: true,
      features: ["مركز العمليات", "جميع الخدمات", "إدارة مركزية"]
    }
  ];

  return (
    <section id="branches" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            فروعنا ومواقعنا
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            نخدمكم من خلال شبكة واسعة من الفروع والمواقع الاستراتيجية في أهم المنافذ الحدودية
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 ${
                branch.isMain 
                  ? 'border-2 border-gradient-to-r from-blue-400 to-green-400 bg-gradient-to-br from-blue-800/50 to-green-800/50' 
                  : 'border-0 bg-white/10'
              } backdrop-blur-sm`}
            >
              <CardHeader className="text-center">
                <div className={`mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ${
                  branch.isMain 
                    ? 'bg-gradient-to-br from-blue-400 to-green-400 shadow-lg shadow-blue-500/50' 
                    : 'bg-gradient-to-br from-blue-500 to-green-500'
                }`}>
                  <branch.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {branch.name}
                </CardTitle>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  branch.isMain 
                    ? 'bg-gradient-to-r from-blue-400 to-green-400 text-white shadow-lg' 
                    : 'bg-blue-500/30 text-blue-200'
                }`}>
                  {branch.type}
                </div>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-300 leading-relaxed">{branch.description}</p>
                
                {/* Features */}
                <div className="space-y-2">
                  {branch.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2 space-x-reverse text-blue-200">
                      <Star className="h-3 w-3 text-yellow-400" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-2 space-x-reverse mt-4 text-green-300">
                  <Zap className="h-4 w-4 animate-pulse" />
                  <span className="text-sm font-medium">متاح للخدمة 24/7</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4">موقعنا الرئيسي</h3>
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-lg">
              <MapPin className="h-6 w-6 animate-bounce" />
              <span>المملكة العربية السعودية - تبوك - ضبا</span>
            </div>
            <p className="mt-4 text-blue-100">
              نخدمكم من موقعنا الاستراتيجي في مدينة ضبا بمنطقة تبوك
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}