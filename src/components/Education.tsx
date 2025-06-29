import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import  college  from '@/assets/college.png' 
import Image from 'next/image'

const Education = () => {
  return (
   <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Education
          </h2>
          
          <Card className="bg-gray-900/50 border-gray-800 max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    {/* <GraduationCap className="w-6 h-6 text-white" /> */}
                    <Image alt='college' width={48} height={48} src={college.src} className='rounded-full'/>
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">Bachelors of Computer Application</CardTitle>
                    <CardDescription className="text-gray-400 text-sm">Chandigarh University</CardDescription>
                  </div>
                </div>
                <span className="text-sm text-gray-500">Expected July 2026</span>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
  )
}

export default Education