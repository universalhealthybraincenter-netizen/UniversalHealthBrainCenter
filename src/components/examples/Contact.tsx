import { Contact } from '../Contact';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Toaster } from '@/components/ui/toaster';

export default function ContactExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Contact />
        <Toaster />
      </LanguageProvider>
    </ThemeProvider>
  );
}
