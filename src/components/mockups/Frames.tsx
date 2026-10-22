import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Janela de navegador estilizada — 100% CSS/SVG, sem imagens. */
export function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/50 bg-gradient-to-br from-card via-secondary to-card p-2 shadow-2xl",
        className,
      )}
    >
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="size-2.5 rounded-full bg-destructive/60" />
        <span className="size-2.5 rounded-full bg-warning/60" />
        <span className="size-2.5 rounded-full bg-success/60" />
        <span className="ml-2 flex-1 truncate rounded-md bg-background/60 px-2 py-1 font-mono text-[10px] text-muted-foreground">
          {url}
        </span>
      </div>
      <div className="rounded-2xl border border-border/50 bg-background/70 p-3 backdrop-blur sm:p-4">
        {children}
      </div>
    </div>
  );
}

/** Moldura de celular para os mockups de WhatsApp e cardápio mobile. */
export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[280px] rounded-[2rem] border border-border/60 bg-gradient-to-b from-secondary to-card p-2 shadow-2xl",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[1.6rem] border border-border/50 bg-background">
        <div className="absolute left-1/2 top-1.5 h-1.5 w-16 -translate-x-1/2 rounded-full bg-border/80" />
        {children}
      </div>
    </div>
  );
}
