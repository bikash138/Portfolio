'use client'
import React, { useState } from 'react'
import { Palette, Bird, Code, ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import zivelle from '@/assets/project icons/zivelle.png'
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

const Projects = () => {

  const [visibleCards, setVisibleCards] = useState(4)

  const handleMore = () => {
    setVisibleCards((prev)=>prev + 2)
  }

  const projects = [
    {
      title: 'Zivelle',
      description: 'Built a full-stack e-commerce platform with a seller dashboard for inventory and order management, enabling smooth buying and selling experiences.',
      icon: {
        src: zivelle,
        alt: 'zivelle',
        width: 24, 
        height: 24
      },
      tags: ['Nextjs', 'Redis', 'PostgreSQL', 'Docker', 'AWS S3', 'Razorpay'],
      link: 'https://zivelle.bikashdev.com',
      github: 'https://github.com/bikash138/Zivelle'
    },
    {
      title: 'Second Brain App',
      description: 'Personal knowledge management app with AI powered semantic search for thoughts like links, images, and docs.',
      icon: <Palette className="w-6 h-6" />,
      tags: ['Nextjs', 'PostgreSQL', 'Langchain', 'QdrantDB', 'Docker'],
      link: '',
      github: 'https://github.com/bikash138/Second-Brain-App'
    },
    {
      title: 'Voice Enabled Cursor',
      description: 'Built a voice-enabled CLI Cursor that lets users write code hands-free with simple voice commands!',
      icon: <Bird className="w-6 h-6"/>,
      tags: ['Python', 'Langchain', 'Langgraph'],
      link: '',
      github: 'https://github.com/bikash138/Voice-Enabled-Cursor'
    },
    {
      title: 'Voxa',
      description: 'A real-time chat application enabling users to create rooms and send messages, with video calling feature.',
      icon: <Code className="w-6 h-6" />,
      tags: ['Nextjs', 'Tailwind CSS', 'Websockets', 'WebRTC', 'Turborepo'],
      link: '',
      github: 'https://github.com/bikash138/Voxa'
    }
  ];

  return (
    <section id="projects" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Proof of Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, visibleCards).map((project, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/70">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 relative">
                      {typeof project.icon === 'object' && 'src' in project.icon ? (
                        <Image 
                          src={project.icon.src} 
                          alt={project.icon.alt} 
                          width={project.icon.width} 
                          height={project.icon.height} 
                        />
                      ) : (
                        project.icon
                      )}
                    </div>
                    <div className='flex space-x-4'>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                      </Link>
                      {
                        project.link && (
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                          </Link>
                        )
                      }
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg font-semibold">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-gray-800 text-gray-300 text-xs px-2 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {
            visibleCards < projects.length && (
            <div className="flex justify-center mt-8">
              <Button
                onClick={handleMore}
                className="cursor-pointer"
              >
                Load More...
              </Button>
            </div>
            )
          }
        </div>
      </section>
  )
}

export default Projects