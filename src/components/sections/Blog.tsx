import { BookOpen, FileText, Globe, TrendingUp, Shield, Users, Zap, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Blog() {
  const blogPosts = [
    {
      icon: FileText,
      title: "دليل شامل للتخليص الجمركي في المملكة العربية السعودية",
      content: "التخليص الجمركي هو عملية معقدة تتطلب خبرة ومعرفة عميقة بالقوانين واللوائح. يشمل التخليص الجمركي عدة خطوات أساسية: تحضير المستندات المطلوبة مثل الفاتورة التجارية وبوليصة الشحن وشهادة المنشأ، تقديم الإقرار الجمركي الإلكتروني، دفع الرسوم والضرائب المستحقة، والحصول على الإذن بالإفراج عن البضائع. نحن في مكتب سليمان الحويطي نقدم خدمات شاملة تشمل جميع هذه الخطوات بكفاءة عالية وسرعة في الإنجاز.",
      category: "إرشادات",
      readTime: "5 دقائق",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Globe,
      title: "أهمية خدمات الترانزيت في التجارة الدولية",
      content: "خدمات الترانزيت تلعب دوراً حيوياً في تسهيل التجارة الدولية، حيث تسمح بمرور البضائع عبر أراضي دولة ما دون دفع رسوم جمركية. هذا النظام يوفر مرونة كبيرة للتجار ويقلل من التكاليف والوقت. في المملكة العربية السعودية، تتميز خدمات الترانزيت بالكفاءة العالية والتقنيات المتطورة. نحن نقدم خدمات ترانزيت شاملة تشمل التنسيق مع الجهات المختصة، تحضير المستندات، ومتابعة الشحنات حتى وصولها لوجهتها النهائية.",
      category: "تجارة دولية",
      readTime: "7 دقائق",
      color: "from-green-500 to-green-700"
    },
    {
      icon: Shield,
      title: "التطورات الجديدة في الأنظمة الجمركية السعودية",
      content: "شهدت الأنظمة الجمركية في المملكة تطورات كبيرة في السنوات الأخيرة، منها تطبيق نظام فسح الإلكتروني، وتبسيط الإجراءات، واستخدام التقنيات الحديثة مثل الذكاء الاصطناعي في فحص البضائع. هذه التطورات تهدف إلى تسريع عمليات التخليص وتقليل الأخطاء البشرية. كما تم تطوير منصات إلكترونية متقدمة تسمح بتتبع الشحنات والحصول على التحديثات الفورية. نحن نواكب جميع هذه التطورات ونستخدم أحدث الأنظمة لضمان خدمة متميزة لعملائنا.",
      category: "أنظمة وقوانين",
      readTime: "6 دقائق",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Target,
      title: "كيفية تجنب الأخطاء الشائعة في التخليص الجمركي",
      content: "هناك أخطاء شائعة يقع فيها المستوردون والمصدرون، مثل عدم دقة البيانات في الإقرار الجمركي، عدم تطابق الفاتورة مع البضائع الفعلية، أو عدم الحصول على التراخيص المطلوبة. هذه الأخطاء قد تؤدي إلى تأخير الشحنات أو فرض غرامات إضافية. لتجنب هذه المشاكل، ننصح بالتأكد من دقة جميع المستندات، الحصول على التراخيص المطلوبة مسبقاً، والتعامل مع مكاتب تخليص معتمدة وذات خبرة. فريقنا المتخصص يراجع جميع المستندات بعناية فائقة لضمان عدم وجود أخطاء.",
      category: "نصائح",
      readTime: "4 دقائق",
      color: "from-red-500 to-red-700"
    },
    {
      icon: Zap,
      title: "مستقبل التجارة الإلكترونية والتخليص الجمركي",
      content: "التجارة الإلكترونية تنمو بسرعة كبيرة وتؤثر على قطاع التخليص الجمركي بطرق متعددة. الشحنات الصغيرة والمتكررة تتطلب أنظمة تخليص أكثر مرونة وسرعة. التقنيات الحديثة مثل البلوك تشين والذكاء الاصطناعي ستلعب دوراً كبيراً في تطوير هذا القطاع. نتوقع أن نرى المزيد من الأتمتة في العمليات، وتطوير أنظمة تخليص فورية للشحنات الصغيرة. نحن نستثمر في هذه التقنيات لنكون جاهزين لمستقبل التجارة الإلكترونية.",
      category: "مستقبل القطاع",
      readTime: "8 دقائق",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      icon: TrendingUp,
      title: "الاتفاقيات التجارية الدولية وأثرها على التخليص",
      content: "الاتفاقيات التجارية الدولية مثل اتفاقية التجارة الحرة الخليجية واتفاقيات منظمة التجارة العالمية تؤثر بشكل كبير على إجراءات التخليص الجمركي. هذه الاتفاقيات تهدف إلى تسهيل التجارة وتقليل الحواجز الجمركية. بعض البضائع تحصل على إعفاءات جمركية أو تخفيضات في الرسوم بموجب هذه الاتفاقيات. من المهم فهم هذه الاتفاقيات والاستفادة منها لتقليل التكاليف. فريقنا متخصص في تطبيق هذه الاتفاقيات وضمان حصول عملائنا على جميع المزايا المتاحة.",
      category: "اتفاقيات دولية",
      readTime: "10 دقائق",
      color: "from-indigo-500 to-indigo-700"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-zinc-900 text-white relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-400 to-zinc-400 bg-clip-text text-transparent">
            مدونتنا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اطلع على آخر المقالات والأخبار في مجال التخليص الجمركي والتجارة الدولية
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-zinc-500 mx-auto mt-6 rounded-full animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <span className="bg-slate-700 text-slate-200 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center space-x-1 space-x-reverse">
                    <BookOpen className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse mb-3">
                  <div className={`p-2 bg-gradient-to-r ${post.color} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <post.icon className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-white group-hover:text-slate-300 transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 text-sm leading-relaxed text-justify group-hover:text-white transition-colors">
                  {post.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}