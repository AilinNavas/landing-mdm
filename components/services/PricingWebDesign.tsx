'use client';

import { CheckCircle, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function PricingWebDesign() {
    return (
        <section className="relative bg-gradient-to-br from-[#f0f4f8] to-white py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D3557] leading-tight uppercase">
                        Web Design Package
                    </h2>
                    <p className="mt-4 text-xl text-[#1D3557]/80">
                        Everything you need to grow your practice with a high-performing website.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="max-w-3xl mx-auto backdrop-blur-xl bg-white/80 rounded-md shadow-2xl border border-[#4CAF50]/30 p-8 md:p-10"
                >
                    <div className="mb-6 flex items-center justify-between">
                        <div className="rounded-full bg-[#4CAF50]/10 p-4">
                            <Globe className="h-10 w-10 text-[#4CAF50]" />
                        </div>
                        <div className="bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md">
                            ⭐ Most Popular
                        </div>
                    </div>

                    <h3 className="mb-2 text-2xl font-bold text-[#003366] uppercase">
                        Multi-Page Website
                    </h3>
                    <div className="mb-4 text-4xl font-bold text-[#4CAF50] tracking-tight">$4,497</div>
                    <p className="mb-6 text-[#1D3557] text-lg">
                        Ideal for dental practices ready to dominate Google rankings and convert more patients.
                    </p>

                    <div className="mb-8 space-y-4">
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
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.3 }}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle className="h-5 w-5 text-[#4CAF50] mt-1" />
                                <span className="text-[#1D3557] text-base">{feature}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 250 }}
                    >
                        <Button
                            size="lg"
                            className="w-full bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide"
                        >
                            Get a High-Converting Website
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>

                    
                </motion.div>
            </div>
        </section>
    );
}
