import { Truck, Ship, Plane, FileText, Clock, Shield, Users, Globe, Package, Calculator, Building, Award, Heart, Lightbulb, Rocket, Settings, Phone, Zap, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "التخليص الجمركي الشامل",
      description: "خدمات تخليص جمركي متكاملة لجميع أنواع البضائع مع ضمان السرعة والدقة في الإنجاز"
    },
    {
      icon: Truck,
      title: "النقل البري والترانزيت",
      description: "خدمات نقل برية آمنة وسريعة مع تتبع مباشر للشحنات عبر جميع المنافذ الحدودية"
    },
    {
      icon: Ship,
      title: "الشحن البحري",
      description: "حلول شحن بحري اقتصادية للبضائع الثقيلة والحاويات مع خدمات تأمين شاملة"
    },
    {
      icon: Plane,
      title: "الشحن الجوي السريع",
      description: "خدمات شحن جوي عاجل للبضائع الحساسة والطبية مع ضمان الوصول في الوقت المحدد"
    },
    {
      icon: Clock,
      title: "خدمة 24/7",
      description: "فريق عمل متاح على مدار الساعة لضمان استمرارية الخدمة وحل أي مشكلة طارئة"
    },
    {
      icon: Shield,
      title: "التأمين الشامل",
      description: "حماية كاملة للبضائع ضد جميع المخاطر مع تغطية تأمينية شاملة وموثوقة"
    },
    {
      icon: Users,
      title: "الاستشارات التجارية",
      description: "خدمات استشارية متخصصة في التجارة الدولية والقوانين الجمركية لتوجيه عملائنا"
    },
    {
      icon: Globe,
      title: "التجارة الدولية",
      description: "تسهيل عمليات الاستيراد والتصدير مع جميع دول العالم وفقاً للمعايير الدولية"
    },
    {
      icon: Package,
      title: "إدارة المخازن",
      description: "خدمات تخزين آمنة ومنظمة مع أنظمة إدارة مخزون متطورة وتتبع دقيق"
    },
    {
      icon: Calculator,
      title: "حساب الرسوم الجمركية",
      description: "حساب دقيق للرسوم والضرائب الجمركية مع توضيح مفصل لجميع التكاليف"
    },
    {
      icon: Building,
      title: "خدمات الشركات",
      description: "حلول متكاملة للشركات الكبيرة والمتوسطة مع خطط خدمة مخصصة ومرنة"
    },
    {
      icon: Award,
      title: "ضمان الجودة",
      description: "التزام بأعلى معايير الجودة مع ضمان رضا العملاء وتقديم خدمة متميزة"
    },
    {
      icon: Heart,
      title: "خدمة العملاء المتميزة",
      description: "فريق خدمة عملاء مدرب على أعلى مستوى لتقديم الدعم والمساعدة الفورية"
    },
    {
      icon: Lightbulb,
      title: "الحلول المبتكرة",
      description: "تطوير حلول مبتكرة ومخصصة لتلبية احتياجات العملاء الخاصة والمعقدة"
    },
    {
      icon: Rocket,
      title: "التطوير المستمر",
      description: "استثمار مستمر في التكنولوجيا والتدريب لضمان تقديم أفضل الخدمات"
    },
    {
      icon: Settings,
      title: "الأتمتة والتقنية",
      description: "استخدام أحدث التقنيات والأنظمة الآلية لتسريع العمليات وتقليل الأخطاء"
    },
    {
      icon: Phone,
      title: "التواصل المباشر",
      description: "قنوات تواصل متعددة ومباشرة مع العملاء لضمان التواصل الفعال والسريع"
    },
    {
      icon: Zap,
      title: "السرعة في الإنجاز",
      description: "التزام بالمواعيد المحددة مع ضمان إنجاز المعاملات في أسرع وقت ممكن"
    },
    {
      icon: Target,
      title: "الدقة والاحترافية",
      description: "عمل دقيق ومحترف في جميع المعاملات مع اهتمام بأدق التفاصيل"
    },
    {
      icon: Globe,
      title: "الخدمات اللوجستية المتكاملة",
      description: "حلول لوجستية شاملة تشمل التخطيط والتنفيذ والمتابعة لسلسلة التوريد الكاملة مع تحسين التكاليف والأوقات"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-800 via-slate-900 to-zinc-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-yellow-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/2 w-28 h-28 bg-red-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-10 right-10 w-36 h-36 bg-indigo-500/20 rounded-full animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-400 to-slate-400 bg-clip-text text-transparent">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المتخصصة في التخليص الجمركي والنقل والشحن
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-slate-500 mx-auto mt-6 rounded-full animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-gray-600 to-slate-600 rounded-full w-fit group-hover:from-blue-500 group-hover:to-green-500 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-white group-hover:text-gray-300 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}