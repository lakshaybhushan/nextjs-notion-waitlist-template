"use client";

import { ChangeEvent, MouseEvent, useState } from "react";
import { FaArrowRightLong, FaPlay } from "react-icons/fa6";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import { Button } from "@/components/ui/button";
import JoinWaitlistDialog from "@/components/join-waitlist-dialog";

interface CTAProps {
  formComponent: React.ReactNode;
  email: string;
  role: string;
  linkedin: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRoleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleLinkedInChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function CTA({
  formComponent,
  email,
  role,
  linkedin,
  handleEmailChange,
  handleRoleChange,
  handleLinkedInChange,
  handleSubmit,
  loading,
}: CTAProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
      {/* LEFT side - Text */}
      <div className="flex flex-col justify-center gap-6">
        <div>
          <div className="flex items-center justify-center lg:justify-start">
            <div className="flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 text-center backdrop-blur-sm">
              <AnimatedShinyText className="px-4 py-1 text-sm text-white/90">
                <span>Social Media Planner for ChatGPT by Kontentino</span>
              </AnimatedShinyText>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-balance text-center font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-left lg:text-6xl">
            Bring your whole social media workflow inside ChatGPT.
          </h1>
        </div>

        <div>
          <p className="mx-auto max-w-[30rem] text-pretty text-center text-base leading-relaxed text-white/80 sm:text-lg lg:mx-0 lg:text-left">
            Social Media Planner turns your ChatGPT ideas into a visual content
            calendar with ready-to-publish posts — without copy-pasting into
            other tools.
          </p>
        </div>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <JoinWaitlistDialog
            trigger={
              <EnhancedButton
                variant="expandIcon"
                Icon={FaArrowRightLong}
                iconPlacement="right"
                size="lg"
                className="bg-white px-8 py-6 text-lg text-primary hover:bg-white/90">
                Join the waitlist — it's free
              </EnhancedButton>
            }
            email={email}
            role={role}
            linkedin={linkedin}
            handleEmailChange={handleEmailChange}
            handleRoleChange={handleRoleChange}
            handleLinkedInChange={handleLinkedInChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              const videoSection = document
                .querySelector("video")
                ?.closest("section");
              if (videoSection) {
                videoSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="border-white/30 px-8 py-6 text-lg text-white hover:bg-white/10">
            <FaPlay className="mr-2" />
            See in action
          </Button>
        </div>

        <div className="mt-4">
          <p className="text-center text-sm text-white/70 lg:text-left">
            Powered by Kontentino — trusted by 4,000+ teams
          </p>
        </div>
      </div>

      {/* RIGHT side - Form with tilt effect */}
      <div
        className="flex w-full items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.1s ease-out",
        }}>
        {formComponent}
      </div>
    </div>
  );
}
