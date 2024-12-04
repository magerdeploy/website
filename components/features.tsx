import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Shield, Zap, Server, BarChart } from 'lucide-react'

const features = [
  {
    title: "Multinode Support",
    description: "Scale your applications across multiple nodes for improved performance and reliability.",
    icon: Server,
  },
  {
    title: "Auto SSL via Let's Encrypt",
    description: "Secure your deployments automatically with free SSL certificates from Let's Encrypt.",
    icon: Shield,
  },
  {
    title: "Auto Provision for New Nodes",
    description: "Seamlessly add new nodes to your infrastructure with automatic provisioning.",
    icon: Zap,
  },
  {
    title: "Auto Load Balancing",
    description: "Optimize resource utilization and ensure high availability with automatic load balancing.",
    icon: BarChart,
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="dark:bg-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary rounded-md">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="dark:text-white">{feature.title}</CardTitle>
                </div>
                <CardDescription className="dark:text-gray-300">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

