'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Search, 
  Compass,
  AlertTriangle,
  Zap,
  Star,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    icon: [Star, Sparkles, Zap][i % 3],
    delay: i * 0.5,
    duration: 3 + (i % 3),
  }));

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => {
          const IconComponent = element.icon;
          return (
            <motion.div
              key={element.id}
              className="absolute text-gray-800/20"
              initial={{ 
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0
              }}
              animate={{
                x: 0,
                y:0,
                opacity: [0, 0.3, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
                ease: "easeInOut"
              }}
            >
              <IconComponent className="w-8 h-8" />
            </motion.div>
          );
        })}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        {/* 404 Number with Glitch Effect */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <motion.h1
            className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent relative"
            animate={{
              textShadow: [
                "0 0 20px rgba(239, 68, 68, 0.5)",
                "0 0 40px rgba(147, 51, 234, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(239, 68, 68, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            404
          </motion.h1>
          
          {/* Glitch overlay */}
          <motion.div
            className="absolute inset-0 text-9xl md:text-[12rem] font-black text-red-500/20"
            animate={{
              x: [0, -2, 2, 0],
              opacity: [0, 0.5, 0, 0.3, 0]
            }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
          >
            404
          </motion.div>
        </motion.div>

        {/* Error Icon with Animation */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <motion.div
            className="p-4 bg-red-500/20 rounded-full border border-red-500/30"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -10, 10, -5, 5, 0],
              borderColor: "rgba(239, 68, 68, 0.6)"
            }}
            transition={{ duration: 0.3 }}
          >
            <AlertTriangle className="w-12 h-12 text-red-400" />
          </motion.div>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Page Not Found
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto">
            Oops! The page you&apos;re looking for seems to have vanished into the digital void. 
            Don&apos;t worry, even the best explorers sometimes take a wrong turn.
          </p>
        </motion.div>

        {/* Status Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
        >
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Compass className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Lost?</h3>
              <p className="text-gray-400 text-sm">Let&apos;s get you back on track</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Search className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Search</h3>
              <p className="text-gray-400 text-sm">Find what you&apos;re looking for</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Home</h3>
              <p className="text-gray-400 text-sm">Start fresh from the beginning</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Error Code Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-8"
        >
          <Badge 
            variant="secondary" 
            className="bg-red-500/20 text-red-300 border border-red-500/30 px-4 py-2 text-sm font-mono"
          >
            ERROR_CODE: 404_NOT_FOUND
          </Badge>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href='/'>
              <Button 
              size="lg" 
              className="bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 shadow-lg shadow-blue-500/25"
              >
                <Home className="w-5 h-5 mr-2" />
                  Go Home
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Fun Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-gray-500 text-sm mt-12 font-mono"
        >
          &quot;In the vast universe of code, even 404s can be beautiful&quot; ✨
        </motion.p>
      </motion.div>

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 border border-gray-800/20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default NotFoundPage;