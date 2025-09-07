import { CheckCircle, Star, Shield, Clock, Users, Award, Zap, Globe, Heart, Lightbulb, Target, TrendingUp, Phone, Settings, Building, Truck, Calculator, Package, Rocket, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WhyUs() {
  const advantages = [
    {
      icon: Star,
      title: "خبرة تزيد عن 15 سنة",
      description: "خبرة واسعة ومتراكمة في مجال التخليص الجمركي والشحن الدولي"
    },
    {
      icon: Shield,
      title: "موثوقية وأمان عالي",
      description: "ضمان سلامة البضائع وحفظ حقوق العملاء بأعلى معايير الأمان"
    },
    {
      icon: Clock,
      title: "خدمة 24/7 طوال العام",
      description: "فريق عمل متاح على مدار الساعة لضمان استمرارية الخدمة"
    },
    {
      icon: Users,
      title: "فريق متخصص ومدرب",
      description: "كوادر مؤهلة ومدربة على أحدث الأنظمة والقوانين الجمركية"
    },
    {
      icon: Award,
      title: "جودة معتمدة ومضمونة",
      description: "التزام بأعلى معايير الجودة مع ضمان رضا العملاء"
    },
    {
      icon: Zap,
      title: "سرعة في الإنجاز",
      description: "إنجاز المعاملات في أسرع وقت ممكن مع الحفاظ على الدقة"
    },
    {
      icon: Globe,
      title: "شبكة عالمية واسعة",
      description: "علاقات قوية مع شركاء دوليين في جميع أنحاء العالم"
    },
    {
      icon: Heart,
      title: "خدمة عملاء متميزة",
      description: "اهتمام شخصي بكل عميل وتقديم الدعم الكامل"
    },
    {
      icon: Lightbulb,
      title: "حلول مبتكرة ومرنة",
      description: "تطوير حلول مخصصة لتلبية احتياجات كل عميل"
    },
    {
      icon: Target,
      title: "دقة في التنفيذ",
      description: "اهتمام بأدق التفاصيل لضمان تنفيذ مثالي للمعاملات"
    },
    {
      icon: TrendingUp,
      title: "تطوير مستمر",
      description: "استثمار مستمر في التكنولوجيا والتدريب لتحسين الخدمات"
    },
    {
      icon: Phone,
      title: "تواصل مباشر وسهل",
      description: "قنوات تواصل متعددة لضمان الوصول السريع والمباشر"
    },
    {
      icon: Settings,
      title: "أنظمة متطورة",
      description: "استخدام أحدث التقنيات والأنظمة الإلكترونية المتطورة"
    },
    {
      icon: Building,
      title: "مواقع استراتيجية",
      description: "فروع في أهم المواقع والمنافذ الحدودية الرئيسية"
    },
    {
      icon: Truck,
      title: "أسطول نقل حديث",
      description: "أسطول متطور من وسائل النقل المجهزة بأحدث التقنيات"
    },
    {
      icon: Calculator,
      title: "أسعار تنافسية",
      description: "أسعار عادلة ومنافسة مع شفافية كاملة في التكاليف"
    },
    {
      icon: Package,
      title: "تنوع في الخدمات",
      description: "مجموعة شاملة من الخدمات تلبي جميع احتياجات العملاء"
    },
    {
      icon: CheckCircle,
      title: "سجل نجاح مميز",
      description: "تاريخ حافل بالنجاحات وآلاف العملاء الراضين عن خدماتنا"
    },
    {
      icon: Rocket,
      title: "رؤية مستقبلية طموحة",
      description: "خطط توسع استراتيجية لتطوير الخدمات ومواكبة رؤية المملكة 2030 في تطوير القطاع اللوجستي"
    },
    {
      icon: FileText,
      title: "شفافية كاملة في المعاملات",
      description: "توثيق دقيق لجميع العمليات مع تقارير مفصلة وشفافية كاملة في التعامل مع العملاء وتقديم المعلومات"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-10 right-10 w-36 h-36 bg-white/10 rounded-full animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            لماذا تختارنا؟
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            نتميز بالعديد من المزايا التي تجعلنا الخيار الأمثل لخدمات التخليص الجمركي
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-purple-200 text-sm leading-relaxed group-hover:text-white transition-colors">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}