import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  contact: [
    {
      icon: MapPinIcon,
      text: 'OUR OFFICES ARE IN ALL THE MAJOR PORTS',
      href: '#',
    },
    {
      icon: MapPinIcon,
      text: 'ROTTERDAM-HOUSTON-JURONG-QINGDAO-DONGJIAKOU-ANTWERP',
      href: '#',
    },
    {
      icon: EnvelopeIcon,
      text: 'info@sgxtesting.com',
      href: 'mailto:info@sgxtesting.com',
    },
    {
      icon: EnvelopeIcon,
      text: 'verification@sgxtesting.com',
      href: 'mailto:verification@sgxtesting.com',
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3">
              <img
                src="/images/sgx-logo.png"
                alt="SGX Testing and Inspection Logo"
                className="h-12 w-auto"
              />
              <h3 className="text-2xl font-bold">SGX Testing Ltd</h3>
            </div>
            <p className="mt-4 text-gray-300">
              Providing comprehensive testing and analysis services with precision and reliability for over 20 years.
            </p>
            <div className="mt-6 space-y-2">
              {navigation.contact.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/services#composition" className="text-gray-300 hover:text-white">Composition Analysis</a></li>
              <li><a href="/services#quality" className="text-gray-300 hover:text-white">Quality Control</a></li>
              <li><a href="/services#contaminants" className="text-gray-300 hover:text-white">Contaminant Testing</a></li>
              <li><a href="/services#viscosity" className="text-gray-300 hover:text-white">Viscosity Testing</a></li>
              <li><a href="/services#sulfur" className="text-gray-300 hover:text-white">Sulfur Content Analysis</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PetroTest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
