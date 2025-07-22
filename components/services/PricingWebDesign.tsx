"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Check,
  X,
  Shield,
  Clock,
  Smartphone,
  Search,
  Zap,
  Globe,
  FileText,
  BarChart,
  Lock,
  Accessibility,
  RefreshCw,
  Eye,
  MessageCircle,
  Headphones,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeatureDetail {
  title: string
  description: string
  benefits: string[]
  icon: React.ReactNode
}

const featureDetails: Record<string, FeatureDetail> = {
  "12-months-updates": {
    title: "12 Months of Unlimited Content Updates",
    description: "Keep your website fresh and current without any additional costs for an entire year.",
    benefits: [
      "Update services, prices, and staff information anytime",
      "Add new photos and testimonials as they come in",
      "Seasonal promotions and special offers updates",
      "No hourly charges or revision limits",
    ],
    icon: <RefreshCw className="h-6 w-6" />,
  },
  "exit-intent": {
    title: "Exit-Intent Popup System",
    description:
      "Advanced technology that detects when visitors are about to leave and presents them with a compelling offer.",
    benefits: [
      "Recovers 25% of abandoning visitors on average",
      "Customizable offers (free consultation, discount, etc.)",
      "Smart timing that doesn't interrupt user experience",
      "Increases lead generation by up to 40%",
    ],
    icon: <Eye className="h-6 w-6" />,
  },
  "voice-search": {
    title: "Voice Search Optimization",
    description:
      "Optimized for Alexa, Google Assistant, and other voice search platforms that are rapidly growing in dental searches.",
    benefits: [
      "Captures voice searches like 'find dentist near me'",
      "Optimized for conversational search queries",
      "Future-proofs your website for emerging technology",
      "Increases visibility in voice search results",
    ],
    icon: <MessageCircle className="h-6 w-6" />,
  },
  "ada-compliance": {
    title: "ADA Accessibility Compliance",
    description:
      "Full compliance with Americans with Disabilities Act requirements, protecting you from costly lawsuits.",
    benefits: [
      "Screen reader compatibility for visually impaired users",
      "Keyboard navigation support",
      "Color contrast compliance",
      "Legal protection from ADA lawsuits (up to $75,000+ in damages)",
    ],
    icon: <Accessibility className="h-6 w-6" />,
  },
  "hipaa-hosting": {
    title: "HIPAA-Compliant Hosting",
    description: "Secure hosting environment that meets all HIPAA requirements for protecting patient data.",
    benefits: [
      "SSL encryption and secure data transmission",
      "Regular security audits and monitoring",
      "Compliance with healthcare data protection laws",
      "Avoid costly HIPAA violations (fines up to $1.5M)",
    ],
    icon: <Lock className="h-6 w-6" />,
  },
  "hipaa-forms": {
    title: "HIPAA-Compliant Patient Forms",
    description: "Secure online forms that allow patients to submit information safely while maintaining compliance.",
    benefits: [
      "Encrypted form submissions",
      "Secure patient data collection",
      "Integration with practice management systems",
      "Reduces front desk workload",
    ],
    icon: <FileText className="h-6 w-6" />,
  },
  "emergency-fixes": {
    title: "Same-Day Emergency Fixes",
    description: "If your website crashes or breaks, we guarantee to fix it within 2 hours during business hours.",
    benefits: [
      "2-hour response time guarantee",
      "24/7 monitoring for issues",
      "Immediate notification of problems",
      "No additional charges for emergency fixes",
    ],
    icon: <Zap className="h-6 w-6" />,
  },
  "load-time": {
    title: "3-Second Load Time Guarantee",
    description:
      "Fast-loading websites are crucial - slow sites lose 40% of visitors. We guarantee 3-second load times or rebuild for free.",
    benefits: [
      "Optimized images and code for speed",
      "CDN (Content Delivery Network) integration",
      "Regular performance monitoring",
      "Free rebuild if speed targets aren't met",
    ],
    icon: <Clock className="h-6 w-6" />,
  },
  "mobile-first": {
    title: "Mobile-First Responsive Design",
    description:
      "Perfect display on every device with touch-friendly booking buttons, crucial since 60%+ of dental searches are mobile.",
    benefits: [
      "Optimized for smartphones and tablets",
      "Touch-friendly buttons and navigation",
      "Fast mobile loading speeds",
      "Better Google mobile rankings",
    ],
    icon: <Smartphone className="h-6 w-6" />,
  },
  "unlimited-revisions": {
    title: "Unlimited Design Revisions",
    description: "Change anything, anytime during the first 90 days until you're 100% satisfied with your website.",
    benefits: [
      "No limit on design changes for 90 days",
      "Collaborative design process",
      "Multiple rounds of feedback incorporated",
      "100% satisfaction guarantee",
    ],
    icon: <RefreshCw className="h-6 w-6" />,
  },
  "unlimited-pages": {
    title: "Unlimited Service Pages",
    description: "Create dedicated pages for every treatment you offer with no page limits or extra fees.",
    benefits: [
      "Separate pages for Invisalign, implants, crowns, etc.",
      "Better SEO for specific treatments",
      "Detailed service descriptions and pricing",
      "No additional costs for new pages",
    ],
    icon: <Globe className="h-6 w-6" />,
  },
  "ai-optimization": {
    title: "AI Search Optimization",
    description:
      "Optimized for Google's new generative AI search results, ensuring you appear in AI-powered answer boxes.",
    benefits: [
      "Structured data for AI understanding",
      "Featured snippet optimization",
      "Voice search compatibility",
      "Future-ready for AI search evolution",
    ],
    icon: <Search className="h-6 w-6" />,
  },
  "local-seo": {
    title: "Local SEO Domination Package",
    description:
      "Every service page is hyper-optimized to rank in Google's Local Pack, Google Maps, and local searches.",
    benefits: [
      "Google My Business optimization",
      "Local keyword targeting",
      "Citation building and management",
      "Google Maps ranking improvements",
    ],
    icon: <Search className="h-6 w-6" />,
  },
  analytics: {
    title: "Advanced Analytics & Tracking",
    description:
      "Integrated dashboard and goal-tracking setup so you can see exactly how many patients your site is generating.",
    benefits: [
      "Google Analytics 4 setup",
      "Conversion tracking for appointments",
      "Monthly performance reports",
      "ROI measurement tools",
    ],
    icon: <BarChart className="h-6 w-6" />,
  },
  support: {
    title: "Ongoing Technical Support",
    description: "Beyond the initial build, ongoing support for security updates, backups, and site health checks.",
    benefits: ["Regular security updates", "Automated backups", "Site health monitoring", "Priority technical support"],
    icon: <Headphones className="h-6 w-6" />,
  },
}

const features = [
  { id: "12-months-updates", text: "12 months of unlimited content updates" },
  { id: "exit-intent", text: "Exit-intent popup system (recovers 25% of abandoning visitors)" },
  { id: "voice-search", text: "Voice search optimization for Alexa/Google Assistant" },
  { id: "ada-compliance", text: "ADA accessibility compliance (protects from lawsuits)" },
  { id: "hipaa-hosting", text: "HIPAA-compliant hosting" },
  { id: "hipaa-forms", text: "HIPAA-compliant patient forms" },
  { id: "emergency-fixes", text: "Same-day emergency fixes (2-hour guarantee)" },
  { id: "load-time", text: "3-second load time guarantee" },
  { id: "mobile-first", text: "Mobile-first responsive design" },
  { id: "unlimited-revisions", text: "Unlimited design revisions (90 days)" },
  { id: "unlimited-pages", text: "Unlimited service pages" },
  { id: "ai-optimization", text: "AI search optimization" },
  { id: "local-seo", text: "Local SEO domination package" },
  { id: "analytics", text: "Advanced analytics & tracking" },
  { id: "support", text: "Ongoing technical support" },
]

export default function WebDesignPricing() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)

  return (
    <section className="bg-white py-16 relative">
      <div className="container">
        <div className="mx-auto mb-12 text-center">
          <h2 className="mb-6 text-4xl md:text-5xl font-extrabold text-[#1D3557] leading-tight uppercase text-center">Complete Web Design Package</h2>
          <p className="text-lg text-[#1D3557]">
            Everything you need for a high-converting dental website that brings in new patients
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            className="relative overflow-hidden rounded-2xl border-2 border-[#F4A261] bg-white shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1D3557] to-[#1D3557]/90 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold">Multi-Page Website</h3>
                  <p className="mt-2 text-white/80">Professional dental website with everything included</p>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-bold text-[#4CAF50]">$3,497</div>
                  <div className="text-sm text-white/80">One-time payment</div>
                </div>
              </div>
            </div>

            {/* Guarantees Bar */}
            <div className="bg-[#4CAF50]/10 p-4">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#4CAF50]" />
                  <span className="font-medium text-[#1D3557]">90-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <X className="h-4 w-4 text-[#4CAF50]" />
                  <span className="font-medium text-[#1D3557]">No Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-[#4CAF50]" />
                  <span className="font-medium text-[#1D3557]">See Your Site Before You Pay</span>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="p-8">
              <h4 className="mb-6 text-xl font-bold text-[#1D3557]">What's Included:</h4>
              <div className="grid gap-3 md:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className="group flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-all hover:bg-[#F4A261]/5 hover:shadow-md"
                    onClick={() => setSelectedFeature(feature.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4CAF50]" />
                    <span className="text-[#1D3557] group-hover:text-[#F4A261] group-hover:font-medium transition-all">
                      {feature.text}
                    </span>
                    <motion.div
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ rotate: 90 }}
                    >
                      <ArrowRight className="h-4 w-4 text-[#F4A261]" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <Button className="bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide" size="lg">
                  <span>Get Your Custom Website Design</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="mt-3 text-sm text-[#1D3557]/70">
                  Free design consultation • No upfront payment • 90-day guarantee
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              className="relative max-w-lg w-full rounded-xl bg-white p-6 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>

              {selectedFeature && featureDetails[selectedFeature] && (
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-[#F4A261]/10 p-3 text-[#F4A261]">
                      {featureDetails[selectedFeature].icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#1D3557]">{featureDetails[selectedFeature].title}</h3>
                  </div>

                  <p className="mb-6 text-[#1D3557]/80">{featureDetails[selectedFeature].description}</p>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#1D3557]">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {featureDetails[selectedFeature].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#4CAF50]" />
                          <span className="text-sm text-[#1D3557]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 text-center">
                    <Button className="bg-[#1D3557] hover:bg-[#1D3557]/90" onClick={() => setSelectedFeature(null)}>
                      Got It
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
