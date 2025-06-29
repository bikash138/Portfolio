import { skills } from '@/data/skills'
import { Badge } from '@/components/ui/badge';import React from 'react'

const Skills = () => {
  return (
    <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills
          </h2>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-2 text-sm transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Skills