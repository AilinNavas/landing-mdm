
import { Button } from '@/components/ui/button';
import { SparklesIcon, ClockIcon, ShieldCheckIcon } from 'lucide-react';

export default function DreamSiteFlow() {
  return (
    <section className="bg-[#F4A261]/50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          className="mb-6 text-4xl md:text-5xl font-bold leading-tight uppercase text-center text-[#4CAF50] "
        
        >
          Your Dream Website Is Just Minutes Away
        </h2>

        <p
          className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto"
         
        >
          In a simple, risk-free process, you’ll get a personalized website preview built around your brand — with your colors, tone, and story.
        </p>

        <div className="mt-12 space-y-10">
          <div
            className="flex items-start gap-4"
    
          >
            <SparklesIcon className="w-6 h-6 text-[#4CAF50] mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#1D3557]">
                Custom Design That Reflects You
              </h3>
              <p className="text-gray-600">
                We listen to your story, your values, your tone — and transform that into a website you’ll love.
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-4"
            
          >
            <ClockIcon className="w-6 h-6 text-[#4CAF50] mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#1D3557]">
                Quick, Simple & Seamless
              </h3>
              <p className="text-gray-600">
                In just a few days, you'll preview your new homepage without any obligations or long processes.
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-4"
          
          >
            <ShieldCheckIcon className="w-6 h-6 text-[#4CAF50] mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#1D3557]">
                100% Risk-Free
              </h3>
              <p className="text-gray-600">
                Get a live preview of your future website — no commitment, no payment, just proof of what’s possible.
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-16 text-center"
         
        >
          <Button className="bg-blue-800 text-white px-6 py-3 text-base hover:bg-blue-900 transition">
            Book Your Free Preview
          </Button>
          <p className="mt-3 text-sm text-gray-500">
            No risk. No pressure. Just proof.
          </p>
        </div>
      </div>
    </section>
  );
}
