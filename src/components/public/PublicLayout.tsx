import { ReactNode } from "react";
import PublicNav from "./PublicNav";
import PublicFooter from "./PublicFooter";
import WhatsAppCTA from "./WhatsAppCTA";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col pb-[76px] md:pb-0">
      <PublicNav />
      <main className="flex-1">{children}</main>
      <PublicFooter />
      <WhatsAppCTA />
    </div>
  );
}
