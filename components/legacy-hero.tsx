import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react"

export function LegacyHero() {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32 min-h-[90vh] flex items-center">
      {/*
        Giant Subtle W Watermark
        We use a large, very low opacity W in the background that spans across the hero,
        giving that brand presence without being overwhelming or 'weird'.
      */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden mix-blend-screen z-0">
        <span className="text-[40vw] font-black text-white/5 select-none leading-none tracking-tighter W-watermark">
          W
        </span>
      </div>

      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl pointer-events-none z-0"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">

          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-7 lg:text-left flex flex-col justify-center">

            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6 backdrop-blur-sm border border-white/20 w-fit sm:mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Speed up time-to-market
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-4 leading-[1.1]">
              <span className="block">Your <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Retool</span></span>
              <span className="block">Partner</span>
            </h1>

            {/* The new Tagline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
              We Build. We Scale. We Automate!
            </h2>

            <p className="mt-2 text-base text-gray-400 sm:text-lg lg:text-xl mb-8 max-w-xl sm:mx-auto lg:mx-0">
              Widle design, brands, build, deploy, and promotes, offering end-to-end solutions, agility in execution, and depth of specialization.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-sm shadow-primary/20 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 hover:-translate-y-0.5"
              >
                Schedule 1:1 Meeting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-lg bg-white/5 px-8 py-3.5 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Work
                <ChevronRight className="ml-2 h-4 w-4 text-gray-400" />
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center text-sm text-gray-400 font-medium">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                Trusted by 50+ clients
              </div>
              <div className="flex items-center text-sm text-gray-400 font-medium">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                Certified Experts
              </div>
            </div>
          </div>

          <div className="relative mt-16 sm:mx-auto sm:max-w-lg lg:col-span-5 lg:mx-0 lg:mt-0 flex items-center justify-center h-full">
            {/*
              The Side Hand Image
              We place the hand prominently on the right side, overlapping the UI gracefully.
            */}
            <div className="relative w-full aspect-[3/4] sm:aspect-square lg:aspect-[4/5] flex items-center justify-center group z-20">

               {/* Behind the hand glow */}
               <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-50 transition-opacity duration-700 group-hover:opacity-70"></div>

               <Image
                 src="/images/home/s-1.png"
                 alt="Widle AI Automation"
                 fill
                 className="object-contain drop-shadow-2xl z-20 transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2"
                 priority
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
               />

               {/* Floating Badges mapping the concept of 'build, grow, automate' */}
               <div className="absolute -top-4 -right-4 md:-right-8 lg:-right-12 h-20 w-20 md:h-24 md:w-24 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-2xl animate-float border border-white/20 z-30 flex items-center justify-center">
                 <Image src="/images/home/plateform-1.png" alt="Build" fill className="object-contain p-4" sizes="96px" />
               </div>
               <div className="absolute top-1/2 -left-8 md:-left-12 h-16 w-16 md:h-20 md:w-20 bg-white/10 backdrop-blur-md rounded-2xl p-3 shadow-2xl animate-float-delayed border border-white/20 z-30 flex items-center justify-center">
                 <Image src="/images/home/plateform-2.png" alt="Grow" fill className="object-contain p-3" sizes="80px" />
               </div>
               <div className="absolute -bottom-6 right-8 h-16 w-16 md:h-20 md:w-20 bg-white/10 backdrop-blur-md rounded-2xl p-3 shadow-2xl animate-float border border-white/20 z-30 flex items-center justify-center" style={{ animationDelay: '1.5s' }}>
                 <Image src="/images/home/plateform-4.png" alt="Automate" fill className="object-contain p-3" sizes="80px" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
