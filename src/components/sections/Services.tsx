import { FileText, Truck, Ship, Plane, CheckCircle, Globe, Package, Clock, Shield, Users, Briefcase, MapPin, Calculator, Building, Zap, Target, Star, Award, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "التخليص الجمركي",
      description: "خدمات تخليص جمركي شاملة لجميع أنواع البضائع والمستندات المطلوبة",
      features: ["إنهاء إجراءات الاستيراد والتصدير", "تحضير المستندات الجمركية", "متابعة الشحنات"],
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Truck,
      title: "النقل والترانزيت",
      description: "خدمات نقل البضائع والترانزيت عبر جميع المنافذ الحدودية",
      features: ["نقل البضائع البرية", "خدمات الترانزيت", "التنسيق مع شركات الشحن"],
      color: "from-green-500 to-green-700"
    },
    {
      icon: Ship,
      title: "الشحن البحري",
      description: "تخليص البضائع الواردة عبر الموانئ البحرية بكفاءة عالية",
      features: ["تخليص الحاويات", "خدمات الموانئ", "التعامل مع البضائع الخاصة"],
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Plane,
      title: "الشحن الجوي",
      description: "خدمات تخليص سريعة للبضائع الجوية في المطارات الدولية",
      features: ["تخليص سريع", "البضائع الحساسة", "الشحنات العاجلة"],
      color: "from-red-500 to-red-700"
    },
    {
      icon: CheckCircle,
      title: "الاستشارات الجمركية",
      description: "استشارات متخصصة في القوانين والأنظمة الجمركية",
      features: ["استشارات قانونية", "تقييم الرسوم", "تحليل التعريفة الجمركية"],
      color: "from-yellow-500 to-yellow-700"
    },
    {
      icon: Globe,
      title: "التجارة الدولية",
      description: "دعم شامل لعمليات التجارة الدولية والاستيراد والتصدير",
      features: ["دراسة الأسواق", "تسهيل التجارة", "الشراكات التجارية"],
      color: "from-indigo-500 to-indigo-700"
    },
    {
      icon: Package,
      title: "تخليص البضائع الخاصة",
      description: "خدمات متخصصة لتخليص البضائع الحساسة والخاصة",
      features: ["المواد الطبية", "الأجهزة الإلكترونية", "المواد الغذائية"],
      color: "from-teal-500 to-teal-700"
    },
    {
      icon: Clock,
      title: "الخدمات العاجلة",
      description: "تخليص سريع للشحنات العاجلة والحساسة للوقت",
      features: ["تخليص خلال 24 ساعة", "متابعة مستمرة", "إنجاز فوري"],
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: Shield,
      title: "التأمين والضمان",
      description: "خدمات التأمين على البضائع وضمان سلامة الشحنات",
      features: ["تأمين شامل", "ضمان الجودة", "حماية من المخاطر"],
      color: "from-pink-500 to-pink-700"
    },
    {
      icon: Users,
      title: "خدمة العملاء",
      description: "دعم مستمر وخدمة عملاء متميزة على مدار الساعة",
      features: ["دعم 24/7", "استشارات مجانية", "متابعة شخصية"],
      color: "from-cyan-500 to-cyan-700"
    },
    {
      icon: Briefcase,
      title: "الخدمات القانونية",
      description: "استشارات قانونية متخصصة في القوانين التجارية والجمركية",
      features: ["استشارات قانونية", "حل النزاعات", "التمثيل القانوني"],
      color: "from-violet-500 to-violet-700"
    },
    {
      icon: MapPin,
      title: "خدمات التتبع",
      description: "نظام متقدم لتتبع الشحنات ومعرفة حالتها لحظة بلحظة",
      features: ["تتبع مباشر", "تحديثات فورية", "تقارير مفصلة"],
      color: "from-emerald-500 to-emerald-700"
    },
    {
      icon: Calculator,
      title: "حساب الرسوم الجمركية",
      description: "خدمة حساب دقيقة للرسوم والضرائب الجمركية المستحقة",
      features: ["حساب دقيق للرسوم", "تقدير التكاليف", "مقارنة الأسعار"],
      color: "from-slate-500 to-slate-700"
    },
    {
      icon: Building,
      title: "خدمات المستودعات",
      description: "إدارة وتشغيل المستودعات الجمركية والحرة",
      features: ["تخزين آمن", "إدارة المخزون", "خدمات التوزيع"],
      color: "from-amber-500 to-amber-700"
    },
    {
      icon: Zap,
      title: "التخليص الإلكتروني",
      description: "خدمات التخليص الجمركي الإلكتروني السريع والآمن",
      features: ["تخليص رقمي", "معالجة سريعة", "أمان عالي"],
      color: "from-lime-500 to-lime-700"
    },
    {
      icon: Target,
      title: "إدارة المخاطر",
      description: "تقييم وإدارة المخاطر في عمليات التجارة الدولية",
      features: ["تحليل المخاطر", "وضع استراتيجيات", "حلول وقائية"],
      color: "from-rose-500 to-rose-700"
    },
    {
      icon: Star,
      title: "خدمات VIP",
      description: "خدمات مميزة للعملاء المهمين مع أولوية في التنفيذ",
      features: ["خدمة مخصصة", "أولوية في التنفيذ", "مدير حساب مخصص"],
      color: "from-fuchsia-500 to-fuchsia-700"
    },
    {
      icon: Award,
      title: "التدريب والتأهيل",
      description: "برامج تدريبية متخصصة في التخليص الجمركي والتجارة الدولية",
      features: ["دورات متخصصة", "شهادات معتمدة", "تدريب عملي"],
      color: "from-sky-500 to-sky-700"
    },
    {
      icon: Heart,
      title: "الدعم الفني",
      description: "دعم فني متخصص لحل جميع المشاكل التقنية والإجرائية",
      features: ["دعم فوري", "حلول تقنية", "صيانة وقائية"],
      color: "from-emerald-500 to-teal-700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات التخليص الجمركي والترانزيت بأعلى معايير الجودة والاحترافية
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-4 bg-gradient-to-br ${service.color} rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-gray-300">
                      <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0 animate-pulse" />
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Interactive Elements */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-4">هل تحتاج خدمة مخصصة؟</h3>
            <p className="text-xl text-blue-100 mb-6">
              نقدم حلول مخصصة تناسب احتياجاتك الخاصة في التخليص الجمركي
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              تواصل معنا الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}