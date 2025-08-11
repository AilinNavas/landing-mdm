"use client"
import { Button } from "@/components/ui/button"
import { PhoneIcon, EyeIcon, HeartIcon, ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"


export default function MarketingProcess() {
  const steps = [
    {
      icon: PhoneIcon,
      title: "Discovery Call",
      description: "We meet for 30 minutes to understand your practice.",
      subtitle: "We'll gather your story, goals, and branding — no pressure, no sales pitch.",
      number: "01",
      delay: 0.2
    },
    {
      icon: EyeIcon,
      title: "See Your Design",
      description: "We design a homepage — 100% custom.",
      subtitle: "You'll preview everything in a private review session, for free.",
      number: "02",
      delay: 0.4
    },
    {
      icon: HeartIcon,
      title: "Love It? You Pay.",
      description: "If you approve the design, you pay on the spot.",
      subtitle: "If not, you owe nothing. No contracts. No commitments.",
      number: "03",
      delay: 0.6
    }
  ]

  return (
    <section className="bg-[#F5F5F5] py-20 relative overflow-hidden">


      <div className="container px-4 sm:px-6 mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1D3557] leading-tight uppercase">
            Here's Exactly{' '}
            <span className=" text-[#4CAF50] ">How It Works</span>
          </h2>
          <p className="pt-4 text-xl text-[#1D3557] leading-relaxed max-w-4xl mx-auto">
            A transparent, risk-free process that puts you in complete control.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: step.delay }}
                whileHover={{ y: -5 }}
              >
                {/* Connection Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#4CAF50] to-[#4CAF50]/30 transform translate-x-4 z-0"></div>
                )}

                {/* Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#4CAF50]/20 relative z-10">


                  {/* Icon */}
                  <div className="mb-6">
                    {/* Step Number */}
                    <div className=" w-12 h-12 bg-gradient-to-br from-[#4CAF50] to-[#2e7d32] rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#1D3557] mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#1D3557] leading-relaxed mb-4 font-medium">
                    {step.description}
                  </p>
                  <p className="text-[#1D3557]/80 leading-relaxed text-sm italic">
                    {step.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >

          <div className="mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
             <Button
             id="ClickBookButton"
                size="lg"
                className="bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-2xl rounded-md uppercase text-lg tracking-wide px-8 py-4"
                asChild
              ><a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0t84Q6FLyNHj0_TMQk1ConSYPUz4S0NMjpswNnt6Huz8o5IWpLx0kHzfW5HWhHV0-dNepCfcVp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              > Free Web Design Preview
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button> 
         
            </motion.div>
          </div>

          <div className="space-y-4">
            <p className="text-[#4CAF50] font-bold text-xl uppercase tracking-wide">
              See First. Pay Later.
            </p>
            <p className="text-[#1D3557] max-w-2xl mx-auto leading-relaxed">
              We only invoice if you're thrilled with the preview. It's that simple.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#1D3557]/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
              <span>No upfront costs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
              <span>No contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
              <span>100% risk-free</span>
            </div>
          </div>

        </motion.div>


      </div>
    </section>
  )
}