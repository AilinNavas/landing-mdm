import { FC } from "react";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    service: "SEO",
    price: "$697/month",
    included:
      "Keyword research, on-page optimization, local SEO, monthly reporting, Google Business Profile management",
  },
  {
    service: "Marketing System",
    price: "$3,497/month",
    included:
      "Everything in SEO package plus Google & Meta ads, email marketing automation, patient acquisition system, dedicated account manager",
    highlight: true,
  },
  {
    service: "Single-Page Website",
    price: "$1,247 one-time",
    included:
      "One-page design with essential sections, mobile-optimized, fast-loading, SEO-friendly structure, clear CTAs for appointment bookings",
  },
  {
    service: "Multi-Page Website",
    price: "$4,497 one-time",
    included:
      "Unlimited service pages, custom SEO optimization, conversion-focused design, fast & mobile-friendly, complete analytics setup",
  },
];

const PricingSection: FC = () => {
  return (
    <section id="pricing" className="relative bg-white py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 opacity-5 grid grid-cols-12 grid-rows-8">
        {Array.from({ length: 96 }).map((_, i) => (
          <div key={i} className="border border-[#1D3557]" />
        ))}
      </div>


      {/* Content */}
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#1D3557] md:text-4xl">Transparent Pricing</h2>
          <p className="text-lg text-[#1D3557]">No contracts. No hidden fees. Just results.</p>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border animate-[fadeIn_0.8s_ease-in-out]">
          <div className="hidden sm:grid grid-cols-4 border-b bg-[#1D3557] p-4 text-white text-left">
            <div className="font-bold">Service</div>
            <div className="font-bold">Price</div>
            <div className="col-span-2 font-bold">What's Included</div>
          </div>

          {/* Rows */}
          {pricingData.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 sm:grid-cols-4 gap-2 border-b p-4 ${
                item.highlight ? "bg-[#F4A261]/10" : "bg-white"
              }`}
            >
              <div className="font-bold text-[#1D3557]">{item.service}</div>
              <div className="text-[#1D3557]">{item.price}</div>
              <div className="sm:col-span-2 text-[#1D3557]">{item.included}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button className="bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
