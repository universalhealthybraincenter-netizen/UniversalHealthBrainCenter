import { Partnerships } from '../Partnerships';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function PartnershipsExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Partnerships />
      </LanguageProvider>
    </ThemeProvider>
  );
}
