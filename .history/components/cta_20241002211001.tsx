import React from 'react';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CTAProps {
  name: string;
  email: string;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
  isHovered: boolean;
  setIsHovered: (isHovered: boolean) => void;
}

export default function CTA({
  name,
  email,
  handleNameChange,
  handleEmailChange,
  handleSubmit,
  loading,
  isHovered,
  setIsHovered
}: CTAProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Start your free trial today</h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try Tyler&apos;s Home Finds Platform for 30 days. No credit card required.</p>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
              required
              className="w-full border-2 border-teal-400 bg-white/50 placeholder-teal-400 text-teal-600 font-semibold rounded-full px-4 sm:px-6 py-2 sm:py-3"
              style={{ fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full border-2 border-teal-400 bg-white/50 placeholder-teal-400 text-teal-600 font-semibold rounded-full px-4 sm:px-6 py-2 sm:py-3"
              style={{ fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}
            />
            <Button
              type="submit"
              disabled={loading}
              className={`w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 sm:py-3 rounded-full transition-colors duration-300 text-lg sm:text-xl join-button ${isHovered ? 'wiggle' : ''}`}
              style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {loading ? "Joining..." : "Join the fuss!"}
            </Button>
          </form>
        </div>
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Image 
          src="/placeholder.svg" 
          className="w-full dark:hidden" 
          alt="dashboard image" 
          width={500} 
          height={300}
        />
        <Image 
          src="/placeholder.svg" 
          className="w-full hidden dark:block" 
          alt="dashboard image" 
          width={500} 
          height={300}
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let&apos;s create more tools and ideas that brings us together.</h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Tyler&apos;s Home Finds helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
          <a href="#" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
            Get started
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
}