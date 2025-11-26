"use client";

import { ChangeEvent } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface JoinWaitlistDialogProps {
  trigger: React.ReactNode;
  email: string;
  role: string;
  linkedin: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRoleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleLinkedInChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function JoinWaitlistDialog({
  trigger,
  email,
  role,
  linkedin,
  handleEmailChange,
  handleRoleChange,
  handleLinkedInChange,
  handleSubmit,
  loading,
}: JoinWaitlistDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Join the waitlist</DialogTitle>
          <DialogDescription>
            Be among the first to try Social Media Planner
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <Input
            type="email"
            placeholder="Your Email Address*"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <Select
            value={role}
            onChange={handleRoleChange}>
            <option value="">Select Your Role (optional)</option>
            <option value="Social media pro">Social media pro</option>
            <option value="Agency">Agency</option>
            <option value="Creator">Creator</option>
            <option value="Other">Other</option>
          </Select>
          <Input
            type="url"
            placeholder="LinkedIn profile (optional)"
            value={linkedin}
            onChange={handleLinkedInChange}
          />
          <EnhancedButton
            variant="expandIcon"
            Icon={FaArrowRightLong}
            onClick={handleSubmit}
            iconPlacement="right"
            className="mt-2 w-full bg-foreground text-background hover:bg-foreground/90"
            disabled={loading}>
            {loading ? "Joining..." : "Join now"}
          </EnhancedButton>
          <p className="text-center text-xs text-muted-foreground">
            We'll start sending invites in small waves to keep feedback manageable.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
