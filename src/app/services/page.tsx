import React from 'react';
import { BeakerIcon, ChartBarIcon, CpuChipIcon, ShieldCheckIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  const services = [
    {
      id: 'composition',
      icon: <BeakerIcon />,
      title: 'Composition Analysis',
      description: 'Detailed analysis of crude oil composition to determine quality and processing requirements.',
      details: [
        'Hydrocarbon group analysis',
        'Sulfur content measurement',
        'Nitrogen content analysis',
        'Metal content determination',
        'Acid number testing'
      ]
    },
    {
      id: 'quality',
      icon: <ShieldCheckIcon />,
      title: 'Quality Control',
      description: 'Comprehensive quality testing to ensure your crude meets industry standards and specifications.',
      details: [
        'API gravity determination',
        'Pour point analysis',
        'Flash point testing',
        'Water and sediment content',
        'Salt content measurement'
      ]
    },
    {
      id: 'contaminants',
      icon: <CpuChipIcon />,
      title: 'Contaminant Testing',
      description: 'Identification and quantification of contaminants that could affect processing and product quality.',
      details: [
        'Mercaptan content',
        'Chloride content',
        'Particulate matter',
        'Water content',
        'Sediment analysis'
      ]
    },
    {
      id: 'viscosity',
      icon: <ChartBarIcon />,
      title: 'Viscosity Testing',
      description: 'Accurate measurement of viscosity to determine flow characteristics and processing requirements.',
      details: [
        'Kinematic viscosity',
        'Dynamic viscosity',
        'Temperature-viscosity profile',
        'Viscosity index',
        'Shear stability'
      ]
    },
    {
      id: 'sulfur',
      icon: <BeakerIcon />,
      title: 'Sulfur Content Analysis',
      description: 'Precise measurement of sulfur content to meet environmental and processing specifications.',
      details: [
        'Total sulfur content',
        'Sulfur speciation',
        'Mercaptan sulfur',
        'Hydrogen sulfide',
        'Sulfur compounds distribution'
      ]
    },
    {
      id: 'distillation',
      icon: <ClockIcon />,
      title: 'Distillation Analysis',
      description: 'Comprehensive distillation testing to determine boiling range and cut points.',
      details: [
        'True boiling point (TBP) distillation',
        'Simulated distillation (SIMDIS)',
        'Atmospheric distillation',
        'Vacuum distillation',
        'Cut point analysis'
      ]
    },
    {
      id: 'stability',
      icon: <ShieldCheckIcon />,
      title: 'Stability Testing',
      description: 'Evaluation of crude oil stability to predict and prevent processing issues.',
      details: [
        'Asphaltene stability',
        'Compatibility testing',
        'Thermal stability',
        'Oxidative stability',
        'Sediment formation potential'
      ]
    },
    {
      id: 'certification',
      icon: <DocumentTextIcon />,
      title: 'Certification & Compliance',
      description: 'Testing and documentation to meet regulatory and industry standards.',
      details: [
        'ASTM methods',
        'ISO standards',
        'IP test methods',
        'GOST standards',
        'Custom testing protocols'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-75"></div>
          <div className="absolute inset-0 bg-[url('/images/oil-lab.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Comprehensive testing solutions for the petroleum industry
          </p>
        </div>
      </div>

      {/* Services Introduction */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-6">
                Petroleum Testing Capabilities focus on Diesel, Heating Oil, Gasoline, and Jet Fuel. We offer a wide variety of ASTM, EPA, IP, and ISO testing services to businesses in the energy industry.
              </p>
              <p className="mb-6">
                We guarantee accurate results and ensure comprehensive testing following industry standards. We offer fast and reliable results, up-to-minute updates and operate around the clock.
                We collect samples and also offer mail-in submitted samples. Our petroleum testing laboratory focuses on the following ASTM standards.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Diesel</h3>
                  <p className="text-gray-600">ASTM D975</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Fuel Oil</h3>
                  <p className="text-gray-600">ASTM D396</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Gasoline</h3>
                  <p className="text-gray-600">ASTM D4814</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Jet Fuel</h3>
                  <p className="text-gray-600">ASTM D1665</p>
                </div>
              </div>

              <p className="mb-4">
                Our team of certified inspectors provide independent, accurate custody transfers and measurements focusing on minimizing the potential risk to our client's product.
              </p>
              <p className="mb-4">
                With an extensive staff of highly trained and motivated inspectors and offices worldwide, SGX TESTING AND INSPECTION LLC can provide inspection services globally with the same quality and reliability our customers have come to expect from us.
              </p>
              <p className="mb-4">
                We operate at major hubs worldwide, including Singapore, New York, New Orleans, Antwerp, Philadelphia, Rotterdam, Los Angeles, Houston, and other convenient locations. Whether you are a buyer, supplier, owner, or end-user, our inspection services can help ensure your operations run smoothly and efficiently.
              </p>
              <p className="mb-8">
                As an independent third party, we will verify the quantity of your product on a ship or in a tank at load or discharge port. Our inspectors have years of experience and go through independent evaluations of their surveying knowledge every year.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Testing Services</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive testing solutions for the petroleum industry
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                        <div className="h-6 w-6 text-primary">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="ml-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="mt-4 text-gray-600">{service.description}</p>
                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-gray-900">Testing Includes:</h4>
                      <ul className="mt-2 space-y-2">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-6 py-4">
                    <a
                      href="/contact"
                      className="text-sm font-medium text-primary hover:text-primary-dark"
                    >
                      Request a quote for {service.title.toLowerCase()}
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                  <span className="block">Need a custom testing solution?</span>
                  <span className="block">We can help.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-900">
                  Our team of experts can develop customized testing protocols to meet your specific requirements.
                </p>
                <a
                  href="/contact"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-primary hover:bg-blue-50"
                >
                  Contact our specialists
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="/images/lab-equipment.jpg"
                alt="Laboratory equipment"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Accreditation */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Accreditations</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Certified to the Highest Standards
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our laboratory maintains the highest industry accreditations and certifications.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center">
                <img className="h-16" src="/images/iso-17025.png" alt="ISO 17025" />
              </div>
              <div className="col-span-1 flex justify-center">
                <img className="h-16" src="/images/astm.png" alt="ASTM" />
              </div>
              <div className="col-span-1 flex justify-center">
                <img className="h-16" src="/images/api.png" alt="API" />
              </div>
              <div className="col-span-1 flex justify-center">
                <img className="h-16" src="/images/nadcap.png" alt="NADCAP" />
              </div>
              <div className="col-span-1 flex justify-center">
                <img className="h-16" src="/images/a2la.png" alt="A2LA" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
