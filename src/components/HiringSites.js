import React from 'react';
import './HiringSites.css'; // Assuming you'll add custom styles here


const hiringSites = [
  {
    name: 'LinkedIn',
    description: 'LinkedIn is the world\'s largest professional network, offering job listings, company profiles, and networking opportunities.',
    url: 'https://www.linkedin.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg', // LinkedIn Logo
  },
  {
    name: 'Indeed',
    description: 'Indeed is one of the largest job boards, aggregating job listings from thousands of websites.',
    url: 'https://www.indeed.com',
    logo: 'https://indeed.design/static/83ab86812786bc2368a3e95258b2fa66/06186/Indeed-wordmark.webp', // Indeed Logo
  },
  {
    name: 'Monster',
    description: 'Monster is a global job search engine that also provides career advice and a resume database for employers.',
    url: 'https://www.monster.com',
    logo: 'https://recruitly.io/wp-content/uploads/2021/02/jobboards-featuredimage-1-768x427.png', // Monster Logo
  },
  {
    name: 'Naukri',
    description: 'Naukri is one of India’s leading job portals, offering job listings, career services, and networking opportunities.',
    url: 'https://www.naukri.com',
    logo: 'https://static.naukimg.com/s/0/0/i/ni-hamburger/naukri_new_logo.svg', // Naukri Logo
  },
  {
    name: 'Hired',
    description: 'Hired connects top tech talent with the world\'s most innovative companies.',
    url: 'https://hired.com',
    logo: 'https://images.squarespace-cdn.com/content/v1/5d2cd5bdc2faaf0001356f49/1572445406116-Z4O4PMVJFUUK9U50E4RN/logo.png?format=500w', // Hired Logo
  },
  {
    name: 'NaukriGulf',
    description: 'NaukriGulf is a popular job portal in the Gulf region, connecting job seekers with employers in various industries.',
    url: 'https://www.naukrigulf.com',
    logo: 'https://static.naukimg.com/s/6/205/i/ngbrand.676af934.svg', // NaukriGulf Logo
  },
];

function HiringSites() {
  return (
    
    <div className="hiring-sites-container py-16 m-10 bg-[#f9f9f9]">
      <h1 className="text-center text-4xl font-bold mb-12">Top Hiring Platforms</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 container mx-auto px-6">
        {hiringSites.map((site, index) => (
          <div key={index} className="hiring-site-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="icon-container flex justify-center mb-6">
              <img src={site.logo} alt={`${site.name} Logo`} className="h-12" />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">{site.name}</h2>
            <p className="text-center text-gray-700 mb-6">{site.description}</p>
            <div className="flex justify-center">
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-dark transition-colors"
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default HiringSites;
