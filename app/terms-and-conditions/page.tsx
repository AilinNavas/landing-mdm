import Link from "next/link"

export const metadata = {
  title: "Terms and Conditions - Mucho Dental Marketing",
  description: "Terms and Conditions for Mucho Dental Marketing services",
}

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="mb-8">
            <Link href="/" className="text-[#1D3557] hover:text-[#1D3557]/70 mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-muted-foreground">Last updated: 15/06/2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                By accessing or using the services provided by Mucho Dental Marketing, operating through Mucho Marketing
                LLC ("Company," "we," "our," or "us"), you agree to be bound by these Terms and Conditions ("Terms"). If
                you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>

              <h3 className="text-xl font-medium mb-3">Our Services Include:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Custom dental website design and development</li>
                <li>SEO optimization for dental practices</li>
                <li>Mobile-responsive website creation</li>
                <li>Free design preview service</li>
                <li>Website maintenance and support</li>
                <li>Digital marketing consultation</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Free Design Preview Process:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Initial consultation to understand your requirements</li>
                <li>Creation of a custom design preview at no cost</li>
                <li>Presentation of the design for your review</li>
                <li>Payment required only upon approval and acceptance</li>
                <li>No obligation to proceed if you're not satisfied</li>
              </ul>

              <p className="text-sm italic mb-2">
                    <strong>Important:</strong> We welcome your feedback and are happy to incorporate your suggestions. We require payment as a sign of approval before making any additional
                    changes to the initial version of the website presented. To expedite the process, payment can be requested during
                    the second meeting. 
                  </p>


            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>

              <h3 className="text-xl font-medium mb-3">Pricing and Payment:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Complete website design package: $3,497 (as advertised)</li>
                <li>Full payment is required upon design approval - no partial payments accepted</li>
                <li>Payment is due only after design approval and before final delivery</li>
                <li>All prices are subject to change with notice</li>
                <li>Additional services may incur separate charges</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">90-Day Money-Back Guarantee:</h3>
              
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    The 90-day guarantee begins once your website is delivered and
                    completely live
                  </li>
                  <li>
                    To request a refund, you must schedule a meeting with the account
                    manager who assisted you during the purchasing process
                  </li>
                  <li>
                    The account manager will effectively unlink the website from
                    your domain during this meeting
                  </li>
                  <li>
                    Once the unlinking process is complete, we will return the full
                    $3,497 initially charged
                  </li>
                </ul>
            

              <h3 className="text-xl font-medium mb-3">90-Day Unlimited Edits:</h3>
              
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Edit requests must be made on specific dates and in the format indicated by your
                    account manager
                  </li>
                  <li>
                    Edit requests can only be submitted after full payment for the
                    product has been completed
                  </li>
                
                  <li>
                    Unlimited design and content changes within reasonable bounds of the
                    original project scope
                  </li>
                </ul>
            
            </section>
            

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Client Responsibilities</h2>
              <p className="mb-4">As our client, you agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate and complete information about your practice</li>
                <li>Supply necessary content, images, and materials in a timely manner</li>
                <li>Respond to communications and requests for feedback promptly</li>
                <li>Ensure you have rights to all content you provide</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Maintain professional conduct throughout the engagement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>

              <h3 className="text-xl font-medium mb-3">Ownership Rights:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Upon full payment, you own the final website design and content</li>
                <li>We retain rights to our proprietary methods and processes</li>
                <li>Stock images and third-party elements remain subject to their respective licenses</li>
                <li>We may showcase your website in our portfolio unless requested otherwise</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Content Usage:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>You grant us license to use provided content for your project</li>
                <li>You warrant that you have rights to all content provided</li>
                <li>We are not responsible for copyright infringement of client-provided content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Project Timeline and Delivery</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Project timelines are estimates and may vary based on complexity</li>
                <li>Delays caused by client feedback or content provision may extend timelines</li>
                <li>We will communicate any significant delays promptly</li>
                <li>Rush orders may incur additional fees</li>
                <li>Final delivery depends on client approval and payment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, Mucho Marketing LLC shall not be liable for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages exceeding the amount paid for our services</li>
                <li>Issues arising from third-party services or platforms</li>
                <li>Website performance issues beyond our control</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Warranties and Disclaimers</h2>

              <h3 className="text-xl font-medium mb-3">Our Warranties:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We will deliver services with professional skill and care</li>
                <li>Websites will be functional and meet agreed specifications</li>
                <li>We will address any defects in our work promptly</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Disclaimers:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We do not guarantee specific business results or patient acquisition</li>
                <li>SEO results may vary and are not guaranteed</li>
                <li>Third-party integrations are subject to their terms and availability</li>
                <li>Internet and hosting performance is beyond our control</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
              <p className="mb-4">Either party may terminate the agreement:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>With written notice if the other party breaches these terms</li>
                <li>Immediately for cause (fraud, illegal activity, etc.)</li>
                <li>Upon mutual agreement</li>
                <li>Client may terminate during the free preview phase without obligation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Privacy and Confidentiality</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We will maintain confidentiality of your business information</li>
                <li>Our Privacy Policy governs data collection and use</li>
                <li>We may use anonymized data for business improvement</li>
                <li>Client information will not be shared without consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
              <p className="mb-4">
                These Terms are governed by the laws of Wyoming/United States. Any disputes will be resolved through
                binding arbitration or in the courts of United States.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p className="mb-4">For questions about these Terms or our services, contact us at:</p>
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
              <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms at any time. Updated Terms will be posted on our website with
                a new effective date. Continued use of our services constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <p className="text-sm text-muted-foreground border-t pt-4">
                These Terms and Conditions are effective as of 15/06/2025
                 and apply to all services provided by Mucho Marketing LLC doing business as Mucho Dental Marketing.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
