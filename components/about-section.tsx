import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "./ui/text-blur";
import { Smartphone, Calendar, List, Check } from "lucide-react";

export default function AboutSection() {
  // Placeholder video - replace with actual Kontentino GPT Apps demo
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace this URL

  return (
    <motion.div
      className="flex h-full w-full max-w-4xl flex-col gap-6 pb-12 pt-12 md:pb-24 md:pt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible">

      {/* Heading */}
      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-balance text-center text-2xl font-medium tracking-tight text-foreground md:text-3xl"
          text="See It In Action"
        />
      </motion.div>

      {/* Subheading */}
      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-2xl text-pretty text-center text-base text-muted-foreground sm:text-lg"
          text="The first ChatGPT integration built specifically for social media professionals"
          duration={0.8}
        />
      </motion.div>

      {/* Video Container */}
      <motion.div
        variants={itemVariants}
        className="mt-4 w-full">
        <div className="relative w-full overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
             style={{ paddingBottom: "56.25%" }}> {/* 16:9 aspect ratio */}
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src={videoUrl}
            title="Kontentino GPT Apps Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>

      {/* What's Coming Section */}
      <motion.div
        variants={itemVariants}
        className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">

        {/* App 1 - Content Calendar */}
        <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center transition-all duration-150 ease-in-out hover:bg-muted/50">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 text-balance text-lg font-medium text-foreground">Content Calendar</h3>
          <p className="text-pretty text-sm text-muted-foreground">
            Visualize your entire month at a glance and export beautiful calendar views
          </p>
          <div className="mt-3 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Coming First
          </div>
        </div>

        {/* App 2 - Post Preview */}
        <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center transition-all duration-150 ease-in-out hover:bg-muted/50">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
            <Smartphone className="h-6 w-6 text-secondary-foreground" />
          </div>
          <h3 className="mb-2 text-balance text-lg font-medium text-foreground">Post Preview</h3>
          <p className="text-pretty text-sm text-muted-foreground">
            See pixel-perfect previews of your posts on Instagram, Facebook, LinkedIn, and more
          </p>
          <div className="mt-3 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            Coming Soon
          </div>
        </div>

        {/* App 3 - Post List */}
        <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center transition-all duration-150 ease-in-out hover:bg-muted/50">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
            <List className="h-6 w-6 text-secondary-foreground" />
          </div>
          <h3 className="mb-2 text-balance text-lg font-medium text-foreground">Post List</h3>
          <p className="text-pretty text-sm text-muted-foreground">
            Bulk overview and management for teams handling high-volume campaigns
          </p>
          <div className="mt-3 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            Coming Soon
          </div>
        </div>
      </motion.div>

      {/* Why Join */}
      <motion.div
        variants={itemVariants}
        className="mt-8 rounded-lg border border-border bg-card/50 p-6 md:p-8">
        <h3 className="mb-5 text-balance text-center text-xl font-medium text-foreground md:text-2xl">
          Why Join Early Access?
        </h3>
        <div className="grid grid-cols-1 gap-4 text-pretty text-base text-foreground md:grid-cols-2">
          <div className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <span>Be first to experience AI-powered social media workflows</span>
          </div>
          <div className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <span>Shape the product with your feedback</span>
          </div>
          <div className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <span>Get exclusive early access before public launch</span>
          </div>
          <div className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <span>Special pricing for early adopters</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
