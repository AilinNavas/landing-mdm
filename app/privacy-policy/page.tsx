import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - Mucho Dental Marketing",
  description: "Privacy Policy for Mucho Dental Marketing services",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="mb-8">
            <Link href="/" className="text-[#1D3557] hover:text-[#1D3557]/70 mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: 15/06/2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="mb-4">
                Mucho Dental Marketing, operating through Mucho Marketing LLC ("we," "our," or "us"), is committed to
                protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-medium mb-3">Personal Information</h3>
              <p className="mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Business information (practice name, specialty, location)</li>
                <li>Website preferences and design requirements</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communication records and project details</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>IP address and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Device information and operating system</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide our dental website design and marketing services</li>
                <li>Create custom website designs based on your requirements</li>
                <li>Communicate about your project and provide customer support</li>
                <li>Process payments and manage billing</li>
                <li>Send service updates and marketing communications (with consent)</li>
                <li>Improve our services and website functionality</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Free Design Preview Service</h2>
              <p className="mb-4">
                Our "try before you buy" model includes a free design preview. During this process:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We collect information about your practice and design preferences</li>
                <li>We create a custom design preview based on your requirements</li>
                <li>No payment is required until you approve the design</li>
                <li>Your information is used solely for creating and presenting your preview</li>
                <li>
                  If you don't proceed with our services, we retain basic contact information for follow-up
                  communications only
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Information Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell your personal information. We may share information with:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Service providers and contractors who assist in our operations</li>
                <li>Payment processors for billing purposes</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p className="mb-4">We implement appropriate security measures to protect your information, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure payment processing through certified providers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience. You can control cookie settings
                through your browser, though some features may not function properly if cookies are disabled.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p className="mb-4">For questions about this Privacy Policy or to exercise your rights, contact us at:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>
                  <strong>Mucho Marketing LLC</strong>
                </p>
                <p>Email: legal@mucho-dental-marketing.com</p>
                <p>Phone: (307) 200-2803</p>
                <p>Address: 30 N Gould St Ste R Sheridan, WY 82801</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy periodically. We will notify you of significant changes by posting the
                updated policy on our website with a new effective date.
              </p>
            </section>
          </div>
        </div>
      </main>
      
    </div>
  )
}