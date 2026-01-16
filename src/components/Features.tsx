import { Card } from '@/components/ui/card';

const features = [
  {
    icon: '🏥',
    title: 'Patient Management',
    description: 'Comprehensive patient records, appointment scheduling, and real-time health monitoring in one unified platform.'
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Advanced analytics and insights to help healthcare providers make data-driven decisions and improve patient outcomes.'
  },
  {
    icon: '🔒',
    title: 'HIPAA Compliant',
    description: 'Enterprise-grade security with full HIPAA compliance to protect sensitive patient data and maintain privacy.'
  },
  {
    icon: '📱',
    title: 'Mobile Access',
    description: 'Access patient data and manage workflows from anywhere with our fully responsive mobile applications.'
  },
  {
    icon: '🤖',
    title: 'AI-Powered Insights',
    description: 'Leverage artificial intelligence to predict health trends, automate documentation, and assist in diagnosis.'
  },
  {
    icon: '🔗',
    title: 'Seamless Integration',
    description: 'Connect with existing EHR systems, lab equipment, and third-party healthcare applications effortlessly.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Powerful features designed specifically for modern healthcare organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-neutral-800/50 border-neutral-700 p-6 hover:bg-neutral-800/70 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
