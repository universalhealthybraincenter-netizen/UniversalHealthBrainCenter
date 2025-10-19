import { Brain, MessageCircle, Activity, BookOpen, Heart, Puzzle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import doctorImage from '@assets/514401933_30077746865202334_6169919440513445124_n_1760872060293.jpg';

export function About() {
  const { t } = useLanguage();

  const teamMembers = [
    { icon: Brain, label: t.about.team.neuropsychologists, color: 'text-chart-1' },
    { icon: MessageCircle, label: t.about.team.speechTherapists, color: 'text-chart-2' },
    { icon: Activity, label: t.about.team.psychomotricians, color: 'text-chart-3' },
    { icon: BookOpen, label: t.about.team.academicCoaches, color: 'text-chart-4' },
    { icon: Puzzle, label: t.about.team.neuropsychoeducators, color: 'text-chart-5' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-center text-foreground mb-12">
          {t.about.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="flex items-center justify-center">
            <img
              src={doctorImage}
              alt="Dr. Khaoula Mammad"
              className="rounded-xl shadow-lg w-full max-w-md h-auto object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6">
              {t.about.intro}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-center text-foreground mb-8">
            {t.about.teamTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-team-${index}`}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className={`w-16 h-16 rounded-full bg-accent flex items-center justify-center ${member.color}`}>
                    <member.icon className="h-8 w-8" />
                  </div>
                  <h4 className="font-serif font-semibold text-card-foreground">
                    {member.label}
                  </h4>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
