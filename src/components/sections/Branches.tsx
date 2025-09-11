import { MapPin, Ship, Truck, Plane } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Branches() {
  const branches = [
    {
      name: 'فرع ضبا',
      description: 'يقع على الساحل الغربي للمملكة العربية السعودية، ضمن محافظة ضبا في منطقة تبوك، ويبعد حوالي 35 كم غرب المحافظة. أقرب ميناء سعودي إلى قناة السويس ودول حوض البحر المتوسط؛ حيث المسافة حوالي 253 بحريّة إلى قناة السويس، ويُعد نقطة عبور مميزة لسفن التجارة العالمية.',
      icon: Ship,
      location: 'محافظة ضبا - منطقة تبوك',
      type: 'ميناء بحري'
    },
    {
      name: 'فرع الدرة',
      description: 'يقع في محافظة حقل، شمال منطقة تبوك، على خليج العقبة، ويبعد حوالي 11 كم عن محافظة حقل السعودية. يربط السعودية مع الأردن؛ المنفذ هو أحد المعابر الوظيفية بينهم، ويُستخدم لحركة الركاب والشحن البري.',
      icon: Truck,
      location: 'محافظة حقل - منطقة تبوك',
      type: 'منفذ بري'
    },
    {
      name: 'فرع السلوي',
      description: 'في الجزء الشرقي من المملكة، محافظة العديد، وهو المنفذ البري الوحيد مع دولة قطر. يبعد عن الرياض نحو 460 كم، وعن الدوحة نحو 90 كم.',
      icon: Truck,
      location: 'محافظة العديد - المنطقة الشرقية',
      type: 'منفذ بري'
    },
    {
      name: 'جسر الملك فهد',
      description: 'جسر بحري بطول حوالي 25 كيلومترًا وعرض حوالي 23.2 مترًا، يربط بين مدينة الخبر السعودية وجزيرة الجسرة في مملكة البحرين. يسهل الحركة البرية بين البلدين، ويساهم في التجارة، السياحة، والزيارات العائلية، كما يعتبر إنجازًا هندسيًا له أثر اقتصادي واجتماعي كبير في الخليج.',
      icon: Ship,
      location: 'الخبر - المنطقة الشرقية',
      type: 'جسر بحري'
    },
    {
      name: 'فرع البطحاء',
      description: 'يقع في محافظة العديد بالمنطقة الشرقية، هو المنفذ البري الوحيد مع دولة الإمارات العربية المتحدة. يبعد عن الرياض حوالي 450-500 كم، وعن أبوظبي حوالي 350-370 كم تقريبًا. يعتبر حلقة وصل بريّة رئيسية بين السعودية والإمارات، له دور كبير في التجارة البينية وحركة الأشخاص، ويعمل على تخفيف الضغط على المنافذ الأخرى في المنطقة الشرقية.',
      icon: Truck,
      location: 'محافظة العديد - المنطقة الشرقية',
      type: 'منفذ بري'
    }
  ];

  return (
    <section id="branches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">فروعنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نخدمكم عبر شبكة واسعة من الفروع المتخصصة في أهم المنافذ الحدودية والموانئ في المملكة العربية السعودية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => {
            const IconComponent = branch.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="text-right">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-blue-600 font-medium">{branch.type}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {branch.name}
                  </CardTitle>
                  <div className="flex items-center text-gray-600 mt-2">
                    <MapPin className="h-4 w-4 ml-1" />
                    <span className="text-sm">{branch.location}</span>
                  </div>
                </CardHeader>
                <CardContent className="text-right">
                  <CardDescription className="text-gray-700 leading-relaxed">
                    {branch.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}