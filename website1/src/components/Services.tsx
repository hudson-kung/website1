const services = [
  {
    name: 'Express Wash',
    price: '$15',
    duration: '10 min',
    popular: false,
    features: [
      'Exterior Hand Wash',
      'Rinse & Dry',
      'Tire Shine',
      'Window Cleaning',
    ],
  },
  {
    name: 'Premium Wash',
    price: '$35',
    duration: '25 min',
    popular: true,
    features: [
      'Everything in Express',
      'Interior Vacuum',
      'Dashboard Wipe Down',
      'Air Freshener',
      'Mat Cleaning',
    ],
  },
  {
    name: 'Ultimate Detail',
    price: '$75',
    duration: '60 min',
    popular: false,
    features: [
      'Everything in Premium',
      'Full Interior Detail',
      'Leather Conditioning',
      'Engine Bay Cleaning',
      'Ceramic Coat Protection',
      'Hand Wax Finish',
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Choose Your Perfect Wash
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From quick express washes to full detailing services, we have the perfect package for every car and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center text-blue-400">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">Add {service.name} Image</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:1111111111"
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Call to Book
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Need something custom? We offer fleet services and monthly memberships!</p>
          <a href="tel:1111111111" className="text-blue-600 font-semibold hover:text-blue-700 transition">
            Call us for custom packages →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
