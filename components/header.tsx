import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaPlay, FaArrowRight } from "react-icons/fa";

export default function Header() {
  const handleSeeInAction = (e: React.MouseEvent) => {
    e.preventDefault();
    // Scroll to video section
    const videoSection = document.querySelector('video')?.closest('section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sticky top-0 w-full z-[50] bg-primary shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo on the left */}
        <div>
          <Link href="https://www.kontentino.com" rel="noopener noreferrer" target="_blank">
            <Image
              src="https://www.kontentino.com/kontentino-pink-dust.svg"
              alt="Kontentino"
              width={120}
              height={28}
              className="h-6 w-auto"
              unoptimized
            />
          </Link>
        </div>

        {/* CTAs on the right */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={handleSeeInAction}
            variant="ghost"
            className="text-white hover:bg-white/10 hover:text-white rounded-xl transition-all duration-150 ease-linear">
            <FaPlay className="mr-1.5 text-xs" />
            <span>See in action</span>
          </Button>
          <Link href="https://www.kontentino.com" rel="noopener noreferrer" target="_blank">
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white rounded-xl transition-all duration-150 ease-linear">
              <span>About Kontentino</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
