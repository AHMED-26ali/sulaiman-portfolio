import { Award, Clock, Users, Shield, TrendingUp, Heart, Zap, Target, CheckCircle, Star, Briefcase, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function WhyUs() {
  const reasons = [
    {
      icon: Award,
      title: "خبرة واسعة",
      description: "أكثر من 15 سنة من الخبرة في مجال التخليص الجمركي والترانزيت مع سجل حافل من النجاحات",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "سرعة في الإنجاز",
      description: "نضمن إنجاز معاملاتكم في أسرع وقت ممكن مع الحفاظ على أعلى معايير الدقة والجودة",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "فريق محترف",
      description: "فريق عمل مدرب ومؤهل من أفضل الخبراء في المجال مع شهادات معتمدة ومهارات متقدمة",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "موثوقية عالية",
      description: "نلتزم بأعلى معايير الأمان والموثوقية في جميع معاملاتنا مع ضمان حماية بياناتكم",
      color: "from-red-500 to-red-600"
    },
    {
      icon: TrendingUp,
      title: "أسعار تنافسية",
      description: "نقدم خدماتنا بأسعار مناسبة ومنافسة في السوق مع باقات مرنة تناسب جميع الاحتياجات",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Heart,
      title: "خدمة عملاء ممتازة",
      description: "دعم مستمر وخدمة عملاء متميزة على مدار الساعة مع استجابة سريعة لجميع الاستفسارات",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "تقنيات متطورة",
      description: "نستخدم أحدث التقنيات والأنظمة الرقمية لتسريع العمليات وضمان الدقة في التنفيذ",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Target,
      title: "دقة في التنفيذ",
      description: "نحرص على الدقة المطلقة في جميع الإجراءات مع مراجعة مستمرة لضمان عدم وجود أخطاء",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: CheckCircle,
      title: "ضمان الجودة",
      description: "نقدم ضمانات شاملة على جميع خدماتنا مع إمكانية المراجعة والتصحيح عند الحاجة",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Star,
      title: "سمعة ممتازة",
      description: "نتمتع بسمعة ممتازة في السوق مع تقييمات عالية من عملائنا وشراكات قوية مع الجهات الرسمية",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Briefcase,
      title: "خدمات شاملة",
      description: "نوفر جميع الخدمات المطلوبة في مكان واحد من التخليص إلى النقل والتأمين والاستشارات",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: Globe,
      title: "شبكة واسعة",
      description: "شبكة واسعة من الفروع والشراكات تغطي جميع المنافذ الحدودية والموانئ في المملكة",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/2 w-28 h-28 bg-white/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            لماذا تختارنا؟
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            نتميز بالعديد من المزايا التي تجعلنا الخيار الأمثل لخدمات التخليص الجمركي والترانزيت
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <CardContent className="p-6 text-center">
                <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${reason.color} rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-blue-300 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">1500+</div>
            <div className="text-gray-300">عميل راضي</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">5000+</div>
            <div className="text-gray-300">معاملة مكتملة</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">5</div>
            <div className="text-gray-300">فروع ومواقع</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-300">خدمة مستمرة</div>
          </div>
        </div>
      </div>
    </section>
  );
}