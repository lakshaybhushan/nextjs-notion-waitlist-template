import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-8">
            <FaArrowLeft className="mr-2" />
            Back to home
          </Button>
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <p className="text-muted-foreground text-sm mb-8">Last updated: November 26, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-foreground mb-4">
              Welcome to Social Media Planner by Kontentino ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-foreground mb-4">
              When you sign up for our waitlist, we collect the following information:
            </p>
            <ul className="list-disc pl-6 text-foreground mb-4">
              <li>Email address (required)</li>
              <li>Professional role (optional)</li>
              <li>LinkedIn profile URL (optional)</li>
              <li>IP address and browser information (automatically collected)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-foreground mb-4">
              <li>Manage your position on the Social Media Planner waitlist</li>
              <li>Send you updates about early access and product launches</li>
              <li>Communicate with you about the product and its features</li>
              <li>Improve our services and user experience</li>
              <li>Analyze usage patterns and trends</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Storage and Security</h2>
            <p className="text-foreground mb-4">
              Your information is stored securely in Pipedrive CRM. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Sharing</h2>
            <p className="text-foreground mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-foreground mb-4">
              <li>Service providers who assist in our operations (e.g., Pipedrive CRM)</li>
              <li>Legal authorities if required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
            <p className="text-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-foreground mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-foreground mb-4">
              To exercise these rights, please contact us at <a href="mailto:privacy@kontentino.com" className="text-primary underline">privacy@kontentino.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies and Tracking</h2>
            <p className="text-foreground mb-4">
              We use essential cookies to ensure the proper functioning of our website. We do not use third-party tracking cookies for advertising purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Data Retention</h2>
            <p className="text-foreground mb-4">
              We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. International Data Transfers</h2>
            <p className="text-foreground mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
            <p className="text-foreground mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
            <p className="text-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none text-foreground mb-4">
              <li>Email: <a href="mailto:privacy@kontentino.com" className="text-primary underline">privacy@kontentino.com</a></li>
              <li>Website: <a href="https://www.kontentino.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.kontentino.com</a></li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
