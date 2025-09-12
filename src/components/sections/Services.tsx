import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Truck, 
  FileText, 
  Globe, 
  Shield, 
  Clock, 
  Users, 
  Package, 
  MapPin,
  CheckCircle,
  Zap,
  Award,
  Target,
  Briefcase,
  Ship,
  Plane,
  Building,
  Calculator,
  Phone,
  Mail,
  Settings
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "التخليص الجمركي للاستيراد",
      description: "خدمات شاملة للتخليص الجمركي لجميع أنواع البضائع المستوردة",
      features: ["إجراءات سريعة", "أسعار تنافسية", "خبرة واسعة"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "التخليص الجمركي للتصدير", 
      description: "تسهيل إجراءات تصدير البضائع إلى جميع أنحاء العالم",
      features: ["وثائق معتمدة", "متابعة دقيقة", "ضمان الجودة"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "خدمات الترانزيت",
      description: "نقل البضائع عبر الحدود بأمان وسرعة عالية",
      features: ["تتبع مباشر", "أمان عالي", "توصيل سريع"],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "خدمات التخزين",
      description: "مستودعات آمنة ومجهزة بأحدث التقنيات",
      features: ["مراقبة 24/7", "تأمين شامل", "مساحات متنوعة"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: <Ship className="w-8 h-8" />,
      title: "الشحن البحري",
      description: "خدمات الشحن البحري لجميع أنواع البضائع",
      features: ["حاويات متخصصة", "تأمين البضائع", "جدولة منتظمة"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "الشحن الجوي",
      description: "شحن سريع وآمن عبر الطيران للبضائع العاجلة",
      features: ["سرعة عالية", "أمان مضمون", "تتبع فوري"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "الخدمات اللوجستية",
      description: "حلول لوجستية متكاملة لسلسلة التوريد",
      features: ["إدارة المخزون", "تحسين التكاليف", "كفاءة عالية"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "حساب الرسوم الجمركية",
      description: "حساب دقيق للرسوم والضرائب الجمركية",
      features: ["حسابات دقيقة", "شفافية كاملة", "توفير التكاليف"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "التأمين على البضائع",
      description: "حماية شاملة للبضائع ضد جميع المخاطر",
      features: ["تغطية شاملة", "تعويض سريع", "أسعار مناسبة"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "الاستشارات الجمركية",
      description: "استشارات متخصصة في القوانين والإجراءات الجمركية",
      features: ["خبراء معتمدون", "نصائح قيمة", "حلول مبتكرة"],
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "إعداد الوثائق",
      description: "إعداد وتجهيز جميع الوثائق المطلوبة للشحن",
      features: ["دقة عالية", "سرعة في التنفيذ", "اعتماد رسمي"],
      color: "from-slate-500 to-gray-500",
      bgColor: "bg-slate-50",
      iconColor: "text-slate-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "تتبع الشحنات",
      description: "نظام تتبع متطور لمراقبة الشحنات لحظة بلحظة",
      features: ["تتبع مباشر", "إشعارات فورية", "تقارير مفصلة"],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "الخدمات العاجلة",
      description: "خدمات سريعة للشحنات العاجلة والحساسة للوقت",
      features: ["أولوية قصوى", "معالجة فورية", "ضمان الوقت"],
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "حلول مخصصة",
      description: "حلول مصممة خصيصاً لتلبية احتياجات العملاء",
      features: ["تصميم مخصص", "مرونة عالية", "خدمة شخصية"],
      color: "from-lime-500 to-green-500",
      bgColor: "bg-lime-50",
      iconColor: "text-lime-600"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "إدارة سلسلة التوريد",
      description: "إدارة شاملة لسلسلة التوريد من المصدر للوجهة",
      features: ["تحسين العمليات", "خفض التكاليف", "زيادة الكفاءة"],
      color: "from-sky-500 to-blue-500",
      bgColor: "bg-sky-50",
      iconColor: "text-sky-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "ضمان الجودة",
      description: "ضمان أعلى معايير الجودة في جميع الخدمات",
      features: ["معايير دولية", "فحص دقيق", "تحسين مستمر"],
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "الدعم الفني",
      description: "دعم فني متخصص على مدار الساعة",
      features: ["دعم 24/7", "خبراء متخصصون", "حلول سريعة"],
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "التكامل التقني",
      description: "ربط الأنظمة وتكامل العمليات إلكترونياً",
      features: ["أنظمة متطورة", "تكامل سلس", "أتمتة العمليات"],
      color: "from-fuchsia-500 to-purple-500",
      bgColor: "bg-fuchsia-50",
      iconColor: "text-fuchsia-600"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "التقارير والتحليلات",
      description: "تقارير مفصلة وتحليلات لتحسين الأداء",
      features: ["تقارير دورية", "تحليل البيانات", "رؤى قيمة"],
      color: "from-stone-500 to-slate-500",
      bgColor: "bg-stone-50",
      iconColor: "text-stone-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "الخدمات الرقمية",
      description: "منصة رقمية متطورة لإدارة جميع العمليات",
      features: ["واجهة سهلة", "عمليات رقمية", "وصول آمن"],
      color: "from-neutral-500 to-gray-500",
      bgColor: "bg-neutral-50",
      iconColor: "text-neutral-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Animated waves */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-3/4 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-bounce animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-ping animation-delay-3000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent mb-4 animate-pulse">
            خدماتنا المتخصصة
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-500">
            نقدم مجموعة شاملة من الخدمات المتخصصة في مجال التخليص الجمركي والترانزيت
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full animate-bounce"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 hover:rotate-1 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden animate-fadeInUp`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4 relative">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce`}>
                  {service.icon}
                </div>
                <CardTitle className={`text-lg font-bold mt-4 ${service.iconColor} group-hover:text-gray-800 transition-colors animate-pulse`}>
                  {service.title}
                </CardTitle>
                
                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 rounded-lg transition-all duration-500"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-800 transition-colors">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <Badge 
                      key={featureIndex}
                      variant="secondary" 
                      className={`text-xs ${service.iconColor} bg-white/70 hover:bg-white transition-all duration-300 transform hover:scale-110 animate-fadeInUp`}
                      style={{ animationDelay: `${(index * 100) + (featureIndex * 50)}ms` }}
                    >
                      <CheckCircle className="w-3 h-3 mr-1 animate-spin" />
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fadeInUp animation-delay-2000">
            <h3 className="text-2xl font-bold mb-4 animate-bounce">لماذا تختار خدماتنا؟</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3 space-x-reverse transform hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-yellow-300 animate-spin" />
                <span className="font-semibold">خبرة أكثر من 15 سنة</span>
              </div>
              <div className="flex items-center justify-center space-x-3 space-x-reverse transform hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-green-300 animate-pulse" />
                <span className="font-semibold">ضمان الجودة والأمان</span>
              </div>
              <div className="flex items-center justify-center space-x-3 space-x-reverse transform hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-blue-300 animate-bounce" />
                <span className="font-semibold">خدمة سريعة ومتاحة 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}