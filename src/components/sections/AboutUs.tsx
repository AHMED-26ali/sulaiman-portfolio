import { Target, Eye, Heart, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutUs() {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'المصداقية',
      description: 'نلتزم بالوضوح والشفافية مع عملائنا وشركائنا'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'الكفاءة',
      description: 'نضمن تنفيذ الإجراءات بأعلى درجات الدقة والسرعة'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'الابتكار',
      description: 'نسعى لتبني أحدث الحلول التقنية في الخدمات اللوجستية'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'الشراكة',
      description: 'نبني علاقات طويلة الأمد قائمة على الثقة والنجاح المتبادل'
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* من نحن */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">من نحن</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت، مؤسسة سعودية متخصصة في تقديم خدمات التخليص الجمركي ونقل البضائع (الترانزيت) عبر مختلف المنافذ البرية والبحرية والجوية في المملكة العربية السعودية.
            </p>
            <p>
              منذ تأسيسنا، وضعنا نصب أعيننا تسهيل حركة التجارة وتبسيط إجراءات الاستيراد والتصدير، من خلال خبراتنا الواسعة ومعرفتنا الدقيقة بالأنظمة الجمركية السعودية والدولية.
            </p>
            <p>
              نلتزم في مؤسسة سليمان الحويطي بتقديم حلول متكاملة وسريعة، تضمن وصول بضائع عملائنا بأمان وفي الوقت المحدد، مع الحرص على الشفافية والجودة في كل خطوة.
            </p>
          </div>
        </div>

        {/* الرؤية والرسالة */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* الرؤية */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full text-blue-600 w-fit">
                <Eye className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">رؤيتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-center">
                أن نكون الخيار الأول لشركاء الأعمال في مجال التخليص الجمركي والترانزيت، عبر توفير خدمات متطورة تواكب مستهدفات رؤية المملكة 2030 وتعزز مكانة المملكة كمركز لوجستي عالمي.
              </p>
            </CardContent>
          </Card>

          {/* الرسالة */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 p-4 bg-green-100 rounded-full text-green-600 w-fit">
                <Target className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">رسالتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-center">
                تقديم خدمات جمركية ولوجستية متكاملة، ترتكز على الدقة، السرعة، والاحترافية، بما يسهم في رفع كفاءة سلاسل الإمداد وتلبية تطلعات عملائنا.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* القيم */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">قيمنا</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 w-fit">
                  {value.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}