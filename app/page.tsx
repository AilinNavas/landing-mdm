'use client'
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  X,
  Rocket,
} from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import HeroVsl from "@/components/services/HeroVsl"
import LightningProcess from "@/components/services/LightningProcess"
import MarketingProcess from "@/components/services/marketing-process"
import FAQAccordion from "@/components/services/faq-accordion"
import PricingSection from "@/components/services/pricing-section"



export default function WebDesignPage() {
  return (
    <div className="flex min-h-screen flex-col">


      <main className="flex-1">
        <div className="bg-[#1c2e4a] flex items-center justify-center pt-4 ">
          <Image alt="logo-mucho-dental-marketing" src={'/images/logo.webp'} width={300} height={200} priority />
        </div>

        <HeroVsl />
        <PricingSection videoSrc="/videos/pricing-video2.mp4" />



        <MarketingProcess />

        {/* Seccion azul de mockup */}
        <section className="relative overflow-hidden bg-[#1D3557] py-20 text-white">
          <div className="container grid gap-8 md:grid-cols-2 md:items-center px-4 sm:px-6 mx-auto max-w-5xl">

            {/* Website Mockup */}
            <div className="relative mx-auto max-w-md">
              {/* Desktop Mockup */}
              <div className="rounded-lg bg-white p-3 shadow-xl">
                <div className="mb-2 flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/images/web-design.webp"
                    alt="Modern dental website design"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute -bottom-4 md:-bottom-10 right-6 md:-right-10 w-[40%] rounded-lg bg-white p-2 shadow-xl">
                <div className="mb-1 flex justify-center">
                  <div className="h-1 w-8 rounded-full bg-gray-300"></div>
                </div>
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/images/mobile.webp"
                    alt="Mobile dental website design"
                    width={150}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-1 flex justify-center">
                  <div className="h-3 w-3 rounded-full border border-gray-300"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight uppercase text-center md:text-left">
                Your Website Should Attract More Patients <span className="text-[#4CAF50]">Not Just Sit There</span>
              </h1>
              <p className="text-xl leading-relaxed text-center md:text-left ">
                We create high-converting dental websites that look great, load fast, and bring in new patients.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">SEO-Optimized</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">Mobile-Friendly</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Check className="h-5 w-5 text-[#4CAF50]" />
                  <span className="text-sm font-medium">Fast-Loading</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center md:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                >
                  <Button
                    data-track="book-button"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide"
                    asChild
                  ><a
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0t84Q6FLyNHj0_TMQk1ConSYPUz4S0NMjpswNnt6Huz8o5IWpLx0kHzfW5HWhHV0-dNepCfcVp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                      Free Web Design Preview
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <p className="text-xs text-white mt-3 text-center">
                    No credit card required • Risk-free
                  </p>
                </motion.div>
              </div>
            </div>

          </div>
        </section>

        {/* 5️⃣ Before & After Section */}
        <section className="bg-white py-16">
          <div className="container px-4 sm:px-6 mx-auto max-w-5xl">
            <div className="mx-auto mb-12 text-center">
              <h2 className="md:text-5xl mb-6 text-4xl font-extrabold text-[#1D3557] leading-tight uppercase text-center">
                Before & After: The Transformation
              </h2>
              <p className="text-xl leading-relaxed text-[#1D3557]">See the difference a high-converting website makes.</p>
            </div>
            <div className="mx-auto mb-16 max-w-6xl">
              <div className="grid gap-12 md:grid-cols-2">
                {/* Before Website */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                  <div className="mb-6 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-600">
                    BEFORE
                  </div>

                  {/* Laptop Mockup */}
                  <div className="relative mx-auto mb-6 max-w-md">
                    {/* Laptop Screen */}
                    <div className="relative aspect-[16/10] rounded-t-lg bg-gray-900 p-2 shadow-2xl">
                      {/* Screen Bezel */}
                      <div className="relative h-full overflow-hidden rounded-md bg-black">
                        <video
                          src="/videos/before.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Camera Dot */}
                      <div className="absolute top-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gray-600"></div>
                    </div>

                    {/* Laptop Base */}
                    <div className="relative h-4 rounded-b-2xl bg-gradient-to-b from-gray-300 to-gray-400 shadow-lg">
                      {/* Trackpad */}
                      <div className="absolute top-1 left-1/2 h-2 w-8 -translate-x-1/2 rounded-sm bg-gray-200 shadow-inner"></div>
                    </div>

                    {/* Laptop Shadow */}
                    <div className="absolute -bottom-2 left-1/2 h-2 w-full -translate-x-1/2 rounded-full bg-black/10 blur-sm"></div>
                  </div>

                  <div className="space-y-2 flex flex-col items-start md:items-left">
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">Outdated design</span>
                    </div>
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">Slow loading speed</span>
                    </div>

                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">No clear call-to-action</span>
                    </div>
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">Not optimized for SEO</span>
                    </div>
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">Poor mobile experience</span>
                    </div>
                  </div>
                </div>

                {/* After Website */}
                <div className="rounded-lg border border-[#4CAF50] bg-white p-6 shadow-md">
                  <div className="mb-6 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-600">
                    AFTER
                  </div>

                  {/* Laptop Mockup */}
                  <div className="relative mx-auto mb-6 max-w-md">
                    {/* Laptop Screen */}
                    <div className="relative aspect-[16/10] rounded-t-lg bg-gray-900 p-2 shadow-2xl">
                      {/* Screen Bezel */}
                      <div className="relative h-full overflow-hidden rounded-md bg-black">
                        <video
                          src="/videos/after.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Camera Dot */}
                      <div className="absolute top-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gray-600"></div>
                    </div>

                    {/* Laptop Base */}
                    <div className="relative h-4 rounded-b-2xl bg-gradient-to-b from-gray-300 to-gray-400 shadow-lg">
                      {/* Trackpad */}
                      <div className="absolute top-1 left-1/2 h-2 w-8 -translate-x-1/2 rounded-sm bg-gray-200 shadow-inner"></div>
                    </div>

                    {/* Laptop Shadow */}
                    <div className="absolute -bottom-2 left-1/2 h-2 w-full -translate-x-1/2 rounded-full bg-black/10 blur-sm"></div>

                    {/* Success Glow Effect */}
                    <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#4CAF50]/20 to-transparent blur-xl -z-10"></div>
                  </div>

                  <div className="space-y-2 flex flex-col items-start md:items-left">

                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Lightning-fast loading</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Strategic CTAs that convert</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Modern, professional design</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Fully responsive on all devices</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">SEO-optimized for higher rankings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                <Button
                  data-track="book-button"
                  size="lg"
                  className="bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide"
                  asChild
                ><a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0t84Q6FLyNHj0_TMQk1ConSYPUz4S0NMjpswNnt6Huz8o5IWpLx0kHzfW5HWhHV0-dNepCfcVp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                    Free Web Design Preview
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>

                </Button>
                <p className="text-xs text-[#1D3557]/50 mt-3 text-center">
                  No credit card required • 90-day money-back guarantee
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* 7️⃣ FAQ Section */}

        <FAQAccordion />

        <LightningProcess />
        <div className="bg-[#1D3557] flex items-center justify-center py-4 mb-20 md:mb-0">
          <Image alt="logo-mucho-dental-marketing" src={'/images/logo2.webp'} width={300} height={200} />
        </div>

        <div className="bg-[#1D3557] ">

          <div className=" mx-auto px-4 py-8 max-w-4xl flex justify-between text-sm border-t border-slate-400/60">
            <div className="">
              <p className="text-slate-400 ">
                © {new Date().getFullYear()} Mucho Marketing LLC. All rights reserved.
              </p>
            </div>

            <ul className="flex space-x-4">
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-slate-400 hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>


      </main>

      {/* Sticky CTA Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white py-4 shadow-lg md:hidden">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Button
            data-track="book-button"
            className="w-full bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide"
            asChild>
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0t84Q6FLyNHj0_TMQk1ConSYPUz4S0NMjpswNnt6Huz8o5IWpLx0kHzfW5HWhHV0-dNepCfcVp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Rocket className="mr-2 h-5 w-5" />
              <span className="uppercase text-lg">Build My Website</span>
            </a>
          </Button>
        </div>
      </div>


    </div>
  )
}
