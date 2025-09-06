import { FileText, Truck, Ship, Plane, CheckCircle, Globe, Package, Clock, Shield, Users, Briefcase, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "التخليص الجمركي",
      description: "خدمات تخليص جمركي شاملة لجميع أنواع البضائع والمستندات المطلوبة",
      features: ["إنهاء إجراءات الاستيراد والتصدير", "تحضير المستندات الجمركية", "متابعة الشحنات"]
    },
    {
      icon: Truck,
      title: "النقل والترانزيت",
      description: "خدمات نقل البضائع والترانزيت عبر جميع المنافذ الحدودية",
      features: ["نقل البضائع البرية", "خدمات الترانزيت", "التنسيق مع شركات الشحن"]
    },
    {
      icon: Ship,
      title: "الشحن البحري",
      description: "تخليص البضائع الواردة عبر الموانئ البحرية بكفاءة عالية",
      features: ["تخليص الحاويات", "خدمات الموانئ", "التعامل مع البضائع الخاصة"]
    },
    {
      icon: Plane,
      title: "الشحن الجوي",
      description: "خدمات تخليص سريعة للبضائع الجوية في المطارات الدولية",
      features: ["تخليص سريع", "البضائع الحساسة", "الشحنات العاجلة"]
    },
    {
      icon: CheckCircle,
      title: "الاستشارات الجمركية",
      description: "استشارات متخصصة في القوانين والأنظمة الجمركية",
      features: ["استشارات قانونية", "تقييم الرسوم", "تحليل التعريفة الجمركية"]
    },
    {
      icon: Globe,
      title: "التجارة الدولية",
      description: "دعم شامل لعمليات التجارة الدولية والاستيراد والتصدير",
      features: ["دراسة الأسواق", "تسهيل التجارة", "الشراكات التجارية"]
    },
    {
      icon: Package,
      title: "تخليص البضائع الخاصة",
      description: "خدمات متخصصة لتخليص البضائع الحساسة والخاصة",
      features: ["المواد الطبية", "الأجهزة الإلكترونية", "المواد الغذائية"]
    },
    {
      icon: Clock,
      title: "الخدمات العاجلة",
      description: "تخليص سريع للشحنات العاجلة والحساسة للوقت",
      features: ["تخليص خلال 24 ساعة", "متابعة مستمرة", "إنجاز فوري"]
    },
    {
      icon: Shield,
      title: "التأمين والضمان",
      description: "خدمات التأمين على البضائع وضمان سلامة الشحنات",
      features: ["تأمين شامل", "ضمان الجودة", "حماية من المخاطر"]
    },
    {
      icon: Users,
      title: "خدمة العملاء",
      description: "دعم مستمر وخدمة عملاء متميزة على مدار الساعة",
      features: ["دعم 24/7", "استشارات مجانية", "متابعة شخصية"]
    },
    {
      icon: Briefcase,
      title: "الخدمات القانونية",
      description: "استشارات قانونية متخصصة في القوانين التجارية والجمركية",
      features: ["استشارات قانونية", "حل النزاعات", "التمثيل القانوني"]
    },
    {
      icon: MapPin,
      title: "خدمات التتبع",
      description: "نظام متقدم لتتبع الشحنات ومعرفة حالتها لحظة بلحظة",
      features: ["تتبع مباشر", "تحديثات فورية", "تقارير مفصلة"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-200/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-yellow-200/30 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات التخليص الجمركي والترانزيت بأعلى معايير الجودة والاحترافية
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-gray-700">
                      <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}