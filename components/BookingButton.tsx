'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button'; // adjust import if needed

// Make sure this exists globally
declare global {
    interface Window {
        fbq?: (...args: any[]) => void;
    }
}

const BookingButton = () => {
    const handleClick = () => {
        if (typeof window.fbq === 'function') {
            window.fbq('trackCustom', 'ClickBookNow');
        }
    };

    return (
        <motion.div className="flex justify-center md:justify-start">
            <div className="pt-4">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 250 }}
                >
                    <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide"
                        asChild
                    >
                        <a
                            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0t84Q6FLyNHj0_TMQk1ConSYPUz4S0NMjpswNnt6Huz8o5IWpLx0kHzfW5HWhHV0-dNepCfcVp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                            onClick={handleClick}
                        >
                            Book My Free Design Meeting
                            <ArrowRight className="ml-2 h-5 w-5 hidden md:inline-block" />
                        </a>
                    </Button>
                </motion.div>
              
            </div>
        </motion.div>
    );
};

export default BookingButton;