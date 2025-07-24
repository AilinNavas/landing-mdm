"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Star, MapPin, Palette, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const features = [
  {
    id: 1,
    title: "Custom Design",
    subtitle: "Tailored to your brand",
    icon: Palette,
    color: "bg-[#4CAF50]",
  },
  {
    id: 2,
    title: "HIPAA-compliant",
    subtitle: "Secure online forms",
    icon: Eye,
    color: "bg-[#F4A261]",
  },
  {
    id: 3,
    title: "Local SEO",
    subtitle: "Google Maps visibility",
    icon: MapPin,
    color: "bg-[#1D3557]",
  },
]

interface PricingSectionProps {
  videoSrc: string
}

export default function PricingSection({ videoSrc }: PricingSectionProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section className="bg-white py-16 relative">
      <div className="container">
        <div className="mx-auto mb-12 text-center">
          <h2 className="mb-6 text-4xl md:text-5xl font-extrabold text-[#1D3557] leading-tight uppercase text-center">Complete Web Design Package</h2>
          <p className="text-lg text-[#1D3557]">
            Everything you need for a high-converting dental website that brings in new patients.
          </p>
        </div>
        {/* <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-light text-[#1D3557] mb-3 md:mb-4">Elevate Your Practice</h2>
          <p className="text-base md:text-lg text-[#1D3557]/80 max-w-2xl mx-auto px-4">
            Websites designed to attract more patients and grow your practice
          </p>    {/* Header */}
    
        {/* </motion.div> */} 

        {/* Main Content */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Video Container with Feature Cards */}
          <motion.div
            className="relative flex-shrink-0 w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Video Container */}
            <div className="relative w-full aspect-[9/10] overflow-hidden border-2">
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />

             
            </div>

            {/* Feature Cards Container - Right at the bottom edge */}
            <motion.div
              className="relative -mt-1 rounded-b-[25px] md:rounded-b-[30px] shadow-2xl p-4 md:p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className="cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    onHoverStart={() => setActiveCard(feature.id)}
                    onHoverEnd={() => setActiveCard(null)}
                  >
                    <div
                      className={cn(
                        "relative bg-white rounded-xl shadow-md border border-gray-100",
                        "p-3 md:p-4 text-center",
                        "transition-all duration-300",
                        activeCard === feature.id && "shadow-lg scale-105",
                      )}
                    >
                      {/* Icon */}
                      <div
                        className={cn(
                          "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-2 md:mb-3 mx-auto",
                          feature.color,
                        )}
                      >
                        <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>

                      {/* Content */}
                      <h4 className="text-xs md:text-sm font-semibold text-[#1D3557] mb-1 leading-tight">
                        {feature.title}
                      </h4>
                      <p className="text-[10px] md:text-xs text-[#1D3557]/70 leading-tight">{feature.subtitle}</p>

                      {/* Hover Indicator */}
                      <AnimatePresence>
                        {activeCard === feature.id && (
                          <motion.div
                            className="absolute -top-1 -right-1 w-3 h-3 bg-[#4CAF50] rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#4CAF50]/20 to-[#F4A261]/20 rounded-[50px] blur-xl -z-10"></div>
          </motion.div>

          {/* Pricing CTA */}
          <motion.div
            className="w-full max-w-md lg:max-w-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-white to-[#F4A261]/10 rounded-2xl p-6 md:p-8 shadow-xl border border-[#1D3557]/10">
             

              {/* Pricing */}
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-light text-[#1D3557] mb-2">Complete Package</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-3xl md:text-4xl font-extrabold text-[#4CAF50]">$3,497</span>
             
                </div>
                <p className="text-sm text-[#1D3557]/60">One-time payment • No hidden fees</p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-2 mb-6">
                {[
                  "Custom dental website design",
                  "1 year hosting included",
                  "Mobile-optimized & fast loading",
                  "SEO setup for local search",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#4CAF50]" />
                    </div>
                    <span className="text-sm text-[#1D3557]/80">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button className="bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide">
                Free Design Preview
                </Button>
              </motion.div>

              <p className="text-xs text-[#1D3557]/50 mt-3 text-center">
                No credit card required • 30-day money-back guarantee
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          className="mt-8 md:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-[#1D3557]/60">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#4CAF50]" />
              <span>7-day delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#4CAF50]" />
              <span>Unlimited revisions</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#4CAF50]" />
              <span>Dedicated support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
