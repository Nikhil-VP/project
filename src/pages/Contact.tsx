
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary-600" />,
      title: 'Visit Us',
      details: ['No.18 Balaji nagar', 'Thigalarapalya Main Road(opp.Deepak Medical)', 'Near Peenya 2nd Stage ,Bangalore-560058 '],
    },
    {
      icon: <Phone className="h-6 w-6 text-primary-600" />,
      title: 'Call Us',
      details: ['+91 9845793886'],
    },
    {
      icon: <Mail className="h-6 w-6 text-primary-600" />,
      title: 'Email Us',
      details: ['vinayaka_techno@yahoo.co.in', 'vinayakatechno2015@gmail.com'],
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with our team for any inquiries or support
          </p>
        </div>

        {/* Contact Information - Now full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">{info.icon}</div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;