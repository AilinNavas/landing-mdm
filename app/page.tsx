import Image from "next/image"
import Link from "next/link"
import {
  CheckCircle,
  ArrowRight,
  Star,
  ChevronRight,
  BarChart,
  Clock,
  Shield,
  DollarSign,
  Search,
  MapPin,
  Layers,
} from "lucide-react"

import { generalFaqs } from "@/app/data/faqs"
import FaqSection from "@/components/FaqSection"
import { Button } from "@/components/ui/button"
import ServiceOverview from "../components/home/Services"
import PricingSection from "@/components/home/PricingSection"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">



      <main className="flex-1">
        {/* 1️⃣ Hero Section with Dynamic Gradient Background */}
        <section className="relative overflow-hidden py-20">
          <div className="container grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter text-[#1D3557] md:text-5xl lg:text-6xl">
                Dental SEO for <span className="text-[#4CAF50]">Revenue.</span>
                <span className="block text-[#F4A261]">Not vanity.</span>
              </h1>
              <p className="text-xl text-[#1D3557]">
                SEO, web design, and marketing systems built for growth-minded dentists—without the high costs or
                long-term contracts.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                  Get Started Today
                </Button>
                <Button variant="outline" className="border-[#1D3557] text-[#1D3557]" size="lg">
                  Free Consultation
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Dental marketing professional"
                fill
                className="object-cover"
                priority
              />

              {/* Google Search Overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white bg-opacity-90 p-3 shadow-lg">
                <div className="flex items-center">
                  <Search className="mr-2 h-5 w-5 text-[#4285F4]" />
                  <div className="text-sm font-medium">Best Dentist Near Me</div>
                  <div className="ml-auto flex space-x-1">
                    <div className="h-3 w-3 rounded-full bg-[#4285F4]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#EA4335]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#FBBC05]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#34A853]"></div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-[#1D3557]">
                  <span className="font-bold">Your Practice</span> - Showing in top results with our SEO
                </div>
              </div>
            </div>
          </div>

          {/* Add script for dynamic gradient that responds to cursor */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
    document.addEventListener('DOMContentLoaded', function() {
      const gradientElement = document.getElementById('dynamic-gradient-bg');
      if (!gradientElement) return;
      
      // Default animation
      let gradientPos = { x: 50, y: 50 };
      let targetPos = { x: 50, y: 50 };
      let animating = false;
      
      // Add keyframes for the gradient animation
      const style = document.createElement('style');
      style.textContent = \`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      \`;
      document.head.appendChild(style);
      
      // Track mouse movement
      document.addEventListener('mousemove', function(e) {
        // Calculate mouse position as percentage of window
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        // Set target position with some constraints to avoid extreme positions
        targetPos = {
          x: Math.max(30, Math.min(70, x)),
          y: Math.max(30, Math.min(70, y))
        };
        
        if (!animating) {
          animating = true;
          requestAnimationFrame(updateGradient);
        }
      });
      
      // Smooth animation function
      function updateGradient() {
        // Ease towards target position
        gradientPos.x += (targetPos.x - gradientPos.x) * 0.05;
        gradientPos.y += (targetPos.y - gradientPos.y) * 0.05;
        
        // Apply the position to the gradient
        gradientElement.style.backgroundPosition = \`\${gradientPos.x}% \${gradientPos.y}%\`;
        
        // Continue animation if still moving
        if (
          Math.abs(targetPos.x - gradientPos.x) > 0.1 ||
          Math.abs(targetPos.y - gradientPos.y) > 0.1
        ) {
          requestAnimationFrame(updateGradient);
        } else {
          animating = false;
        }
      }
      
      // Start with a random movement to make it dynamic even without mouse interaction
      setInterval(() => {
        if (!animating) {
          targetPos = {
            x: 30 + Math.random() * 40,
            y: 30 + Math.random() * 40
          };
          animating = true;
          requestAnimationFrame(updateGradient);
        }
      }, 3000);
    });
  `,
            }}
          />
        </section>

        {/* 2️⃣ Key Differentiators with Static Icons with Luminous Effect */}
        <section className="bg-[#F5F5F5] py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#1D3557] md:text-4xl">Why Choose Us?</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  title: "Best Value",
                  description: "One option for each service that includes everything needed, value is maximized",
                  icon: <BarChart className="h-8 w-8 text-[#F4A261]" />,
                },
                {
                  title: "No Long-Term Contracts",
                  description: "Month-to-month flexibility with guaranteed results",
                  icon: <Clock className="h-8 w-8 text-[#F4A261]" />,
                },
                {
                  title: "90-Day Money Back",
                  description: "100% money back guarantee, no questions asked",
                  icon: <Shield className="h-8 w-8 text-[#F4A261]" />,
                },
                {
                  title: "Budget Friendly",
                  description: "Save up to $50,000 in yearly marketing expenses compared to competitors",
                  icon: <DollarSign className="h-8 w-8 text-[#F4A261]" />,
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-[#1D3557] p-4 transition-transform hover:scale-110 shadow-[0 0 20px rgba(29,53,87,0.6)]">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#1D3557]">{item.title}</h3>
                  <p className="text-[#1D3557]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceOverview />

        {/* 4️⃣ Success Stories & Social Proof - Redesigned with One Impactful Review */}
        <section id="testimonials" className="bg-[#F5F5F5] py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#1D3557] md:text-4xl">Success Story</h2>

            <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="grid md:grid-cols-5">
                {/* Image Column */}
                <div className="relative md:col-span-2">
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-[]/80 to-transparent z-10"></div> */}
                  <Image
                    src="/images/top1.webp"
                    alt="Dr. Sarah Johnson"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content Column */}
                <div className="p-8 md:col-span-3">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-[#F4A261] text-[#F4A261]" />
                    ))}
                  </div>

                  <blockquote className="mb-6">
                    <p className="text-xl font-medium italic text-[#1D3557] mb-4">
                      "Joel has been a valuable asset to my endodontic practice.{" "}
                      <span className="text-[#F4A261] font-bold">
                        He skills with SEO have constantly positioned my practice at the top of the search results.
                      </span>
                      I would not hesitate to recommend Joel to anyone looking to better position their practice through
                      digital marketing."
                    </p>

                    <div className="flex items-center">
                      <div className="mr-4 h-20 w-20 overflow-hidden rounded-full bg-[#1D3557]">
                        <Image
                          src="/images/neal.png"
                          alt="Dr. Neal Horn"
                          width={100}
                          height={100}
                          className="h-full w-full"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-[#1D3557]">Dr. Neal Horn</div>
                        <div className="text-[#A8A8A8]">Southside Endodontics, Fort Worth</div>
                      </div>
                    </div>
                  </blockquote>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                    <Button className="group bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90">
                      <span>Read Full Case Study</span>
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" className="border-[#1D3557] text-[#1D3557]">
                      View More Success Stories
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5️⃣ Pricing Section with Modern Animation */}
      
      <PricingSection />

        {/* Move the Process Section here, after Pricing */}
        {/* Process Section with Modern Animation */}
        <section id="process" className="relative bg-white py-16 overflow-hidden">
          {/* Modern Animation Background */}
          <div className="absolute inset-0 -z-10">
            {/* Animated Dots Pattern */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => {
                const size = Math.random() * 8 + 4
                const left = Math.random() * 100
                const top = Math.random() * 100
                const opacity = Math.random() * 0.5 + 0.1

                return (
                  <div
                    key={i}
                    className="absolute rounded-full bg-[#1D3557]/10"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      left: `${left}%`,
                      top: `${top}%`,
                      opacity: opacity,
                    }}
                  ></div>
                )
              })}
            </div>

            {/* Flowing Lines */}
            <svg className="absolute h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0,100 Q150,50 300,100 T600,100"
                fill="none"
                stroke="#1D3557"
                strokeWidth="2"
                className="animate-[flow_20s_linear_infinite]"
              />
              <path
                d="M0,200 Q200,150 400,200 T800,200"
                fill="none"
                stroke="#F4A261"
                strokeWidth="2"
                className="animate-[flow_25s_linear_infinite]"
                style={{ animationDelay: "2s" }}
              />
              <path
                d="M0,300 Q250,250 500,300 T1000,300"
                fill="none"
                stroke="#1D3557"
                strokeWidth="2"
                className="animate-[flow_30s_linear_infinite]"
                style={{ animationDelay: "4s" }}
              />
            </svg>
          </div>

          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1D3557] md:text-4xl">Our Simple Process</h2>
              <p className="text-lg text-[#1D3557]">
                We make growing your dental practice straightforward and transparent
              </p>
            </div>

            <div className="relative mx-auto max-w-4xl">
              {/* Connecting Line */}

              <div className="grid gap-12 md:grid-cols-4">
                {[
                  {
                    step: "1",
                    title: "Discovery Call",
                    description: "We learn about your practice goals and challenges",
                    delay: "0s",
                  },
                  {
                    step: "2",
                    title: "Custom Strategy",
                    description: "We create a tailored plan for your specific needs",
                    delay: "0.2s",
                  },
                  {
                    step: "3",
                    title: "Implementation",
                    description: "We execute the strategy with precision and care",
                    delay: "0.4s",
                  },
                  {
                    step: "4",
                    title: "Growth & Scaling",
                    description: "We optimize and scale based on performance data",
                    delay: "0.6s",
                  },
                ].map((process, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col items-center text-center animate-[fadeInUp_0.8s_ease-in-out]"
                    style={{ animationDelay: process.delay }}
                  >
                    <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1D3557] text-xl font-bold text-white shadow-[0_0_15px_rgba(29,53,87,0.5)]">
                      {process.step}
                      <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#F4A261] shadow-[0_0_10px_rgba(76,175,80,0.7)]"></div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[#1D3557]">{process.title}</h3>
                    <p className="text-[#1D3557]">{process.description}</p>
                    {i < 3 && (
                      <div className="absolute -right-6 top-8 hidden text-[#1D3557] md:block">
                        <ArrowRight className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90">
                Schedule Your Discovery Call
              </Button>
            </div>
          </div>
        </section>

        {/* 6️⃣ Call-to-Action */}
        <section className="relative overflow-hidden bg-[#1D3557] py-16 text-white">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#F4A261]/10 blur-3xl animate-pulse"></div>
            <div
              className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#F4A261]/10 blur-3xl animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to grow your practice?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Join hundreds of dental practices that are thriving with our marketing solutions.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="group bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                <span>Start Now</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 text-[#1D3557]" />
              </Button>
              <Button variant="outline" className="border-white text-[#1D3557] hover:bg-white/10 hover:text-white" size="lg">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* 7️⃣ FAQ Section with Modern Animation */}
        
      <FaqSection faqs={generalFaqs} id="faqs" />

        
      </main>
 
     
    </div>
  )
}
