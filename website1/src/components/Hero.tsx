import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const Hero = ({
  title,
  subtitle,
  primaryButtonText = 'Get Started',
  primaryButtonLink = '/get-started',
  secondaryButtonText = 'Learn More',
  secondaryButtonLink = '/about',
}: HeroProps) => {
  return (
    <section className="relative bg-black text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {primaryButtonText && (
            <Link
              to={primaryButtonLink}
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              {primaryButtonText}
            </Link>
          )}
          {secondaryButtonText && (
            <Link
              to={secondaryButtonLink}
              className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
