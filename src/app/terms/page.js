// app/terms/page.js
export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

      <section className="space-y-8 text-base leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Travel With Opulence, you agree to be bound by
            these Terms & Conditions. If you do not agree, please refrain from
            using our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Services Offered</h2>
          <p>
            Travel With Opulence provides curated content and services related
            to luxury travel, international education, and career empowerment.
            We may modify or discontinue services at any time.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials. We reserve the right to suspend accounts that
            violate our terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Payments & Transactions
          </h2>
          <p>
            Payments are processed via third-party providers such as Stripe,
            PayPal, or Wise. We are not liable for transaction errors caused by
            these providers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. Intellectual Property
          </h2>
          <p>
            All content, branding, mascots, and design elements are owned by
            Travel With Opulence or licensed to us. You may not reproduce or
            distribute any part without permission.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Prohibited Conduct</h2>
          <p>
            Users must not upload harmful content, violate laws, or attempt
            unauthorized access to other accounts or systems.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Privacy</h2>
          <p>
            Please review our{" "}
            <a href="/Terms of Service" className="text-indigo-600 underline">
              Privacy Policy
            </a>{" "}
            to understand how we handle your data.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Disclaimers</h2>
          <p>
            We strive for accuracy but do not guarantee that all content is
            error-free or suitable for your personal situation.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            9. Limitation of Liability
          </h2>
          <p>
            Travel With Opulence is not liable for indirect or consequential
            damages arising from your use of the platform.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of [Your Country/State].
            Disputes will be resolved in the courts of [Your Jurisdiction].
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Continued use of the platform
            implies acceptance of the revised Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. Contact Us</h2>
          <p>
            For questions, reach out at{" "}
            <a
              href="mailto:info@travelwithopulence.com"
              className="text-indigo-600 underline"
            >
              your-email@example.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
