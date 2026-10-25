"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollToTop() {
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Scroll to top"
      title="Scroll to top"
      className="fixed bottom-20 right-4 z-50 h-12 w-12 border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground sm:right-6"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="size-5 stroke-[2.5]" />
    </Button>
  );
}
