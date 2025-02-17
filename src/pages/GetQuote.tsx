import React, { useState } from 'react';
import { CheckCircle2, Phone, Mail } from 'lucide-react';

function GetQuote() {
  const [formData, setFormData] = useState({
    company: '',
    industry: '',
    name: '',
    email: '',
    phone: '',
    location: '',
    requirements: '',
    timeline: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if any field is empty
    for (const key in formData) {
      if (formData[key as keyof typeof formData] === '') {
        setErrorMessage('Please fill in all fields before submitting.');
        return;
      }
    }

    setErrorMessage(''); // Clear any previous error message

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/quotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Quote submitted successfully');
        setFormData({
          company: '',
          industry: '',
          name: '',
          email: '',
          phone: '',
          location: '',
          requirements: '',
          timeline: '',
        });
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit quote');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get a Quote</h1>
          <p className="text-xl text-gray-600">
            Tell us about your project and we'll provide a detailed quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Company Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Company Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Industry</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="automotive">Automotive</option>
                        <option value="electronics">Electronics</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Project Details</h2>
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Requirements
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={6}
                      value={formData.requirements}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please describe your project requirements..."
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                      Expected Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Timeline</option>
                      <option value="immediate">Immediate</option>
                      <option value="1-3months">1-3 Months</option>
                      <option value="3-6months">3-6 Months</option>
                      <option value="6+months">6+ Months</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300"
                >
                  Submit Quote Request
                </button>
              </form>
              {/* Display error message below the form */}
              {errorMessage && (
                <div className="text-red-600 font-semibold mt-4">
                  {errorMessage}
                </div>
              )}
              {isSubmitted && (
                <div className="text-center mt-8">
                  <p className="text-green-600 font-semibold">Your quote request has been submitted successfully!</p>
                </div>
              )}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'Customized solutions for your needs',
                  'Competitive pricing',
                  'Expert consultation',
                  'Quick turnaround time',
                  'Quality assurance',
                  'Ongoing support',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-md p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
              <p className="mb-6">Our team is ready to help you with your project requirements.</p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  +91 9845793886
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  vinayaka_techno@yahoo.co.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetQuote;