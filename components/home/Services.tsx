

import { Search, Layers, MapPin, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


const services = [
  {
    title: "SEO",
    price: "$697/month",
    description: "Rank higher in search results and get more patients through organic traffic.",
    features: ["Keyword optimization", "Local SEO", "Google Business Profile", "Monthly reporting"],
    icon: <Search className="h-10 w-10 text-[#1D3557]" />,
    link: "/services/seo-package",
  },
  {
    title: "Marketing System",
    price: "$3,497/month",
    description: "Complete marketing solution with SEO, ads, and automation for aggressive growth.",
    features: [
      "Everything in SEO package",
      "Google & Meta ads",
      "Email marketing automation",
      "Patient acquisition system",
      "Social media post",
      "Email marketing campaigns",
      "Cancel any time",
    ],
    featured: true,
    icon: <Layers className="h-10 w-10 text-[#F4A261]" />,
    link: "/services/marketing-system",
  },
  {
    title: "Web Design",
    price: "$1,247-$4,497",
    description: "Modern, high-converting websites designed specifically for dental practices.",
    features: ["Mobile responsive", "SEO-friendly", "Patient scheduling", "One-time payment"],
    icon: <MapPin className="h-10 w-10 text-[#1D3557]" />,
    link: "/services/web-design",
  },
]

export default function ServiceOverview() {
  return (
    <section id="services" className="relative bg-white py-16 overflow-hidden">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#1D3557] md:text-4xl">What We Offer</h2>
          <p className="text-lg text-[#1D3557]">
            We handle everything so you can focus on your patients. Choose the right package for your needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
            
              className={`cursor-pointer group flex flex-col rounded-lg border p-6 hover:shadow-lg transition-all ${
                service.featured ? "border-[#F4A261] shadow-md" : "border-gray-200"
              }`}
            >
              <div className="mb-4 flex justify-between items-center">
                <div className={`rounded-full p-2 ${service.featured ? "bg-[#F4A261]/10" : "bg-[#1D3557]/10"}`}>
                  {service.icon}
                </div>
                {service.featured && (
                  <div className="rounded-full bg-[#F4A261]/10 px-3 py-1 text-center text-sm font-medium text-[#F4A261]">
                    Most Popular
                  </div>
                )}
              </div>

              <h3 className="mb-2 text-2xl font-bold text-[#1D3557]">{service.title}</h3>
              <div className="mb-4 text-2xl font-bold text-[#4CAF50]">{service.price}</div>
              <p className="mb-6 text-[#1D3557]">{service.description}</p>

              <ul className="mb-6 flex-1 space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#F4A261]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={service.link}>
                <Button className="bg-[#1D3557] hover:bg-[#1D3557]/90 w-full">Learn More</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
