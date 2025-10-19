import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import partnershipImage from '@assets/generated_images/School_partnership_collaboration_image_16c1c28d.png';
import { Quote } from 'lucide-react';

export function Partnerships() {
  const { t } = useLanguage();

  return (
    <section id="partnerships" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {t.partnerships.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.partnerships.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          <div>
            <img
              src={partnershipImage}
              alt="Partnership collaboration"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              {t.partnerships.intro}
            </p>

            <Card className="p-8 bg-accent border-l-4 border-l-primary">
              <div className="flex gap-4">
                <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                <p className="text-lg font-medium text-accent-foreground italic leading-relaxed">
                  {t.partnerships.quote}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
