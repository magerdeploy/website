import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function QuickStart() {
  return (
    <section id="quickstart" className="py-20 px-6 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Quick Start</h2>
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-2 dark:text-white">1. Install Mager</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm dark:text-gray-300">curl https://raw.githubusercontent.com/praswicaksono/mager-deploy/refs/heads/master/install.sh | sh</code>
          </pre>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 dark:text-white">2. Initialize your project</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm dark:text-gray-300">mager init</code>
          </pre>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 dark:text-white">3. Preview deployment in local</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm dark:text-gray-300">mager dev</code>
          </pre>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 dark:text-white">4. Deploy to production</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm dark:text-gray-300">mager deploy</code>
          </pre>
        </div>
        <div className="text-center">
          <Button as={Link} href="https://docs.mager.tel/">Read Full Documentation</Button>
        </div>
      </div>
    </section>
  )
}

