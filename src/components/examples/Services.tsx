import { Services } from '../Services';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function ServicesExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Services />
      </LanguageProvider>
    </ThemeProvider>
  );
}
