import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Footer() {
  return (
    <div className="mt-auto flex w-full flex-col gap-4 border-t bg-background p-6 text-muted-foreground md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <img
          src="/kontentino-logo.svg"
          alt="Kontentino"
          className="h-4 w-auto"
        />
        <div className="flex items-center gap-2">
          <span>© 2025</span>
          <Link
            href="https://www.kontentino.com"
            rel="noopener noreferrer"
            target="_blank">
            <span className="text-foreground underline underline-offset-2 transition-all duration-200 ease-linear hover:text-primary">
              Kontentino
            </span>
          </Link>
          <span className="hidden lg:inline">— Social Media Management Platform</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/privacy">
          <span className="text-sm text-muted-foreground underline underline-offset-2 transition-all duration-200 ease-linear hover:text-primary">
            Privacy Policy
          </span>
        </Link>
        <Link href="/terms">
          <span className="text-sm text-muted-foreground underline underline-offset-2 transition-all duration-200 ease-linear hover:text-primary">
            Terms of Service
          </span>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}
