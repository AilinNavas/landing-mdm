"use client"

import { Button } from "@/components/ui/button"
import { PhoneIcon, EyeIcon, HeartIcon, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function MarketingProcess() {
  return (
    <section className="bg-[#F5F5F5] py-20 px-6">
      <div className="mx-auto">
        <h2 className="mb-6 text-4xl md:text-5xl font-extrabold text-[#1D3557] leading-tight uppercase text-center">
          Here's Exactly How It Works
        </h2>
        <p className="pt-4 text-xl text-[#1D3557] leading-relaxed max-w-4xl mx-auto text-center">
          A transparent, risk-free process that puts you in complete control.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
            
            </div>
            <h3 className="text-xl font-semibold text-[#003366] mb-3">Discovery Call</h3>
            <p className="text-[#1D3557] leading-relaxed">
              We meet for 30 minutes to understand your practice.
              <br />
              We'll gather your story, goals, and branding — no pressure, no sales pitch.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <EyeIcon className="w-8 h-8 text-white" />
              </div>
            
            </div>
            <h3 className="text-xl font-semibold text-[#003366] mb-3">See Your Draft</h3>
            <p className="text-[#1D3557] leading-relaxed">
              We design a homepage + service page — 100% custom.
              <br />
              You'll preview everything in a private review session, for free.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#003366] mb-3">Love It? You Pay.</h3>
            <p className="text-[#1D3557] leading-relaxed">
              If you approve the design, you pay on the spot.
              <br />
              If not, you owe nothing. No contracts. No commitments.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 250 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide"
            >
             Book Your Free Preview
              <ArrowRight className="ml-2 h-5 w-5 hidden md:block" />
            </Button>
          </motion.div>
            <p className="text-[#4CAF50] font-semibold text-lg uppercase mt-4">See First. Pay Later. </p>
          <p className="mt-4 text-[#1D3557] text-sm max-w-md mx-auto">
            We only invoice if you're thrilled with the preview. It's that simple.
          </p>
        </div>
      </div>
    </section>
  )
}
