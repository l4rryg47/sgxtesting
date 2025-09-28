import Image from 'next/image';
import { CheckIcon, UsersIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  const stats = [
    { id: 1, name: 'Years of Experience', value: '20+' },
    { id: 2, name: 'Global Clients', value: '500+' },
    { id: 3, name: 'Tests Performed', value: '1M+' },
    { id: 4, name: 'Accreditations', value: '12' },
  ];

  const values = [
    {
      name: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our operations.',
      icon: CheckIcon,
    },
    {
      name: 'Expertise',
      description: 'Our team of certified professionals brings decades of combined experience in oil testing.',
      icon: UsersIcon,
    },
    {
      name: 'Innovation',
      description: 'We continuously invest in cutting-edge technology to provide the most accurate results.',
      icon: LightBulbIcon,
    },
    {
      name: 'Global Reach',
      description: 'Serving clients worldwide with consistent, reliable testing services.',
      icon: GlobeAltIcon,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-75"></div>
          <div className="absolute inset-0 bg-[url('/images/oil-rig.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About PetroTest
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Leading the way in crude oil testing and analysis with precision, reliability, and innovation.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/images/lab-technician.jpg"
                  alt=""
                  width={500}
                  height={750}
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  Founded in 2003, PetroTest has grown from a small regional laboratory to a globally recognized leader in crude oil testing and analysis. Our journey began with a simple mission: to provide the most accurate and reliable testing services to the oil and gas industry.
                </p>
                <p className="text-lg">
                  Over the years, we've invested heavily in cutting-edge technology and assembled a team of world-class scientists and engineers. Today, we serve clients across six continents, helping them make informed decisions about their crude oil assets.
                </p>
                <p className="text-lg">
                  Our commitment to excellence and customer satisfaction has earned us numerous industry awards and accreditations, but our greatest achievement is the trust our clients place in us every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by the industry
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Our numbers speak for themselves. Here's what we've achieved over the years.
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 text-lg font-medium text-gray-500">{stat.name}</dt>
                      <dd className="order-1 text-5xl font-extrabold text-primary">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-primary">Values</h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              What We Stand For
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our core values guide everything we do at PetroTest.
            </p>
          </div>

          <div className="mt-20">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {values.map((value) => (
                <div key={value.name} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                      <value.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{value.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team CTA */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to work with us?</span>
            <span className="block text-primary">Get in touch today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
