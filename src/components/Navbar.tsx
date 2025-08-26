'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (href: string) => href === pathname

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-lg border-b border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 text-gray-800 font-bold text-2xl hover:text-red-600 transition-colors">
          <Image
            src="/logo.jpg"
            alt="Logo "
            width={40}
            height={40}
            className="object-contain"
          />
          <span>Zhengyuan</span>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative px-1 py-2 transition-colors duration-300 hover:text-blue-600 ${
                  isActive(href) ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {label}
                {/* Souligné animé si actif */}
                {isActive(href) && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 rounded"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Mobile */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1 focus:outline-none"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 rounded transform transition duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 rounded transition duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 rounded transform transition duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 pb-4 space-y-2 text-gray-700 font-medium">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-2 rounded-lg transition-colors duration-200 hover:bg-blue-100 ${
                  isActive(href) ? 'text-blue-600 font-semibold bg-blue-50' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
