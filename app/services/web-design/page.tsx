import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Star,
  ChevronRight,
  BarChart,
  Clock,
  Shield,
  DollarSign,
  Search,
  Check,
  X,
  Globe,
  Smartphone,
  CheckCircle,
  Laptop,
  Code,
  Rocket,
  Eye,
} from "lucide-react"
import { webDesignFaqs } from "@/app/data/faqs"
import { Button } from "@/components/ui/button"
import FaqSection from "@/components/FaqSection"

export default function WebDesignPage() {
  return (
    <div className="flex min-h-screen flex-col">


      <main className="flex-1">
        {/* 1️⃣ Hero Section */}
        <section className="relative overflow-hidden bg-[#1D3557] py-20 text-white">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-[#F4A261]/20 blur-3xl"></div>
            <div className="absolute right-[5%] top-[10%] h-[250px] w-[250px] rounded-full bg-[#4CAF50]/15 blur-3xl"></div>
          </div>

          <div className="container grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold uppercase leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                Your Website Should Attract More Patients – <span className="text-[#F4A261]">Not Just Sit There.</span>
              </h1>
              <p className="text-xl">
                We create high-converting dental websites that look great, load fast, and bring in new patients.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-2">
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
                  <span className="text-sm font-medium">No Contracts</span>
                </div>
              </div>

              <div className="pt-4">
                <Button className="group bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                  <span>Get Started Today</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

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
                    src="/placeholder.svg?height=400&width=600"
                    alt="Modern dental website design"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute -bottom-10 -right-10 w-[40%] rounded-lg bg-white p-2 shadow-xl">
                <div className="mb-1 flex justify-center">
                  <div className="h-1 w-8 rounded-full bg-gray-300"></div>
                </div>
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=300&width=150"
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
          </div>
        </section>

        {/* 2️⃣ Why Your Website Matters Section */}
        <section className="bg-[#F5F5F5] py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
              Why Your Website Matters
            </h2>

            <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-6 text-center">
                <div className="mb-2 inline-block rounded-full bg-[#F4A261]/20 px-4 py-2 text-lg font-bold text-[#F4A261]">
                  Did You Know?
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    icon: <Eye className="h-10 w-10 text-[#F4A261]" />,
                    stat: "75%",
                    description: "of patients judge a practice based on its website.",
                  },
                  {
                    icon: <Clock className="h-10 w-10 text-[#F4A261]" />,
                    stat: "3 seconds",
                    description: "is all you have before visitors leave a slow website.",
                  },
                  {
                    icon: <X className="h-10 w-10 text-[#F4A261]" />,
                    stat: "90%",
                    description: "of 'cheap' websites don't optimize for SEO or conversions.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-[#1D3557]/10 p-4">{item.icon}</div>
                    <div className="mb-2 text-3xl font-bold text-[#1D3557]">{item.stat}</div>
                    <p className="text-[#1D3557]">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="mb-6 text-lg font-medium text-[#1D3557]">
                  <span className="text-[#4CAF50] font-bold">Solution:</span> We build high-performance websites
                  designed to grow your practice.
                </p>
                <Button className="bg-[#1D3557] hover:bg-[#1D3557]/90">
                  <span>See Our Designs</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 3️⃣ Web Design Packages Section */}
        <section className="relative bg-white py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">Our Web Design Packages</h2>
              <p className="text-lg text-[#1D3557]">Choose the right website for your practice</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Single Page Website */}
              <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-full bg-[#1D3557]/10 p-4">
                    <Laptop className="h-10 w-10 text-[#1D3557]" />
                  </div>
                  <div className="rounded-full bg-[#F4A261]/10 px-4 py-2 text-sm font-medium text-[#F4A261]">
                    Ready in 10 Days
                  </div>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-[#1D3557]">1. Single Page Website</h3>
                <div className="mb-4 text-3xl font-bold text-[#4CAF50]">$1,247</div>
                <p className="mb-6 text-[#1D3557]">
                  Perfect for new practices or those who need a strong online presence FAST.
                </p>

                <div className="mb-6 flex-1 space-y-3">
                  {[
                    "All Essential Sections (Services, About, Contact, Reviews)",
                    "Mobile-Friendly & SEO-Optimized",
                    "Blazing-Fast Speed & Security",
                    "Call-to-Action Strategy to Convert Visitors into Patients",
                    "Custom Domain Setup",
                    "Basic Analytics Integration",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4CAF50]" />
                      <span className="text-[#1D3557]">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="group bg-[#1D3557] hover:bg-[#1D3557]/90 w-full">
                  <span>Get My Website in 10 Days</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Traditional Multi-Page Website */}
              <div className="flex flex-col rounded-lg border-2 border-[#F4A261] bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-full bg-[#F4A261]/10 p-4">
                    <Globe className="h-10 w-10 text-[#F4A261]" />
                  </div>
                  <div className="rounded-full bg-[#4CAF50]/10 px-4 py-2 text-sm font-medium text-[#4CAF50]">
                    Most Popular
                  </div>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-[#1D3557]">2. Traditional Multi-Page Website</h3>
                <div className="mb-4 text-3xl font-bold text-[#4CAF50]">$4,497</div>
                <p className="mb-6 text-[#1D3557]">
                  For practices that want a premium website optimized for SEO & conversions.
                </p>

                <div className="mb-6 flex-1 space-y-3">
                  {[
                    "Unlimited Service Pages (Realistically up to 25)",
                    "SEO-Optimized Structure for Higher Google Rankings",
                    "Custom Design Tailored to Your Brand",
                    "Patient Forms, Blog, & Lead Capture Features",
                    "Full Conversion Strategy Built In",
                    "Advanced Analytics & Tracking",
                    "Content Management System",
                    "Ongoing Technical Support",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4CAF50]" />
                      <span className="text-[#1D3557]">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="group bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90 w-full">
                  <span>Get a High-Converting Website</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4️⃣ What Makes Us Different Section */}
        <section className="bg-[#1D3557] py-16 text-white">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
                Not Just a Website. A Patient-Generating Machine.
              </h2>
              <p className="text-lg">What makes our web design services different</p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    icon: <Search className="h-10 w-10 text-[#F4A261]" />,
                    title: "SEO + Conversion Focused",
                    description:
                      "Built to rank & turn visitors into patients. Every element is designed with conversion in mind.",
                  },
                  {
                    icon: <DollarSign className="h-10 w-10 text-[#F4A261]" />,
                    title: "Best Value for Your Investment",
                    description:
                      "No overpriced, bloated agency fees. Just high-quality websites that deliver real results.",
                  },
                  {
                    icon: <Smartphone className="h-10 w-10 text-[#F4A261]" />,
                    title: "Mobile-First Approach",
                    description:
                      "Over 70% of visitors will be on their phones. We design for mobile first, then adapt to desktop.",
                  },
                  {
                    icon: <Shield className="h-10 w-10 text-[#F4A261]" />,
                    title: "No Contracts. No Risk.",
                    description:
                      "We earn your trust, not force you into contracts. Plus, a 60-day money-back guarantee.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
                  >
                    <div className="mb-4 rounded-full bg-white/10 p-4 w-fit">{item.icon}</div>
                    <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                See Why Dentists Choose Us
              </Button>
            </div>
          </div>
        </section>

        {/* 5️⃣ Before & After Section */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
                Before & After: The Transformation
              </h2>
              <p className="text-lg text-[#1D3557]">See the difference a high-converting website makes</p>
            </div>

            <div className="mx-auto mb-16 max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Before Website */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                  <div className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-600">
                    BEFORE
                  </div>
                  <div className="mb-4 overflow-hidden rounded-lg border border-gray-200">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Before website redesign"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
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
                      <span className="text-gray-600">Poor mobile experience</span>
                    </div>
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">No clear call-to-action</span>
                    </div>
                    <div className="flex items-center">
                      <X className="mr-2 h-5 w-5 text-red-500" />
                      <span className="text-gray-600">Not optimized for SEO</span>
                    </div>
                  </div>
                </div>

                {/* After Website */}
                <div className="rounded-lg border border-[#4CAF50] bg-white p-6 shadow-md">
                  <div className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-600">
                    AFTER
                  </div>
                  <div className="mb-4 overflow-hidden rounded-lg border border-gray-200">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="After website redesign"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Modern, professional design</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Lightning-fast loading</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Fully responsive on all devices</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">Strategic CTAs that convert</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#4CAF50]" />
                      <span className="font-medium text-[#1D3557]">SEO-optimized for higher rankings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mx-auto max-w-4xl">
              <h3 className="mb-8 text-center text-2xl font-bold text-[#1D3557]">
                What Our Clients Say About Their New Websites
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    quote:
                      "Our new website doubled our leads in just 3 months. The design is beautiful, but more importantly, it converts visitors into patients.",
                    name: "Dr. Jennifer Adams",
                    location: "Bright Smile Dental, Chicago",
                    rating: 5,
                  },
                  {
                    quote:
                      "After years of wasting money on websites that looked nice but did nothing, this one actually brings in new patients every week.",
                    name: "Dr. Michael Chen",
                    location: "Premier Dental Care, Boston",
                    rating: 5,
                  },
                ].map((testimonial, i) => (
                  <div key={i} className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#F4A261] text-[#F4A261]" />
                      ))}
                    </div>

                    <blockquote className="mb-6 flex-1">
                      <p className="text-lg font-medium italic text-[#1D3557]">"{testimonial.quote}"</p>
                    </blockquote>

                    <div className="flex items-center">
                      <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-[#1D3557]">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-[#1D3557]">{testimonial.name}</div>
                        <div className="text-[#A8A8A8]">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-[#1D3557] hover:bg-[#1D3557]/90" size="lg">
                Let's Build Your Website
              </Button>
            </div>
          </div>
        </section>

        {/* 6️⃣ Our Process Section */}
        <section className="bg-[#F5F5F5] py-16">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase text-[#1D3557] md:text-4xl">
                Our Website Design Process
              </h2>
              <p className="text-lg text-[#1D3557]">Simple, transparent, and focused on results</p>
            </div>

            <div className="relative mx-auto max-w-4xl">
              <div className="absolute left-[50%] top-0 bottom-0 hidden w-0.5 -translate-x-1/2 bg-[#1D3557]/20 md:block"></div>

              <div className="space-y-12">
                {[
                  {
                    step: "1",
                    title: "Discovery",
                    description:
                      "We learn about your practice, your patients, and your goals to create a website strategy that aligns with your business objectives.",
                    icon: <Search className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "2",
                    title: "Design",
                    description:
                      "Our designers create a custom mockup of your website, focusing on both aesthetics and conversion optimization.",
                    icon: <Laptop className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "3",
                    title: "Development",
                    description:
                      "We build your website with clean code, optimized for speed, security, and search engines.",
                    icon: <Code className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "4",
                    title: "Launch",
                    description:
                      "After thorough testing, we launch your new website and provide training on how to use it effectively.",
                    icon: <Rocket className="h-6 w-6 text-white" />,
                  },
                  {
                    step: "5",
                    title: "Growth",
                    description:
                      "We monitor performance and make ongoing optimizations to ensure your website continues to attract and convert patients.",
                    icon: <BarChart className="h-6 w-6 text-white" />,
                  },
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div
                      className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        } items-center gap-8`}
                    >
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#1D3557] text-xl font-bold text-white shadow-lg md:mx-8">
                        {step.icon}
                      </div>
                      <div
                        className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:w-[calc(50%-4rem)] ${i % 2 === 0 ? "md:text-left" : "md:text-right"
                          }`}
                      >
                        <h3 className="mb-2 text-xl font-bold text-[#1D3557]">
                          {step.step}. {step.title}
                        </h3>
                        <p className="text-[#1D3557]">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7️⃣ FAQ Section */}

        <FaqSection faqs={webDesignFaqs} />

        {/* 8️⃣ Final CTA Section */}
        <section className="bg-[#1D3557] py-16 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-xl bg-[#F4A261]/10 p-8 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="mb-6 text-3xl font-bold uppercase md:text-4xl">
                  Ready for a Website That Actually Brings You Patients?
                </h2>

                <div className="mb-8 inline-block rounded-full bg-white/10 px-6 py-3">
                  <div className="flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-[#F4A261]" />
                    <span className="text-lg font-bold text-[#F4A261]">60-Day Money-Back Guarantee</span>
                  </div>
                </div>

                <p className="mb-8 text-lg">
                  Join hundreds of successful dental practices with websites that don't just look pretty—they convert
                  visitors into patients.
                </p>

                <Button className="group bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90" size="lg">
                  <span>Get a High-Converting Website Now</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="mt-4 text-sm text-white/70">
                  No contracts. No risk. Just a beautiful website that works as hard as you do.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky CTA Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white py-4 shadow-lg md:hidden">
        <div className="container">
          <Button className="w-full bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90">
            <Rocket className="mr-2 h-5 w-5" />
            <span>Build My Website</span>
          </Button>
        </div>
      </div>


    </div>
  )
}
