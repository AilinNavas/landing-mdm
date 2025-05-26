'use client';

import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Asegúrate que este Button sea de shadcn o tu propio componente

interface FeatureRow {
  feature: string;
  ours: boolean;
  theirs: boolean;
}

const features: FeatureRow[] = [
  { feature: 'Google Rankings Improvement', ours: true, theirs: true },
  { feature: 'Website Optimization', ours: true, theirs: true },
  { feature: 'Local SEO', ours: true, theirs: true },
  { feature: 'Monthly Reporting', ours: true, theirs: true },
  { feature: 'No Contracts', ours: true, theirs: false },
  { feature: 'Affordable Pricing', ours: true, theirs: false },
  { feature: '90-Day Money-Back Guarantee', ours: true, theirs: false },
];

export default function ComparisonSection() {
  return (
    <section className="bg-[#1D3557] py-16 text-white">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
            Others Charge $3,000 – We Deliver the Same Results for $697!
          </h2>
          <p className="text-lg">
            See how our affordable SEO package compares to overpriced competitors
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white">
          {/* Header Row */}
          <div className="hidden grid-cols-3 border-b p-4 text-[#1D3557] font-bold md:grid">
            <div>Feature</div>
            <div className="text-center">Our SEO ($697)</div>
            <div className="text-center">Typical SEO ($3,000+)</div>
          </div>

          {/* Feature Rows */}
          {features.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-y-2 border-b p-4 text-[#1D3557] md:grid-cols-3 md:gap-y-0"
            >
              <div className="font-medium">{item.feature}</div>
              <div className="flex items-center md:justify-center">
                <span className="mr-2 font-semibold md:hidden">Our SEO:</span>
                {item.ours ? (
                  <Check className="h-6 w-6 text-[#4CAF50]" />
                ) : (
                  <X className="h-6 w-6 text-red-500" />
                )}
              </div>
              <div className="flex items-center md:justify-center">
                <span className="mr-2 font-semibold md:hidden">Typical SEO:</span>
                {item.theirs ? (
                  <Check className="h-6 w-6 text-[#4CAF50]" />
                ) : (
                  <X className="h-6 w-6 text-red-500" />
                )}
              </div>
            </div>
          ))}

          {/* Bottom Row - Price */}
          <div className="grid grid-cols-1 gap-y-2 bg-[#F5F5F5] p-4 text-[#1D3557] font-bold md:grid-cols-3 md:gap-y-0">
            <div>Monthly Investment</div>
            <div className="text-[#4CAF50] md:text-center">$697/month</div>
            <div className="text-red-500 md:text-center">$3,000+/month</div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button className="bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
            Get Found Online – Start Today!
          </Button>
        </div>
      </div>
    </section>
  );
}
