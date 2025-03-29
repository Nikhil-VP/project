import mach from '../images/1.png';
import mach2 from '../images/2.png';
import mach3 from '../images/3.png';
import mach4 from '../images/23.jpg';
import mach5 from '../images/1.jpg';
import mach6 from '../images/WhatsApp Image 2025-03-29 at 10.06.15_8f92f9b2.jpg';
import mach7 from '../images/WhatsApp Image 2025-03-29 at 10.06.15_c4b78d35.jpg';
import mach8 from '../images/WhatsApp Image 2025-03-29 at 10.06.16_4fc1a6df.jpg';
import mach9 from '../images/WhatsApp Image 2025-03-29 at 10.06.16_f0d736fc.jpg';
import mach10 from '../images/WhatsApp Image 2025-03-29 at 10.06.17_153d7c26.jpg';
import mach11 from '../images/WhatsApp Image 2025-03-29 at 10.06.18_17ccd0fc.jpg';
import mach12 from '../images/WhatsApp Image 2025-03-29 at 10.06.18_2e964ebf.jpg';
import mach13 from '../images/WhatsApp Image 2025-03-29 at 10.06.19_30025bea.jpg';



function Gallery() {
  const images = [
    {
      url: mach,
      title: 'CNC',
      description: 'In factory images',
    },
    {
      url: mach2,
      title: 'Milling Machines',
      description: '',
    },
    {
      url: mach3,
      title: 'Turning machines',
      description: '',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
      title: 'MSME certification',
      description: '',
    },
    {
      url: mach4,
      title: 'Customer products',
      description: '',
    },
    {
      url: mach5,
      title: '',
      description: '',
    },
  ];
  const imagescustomer = [
    {
      url: mach6,
      title: '',
      description: '',
    },
    {
      url: mach7,
      title: '',
      description: '',
    },
    {
      url: mach8,
      title: '',
      description: '',
    },
    {
      url: mach9,
      title: '',
      description: '',
    },
    {
      url: mach10,
      title: '',
      
    },
    {
      url: mach11,
      title: '',
      
    },
    {
      url: mach12,
      title: '',
      description: '',
    },
    {
      url: mach13,
      title: '',
      description: '',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600">
            Take a visual journey through our facilities and projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                alt={image.title}
                className="w-full h-64 object-cover"
                style={{ height: '500px' }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
          
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Section</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imagescustomer.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                alt={image.title}
                className="w-full h-64 object-cover"
                style={{ height: '500px' }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
          
        </div>
    </div>
  );
}

export default Gallery;