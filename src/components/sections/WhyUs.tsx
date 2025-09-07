import { Award, Clock, Users, Shield, TrendingUp, Heart, Zap, Target, CheckCircle, Star, Briefcase, Globe, Lightbulb, Rocket, Building, Phone, Mail, Settings } from 'lucide-react';
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
    },
    {
      icon: Lightbulb,
      title: "حلول إبداعية",
      description: "نقدم حلول إبداعية ومبتكرة لجميع التحديات في مجال التخليص الجمركي والتجارة الدولية",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Rocket,
      title: "نمو مستمر",
      description: "نسعى للنمو والتطوير المستمر لمواكبة أحدث التطورات في قطاع التخليص الجمركي",
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: Building,
      title: "بنية تحتية قوية",
      description: "نمتلك بنية تحتية قوية ومتطورة تدعم جميع عملياتنا وتضمن استمرارية الخدمة",
      color: "from-slate-500 to-slate-600"
    },
    {
      icon: Phone,
      title: "تواصل مستمر",
      description: "نحافظ على تواصل مستمر مع عملائنا ونقدم تحديثات دورية حول حالة معاملاتهم",
      color: "from-lime-500 to-lime-600"
    },
    {
      icon: Mail,
      title: "شفافية كاملة",
      description: "نلتزم بالشفافية الكاملة في جميع تعاملاتنا ونقدم تقارير مفصلة عن جميع الخدمات",
      color: "from-sky-500 to-sky-600"
    },
    {
      icon: Settings,
      title: "مرونة في الخدمة",
      description: "نقدم خدمات مرنة تتكيف مع احتياجات كل عميل ومتطلبات كل نوع من أنواع البضائع",
      color: "from-fuchsia-500 to-fuchsia-600"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/2 w-28 h-28 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-10 right-10 w-36 h-36 bg-white/10 rounded-full animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            لماذا تختارنا؟
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            نتميز بالعديد من المزايا التي تجعلنا الخيار الأمثل لخدمات التخليص الجمركي والترانزيت
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-6 rounded-full animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-2 hover:shadow-2xl overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardContent className="p-6 text-center">
                <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${reason.color} rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-purple-300 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl font-bold text-purple-400 mb-2 animate-pulse">2500+</div>
            <div className="text-gray-300">عميل راضي</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl font-bold text-blue-400 mb-2 animate-pulse">10000+</div>
            <div className="text-gray-300">معاملة مكتملة</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl font-bold text-indigo-400 mb-2 animate-pulse">5</div>
            <div className="text-gray-300">فروع ومواقع</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl font-bold text-cyan-400 mb-2 animate-pulse">24/7</div>
            <div className="text-gray-300">خدمة مستمرة</div>
          </div>
        </div>
      </div>
    </section>
  );
}