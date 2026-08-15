import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react"

export function LegacyHero() {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
      {/* Background decoration elements to mimic widle.studio */}
      <div className="absolute inset-0 bg-[url('/images/home/thunder__1_.png')] bg-no-repeat bg-[center_top_-10rem] opacity-20 bg-contain mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left flex flex-col justify-center">

            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6 backdrop-blur-sm border border-white/20 w-fit sm:mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Speed up time-to-market
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Your <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Retool</span> Partner
            </h1>

            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl mb-8">
              Widle design, brands, build, deploy, and promotes, offering end-to-end solutions, agility in execution, and depth of specialization.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
              >
                Schedule 1:1 Meeting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-lg bg-white/5 px-8 py-3.5 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/10 transition-all duration-200"
              >
                Explore Work
                <ChevronRight className="ml-2 h-4 w-4 text-gray-400" />
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                Trusted by 50+ clients
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                Certified Experts
              </div>
            </div>
          </div>

          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md bg-white/5 p-4 border border-white/10 backdrop-blur-sm">
               <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square">
                 <Image
                   src="/images/home/Retool_Agency_Partner_Badge.png"
                   alt="Retool Agency Partner"
                   fill
                   className="object-contain"
                   priority
                 />
               </div>

               {/* Floating elements to mimic the original site's dynamic feel */}
               <div className="absolute -top-6 -right-6 h-24 w-24 bg-white rounded-xl p-3 shadow-xl animate-bounce-slow hidden sm:block">
                 <Image src="/images/home/plateform-1.png" alt="Platform" fill className="object-contain p-4" />
               </div>
               <div className="absolute top-1/2 -left-10 h-20 w-20 bg-white rounded-xl p-3 shadow-xl animate-float hidden sm:block">
                 <Image src="/images/home/plateform-2.png" alt="Platform" fill className="object-contain p-3" />
               </div>
               <div className="absolute -bottom-4 right-10 h-20 w-20 bg-white rounded-xl p-3 shadow-xl animate-float-delayed hidden sm:block">
                 <Image src="/images/home/plateform-4.png" alt="Platform" fill className="object-contain p-3" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
