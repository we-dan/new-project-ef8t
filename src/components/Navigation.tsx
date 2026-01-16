import { Button } from '@/components/ui/button';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg" />
            <span className="text-xl font-bold text-white">HealthTech</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-neutral-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-neutral-300 hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-neutral-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-neutral-300 hover:text-white">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
