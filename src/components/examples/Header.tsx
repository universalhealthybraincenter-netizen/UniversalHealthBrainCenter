import { Header } from '../Header';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <div className="h-screen pt-20 px-4">
          <p className="text-muted-foreground">Scroll to see header effect</p>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
