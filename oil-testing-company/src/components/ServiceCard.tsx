import { ReactNode } from 'react';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        <div className="text-primary h-6 w-6">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <a
        href="/contact"
        className="mt-4 inline-flex items-center text-primary hover:text-primary-dark font-medium"
      >
        Learn more
        <svg
          className="ml-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
}
