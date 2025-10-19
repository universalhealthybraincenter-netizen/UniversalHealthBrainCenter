import { Brain, MessageCircle, Activity, BookOpen, Heart, Puzzle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Brain,
      name: t.services.neuropsychology.name,
      description: t.services.neuropsychology.description,
      color: 'text-chart-1',
      bgColor: 'bg-chart-1/10',
    },
    {
      icon: MessageCircle,
      name: t.services.speechTherapy.name,
      description: t.services.speechTherapy.description,
      color: 'text-chart-2',
      bgColor: 'bg-chart-2/10',
    },
    {
      icon: Activity,
      name: t.services.psychomotricity.name,
      description: t.services.psychomotricity.description,
      color: 'text-chart-3',
      bgColor: 'bg-chart-3/10',
    },
    {
      icon: BookOpen,
      name: t.services.academicCoaching.name,
      description: t.services.academicCoaching.description,
      color: 'text-chart-4',
      bgColor: 'bg-chart-4/10',
    },
    {
      icon: Heart,
      name: t.services.lifeCoaching.name,
      description: t.services.lifeCoaching.description,
      color: 'text-chart-5',
      bgColor: 'bg-chart-5/10',
    },
    {
      icon: Puzzle,
      name: t.services.neuropsychoeducation.name,
      description: t.services.neuropsychoeducation.description,
      color: 'text-chart-1',
      bgColor: 'bg-chart-1/10',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-card-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-service-${index}`}
            >
              <div className="flex flex-col gap-4">
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center`}>
                  <service.icon className={`h-7 w-7 ${service.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-card-foreground mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
