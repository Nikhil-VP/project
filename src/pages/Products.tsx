import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Cpu, HardDrive, Cog } from 'lucide-react';

function Products() {
  const products = [
    {
      icon: <Cpu className="h-12 w-12 text-blue-600" />,
      title: 'Industrial Controllers',
      description: 'High-performance controllers for automated manufacturing systems.',
      features: ['Advanced processing capabilities', 'Real-time monitoring', 'Industry-standard protocols'],
    },
    {
      icon: <Box className="h-12 w-12 text-blue-600" />,
      title: 'Automation Systems',
      description: 'Complete automation solutions for manufacturing facilities.',
      features: ['Modular design', 'Scalable architecture', 'Remote management'],
    },
    {
      icon: <HardDrive className="h-12 w-12 text-blue-600" />,
      title: 'Data Acquisition Systems',
      description: 'Precise data collection and analysis tools for industrial processes.',
      features: ['High-speed sampling', 'Multiple input types', 'Cloud integration'],
    },
    {
      icon: <Cog className="h-12 w-12 text-blue-600" />,
      title: 'Custom Solutions',
      description: 'Tailored industrial solutions designed for specific requirements.',
      features: ['Customized development', 'Integration support', 'Ongoing maintenance'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600">
            Discover our range of innovative industrial solutions designed for performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">{product.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{product.title}</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg mb-8">
            Our team can develop tailored solutions to meet your specific industrial requirements.
          </p>
          <Link
            to="/get-quote"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition duration-300"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;