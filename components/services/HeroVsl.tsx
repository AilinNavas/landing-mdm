"use client"
import { Check, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const HeroVslRedesigned = () => {
  const highlights = [
    "No contracts. No commitments.",
    "100% custom design based on your brand",
    "HIPAA-compliant forms & SEO-optimized",
    "Real results, risk-free",
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="hero-vsl" className="relative overflow-hidden bg-[#1c2e4a] py-16">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left Side */}
            <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h1
                className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl uppercase text-center md:text-left"
                variants={itemVariants}
              >
                See Your New Dental Website <span className="text-[#4CAF50]">Before You Pay a Dime</span>
              </motion.h1>
              <motion.p className="text-xl text-white text-center md:text-left" variants={itemVariants}>
                We&apos;ll design a custom homepage and service page for your practice—based on your story, tone, and
                goals. You only pay if you love it.
              </motion.p>
              <motion.div className="space-y-3" variants={itemVariants}>
                {highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4CAF50]">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg font-medium text-white">{highlight}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="flex justify-center md:justify-start" variants={itemVariants}>
                <div className="pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 250 }}
                  >
                    <Button
                      size="lg"
                      onClick={scrollToContact}
                      className="w-full bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide"
                    >
                      Book My Free Design Meeting
                      <ArrowRight className="ml-2 h-5 w-5 hidden md:block" />
                    </Button>
                  </motion.div>
                  <p className="text-center text-sm text-gray-200 pt-2 font-medium">
                    We'll build your homepage first — pay only if you're thrilled.
                    <span className="text-[#4CAF50] font-semibold"> $3,497</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Video with Process Steps Below */}
            <motion.div
              className="order-last flex flex-col items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Video Container - Maximized */}
            <div className="relative aspect-[9/10] md:aspect-[9/6] overflow-hidden">
              <video
                src='/videos/hero3.mp4'
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />

             
            </div>

              {/* Process Steps Container - Below Video */}
              <motion.div
                className="w-full bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Step 1 - Meet */}
                  <motion.div
                    className="text-center space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex flex-col items-center space-y-2 justify-center">
                      <h4 className="flex items-center text-white font-semibold text-lg">
                        <svg className="w-6 h-6 mr-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        Meet
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        30-min call. No pressure.
                      </p>
                    </div>
                  </motion.div>

                  {/* Step 2 - Preview */}
                  <motion.div
                    className="text-center space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="flex flex-col items-center space-y-2 justify-center">
                      <h4 className="flex items-center text-white font-semibold text-lg">
                        <svg className="w-6 h-6 mr-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Preview
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        We show you a homepage.
                      </p>
                    </div>
                  </motion.div>

                  {/* Step 3 - Pay If You Love It */}
                  <motion.div
                    className="text-center space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <div className="flex flex-col items-center space-y-2 justify-center">
                      <h4 className="flex items-center text-white font-semibold text-lg">
                        <svg className="w-6 h-6 mr-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          />
                        </svg>
                        Pay If You Love It
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        If you're happy, you pay.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Price indicator */}
                <div className="mt-6 pt-4 border-t border-white/20 text-center">
                  <span className="text-[#4CAF50] font-bold text-xl">$3,497</span>
                  <span className="text-gray-300 text-sm ml-2">• Only after approval</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroVslRedesigned