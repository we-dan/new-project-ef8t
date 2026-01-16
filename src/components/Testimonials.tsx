import { Card } from '@/components/ui/card';

const testimonials = [
  {
    quote: "This platform has revolutionized how we manage patient care. The efficiency gains are remarkable.",
    author: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    organization: "Metro Health Systems"
  },
  {
    quote: "The AI-powered insights have helped us identify health trends early and provide proactive care to our patients.",
    author: "Dr. Michael Chen",
    role: "Director of Clinical Operations",
    organization: "Valley Medical Center"
  },
  {
    quote: "Security and compliance were our top concerns. This solution exceeded our expectations on both fronts.",
    author: "Jessica Williams",
    role: "Healthcare IT Director",
    organization: "Regional Care Network"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-neutral-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            See what healthcare professionals are saying about our platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-neutral-800/50 border-neutral-700 p-8 hover:bg-neutral-800/70 transition-all"
            >
              <div className="mb-6 text-cyan-400 text-4xl">"</div>
              <p className="text-neutral-300 mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="border-t border-neutral-700 pt-4">
                <div className="font-semibold text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-neutral-400">
                  {testimonial.role}
                </div>
                <div className="text-sm text-neutral-500">
                  {testimonial.organization}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
