//import React from 'react';
import { Wrench, Cuboid, Drill, Cylinder, Layers, Blocks } from 'lucide-react';

function Specifications() {
  const specifications = [
    {
      icon: <Wrench className="h-12 w-12 text-primary-600" />,
      title: 'CNC Machining Service',
      description: '',
      features: [
        'CNC Milling:Upto 4th axis | Max. Length 1400mm | Max. width 600mm ',
        'CNC Turning (Lathe): Max. Length 700mm | Max. diameter 380mm',
        
      ],
    },
    {
      icon: <Cylinder className="h-12 w-12 text-primary-600" />,
      title: 'Lathe Job works:Max. Length 1000mm | Max Diameter 350mm',
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
      title: 'Precision Milling:Length 500mm | Height 200mm',
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
      title: 'Drilling: Max Depth 300mm',
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
      title: 'Sheet Metal Works & Assemblies: Max. Height 5000mm | Max. Length and Width 5000mm',
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Specifications</h1>
          <p className="text-xl text-gray-600">
            
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specifications.map((specifications, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">{specifications.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{specifications.title}</h3>
              <p className="text-gray-600 mb-6">{specifications.description}</p>
              <ul className="space-y-2">
                {specifications.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Material</h2>
            <p className="text-lg mb-8">
            Materials refer to the raw substances used to manufacture components and structures. 
            They vary in properties like strength, durability, machinability, and resistance to heat or corrosion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { number: 'Steel', label: 'Mild, Stainless, Tool Steel' },
                { number: 'Aluminum', label: 'lightweight, corrosion-resistant' },
                { number: 'Brass & Copper', label: 'Conductive' },
                { number: 'Cast Iron', label: 'automotive parts' },
                { number: 'Nylon', label: '' },
                { number: 'Polycarbonate', label: '' },
                { number: 'PTFE (Teflon)', label: '' },
                { number: 'Acrylic & PVC', label: '' },
                
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

export default Specifications;