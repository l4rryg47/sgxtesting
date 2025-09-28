'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Replace with your form submission logic
      console.log('Form submitted:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Have questions about our services? Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="mt-12">
          {submitStatus && (
            <div className={`rounded-md p-4 mb-6 ${submitStatus.success ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex">
                <div className="flex-shrink-0">
                  {submitStatus.success ? (
                    <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                  ) : (
                    <ExclamationCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${submitStatus.success ? 'text-green-800' : 'text-red-800'}`}>
                    {submitStatus.message}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  className="py-3 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  id="phone"
                  autoComplete="tel"
                  className="py-3 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  {...register('phone')}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="company"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  {...register('company')}
                />
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                Service of Interest
              </label>
              <div className="mt-1">
                <select
                  id="service"
                  className="py-3 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  {...register('service')}
                  defaultValue=""
                >
                  <option value="">Select a service</option>
                  <option value="composition">Composition Analysis</option>
                  <option value="quality">Quality Control</option>
                  <option value="contaminants">Contaminant Testing</option>
                  <option value="viscosity">Viscosity Testing</option>
                  <option value="sulfur">Sulfur Content Analysis</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message *
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  rows={4}
                  className="py-3 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            
            <div className="text-center text-sm text-gray-500 sm:col-span-2">
              <p>We'll get back to you within 24 hours.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
