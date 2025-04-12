import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import MACH3 from '../images/panoramic-industrial-silhouette-oil-industry-factory-buildings-refinery-complex-with-pipes-and-tanks-landscape-background-illustration-vector.jpg';
import GLOBE from 'vanta/dist/vanta.globe.min';

// Define a type for VantaEffect
type VantaEffect = {
  destroy: () => void;
};

function Home() {
  const globeRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: globeRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x7318b3,
          size: 1.90,
          backgroundColor: 0x000000
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="min-h-[100sxh]">
      {/* Hero Section */}
      <div
  className="relative min-h-[100dvh] w-full bg-cover bg-center animate-moveBg overflow-hidden
             md:[background-size:200%_auto] [background-size:cover]"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${MACH3}")`,
    backgroundRepeat: 'repeat-x',
  }}
>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl md:text-6xl font-bold mb-6 text-white">
              Vinayaka Techno Industries
            </h1>
            <p className="text-xl md:text-2xl mb-8">Since 2005</p>
            <Link
              to="/get-quote"
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-primary-700 transition duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section with Vanta Background */}
      <div className="py-20" ref={globeRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-12">
              Why Choose Vinayaka Techno Industries?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Excellence',
                description: 'Our commitment to quality ensures superior products and services.',
              },
              {
                title: 'Custom Solutions',
                description: 'We understand the unique needs of each client and offer customized solutions.',
              },
              {
                title: 'Timely Delivery',
                description: 'We are committed to delivering on time.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md">
                <CheckCircle2 className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how we can help your business grow
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary-900 px-6 py-3 rounded-md text-lg font-medium hover:bg-primary-50 transition duration-300"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
