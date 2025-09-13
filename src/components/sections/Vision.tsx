import { Target, Eye, Lightbulb, Globe, Rocket, Heart, Star, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Vision() {
  const visionItems = [
    {
      icon: Eye,
      title: "رؤيتنا",
      description: "أن نكون الشركة الرائدة في مجال التخليص الجمركي والترانزيت في المملكة العربية السعودية، ونساهم في تسهيل التجارة الدولية وتطوير الاقتصاد الوطني من خلال تقديم خدمات عالية الجودة تتميز بالسرعة والدقة والموثوقية. نسعى لأن نكون الشريك الأول للتجار والمستوردين في تحقيق أهدافهم التجارية.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Target,
      title: "مهمتنا",
      description: "نلتزم بتقديم خدمات التخليص الجمركي والترانزيت بأعلى معايير الجودة والاحترافية، مع الحرص على تطبيق أحدث التقنيات والأنظمة لضمان سرعة الإنجاز ودقة العمل، وبناء علاقات طويلة الأمد مع عملائنا القائمة على الثقة والشفافية. نعمل على تبسيط الإجراءات وتوفير الوقت والجهد لعملائنا.",
      color: "from-green-500 to-green-700"
    },
    {
      icon: Lightbulb,
      title: "قيمنا",
      description: "الالتزام بالنزاهة والشفافية في جميع تعاملاتنا، والسعي المستمر للتطوير والابتكار، واحترام الوقت والمواعيد، وتقديم خدمة عملاء استثنائية، والمساهمة في تطوير المجتمع والاقتصاد المحلي. نؤمن بأهمية العمل الجماعي والتحسين المستمر في جميع عملياتنا.",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Globe,
      title: "أهدافنا",
      description: "توسيع شبكة خدماتنا لتشمل جميع المنافذ الحدودية في المملكة، وتطوير قدراتنا التقنية والبشرية، وبناء شراكات استراتيجية مع أهم الشركات في القطاع، والمساهمة في تطوير قطاع التجارة الخارجية في المملكة. نهدف إلى تحقيق رضا العملاء بنسبة 100% والحفاظ على مكانتنا الرائدة في السوق.",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: Rocket,
      title: "طموحاتنا المستقبلية",
      description: "نطمح إلى أن نصبح أول اسم يتبادر إلى الذهن عند الحديث عن التخليص الجمركي في المنطقة، وأن نساهم بشكل فعال في رؤية المملكة 2030 من خلال تطوير القطاع اللوجستي. نسعى لتطبيق الذكاء الاصطناعي في عملياتنا وتقديم خدمات رقمية متطورة تواكب التطور التقني العالمي.",
      color: "from-red-500 to-red-700"
    },
    {
      icon: Heart,
      title: "التزامنا الاجتماعي",
      description: "نؤمن بأهمية المسؤولية الاجتماعية ونلتزم بدعم المجتمع المحلي من خلال توفير فرص عمل للشباب السعودي، والمساهمة في برامج التدريب والتأهيل، ودعم المشاريع الخيرية والتنموية. نحرص على تطبيق أعلى معايير الاستدامة البيئية في جميع عملياتنا.",
      color: "from-pink-500 to-pink-700"
    },
    {
      icon: Star,
      title: "معايير التميز",
      description: "نلتزم بتطبيق أعلى معايير الجودة العالمية في جميع خدماتنا، ونحرص على التطوير المستمر لفريق العمل من خلال برامج التدريب المتخصصة والحصول على الشهادات المهنية المعتمدة. نسعى للحصول على شهادات الجودة الدولية مثل ISO لضمان تقديم أفضل الخدمات.",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      icon: Zap,
      title: "الابتكار والتطوير",
      description: "نستثمر بشكل مستمر في التقنيات الحديثة والأنظمة المتطورة لتحسين كفاءة عملياتنا وتقديم خدمات أسرع وأكثر دقة. نعمل على تطوير تطبيقات ذكية تمكن العملاء من متابعة معاملاتهم والحصول على التحديثات الفورية، ونسعى لتكون شركة رائدة في التحول الرقمي.",
      color: "from-teal-500 to-teal-700"
    }
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
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
            رؤيتنا ومهمتنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نؤمن بأهمية وضع رؤية واضحة ومهمة محددة لتحقيق أهدافنا في خدمة عملائنا وتطوير القطاع
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visionItems.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${item.color} rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-justify text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Vision Statement */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">التزامنا تجاه المستقبل</h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              نسعى لأن نكون جزءاً من رؤية المملكة 2030 في تطوير القطاع اللوجستي والتجاري، 
              ونعمل على تحقيق التميز في خدماتنا لنساهم في بناء اقتصاد قوي ومزدهر
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}