import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"

export function Header() {
  return (
    <header className="py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">Mager</Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="#features" className="hover:underline">Features</Link></li>
          <li><Link href="#quickstart" className="hover:underline">Quick Start</Link></li>
          <li><Link href="#contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <ThemeSwitcher />
        <Button>Get Started</Button>
      </div>
    </header>
  )
}

