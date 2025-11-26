import Image from "next/image";
import { Calendar, ArrowRight, CheckCircle2, Users, Briefcase, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="flex h-full w-full flex-col">

      {/* Value Bullets (3-column section) */}
      <div className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center rounded-2xl bg-card border-2 border-primary/20 p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Visual calendar in seconds</h3>
            <p className="text-sm text-muted-foreground">
              Turn messy chats into a full monthly content calendar — posts, topics, and visuals included.
            </p>
          </div>

          <div className="flex flex-col items-center text-center rounded-2xl bg-card border-2 border-secondary/20 p-8 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
              <CheckCircle2 className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Ready to publish</h3>
            <p className="text-sm text-muted-foreground">
              Approve, export, or schedule your content straight from ChatGPT via Kontentino Social media planner.
            </p>
          </div>

          <div className="flex flex-col items-center text-center rounded-2xl bg-card border-2 border-grass/20 p-8 shadow-sm hover:shadow-md hover:border-grass/40 transition-all">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-grass/10">
              <Zap className="h-7 w-7 text-grass" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Stay in flow</h3>
            <p className="text-sm text-muted-foreground">
              Turn ideas from ChatGPT into structured plans — seamlessly synced into spreadsheets or Kontentino, without the copy-paste.
            </p>
          </div>
        </div>
      </div>

      {/* How Social Media Planner works */}
      <div className="w-full bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-12">
          <h2 className="font-serif text-balance text-center text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
            How Social Media Planner works
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <div className="flex flex-col gap-4 rounded-2xl bg-card border-2 border-primary/20 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
            <div className="text-5xl font-bold text-primary/20">1</div>
            <h3 className="text-xl font-semibold text-foreground">Connect your brand</h3>
            <p className="text-sm text-muted-foreground">
              Paste your website or social profile. Social Media Planner learns your tone of voice and brand basics.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-4 rounded-2xl bg-card border-2 border-secondary/20 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all">
            <div className="text-5xl font-bold text-secondary/20">2</div>
            <h3 className="text-xl font-semibold text-foreground">Turn your ChatGPT content into a visual calendar</h3>
            <p className="text-sm text-muted-foreground">
              No matter what you create in your ChatGPT thread — a single post or a whole month of content for all your channels — Social Media Planner instantly transforms it into a clean visual calendar. You can edit text, swap images, reorganize posts, and shape it into a real content plan.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-4 rounded-2xl bg-card border-2 border-grass/20 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-grass/40 transition-all">
            <div className="text-5xl font-bold text-grass/20">3</div>
            <h3 className="text-xl font-semibold text-foreground">Approve, refine, and publish — all in one flow</h3>
            <p className="text-sm text-muted-foreground">
              Once your calendar looks right, you can send it for approval, export it, or publish it directly via Kontentino. No copy-pasting, no jumping between tools — just a smooth handoff from ideas to execution.
            </p>
          </div>
        </div>
        </div>
      </div>

      {/* Who is Social Media Planner for */}
      <div className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12">
          <h2 className="font-serif text-balance text-center text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
            Who is Social Media Planner for
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* For Social Media Marketers */}
          <div className="flex flex-col gap-4 rounded-lg border border-border bg-card overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="/img/freelancers.webp"
                alt="Social Media Marketers"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">For Social Media Marketers</h3>
              <ul className="flex flex-col gap-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>You use ChatGPT for ideas and drafts, and you want an easier way to turn them into a content plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>You need a clean visual calendar, fast edits, and simple approvals without jumping between tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>You want smoother collaboration and faster feedback loops — without the copy-paste</span>
                </li>
              </ul>
            </div>
          </div>

          {/* For Everyday Creators */}
          <div className="flex flex-col gap-4 rounded-lg border border-border bg-card overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="/img/brands.webp"
                alt="Everyday Creators"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">For Everyday Creators</h3>
              <ul className="flex flex-col gap-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>You want to plan your social content visually inside ChatGPT</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>You want to easily adjust posts — change images, tweak text, and refine ideas — without leaving the chat</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>You want to publish directly from ChatGPT to your social media platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* What early access members get */}
      <div className="w-full bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-purple-500/5 p-8 md:p-12 lg:p-16">
        <h3 className="text-balance text-center text-2xl font-semibold text-primary md:text-3xl">
          What you get as an early access member
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
            <div>
              <h4 className="mb-1 font-semibold text-foreground">Free access to the Social Media Planner beta</h4>
              <p className="text-sm text-muted-foreground">Your input won&apos;t be &quot;feedback&quot; — it will define the product.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
            <div>
              <h4 className="mb-1 font-semibold text-foreground">Early access inside ChatGPT</h4>
              <p className="text-sm text-muted-foreground">Use Social Media Planner inside ChatGPT — long before any other apps launch in Europe.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
            <div>
              <h4 className="mb-1 font-semibold text-foreground">Regular updates from the product team</h4>
              <p className="text-sm text-muted-foreground">Early, behind-the-scenes updates before the public launch.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
            <div>
              <h4 className="mb-1 font-semibold text-foreground">Share your experience</h4>
              <p className="text-sm text-muted-foreground">If you choose to share your experience, we&apos;ll be happy to help you do so.</p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          We&apos;re looking for people who love trying new workflows — innovative marketers, early adopters, and advanced AI users who want a smoother way to plan their content.
        </p>
        </div>
      </div>
    </div>
  );
}
