import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"

export function Header() {
  return (
    <header className="py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">Mager</Link>
      <div className="flex items-center space-x-4">
        <ThemeSwitcher />
        <Button as={Link} href='https://github.com/praswicaksono/mager-deploy'>Github</Button>
      </div>
    </header>
  )
}

