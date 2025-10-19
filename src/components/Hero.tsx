import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@assets/generated_images/Happy_child_hero_image_9fc3a573.png';

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/60 to-background/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
          {t.hero.title}
        </h1>
        <p className="text-xl sm:text-2xl font-serif font-medium text-primary mb-6">
          {t.hero.subtitle}
        </p>

        <div className="mb-8 space-y-2">
          <p className="text-lg sm:text-xl text-foreground/90 font-medium italic">
            {t.hero.sloganArabic}
          </p>
          <p className="text-lg sm:text-xl text-foreground/90 font-medium">
            {t.hero.slogan}
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8 space-y-4">
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            {t.hero.intro}
          </p>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed font-medium">
            {t.hero.mission}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('services')}
            data-testid="button-discover-services"
            className="w-full sm:w-auto"
          >
            {t.hero.ctaDiscover}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            data-testid="button-book-appointment"
            className="w-full sm:w-auto bg-background/80 backdrop-blur-sm"
          >
            {t.hero.ctaAppointment}
          </Button>
        </div>
      </div>
    </section>
  );
}
