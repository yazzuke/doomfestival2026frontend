import { type ReactNode } from 'react';

import { Footer } from '../components/common/Footerv2';
import { ChangeLanguage } from "../components/common/ChangeLenguage";

interface MainLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-doom-black">

      <main>
        {children}
      </main>
      <Footer />
            <ChangeLanguage />
    </div>
  );
};