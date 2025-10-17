import { type ReactNode } from 'react';

import { Footer } from '../components/common/Footerv2';

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
    </div>
  );
};