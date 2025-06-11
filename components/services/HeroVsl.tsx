'use client'

import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeroVsl = () => {
  const highlights = [
    'No contracts. No commitments.',
    '100% custom design based on your brand',
    'HIPAA-compliant forms & SEO-optimized',
    'Real results, risk-free',
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero-vsl" className="relative overflow-hidden bg-white py-20 ">
      <div className="container">
        <div className="mx-auto ">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#1D3557] md:text-5xl lg:text-6xl uppercase">
                See Your New Dental Website{' '}
                <span className="text-[#4CAF50]">Before You Pay a Dime</span>
              </h1>

              <p className="text-xl text-[#1D3557]">
                We&apos;ll design a custom homepage and service page for your practice—based on your story, tone, and
                goals. You only pay if you love it.
              </p>

              {/* Bullet Highlights */}
              <div className="space-y-3">
                {highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4CAF50]">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg font-medium text-[#1D3557]">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  className="group text-lg uppercase bg-[#4CAF50] text-white hover:bg-[#4CAF50]/70"
                  size="lg"
                  onClick={scrollToContact}
                >
                  <span>Book My Free Design Meeting</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Right Side - Video Embed */}
            <div className="order-first md:order-last">
              <div className="relative">
                <div className="relative aspect-video overflow-hidden rounded-lg bg-[#1D3557] shadow-2xl">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center text-white">
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/80 shadow-lg transition-transform hover:scale-110">
                        <svg className="h-8 w-8 text-[#1D3557]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-lg font-medium">Click to Watch Demo</p>
                    </div>
                  </div>

                  {/* Replace the above placeholder with actual video embed like:
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1"
                    title="Dental Website Design Process"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  */}
                </div>

                <p className="mt-4 text-center text-sm font-medium text-[#1D3557]">
                  Watch: How We Build Your Website Before You Ever Pay
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroVsl
