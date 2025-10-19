import { SiInstagram, SiFacebook, SiLinkedin } from 'react-icons/si';
import { useLanguage } from '@/contexts/LanguageContext';
import logoImage from '@assets/download.jpg';

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: SiInstagram, href: 'https://www.instagram.com/universalhealthybraincenter/', label: 'Instagram' },
    { icon: SiFacebook, href: 'https://web.facebook.com/Khaoulamammad', label: 'Facebook' },
    { icon: SiLinkedin, href: 'https://www.linkedin.com/feed/', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-center md:items-start">
            <img src={logoImage} alt="UHBC Logo" className="h-16 w-auto mb-4" />
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Universal Healthy Brain Center
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-serif font-semibold text-card-foreground mb-4">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                  className="w-10 h-10 rounded-md bg-muted flex items-center justify-center hover-elevate active-elevate-2 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground text-center md:text-right">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
