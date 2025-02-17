// import React from 'react';
import { Settings, Target, Users, Zap } from 'lucide-react';

function WhatWeDo() {
  const activities = [
    {
      icon: <Settings className="h-12 w-12 text-primary-600" />,
      title: 'Machinery Components',
      description: 'We manufacture a variety of machinery components used across different industries.Our expertise includes manufacturing shafts, motor bodies, coil fixtures, and custom machine parts, ensuring precision, durability, and efficiency for industrial applications.',
    },
    {
      icon: <Target className="h-12 w-12 text-primary-600" />,
      title: 'Jigs and Fixtures',
      description: 'We design and produce custom jigs and fixtures for improved efficiency and accuracy in manufacturing processes.',
    },
    {
      icon: <Zap className="h-12 w-12 text-primary-600" />,
      title: 'Frabrication Solutions',
      description: 'We provide expert welding, sheet metal fabrication, structural fabrication, and machine manufacturing solutions. From precision welding to custom sheet metal work and heavy-duty structures, we deliver high-quality, durable, and efficient fabrication services tailored to your needs.',
    },
    {
      icon: <Users className="h-12 w-12 text-primary-600" />,
      title: 'Job Works',
      description: 'We offer job work services, providing tailored solutions to meet your specific needs.',
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h1>
          <p className="text-xl text-gray-600">
            At Vinayaka Techno Industries, we combine expertise with innovation to deliver exceptional industrial solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">{activity.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
          <p className="text-lg mb-6">
          We are dedicated to providing innovative and reliable fabrication solutions that propel industries forward. With a team of skilled experts, 
          we ensure every project meets the highest standards of quality, precision, and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: '20+', label: 'Years Experience' },
              { number: '10000+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="p-4 bg-primary-700 rounded-lg">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;