import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b animate-slide-down">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse animate-fade-in-right">
            <img 
              src="https://i.pinimg.com/736x/7f/12/80/7f1280df00efb23c191881da5c430049.jpg" 
              alt="شعار سليمان الحويطي" 
              className="h-12 w-12 rounded-full object-cover shadow-md hover:scale-110 transition-transform duration-300 animate-pulse"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-900 hover:text-blue-700 transition-colors">سليمان الحويطي</h1>
              <p className="text-sm text-blue-600 animate-fade-in">للتخليص الجمركي والترانزيت</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse animate-fade-in-left">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              الرئيسية
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              خدماتنا
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('branches')} className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              الفروع
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              لماذا نحن
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('vision')} className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              رؤيتنا
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              المدونة
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              التواصل
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:scale-110 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 rotate-180 transition-transform duration-300" /> : <Menu className="h-6 w-6 hover:rotate-180 transition-transform duration-300" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white animate-slide-down">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-right py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-blue-50 rounded px-2 transition-all duration-300">
                الرئيسية
              </button>
              <button onClick={() => scrollToSection('services')} className="text-right py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-blue-50 rounded px-2 transition-all duration-300">
                خدماتنا
              </button>
              <button onClick={() => scrollToSection('branches')} className="text-right py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-blue-50 rounded px-2 transition-all duration-300">
                الفروع
              </button>
              <button onClick={() => scrollToSection('why-us')} className="text-right py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-blue-50 rounded px-2 transition-all duration-300">
                لماذا نحن
              </button>
              <button onClick={() => scrollToSection('vision')} className="text-right py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-blue-50 rounded px-2 transition-all duration-300">
                رؤيتنا
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-right py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-blue-50 rounded px-2 transition-all duration-300">
                المدونة
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-right py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-blue-50 rounded px-2 transition-all duration-300">
                التواصل
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}