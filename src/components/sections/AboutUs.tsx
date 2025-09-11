import { Target, Eye, Heart, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: 'المصداقية',
      description: 'نلتزم بالوضوح والشفافية مع عملائنا وشركائنا'
    },
    {
      icon: Target,
      title: 'الكفاءة',
      description: 'نضمن تنفيذ الإجراءات بأعلى درجات الدقة والسرعة'
    },
    {
      icon: Eye,
      title: 'الابتكار',
      description: 'نسعى لتبني أحدث الحلول التقنية في الخدمات اللوجستية'
    },
    {
      icon: Users,
      title: 'الشراكة',
      description: 'نبني علاقات طويلة الأمد قائمة على الثقة والنجاح المتبادل'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">من نحن</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-right space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت، مؤسسة سعودية متخصصة في تقديم خدمات التخليص الجمركي ونقل البضائع (الترانزيت) عبر مختلف المنافذ البرية والبحرية والجوية في المملكة العربية السعودية.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              منذ تأسيسنا، وضعنا نصب أعيننا تسهيل حركة التجارة وتبسيط إجراءات الاستيراد والتصدير، من خلال خبراتنا الواسعة ومعرفتنا الدقيقة بالأنظمة الجمركية السعودية والدولية.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              نلتزم في مؤسسة سليمان الحويطي بتقديم حلول متكاملة وسريعة، تضمن وصول بضائع عملائنا بأمان وفي الوقت المحدد، مع الحرص على الشفافية والجودة في كل خطوة.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-right bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-blue-900 flex items-center justify-end">
                <Eye className="h-8 w-8 ml-3 text-blue-600" />
                رؤيتنا
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-right">
              <p className="text-gray-700 leading-relaxed">
                أن نكون الخيار الأول لشركاء الأعمال في مجال التخليص الجمركي والترانزيت، عبر توفير خدمات متطورة تواكب مستهدفات رؤية المملكة 2030 وتعزز مكانة المملكة كمركز لوجستي عالمي.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-right bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-green-900 flex items-center justify-end">
                <Target className="h-8 w-8 ml-3 text-green-600" />
                رسالتنا
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-right">
              <p className="text-gray-700 leading-relaxed">
                تقديم خدمات جمركية ولوجستية متكاملة، ترتكز على الدقة، السرعة، والاحترافية، بما يسهم في رفع كفاءة سلاسل الإمداد وتلبية تطلعات عملائنا.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">قيمنا</h3>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index} 
                className="group text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto p-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300 mb-4">
                    <IconComponent className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}