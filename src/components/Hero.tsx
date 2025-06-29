import React from 'react'
import self from '@/assets/self.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-gray-900">
            <div className="w-32 h-32 rounded-full bg-black flex items-center justify-center relative ">
              <Image alt="self picture" src={self.src} fill className='rounded-full border-gray-800'/>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Hi, I&apos;m Bikash Shaw
          </h1>
          
          <p className="text-lg md:text-xl mb-6 text-gray-300 leading-relaxed max-w-2xl mx-auto">
            I love code and tech like others love their lattes, wrestling core engineering, 
            and making stuff happen into URL. College? Nah, Internet&apos;s my guru. Finance terms get 
            me hyped. Always smirking at the next bug.
          </p>
          
          <p className="text-base mb-3 lg:mb-10 text-gray-400">
            If you&apos;re working on something real, let&apos;s talk.
          </p>
        </div>
      </section>
  )
}

export default Hero