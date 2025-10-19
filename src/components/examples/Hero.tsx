import { Hero } from '../Hero';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function HeroExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    </ThemeProvider>
  );
}
