'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  BeakerIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import ServiceCard from '@/components/ServiceCard';

// Sample carousel images (replace with your actual images)
const carouselImages = [
  { 
    id: 1, 
    alt: 'Oil rig at sunset',
    src: '/images/oil-rig.jpg' 
  },
  { 
    id: 2, 
    alt: 'Laboratory testing',
    src: '/images/lab-testing.jpg' 
  },
  { 
    id: 3, 
    alt: 'Oil sample analysis',
    src: '/images/oil-sample.jpg' 
  },
  { 
    id: 4, 
    alt: 'Industrial equipment',
    src: '/images/equipment.jpg' 
  },
];

// Services data
const services = [
  {
    icon: <BeakerIcon className="h-8 w-8" />,
    title: 'Composition Analysis',
    description: 'Detailed analysis of crude oil composition to determine quality and processing requirements.'
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8" />,
    title: 'Quality Control',
    description: 'Comprehensive quality testing to ensure your crude meets industry standards and specifications.'
  },
  {
    icon: <ClockIcon className="h-8 w-8" />,
    title: 'Contaminant Testing',
    description: 'Identification and quantification of contaminants that could affect processing and product quality.'
  },
  {
    icon: <CheckCircleIcon className="h-8 w-8" />,
    title: 'Viscosity Testing',
    description: 'Accurate measurement of viscosity to determine flow characteristics and processing requirements.'
  }
];

interface CarouselProps {
  images: Array<{ id: number; alt: string; src: string }>;
  currentSlide: number;
  onNext: () => void;
  onPrev: () => void;
  onDotClick: (index: number) => void;
}

const Carousel = ({ images, currentSlide, onNext, onPrev, onDotClick }: CarouselProps) => (
  <div className="relative h-full w-full overflow-hidden rounded-lg shadow-xl">
    {images.map((image, index) => (
      <div
        key={image.id}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <img 
          src={image.src} 
          alt={image.alt} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = `https://placehold.co/800x500/1e3a8a/ffffff?text=${encodeURIComponent(image.alt)}`;
          }}
        />
      </div>
    ))}
    
    <button
      onClick={onPrev}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md z-10 transition-all duration-200 hover:shadow-lg"
      aria-label="Previous slide"
    >
      <ChevronLeftIcon className="h-6 w-6 text-primary" />
    </button>
    
    <button
      onClick={onNext}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md z-10 transition-all duration-200 hover:shadow-lg"
      aria-label="Next slide"
    >
      <ChevronRightIcon className="h-6 w-6 text-primary" />
    </button>
    
    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2 rounded-full transition-all ${
            index === currentSlide ? 'bg-white w-6' : 'bg-white/50 w-2'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#F2542D] to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left side - Text content */}
              <div className="w-full lg:w-1/2 xl:pr-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Precision Crude Oil Testing & Analysis
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Delivering accurate, reliable, and timely testing services for the oil and gas industry with over 20 years of expertise. Our state-of-the-art laboratory ensures the highest standards in oil analysis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="btn btn-primary"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    href="/services"
                    className="btn btn-secondary"
                  >
                    Our Services
                  </Link>
                </div>
              
                {/* Trust indicators */}
                <div className="mt-12 flex flex-wrap gap-6">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2" />
                  <span className="text-gray-700">Certified Technicians</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2" />
                  <span className="text-gray-700">24/7 Emergency Service</span>
                </div>
              </div>
            </div>

            {/* Right side - Image carousel */}
            <div className="w-full lg:w-1/2 h-96 lg:h-[32rem] relative rounded-xl overflow-hidden shadow-2xl">
              <Carousel 
                images={carouselImages}
                currentSlide={currentSlide}
                onNext={nextSlide}
                onPrev={prevSlide}
                onDotClick={goToSlide}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Testing Services
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Comprehensive testing solutions tailored to your needs
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
