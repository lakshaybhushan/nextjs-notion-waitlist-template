import { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { FaArrowRightLong } from "react-icons/fa6";
import { EnhancedButton } from "@/components/ui/enhanced-btn";

interface FinalCTAProps {
  email: string;
  role: string;
  linkedin: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRoleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleLinkedInChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function FinalCTA({
  email,
  role,
  linkedin,
  handleEmailChange,
  handleRoleChange,
  handleLinkedInChange,
  handleSubmit,
  loading,
}: FinalCTAProps) {
  return (
    <div className="flex h-full w-full flex-col gap-8">

      <div>
        <h2 className="font-serif text-balance text-center text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
          Ready to transform your social media workflow?
        </h2>
      </div>

      <div>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Join the waitlist now and be among the first to access Social Media Planner
        </p>
      </div>

      <div>
        <p className="text-center text-sm text-muted-foreground">
          Powered by Kontentino — trusted by 4,000+ teams worldwide
        </p>
      </div>

      <div className="mt-2 flex w-full max-w-[24rem] mx-auto flex-col gap-2">
        <div>
          <Input
            type="email"
            placeholder="Your Email Address*"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <Select
            value={role}
            onChange={handleRoleChange}>
            <option value="">Select Your Role (optional)</option>
            <option value="Social media pro">Social media pro</option>
            <option value="Agency">Agency</option>
            <option value="Creator">Creator</option>
            <option value="Other">Other</option>
          </Select>
        </div>
        <div>
          <Input
            type="url"
            placeholder="LinkedIn profile (optional)"
            value={linkedin}
            onChange={handleLinkedInChange}
          />
        </div>
        <div>
          <EnhancedButton
            variant="expandIcon"
            Icon={FaArrowRightLong}
            onClick={handleSubmit}
            iconPlacement="right"
            className="mt-2 w-full bg-foreground text-background hover:bg-foreground/90"
            disabled={loading}>
            {loading ? "Joining..." : "Join now — it's free"}
          </EnhancedButton>
        </div>
        <div className="mt-2 text-center text-xs text-muted-foreground">
          <p>We&apos;ll start sending invites in small waves to keep feedback manageable.</p>
        </div>
      </div>
    </div>
  );
}
