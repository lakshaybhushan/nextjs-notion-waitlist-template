"use client";

import { toast } from "sonner";
import { useState } from "react";
import CTA from "@/components/cta";
import Form from "@/components/form";
import Logos from "@/components/logos";
import Particles from "@/components/ui/particles";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!name || !email) {
      toast.error("Please fill in all fields 😠");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address 😠");
      return;
    }

    setLoading(true);

    const promise = new Promise(async (resolve, reject) => {
      try {
        const notionResponse = await fetch("/api/notion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        });

        const mailResponse = await fetch("/api/mail", {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstname: name, email }),
        });

        if (notionResponse.ok && mailResponse.ok) {
          resolve({ name });
        } else {
          reject("Request failed");
          toast.error("Request failed. Rate limit exceeded 😢");
        }
      } catch (error) {
        reject(error);
        toast.error("An error occurred. Please try again 😢");
      }
    });

    toast.promise(promise, {
      loading: "Getting you on the waitlist... 🚀",
      success: (data) => {
        setName("");
        setEmail("");
        return "Thank you for joining morph2json's waitlist! 🎉";
      },
      error: "An error occurred. Please try again 😢.",
    });

    promise.finally(() => {
      setLoading(false);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center px-4 pt-24 sm:px-6 lg:px-8">
      <CTA />
      <Form
        name={name}
        email={email}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />

      <Logos />

      <Particles
        className="absolute inset-0 -z-[100]"
        quantity={150}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
    </main>
  );
}
