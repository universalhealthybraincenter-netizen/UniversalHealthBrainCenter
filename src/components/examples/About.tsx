import { About } from '../About';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function AboutExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <About />
      </LanguageProvider>
    </ThemeProvider>
  );
}
