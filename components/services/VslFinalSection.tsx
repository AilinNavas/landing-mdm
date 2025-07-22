// components/VslFinalSection.tsx

"use client"

import { FC } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const VslFinalSection: FC = () => {
  const handleScrollToForm = () => {
    // Puedes agregar un evento de seguimiento aquí (Meta Pixel o GA4)
    const element = document.getElementById("contact-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-[#1D3557] py-20 px-4 md:px-8 lg:px-20 text-white">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl md:text-5xl font-extrabold text-white leading-tight uppercase text-center">
              STILL THINKING ABOUT IT?
            </h2>
            <p className="text-xl leading-relaxed">See exactly what you&apos;ll get — before you ever pay.</p>
          </div>


          {/* Video Container */}
          <div className="mt-10 mb-8 aspect-video max-w-4xl mx-auto">
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#0F2540] shadow-lg">

              <div className="relative w-full aspect-video rounded-md overflow-hidden shadow-lg">

                <iframe
                  src="https://www.canva.com/design/DAGsm90S8zY/wYVdgERxYXD8L3VgbkQjfQ/watch?embed"
                  title="Canva Video"
                  className="w-full h-full rounded-md"
                  allowFullScreen
                ></iframe>
              </div>

            </div>
          </div>

          {/* Urgency Message */}
          <p className="mb-8 text-sm md:text-base font-semibold text-[#4CAF50] uppercase">
            ⚠️ Only a few free design previews left this month.
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide"
            >
              RESERVE MY FREE PREVIEW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default VslFinalSection
