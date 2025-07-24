
// import { Button } from '@/components/ui/button';
// import { SparklesIcon, ClockIcon, ShieldCheckIcon, ArrowRight } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function DreamSiteFlow() {
//   return (
//     <section className="bg-[#F5F5F5] py-20 px-6">
//       <div className=" mx-auto">
//         <h2
//           className="mb-6 text-4xl md:text-5xl font-extrabold text-[#1D3557] leading-tight uppercase text-center "

//         >
//           Your Dream Website Is Just Minutes Away
//         </h2>

//         <p
//           className="mt-4 text-lg text-[#1D3557] text-center max-w-2xl mx-auto"

//         >
//           In a simple, risk-free process, you’ll get a personalized website preview.
//         </p>

//         <div className="mt-12 space-y-10 max-w-4xl mx-auto">
//           <div
//             className="flex items-start gap-4"

//           >
//             <div className='p-4 bg-[#4CAF50]/10 rounded-full flex items-center justify-center'>
//               <SparklesIcon className="w-6 h-6 text-[#4CAF50] mt-1" /></div>
//             <div>
//               <h3 className="text-xl font-semibold text-[#003366]">
//                 Custom Design That Reflects You
//               </h3>
//               <p className="text-[#1D3557]">
//                 We listen to your story, your values, your tone — and transform that into a website you’ll love.
//               </p>
//             </div>
//           </div>

//           <div
//             className="flex items-start gap-4"

//           ><div className='p-4 bg-[#4CAF50]/10 rounded-full flex items-center justify-center'>
//               <ClockIcon className="w-6 h-6 text-[#4CAF50] mt-1" /> </div>
//             <div>
//               <h3 className="text-xl font-semibold text-[#003366]">
//                 Quick, Simple & Seamless
//               </h3>
//               <p className="text-[#1D3557]">
//                 In just a few days, you'll preview your new homepage without any obligations or long processes.
//               </p>
//             </div>
//           </div>

//           <div
//             className="flex items-start gap-4"

//           ><div className='p-4 bg-[#4CAF50]/10 rounded-full flex items-center justify-center'>
//               <ShieldCheckIcon className="w-6 h-6 text-[#4CAF50] mt-1" /></div>
//             <div>
//               <h3 className="text-xl font-semibold text-[#003366]">
//                 100% Risk-Free
//               </h3>
//               <p className="text-[#1D3557]">
//                 Get a live preview of your future website — no commitment, no payment, just proof of what’s possible.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div
//           className="mt-16 text-center max-w-3xl mx-auto"

//         >
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 250 }}
//           >
//             <Button
//               size="lg"
//               className=" bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-lg rounded-md uppercase text-lg tracking-wide"
//             >
//               Get a Website
//               <ArrowRight className="ml-2 h-5 w-5 hidden md:block" />
//             </Button>
//           </motion.div>

//           <p className="mt-3 text-sm text-[#1D3557]">
//             No risk. No pressure. Just proof.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Button } from '@/components/ui/button';
import { SparklesIcon, ClockIcon, ShieldCheckIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DreamSiteFlow() {
  const features = [
    {
      icon: SparklesIcon,
      title: "Custom Design That Reflects You",
      description: "We listen to your story, your values, your tone — and transform that into a website you'll love.",
      delay: 0.2
    },
    {
      icon: ClockIcon,
      title: "Quick, Simple & Seamless",
      description: "In just a few days, you'll preview your new homepage without any obligations or long processes.",
      delay: 0.4
    },
    {
      icon: ShieldCheckIcon,
      title: "100% Risk-Free",
      description: "Get a live preview of your future website — no commitment, no payment, just proof of what's possible.",
      delay: 0.6
    }
  ];

  return (
    <section className="bg-[#1D3557] py-20 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#4CAF50]/10 via-transparent to-[#F4A261]/10"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight uppercase">
            Your Dream Website Is{' '}
            <span className="text-[#4CAF50]">Just Minutes Away</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            In a simple, risk-free process, you'll get a personalized website preview that showcases your practice's unique story.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full transition-all duration-300 group-hover:bg-white/15 group-hover:border-[#4CAF50]/30">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#2e7d32] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to See Your Future Website?
            </h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Join hundreds of dental professionals who've transformed their online presence with our risk-free preview process.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#4CAF50] to-[#2e7d32] text-white hover:from-[#45a049] hover:to-[#256029] transition-all shadow-2xl rounded-xl uppercase text-lg tracking-wide px-8 py-4 font-bold"
              >
               Get a Website
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
                <span>No risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
                <span>No pressure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
                <span>Just proof</span>
              </div>
            </div>
          </div>
        </motion.div>

      
      </div>
    </section>
  );
}