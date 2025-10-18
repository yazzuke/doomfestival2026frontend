import { type ReactNode } from "react";

import { Footer } from "../components/common/Footerv2";
import { ChangeLanguage } from "../components/common/ChangeLenguage";
import { WhatsAppButton } from "../components/ui/WhatsappButton";

interface MainLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-doom-black">
      <main>{children}</main>
      <Footer />
      
      {/* Floating buttons container - Vertical en mobile, horizontal en desktop */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col md:flex-row gap-4 items-center">
        <ChangeLanguage />
        <WhatsAppButton />
      </div>
    </div>
  );
};