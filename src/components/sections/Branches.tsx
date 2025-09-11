import { MapPin, Building2, Clock, Users, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Branches() {
  const branches = [
    {
      id: 1,
      name: 'فرع ضبا',
      location: 'محافظة ضبا، منطقة تبوك',
      description: 'يقع على الساحل الغربي للمملكة العربية السعودية، ضمن محافظة ضبا في منطقة تبوك، ويبعد حوالي 35 كم غرب المحافظة. أقرب ميناء سعودي إلى قناة السويس ودول حوض البحر المتوسط؛ حيث المسافة حوالي 253 بحريّة إلى قناة السويس، ويُعد نقطة عبور مميزة لسفن التجارة العالمية.',
      employees: 15,
      manager: 'أحمد محمد الحويطي',
      phone: '+966 50 123 4567',
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      id: 2,
      name: 'فرع الدرة',
      location: 'محافظة حقل، منطقة تبوك',
      description: 'يقع في محافظة حقل، شمال منطقة تبوك، على خليج العقبة، ويبعد حوالي 11 كم عن محافظة حقل السعودية. يربط السعودية مع الأردن؛ المنفذ هو أحد المعابر الوظيفية بينهم، ويُستخدم لحركة الركاب والشحن البري.',
      employees: 12,
      manager: 'سعد عبدالله الشمري',
      phone: '+966 50 234 5678',
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      id: 3,
      name: 'فرع السلوي',
      location: 'محافظة العديد، المنطقة الشرقية',
      description: 'في الجزء الشرقي من المملكة، محافظة العديد، وهو المنفذ البري الوحيد مع دولة قطر. يبعد عن الرياض نحو 460 كم، وعن الدوحة نحو 90 كم.',
      employees: 18,
      manager: 'خالد فهد العتيبي',
      phone: '+966 50 345 6789',
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      id: 4,
      name: 'جسر الملك فهد',
      location: 'الخبر - البحرين',
      description: 'جسر بحري بطول حوالي 25 كيلومترًا وعرض حوالي 23.2 مترًا، يربط بين مدينة الخبر السعودية وجزيرة الجسرة في مملكة البحرين. يسهل الحركة البرية بين البلدين، ويساهم في التجارة، السياحة، والزيارات العائلية، كما يعتبر إنجازًا هندسيًا له أثر اقتصادي واجتماعي كبير في الخليج.',
      employees: 20,
      manager: 'محمد علي الدوسري',
      phone: '+966 50 456 7890',
      icon: <Clock className="h-6 w-6" />,
    },
    {
      id: 5,
      name: 'فرع البطحاء',
      location: 'محافظة العديد، المنطقة الشرقية',
      description: 'يقع في محافظة العديد بالمنطقة الشرقية، هو المنفذ البري الوحيد مع دولة الإمارات العربية المتحدة. يبعد عن الرياض حوالي 450-500 كم، وعن أبوظبي حوالي 350-370 كم تقريبًا. يعتبر حلقة وصل بريّة رئيسية بين السعودية والإمارات، له دور كبير في التجارة البينية وحركة الأشخاص، ويعمل على تخفيف الضغط على المنافذ الأخرى في المنطقة الشرقية.',
      employees: 16,
      manager: 'عبدالرحمن سالم القحطاني',
      phone: '+966 50 567 8901',
      icon: <Users className="h-6 w-6" />,
    },
  ];

  return (
    <section id="branches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">فروعنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نخدمكم من خلال فروعنا المنتشرة عبر أهم المنافذ الحدودية في المملكة العربية السعودية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <Card 
              key={branch.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {branch.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {branch.name}
                </CardTitle>
                <CardDescription className="text-gray-600 flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {branch.location}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {branch.description}
                </p>
                
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">عدد الموظفين:</span>
                    <span className="text-sm font-semibold text-blue-600">{branch.employees} موظف</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">مدير الفرع:</span>
                    <span className="text-sm font-semibold text-gray-900">{branch.manager}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">الهاتف:</span>
                    <a 
                      href={`tel:${branch.phone}`}
                      className="text-sm font-semibold text-green-600 hover:text-green-700 transition-colors duration-200 flex items-center gap-1"
                    >
                      <Phone className="h-3 w-3" />
                      {branch.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}