import { ReactNode } from "react";
import PublicNav from "./PublicNav";
import PublicFooter from "./PublicFooter";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PublicNav />
      <main className="flex-1">{children}</main>
      <PublicFooter />
    </div>
  );
}
