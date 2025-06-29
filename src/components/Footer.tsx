import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            Designed and Developed by{' '}
            <Link href="https://x.com/Bikash__Shaw" target="_blank" rel="noopener noreferrer">
              <span className="text-blue-500 font-medium hover:underline hover:decoration-dotted hover:underline-offset-4 duration-200 transition-all">
                Bikash Shaw
              </span>
            </Link>
          </p>
        </div>
      </footer>
  )
}

export default Footer