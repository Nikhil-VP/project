import mach from '../images/1.png';
import mach2 from '../images/2.png';
import mach3 from '../images/3.png';


function Gallery() {
  const images = [
    {
      url: mach,
      title: 'CNC',
      description: 'In factory images',
    },
    {
      url: mach2,
      title: 'Milling Machines ',
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
      url: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718',
      title: 'Research & Development',
      description: 'Innovation lab and testing facilities',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
      title: 'Team Collaboration',
      description: 'Expert team working on solutions',
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
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;