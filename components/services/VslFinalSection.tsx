// components/VslFinalSection.tsx

"use client"

import { FC } from "react"
import { Button } from "@/components/ui/button"

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
              <h2 className="mb-6 text-4xl md:text-5xl font-bold text-white leading-tight uppercase text-center">
                 STILL THINKING ABOUT IT?
              </h2>
              <p className="text-xl leading-relaxed">See exactly what you&apos;ll get — before you ever pay.</p>
            </div>


          {/* Video Container */}
          <div className="mt-10 mb-8 aspect-video max-w-4xl mx-auto">
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#0F2540] shadow-lg">
              {/* Placeholder for VSL - Replace with actual video embed */}
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center text-white">
                  {/* Large Play Button */}
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/80 shadow-lg transition-transform hover:scale-110">
                    <svg className="h-8 w-8 text-[#1D3557]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Watch Our Process</p>
                </div>
              </div>

              {/* Reemplaza el contenido de arriba por un iframe si se desea: */}
              {/*
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Our Website Design Process"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
            </div>
          </div>

          {/* Urgency Message */}
          <p className="mb-8 text-sm md:text-base font-semibold text-[#4CAF50] uppercase">
            ⚠️ Only a few free design previews left this month.
          </p>

          {/* CTA Button */}
          <Button
            className="mx-auto bg-[#4CAF50] text-white uppercase hover:bg-[#4CAF50]/90 w-full md:w-auto md:min-w-[260px]"
            size="lg"
            onClick={handleScrollToForm}
          >
             Reserve My Free Homepage Preview
          </Button>
        </div>
      </div>
    </section>
  )
}

export default VslFinalSection
