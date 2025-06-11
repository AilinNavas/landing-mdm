
import { Button } from '@/components/ui/button';
import { SparklesIcon, ClockIcon, ShieldCheckIcon } from 'lucide-react';

export default function DreamSiteFlow() {
  return (
    <section className="bg-[#F5F5F5] py-20 px-6">
      <div className=" mx-auto">
        <h2
          className="mb-6 text-4xl md:text-5xl font-bold text-[#1D3557] leading-tight uppercase text-center "
        
        >
          Your Dream Website Is Just Minutes Away
        </h2>

        <p
          className="mt-4 text-lg text-[#1D3557] text-center max-w-2xl mx-auto"
         
        >
          In a simple, risk-free process, you’ll get a personalized website preview.
        </p>

        <div className="mt-12 space-y-10 max-w-4xl mx-auto">
          <div
            className="flex items-start gap-4"
    
          >
            <div className='p-4 bg-[#4CAF50]/10 rounded-full flex items-center justify-center'>
            <SparklesIcon className="w-6 h-6 text-[#4CAF50] mt-1" /></div>
            <div>
              <h3 className="text-xl font-semibold text-[#003366]">
                Custom Design That Reflects You
              </h3>
              <p className="text-[#1D3557]">
                We listen to your story, your values, your tone — and transform that into a website you’ll love.
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-4"
            
          ><div className='p-4 bg-[#4CAF50]/10 rounded-full flex items-center justify-center'>
            <ClockIcon className="w-6 h-6 text-[#4CAF50] mt-1" /> </div>
            <div>
              <h3 className="text-xl font-semibold text-[#003366]">
                Quick, Simple & Seamless
              </h3>
              <p className="text-[#1D3557]">
                In just a few days, you'll preview your new homepage without any obligations or long processes.
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-4"
          
          ><div className='p-4 bg-[#4CAF50]/10 rounded-full flex items-center justify-center'>
            <ShieldCheckIcon className="w-6 h-6 text-[#4CAF50] mt-1" /></div>
            <div>
              <h3 className="text-xl font-semibold text-[#003366]">
                100% Risk-Free
              </h3>
              <p className="text-[#1D3557]">
                Get a live preview of your future website — no commitment, no payment, just proof of what’s possible.
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-16 text-center"
         
        >
          <Button className="bg-[#4CAF50] px-6 py-3 hover:bg-[#4CAF50] text-white uppercase transition">
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
