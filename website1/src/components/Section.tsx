import type { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
};

const Section = ({
  children,
  id,
  className = 'py-16 md:py-24',
  title,
  subtitle,
  containerClass = 'container mx-auto px-4',
  titleClass = 'text-3xl md:text-4xl font-bold text-center mb-6',
  subtitleClass = 'text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12',
}: SectionProps) => {
  return (
    <section id={id} className={`${className} w-full`}>
      <div className={containerClass}>
        {(title || subtitle) && (
          <header className="mb-12 text-center">
            {title && <h2 className={titleClass}>{title}</h2>}
            {subtitle && <p className={subtitleClass}>{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
