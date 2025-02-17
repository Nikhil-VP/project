//import React from 'react';
import { Wrench, Cuboid, Drill, Cylinder, Layers, Blocks } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Wrench className="h-12 w-12 text-primary-600" />,
      title: 'CNC Machining Service',
      description: 'Automated, high-precision manufacturing process compatible with various materials for efficient production and prototyping.',
      features: [
        'CNC Milling',
        'CNC Turning (Lathe)',
        
      ],
    },
    {
      icon: <Cylinder className="h-12 w-12 text-primary-600" />,
      title: 'Lathe Job works',
      description: '',
      features: [
        'Precision turning',
        'Facing',
        'Threading',
        'Boring',
        'Grooving',
      ],
    },
    {
      icon: <Cuboid className="h-12 w-12 text-primary-600" />,
      title: 'Precision Milling',
      description: '',
      features: [
        'Face Milling',
        'Slotting & Keyway Cutting',
        'Drilling & Boring',
        'Contour & Profile Milling',
        'Thread Milling',
        'Chamfering & Beveling',
      ],
    },
    {
      icon: <Drill className="h-12 w-12 text-primary-600" />,
      title: 'Drilling',
      description: '',
      features: [
        'Hole Drilling',
        'Counterboring & Countersinking',
        'Reaming',
        'Tapping',
        'Spot Drilling',
      ],
    },
    {
      icon: <Layers className="h-12 w-12 text-primary-600" />,
      title: 'Welding',
      description: '',
      features: [
        'Arc Welding',
        'Gas Welding',
        'Spot Welding',
        'TIG (Tungsten Inert Gas) Welding',
        
      ],
    },
    {
      icon: <Blocks className="h-12 w-12 text-primary-600" />,
      title: 'Sheet Metal Works & Assemblies',
      description: '',
      features: [
        'Mechanical Assembly',
        'Welded Assembly',
        'Fabricated Assembly',
        
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive industrial solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Applications</h2>
            <p className="text-lg mb-8">
            These processes are widely used in various industries for manufacturing and structural applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { number: 'Automotive', label: '' },
                { number: 'Aerospace', label: '' },
                { number: 'Construction', label: '' },
                { number: 'Industrial Machinery', label: '' },
                { number: 'Electronics', label: '' },
                { number: 'Tool & Die Making', label: '' },
                { number: 'Heavy Equipment', label: '' },
                { number: 'HVAC', label: '' },
              ].map((stat, index) => (
                <div key={index} className="p-4 bg-white bg-opacity-10 rounded-lg">
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;