import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import logoImage from '@assets/download.jpg';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/partnerships', label: t.nav.partnerships },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-sm' : 'bg-background/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" data-testid="link-home">
            <a className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2">
              <img src={logoImage} alt="UHBC Logo" className="h-10 lg:h-12 w-auto" />
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-serif font-semibold text-foreground leading-tight">
                  UHBC
                </h1>
              </div>
            </a>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-nav-${item.label.toLowerCase().replace(/\s/g, '-')}`}>
                <a
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 ${
                    location === item.path
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              className="hidden sm:flex"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              data-testid="button-language-toggle"
              className="hidden sm:flex"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs font-medium">{language.toUpperCase()}</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
              className="lg:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s/g, '-')}`}>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium hover-elevate active-elevate-2 ${
                    location === item.path
                      ? 'text-primary bg-accent'
                      : 'text-foreground'
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="flex items-center gap-2 mt-4 px-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                data-testid="button-mobile-theme-toggle"
                className="flex-1"
              >
                {theme === 'light' ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}
                {theme === 'light' ? 'Dark' : 'Light'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                data-testid="button-mobile-language-toggle"
                className="flex-1"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Français' : 'English'}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
