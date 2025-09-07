import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'فروعنا', href: '#branches' },
    { name: 'لماذا نحن', href: '#why-us' },
    { name: 'المدونة', href: '#blog' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Interactive Animation */}
          <div className="flex items-center space-x-3 space-x-reverse group cursor-pointer">
            <div className="relative">
              <img 
                src="https://i.pinimg.com/736x/7f/12/80/7f1280df00efb23c191881da5c430049.jpg" 
                alt="شعار سليمان الحويطي" 
                className="h-12 w-12 rounded-full object-cover border-2 border-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:border-blue-800"
              />
              <div className="absolute inset-0 rounded-full bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                سليمان الحويطي
              </h1>
              <p className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
                للتخليص الجمركي والترانزيت
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 text-right group py-2 px-3 rounded-lg hover:bg-blue-50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden relative overflow-hidden group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative z-10">
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-180" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              )}
            </div>
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </Button>
        </div>

        {/* Mobile Navigation with Animation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300 text-right group relative overflow-hidden"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: `slideInRight 0.3s ease-out ${index * 0.1}s both`
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-blue-600 group-hover:h-8 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}