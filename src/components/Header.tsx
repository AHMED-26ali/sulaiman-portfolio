import { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
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
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <Building2 className="h-8 w-8 text-blue-600" />
            <div className="text-right">
              <h1 className="text-xl font-bold text-gray-900">سليمان الحويطي</h1>
              <p className="text-xs text-gray-600">للتخليص الجمركي والترانزيت</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-right"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-right"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}