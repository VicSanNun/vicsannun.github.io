'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resume', href: '/resume' },
  ]

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Victor Nunes
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === item.href
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 