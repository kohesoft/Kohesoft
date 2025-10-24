import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export default function EnglishLayout({ children }) {
  return (
    <LanguageProvider defaultLanguage="en">
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  );
}