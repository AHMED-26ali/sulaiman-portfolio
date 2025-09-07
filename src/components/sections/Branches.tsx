import { MapPin, Building, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Branches() {
  const branches = [
    {
      name: "منفذ الدرة",
      location: "المنطقة الشرقية - الدرة",
      description: "منفذ حدودي استراتيجي يخدم التجارة مع دول الخليج العربي",
      services: ["التخليص الجمركي", "الترانزيت", "الشحن البري"],
      hours: "24/7",
      staff: "8+ موظف"
    },
    {
      name: "منفذ ضبا",
      location: "تبوك - ضبا",
      description: "المنفذ الرئيسي للتجارة البحرية مع مصر والأردن",
      services: ["التخليص الجمركي", "الشحن البحري", "الترانزيت"],
      hours: "24/7",
      staff: "15+ موظف"
    },
    {
      name: "منفذ السلوي",
      location: "الحدود الشمالية - السلوي",
      description: "منفذ حدودي مهم للتجارة مع العراق والدول الشمالية",
      services: ["التخليص الجمركي", "النقل البري", "الترانزيت"],
      hours: "24/7",
      staff: "10+ موظف"
    },
    {
      name: "جسر الملك فهد",
      location: "المنطقة الشرقية - الخبر",
      description: "الجسر الرابط مع البحرين ومنفذ حيوي للتجارة الخليجية",
      services: ["التخليص الجمركي", "النقل البري", "الخدمات السريعة"],
      hours: "24/7",
      staff: "12+ موظف"
    },
    {
      name: "منفذ البطحاء",
      location: "الرياض - البطحاء",
      description: "منفذ جوي مهم يخدم العاصمة والمنطقة الوسطى",
      services: ["التخليص الجمركي", "الشحن الجوي", "الخدمات العاجلة"],
      hours: "24/7",
      staff: "14+ موظف"
    }
  ];

  return (
    <section id="branches" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            فروعنا ومواقعنا
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            شبكة واسعة من الفروع في أهم المنافذ الحدودية الاستراتيجية لخدمتكم
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {branch.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 space-x-reverse text-blue-200">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{branch.location}</span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {branch.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-white text-sm">الخدمات المتاحة:</h4>
                  <div className="flex flex-wrap gap-1">
                    {branch.services.map((service, idx) => (
                      <span key={idx} className="bg-blue-500/30 text-blue-200 px-2 py-1 rounded-full text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center space-x-2 space-x-reverse text-green-300">
                    <Clock className="h-3 w-3" />
                    <span>{branch.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse text-purple-300">
                    <Users className="h-3 w-3" />
                    <span>{branch.staff}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}