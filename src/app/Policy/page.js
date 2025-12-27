export default function PolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-[#1A5276]">
      <h1 className="text-4xl font-bold mb-6 text-center">
        🛡️ Policy Statement
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Commitment</h2>
        <p>
          At <strong>Travel With Opulence</strong>, we believe every
          journey—whether for education, career, or luxury exploration—should
          begin with clarity and trust. Our policies are designed to protect our
          users, promote ethical practices, and ensure a seamless experience
          across borders.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          💳 Consultation Fee & Pricing
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We charge a <strong>flat $10 consultation fee</strong> for
            personalized guidance and support.
          </li>
          <li>
            All charges are <strong>clearly communicated upfront</strong>—no
            hidden fees, no surprise costs.
          </li>
          <li>
            We do <strong>not upsell or pressure</strong> users into services
            they don’t need.
          </li>
          <li>You’ll always know what you’re paying for, and why.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          🚫 Anti-Scam & Ethical Standards
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We are{" "}
            <strong>firmly against scams, fraud, and misinformation</strong>.
          </li>
          <li>
            All partners, programs, and opportunities are{" "}
            <strong>vetted for legitimacy and safety</strong>.
          </li>
          <li>
            We do <strong>not tolerate deceptive practices</strong> or
            exploitative offers.
          </li>
          <li>
            Users are encouraged to report suspicious activity—we act swiftly to
            investigate.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          🌐 Global Accessibility & Fairness
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Our services are designed to be{" "}
            <strong>accessible worldwide</strong>, regardless of location or
            business registration status.
          </li>
          <li>
            We support <strong>international payments</strong> via Stripe,
            PayPal, and Wise.
          </li>
          <li>
            We respect <strong>local regulations</strong> and tailor guidance to
            your region.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          🔐 Privacy & Data Protection
        </h2>
        <p>
          Your personal information is handled with care and never sold or
          shared without consent. We follow strict data protection protocols to
          ensure your privacy and security. For full details, please refer to
          our{" "}
          <a
            href="https://privacy.microsoft.com/en-us/privacystatement"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AC0D] underline hover:text-[#F7DC6F]"
          >
            Privacy Statement
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🤝 Our Promise</h2>
        <p>
          <strong>Travel With Opulence</strong> is more than a platform—it’s a
          movement toward ethical global mobility. We’re here to empower
          students, professionals, and dreamers with honest support, beautiful
          design, and a commitment to doing things the right way.
        </p>
      </section>
    </main>
  );
}
