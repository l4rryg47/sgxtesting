import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPinIcon className="h-6 w-6 text-gray-400" />,
      title: 'Visit Us',
      description: '123 Energy Way, Houston, TX 77001',
      link: 'https://maps.google.com',
      linkText: 'View on map',
    },
    {
      icon: <PhoneIcon className="h-6 w-6 text-gray-400" />,
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      linkText: 'Call now',
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6 text-gray-400" />,
      title: 'Email Us',
      description: 'info@petrotest.com',
      link: 'mailto:info@petrotest.com',
      linkText: 'Send email',
    },
    {
      icon: <ClockIcon className="h-6 w-6 text-gray-400" />,
      title: 'Business Hours',
      description: 'Monday - Friday: 8:00 AM - 6:00 PM',
      additional: 'Weekends: Closed',
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
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Map */}
            <div className="mt-12 lg:mt-0 lg:col-span-1">
              <div className="bg-white py-8 px-6 shadow-lg rounded-lg overflow-hidden">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                  Our Location
                </h2>
                <p className="mt-2 text-lg text-gray-500">
                  Visit our state-of-the-art laboratory in Houston, TX.
                </p>
                <div className="mt-6 aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.2918994207067!2d-95.3692!3d29.7604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0c1c5f1b3b5%3A0x1c2a7b1b1b1b1b1b1!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">Parking Information</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Free visitor parking is available in front of our building. Additional parking is available in the adjacent garage.
                  </p>
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
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                Call Now
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="mailto:info@petrotest.com"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
