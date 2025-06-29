'use client'
import React, { useRef } from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'

const Contact = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const email = emailRef.current?.value || '';
    const message = messageRef.current?.value || '';
    const mailto = `mailto:bshaw1352@gmail.com?subject=Contact from ${encodeURIComponent(email)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  return (
   <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900/50 border-gray-800 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-lg">Reach Out via Email</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Email
                </label>
                <Input
                  type="email"
                  placeholder="abc@xyz.com"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-lg"
                  ref={emailRef}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your message
                </label>
                <Textarea
                  placeholder="Type your message here."
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 min-h-[120px] rounded-lg"
                  ref={messageRef}
                />
              </div>
              
              <Button
                className="w-full bg-white text-black hover:bg-gray-200 font-medium py-3 rounded-lg"
                onClick={handleSend}
              >
                Send message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
  )
}

export default Contact