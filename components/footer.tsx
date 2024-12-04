import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-[#1B2838] text-gray-300 py-6">
      <div className="container mx-auto px-4">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center mb-6">
          <Image src="/assets/logo/logo_nav.svg" width={150} height={100} alt="Logo" className="h-12 mb-2" />
          <p className="text-sm text-gray-400">© 2020-{new Date().getFullYear()} INFINITYWOW</p>
          <p className="text-xs text-gray-500 mt-1">THIS IS ONLY A TEST SERVER FOR. ALL RIGHTS RESERVED BY BLIZZARD.</p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {/* Main Column */}
          <div className="space-y-3">
            <h3 className="text-white font-medium mb-4 header-font text-lg">MAIN</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white text-gray-500 text-sm transition-colors">HOME</a></li>
              <li><a href="/" className="hover:text-white text-gray-500 text-sm transition-colors">ABOUT</a></li>
              <li><a href="/" className="hover:text-white text-gray-500 text-sm transition-colors">DISCORD</a></li>
            </ul>
          </div>

          {/* Account Column */}
          <div className="space-y-3">
            <h3 className="text-white font-medium mb-4 header-font text-lg">ACCOUNT</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white text-gray-500 text-sm transition-colors">REGISTRATION</a></li>
              <li><a href="/" className="hover:text-white text-gray-500 text-sm transition-colors">LOGIN</a></li>
              <li><a href="/" className="hover:text-white text-gray-500 text-sm transition-colors">RESTORE PASSWORD</a></li>
              <li><a href="/" className="hover:text-white text-gray-500 text-sm transition-colors">DONATIONS</a></li>
            </ul>
          </div>

          {/* Useful Column */}
          <div className="space-y-3">
            <h3 className="text-white font-medium mb-4 header-font text-lg">USEFUL</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white text-gray-500 text-sm transition-colors">WIKI</a></li>
              <li><a href="/" className="hover:text-white text-gray-500 text-sm transition-colors">STREAMS</a></li>
              <li><a href="/" className="hover:text-white text-gray-500 text-sm transition-colors">RULES</a></li>
              <li><a href="/" className="hover:text-white text-gray-500 text-sm transition-colors">SUPPORT</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex justify-center space-x-6 mt-8 pt-6 border-t border-[#2A3B50]">
          <a href="/" className="text-sm text-gray-500 hover:text-white transition-colors">
            PRIVACY POLICY
          </a>
          <a href="/" className="text-sm text-gray-500 hover:text-white transition-colors">
            USER AGREEMENT
          </a>
        </div>

        {/* Developer Credit */}
        <div className="flex items-center justify-center mt-6 space-x-2 text-sm text-gray-500">
          <span>DEVELOPED BY</span>
          <Link href="https://synapse-themes.cc" target="_blank" className="text-white flex items-center gap-x-2 hover:underline group">
            <Image src="/assets/logo/synapse.svg" width={20} height={20} alt="Synapse" className="group-hover:rotate-90 transition-all duration-500" />
            SYNAPSE-THEMES 
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer