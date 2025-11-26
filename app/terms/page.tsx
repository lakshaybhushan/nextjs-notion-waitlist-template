import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
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
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Terms of Service</h1>

          <p className="text-muted-foreground text-sm mb-8">Last updated: November 26, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-foreground mb-4">
              By accessing and using the Social Media Planner waitlist website ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
            <p className="text-foreground mb-4">
              Social Media Planner by Kontentino is a waitlist service for an upcoming product that integrates with ChatGPT to help users create and manage social media content calendars. By joining the waitlist, you express interest in early access to the product when it becomes available.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Eligibility</h2>
            <p className="text-foreground mb-4">
              You must be at least 18 years old to use this Service. By using the Service, you represent and warrant that you meet this age requirement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Waitlist Registration</h2>
            <p className="text-foreground mb-4">
              When you join our waitlist, you agree to:
            </p>
            <ul className="list-disc pl-6 text-foreground mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your email account</li>
              <li>Accept that waitlist position does not guarantee immediate access to the product</li>
              <li>Understand that we may grant access in waves based on various factors</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. User Conduct</h2>
            <p className="text-foreground mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-foreground mb-4">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Submit false, misleading, or fraudulent information</li>
              <li>Attempt to manipulate or abuse the waitlist system</li>
              <li>Create multiple accounts to gain unfair advantage</li>
              <li>Interfere with or disrupt the Service or servers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
            <p className="text-foreground mb-4">
              All content, features, and functionality of the Service are owned by Kontentino and are protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. No Guarantees</h2>
            <p className="text-foreground mb-4">
              Joining the waitlist does not guarantee:
            </p>
            <ul className="list-disc pl-6 text-foreground mb-4">
              <li>Access to the product at any specific time</li>
              <li>That the product will be released as described</li>
              <li>Any particular features or functionality</li>
              <li>That the final product will be free or at any specific price point</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Communications</h2>
            <p className="text-foreground mb-4">
              By joining the waitlist, you consent to receive emails from us regarding:
            </p>
            <ul className="list-disc pl-6 text-foreground mb-4">
              <li>Product updates and announcements</li>
              <li>Early access invitations</li>
              <li>Related Kontentino products and services</li>
            </ul>
            <p className="text-foreground mb-4">
              You may unsubscribe from these communications at any time by clicking the unsubscribe link in any email or contacting us directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-foreground mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Limitation of Liability</h2>
            <p className="text-foreground mb-4">
              TO THE FULLEST EXTENT PERMITTED BY LAW, KONTENTINO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Modifications to Service</h2>
            <p className="text-foreground mb-4">
              We reserve the right to modify, suspend, or discontinue the waitlist or any part of the Service at any time without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Termination</h2>
            <p className="text-foreground mb-4">
              We may terminate or suspend your access to the waitlist immediately, without prior notice, for any reason, including breach of these Terms. You may also request removal from the waitlist at any time by contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Governing Law</h2>
            <p className="text-foreground mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Kontentino is registered, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Changes to Terms</h2>
            <p className="text-foreground mb-4">
              We reserve the right to update or change these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">15. Contact Information</h2>
            <p className="text-foreground mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-none text-foreground mb-4">
              <li>Email: <a href="mailto:support@kontentino.com" className="text-primary underline">support@kontentino.com</a></li>
              <li>Website: <a href="https://www.kontentino.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.kontentino.com</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">16. Severability</h2>
            <p className="text-foreground mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
