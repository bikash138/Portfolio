'use client'
import React from 'react';
import { motion } from 'framer-motion';
import TwitterX from '../assets/TwitterX';
import { 
  Home, 
  FileText, 
  Github, 
  Linkedin, 
  Mail,
  Sun
} from 'lucide-react';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

const NavBar: React.FC = () => {
  const navItems: NavItem[] = [
    {
      id: 'home',
      icon: <Home className="w-5 h-5" />,
      label: 'Home',
      href: '#home'
    },
    {
      id: 'portfolio',
      icon: <FileText className="w-5 h-5" />,
      label: 'Portfolio',
      href: '#projects'
    },
    {
      id: 'github',
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/bikash138'
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bikash-shaw-5ab74727b/'
    },
    {
      id: 'twitter',
      icon: <TwitterX className='w-5 h-5'/>,
      label: 'Twitter',
      href: 'https://x.com/Bikash__Shaw'
    },
    {
      id: 'email',
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:bshaw1352@gmail.com'
    },
    {
      id: 'theme',
      icon: <Sun className="w-5 h-5" />,
      label: 'Theme',
      onClick: () => alert('Light Mode? Are you trying to blind the dev community!!')
    }
  ];

  const handleItemClick = (item: NavItem) => {
    if (item.href) {
      if (item.href.startsWith('#')) {
        // Smooth scroll to section
        const element = document.querySelector(item.href);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // External link
        window.open(item.href, '_blank');
      }
    }
    
    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex items-center gap-1 bg-black/80 backdrop-blur-xl border border-gray-800/50 rounded-full p-2 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="relative p-3 rounded-full text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -5, 5, -3, 3, 0],
              }}
              whileTap={{ 
                scale: 0.8,
                rotate: [0, -10, 10, -5, 5, 0]
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: "easeOut",
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                },
                rotate: {
                  type: "spring",
                  stiffness: 400,
                  damping: 8
                }
              }}
            >
              {/* Jelly hover background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full opacity-0"
                whileHover={{ 
                  opacity: 1,
                  scale: [1, 1.3, 1.1, 1.2, 1],
                }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut",
                  scale: {
                    type: "spring",
                    stiffness: 200,
                    damping: 8
                  }
                }}
              />
              
              {/* Icon with jelly effect */}
              <motion.div
                className="relative z-10"
                whileHover={{
                  scale: [1, 1.2, 0.9, 1.1, 1],
                  rotate: [0, 5, -5, 3, 0]
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                {item.icon}
              </motion.div>
              
              {/* Tooltip */}
              <motion.div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded-md opacity-0 pointer-events-none whitespace-nowrap"
                whileHover={{ 
                  opacity: 1, 
                  y: 2,
                  scale: [0.8, 1.1, 1]
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut"
                }}
              >
                {item.label}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-black/90" />
              </motion.div>
            </motion.button>
          ))}
        </motion.div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              animate={{
                x: [0, Math.random() * 80 - 40],
                y: [0, Math.random() * 80 - 40],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;