import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { QuickStart } from '@/components/quick-start'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <QuickStart />
      </main>
      <footer className="mt-auto py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2024 Prasetyo Wicaksono. All rights reserved.
      </footer>
    </div>
  )
}

