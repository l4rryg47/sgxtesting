import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPinIcon className="h-6 w-6 text-gray-400" />,
      title: 'Global Offices',
      description: 'ROTTERDAM - HOUSTON - JURONG',
      additional: 'QINGDAO - DONGJIAKOU - ANTWERP',
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6 text-gray-400" />,
      title: 'Email Us',
      description: 'info@sgxtesting.com',
      link: 'mailto:info@sgxtesting.com',
      linkText: 'Send email',
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6 text-gray-400" />,
      title: 'Verification',
      description: 'verification@sgxtesting.com',
      link: 'mailto:verification@sgxtesting.com',
      linkText: 'Send email',
    },
    {
      icon: <ClockIcon className="h-6 w-6 text-gray-400" />,
      title: 'Business Hours',
      description: '24/7 Support',
      additional: 'Global operations',
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-75"></div>
          <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Have questions about our services? Get in touch with our team today.
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Get in Touch</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              We'd love to hear from you
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our team is here to answer any questions you may have about our testing services.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-primary/10 p-2 rounded-md">
                      {item.icon}
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-base text-gray-600">{item.description}</p>
                  {item.additional && (
                    <p className="mt-1 text-base text-gray-600">{item.additional}</p>
                  )}
                  {item.link && (
                    <div className="mt-4">
                      <a
                        href={item.link}
                        className="text-base font-medium text-primary hover:text-primary-dark"
                      >
                        {item.linkText}
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                Send us a message
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            {/* Map */}
            <div className="mt-12 lg:mt-0">
              <div className="bg-white py-8 px-6 shadow-lg rounded-lg overflow-hidden">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                  Our Global Presence
                </h2>
                <p className="mt-2 text-lg text-gray-500">
                  Strategically located in major ports worldwide for your convenience.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900">Rotterdam</h3>
                    <p className="mt-1 text-sm text-gray-600">Netherlands</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900">Houston</h3>
                    <p className="mt-1 text-sm text-gray-600">USA</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900">Qingdao</h3>
                    <p className="mt-1 text-sm text-gray-600">China</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900">Additional Locations</h3>
                  <p className="mt-2 text-base text-gray-600">
                    We also have offices in Jurong, Dongjiakou, and Antwerp. Our global network ensures we can serve your needs wherever you're located.
                  </p>
                  <div className="mt-4">
                    <a 
                      href="mailto:info@sgxtesting.com" 
                      className="text-primary-600 hover:text-primary-800 font-medium"
                    >
                      Contact us for specific location details
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-100">Contact us today for a free consultation.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="mailto:info@sgxtesting.com"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                Email Us
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="mailto:verification@sgxtesting.com"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Verification
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
