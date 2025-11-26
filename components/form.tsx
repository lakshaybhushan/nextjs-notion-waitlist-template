import Link from "next/link";
import { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { FaArrowRightLong } from "react-icons/fa6";
import { EnhancedButton } from "@/components/ui/enhanced-btn";

interface FormProps {
  email: string;
  role: string;
  linkedin: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRoleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleLinkedInChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function Form({
  email,
  role,
  linkedin,
  handleEmailChange,
  handleRoleChange,
  handleLinkedInChange,
  handleSubmit,
  loading,
}: FormProps) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm p-6 shadow-2xl">
      <div className="text-center mb-2">
        <h3 className="text-2xl font-bold text-white mb-1">Join the waitlist</h3>
        <p className="text-sm text-white/70">Be among the first to try it</p>
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email Address*"
          value={email}
          onChange={handleEmailChange}
          className="bg-white border-white/20"
          required
        />
      </div>
      <div>
        <Select
          value={role}
          onChange={handleRoleChange}
          className="bg-white border-white/20">
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
          className="bg-white border-white/20"
        />
      </div>
      <div>
        <EnhancedButton
          variant="expandIcon"
          Icon={FaArrowRightLong}
          onClick={handleSubmit}
          iconPlacement="right"
          className="mt-2 w-full bg-white text-gray-900 hover:bg-white/90"
          disabled={loading}>
          {loading ? "Joining..." : "Join now"}
        </EnhancedButton>
      </div>
      <div className="mt-2 text-center text-xs text-white/70">
        <p>We&apos;ll start sending invites in small waves to keep feedback manageable.</p>
      </div>
    </div>
  );
}
