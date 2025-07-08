"use client"


import React, { useState, useEffect, useRef } from 'react';

interface TimelineItem {
  year: string;
  active: boolean;
  title?: string;
  description?: string;
  imageSrc?: string;
}

const MilestoneAligned: React.FC = () => {
  const [activeYear, setActiveYear] = useState('2025');
  const [isMobile, setIsMobile] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);


  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Listen for resize events
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Scroll content into view when active year changes
  useEffect(() => {
    if (contentRef.current && !isMobile) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeYear, isMobile]);

  // Handle year click with animation
  const handleYearClick = (year: string) => {
    if (year === activeYear) return;

    setShowContent(false);

    setTimeout(() => {
      setActiveYear(year);
      setShowContent(true);
    }, 300);
  };

  // Timeline data with more dummy items
  const timelineItems: TimelineItem[] = [
    {
      year: '2025',
      active: true,
      title: 'FUTURE INNOVATION AWARD',
      description: 'Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2024',
      active: true,
      title: 'EXCELLENCE IN DESIGN',
      description: 'Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2023',
      active: true,
      title: 'BEST DEVELOPMENT OF THE YEAR',
      description: 'Lorem ipsum Dolor Sit Amet Consectetur. Mauris Leo Pharetra Convallis.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2022',
      active: true,
      title: 'STARTUP OF THE YEAR',
      description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2021',
      active: true,
      title: 'DIGITAL TRANSFORMATION LEADER',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2020',
      active: true,
      title: 'RESILIENCE AWARD',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2019',
      active: true,
      title: 'CUSTOMER SATISFACTION EXCELLENCE',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2018',
      active: true,
      title: 'SUSTAINABLE DEVELOPMENT AWARD',
      description: 'Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2017',
      active: true,
      title: 'INNOVATION IN REAL ESTATE',
      description: 'Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2016',
      active: true,
      title: 'MARKET EXPANSION SUCCESS',
      description: 'Placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2015',
      active: true,
      title: 'TECHNOLOGY INTEGRATION AWARD',
      description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2014',
      active: true,
      title: 'QUALITY ASSURANCE EXCELLENCE',
      description: 'Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2013',
      active: true,
      title: 'COMMUNITY DEVELOPMENT LEADER',
      description: 'Nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2012',
      active: true,
      title: 'ARCHITECTURAL INNOVATION',
      description: 'Qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2011',
      active: true,
      title: 'LANDMARK PROJECT COMPLETION',
      description: 'Eum fugiat quo voluptas nulla pariatur at vero eos et accusamus et iusto odio.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2010',
      active: true,
      title: 'DECADE OF EXCELLENCE',
      description: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2009',
      active: true,
      title: 'CRISIS MANAGEMENT AWARD',
      description: 'Et quas molestias excepturi sint occaecati cupiditate non provident similique sunt.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2008',
      active: true,
      title: 'LUXURY SEGMENT PIONEER',
      description: 'In culpa qui officia deserunt mollitia animi id est laborum et dolorum fuga.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2007',
      active: true,
      title: 'REGIONAL EXPANSION SUCCESS',
      description: 'Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2006',
      active: true,
      title: 'CUSTOMER TRUST AWARD',
      description: 'Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2005',
      active: true,
      title: 'QUALITY CONSTRUCTION AWARD',
      description: 'Maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2004',
      active: true,
      title: 'SAFETY STANDARDS EXCELLENCE',
      description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2003',
      active: true,
      title: 'DESIGN INNOVATION AWARD',
      description: 'Eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2002',
      active: true,
      title: 'MILESTONE PROJECT DELIVERY',
      description: 'Rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2001',
      active: true,
      title: 'NEW MILLENNIUM VISION',
      description: 'Consequatur aut perferendis doloribus asperiores repellat nam libero tempore cum soluta.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2000',
      active: true,
      title: 'Y2K TRANSITION SUCCESS',
      description: 'Nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1999',
      active: true,
      title: 'CENTURY END ACHIEVEMENT',
      description: 'Facere possimus omnis voluptas assumenda est omnis dolor repellendus temporibus autem.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1998',
      active: true,
      title: 'MARKET LEADERSHIP AWARD',
      description: 'Quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1997',
      active: true,
      title: 'CONSTRUCTION EXCELLENCE',
      description: 'Repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1996',
      active: true,
      title: 'TEAM ACHIEVEMENT AWARD',
      description: 'Delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1995',
      active: true,
      title: 'MID-DECADE MILESTONE',
      description: 'Asperiores repellat nam libero tempore cum soluta nobis est eligendi optio cumque.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1994',
      active: true,
      title: 'GROWTH ACCELERATION',
      description: 'Nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1993',
      active: true,
      title: 'STRATEGIC PARTNERSHIP',
      description: 'Assumenda est omnis dolor repellendus temporibus autem quibusdam et aut officiis debitis.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1992',
      active: true,
      title: 'OPERATIONAL EXCELLENCE',
      description: 'Aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1991',
      active: true,
      title: 'FOUNDATION STRENGTHENING',
      description: 'Non recusandae itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1990',
      active: true,
      title: 'COMPANY ESTABLISHMENT',
      description: 'Voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      imageSrc: '/assets/images/milestone.png'
    }
  ];


  const activeItem = timelineItems.find(item => item.year === activeYear);

  return (
    <div className="bg-white py-8 md:py-16 px-4 max-w-[1255px] mx-auto ">
      <div className=''>
        {/* Header */}
        <div className={`mb-8 md:mb-12 `}>
          <div className="flex items-center mb-2">
            <h2 className="text-[22px] sm:text-[36px] leading-[32px] sm:leading-[48px] text-[#0A84FF] uppercase">
            Milestone
          </h2>
          </div>
      
        </div>

        {/* Timeline Items */}
        <div className="flex flex-col md:flex-row">
          {/* Timeline Years */}
          <div className="w-full md:w-1/2">
            <div className="py-6 md:py-12 max-h-[600px] md:max-h-[600px] overflow-y-auto space-y-14 md:mt-[20px] text-[#107BC0]">
              {timelineItems.map((item, index) => (
                <div key={item.year} className="mb-10 md:mb-0">
                  {/* DESKTOP VIEW - Keep original layout */}
                  <div className="hidden md:block">
                    {item.year === activeYear ? (
                      <div className={``}
                        style={{ animationDelay: `${index * 150}ms` }}>
                        <div className="flex flex-row gap-7">
                          <p className="font-semibold transition-colors duration-300 cursor-pointer text-[#107BC0]"
                            onClick={() => handleYearClick(item.year)}>
                            {item.year}
                          </p>
                          <div className="ml-6 transition-opacity duration-300">
                            <h3 className="text-2xl font-bold">{item.year}</h3>
                            <h4 className="uppercase text-sm font-[600] mt-1 text-[#000000]">{item.title}</h4>
                            <p className="text-sm text-[#787878] font-[600] mt-1">{item.description}</p>
                          </div>
                        </div>
                        <hr className="mt-4 border-gray-200" />
                      </div>
                    ) : (
                      <div 
                        style={{ animationDelay: `${index * 150}ms` }}>
                        <p className="text-gray-400 font-semibold cursor-pointer hover:text-gray-600 transition-colors duration-300"
                          onClick={() => handleYearClick(item.year)}>
                          {item.year}
                        </p>
                        <hr className="mt-1 border-gray-200" />
                      </div>
                    )}
                  </div>

                  {/* MOBILE VIEW - Modified to match reference image */}
                  <div className="md:hidden">
                    {item.year === activeYear ? (
                      <div className={``}
                        style={{ animationDelay: `${index * 150}ms` }}>
                        {/* Mobile layout with year horizontally aligned */}
                        <div className="mb-4">
                          {/* Content block with both years side by side, followed by title and description */}
                          <div className={`transition-opacity duration-300 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                            {/* Horizontal display with both years */}
                            <div className="flex items-center mb-2 gap-5">
                              {/* First year display (smaller, gray) */}
                              <p className="text-[#107BC0] font-[600] text-base ">
                                {item.year}
                              </p>
                              {/* Second year display (larger, bold) */}
                              <h3 className="text-[#107BC0] text-2xl font-bold">{item.year}</h3>
                            </div>
                            <div className='max-w-[303px] mx-auto pl-[10px]'>

                            <h4 className="uppercase text-sm font-[600] mt-1 text-[#000000]">{item.title}</h4>
                            <p className="text-sm text-[#787878] font-[600] mt-1 mb-4">{item.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Image below on mobile */}
                        {item.imageSrc && (
                          <div className={`overflow-hidden w-full mx-auto max-w-[380px] h-[280px] relative transition-all duration-500 ease-in-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <img
                              src={item.imageSrc}
                              alt={`${item.year} - ${item.title}`}
                              className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                            />
                          </div>
                        )}
                        
                        <hr className="mt-4 border-gray-200" />
                      </div>
                    ) : (
                      /* Inactive years just show the year with gray color */
                      <div className={``}
                        style={{ animationDelay: `${index * 150}ms` }}>
                        <p className="text-gray-400 font-semibold cursor-pointer hover:text-gray-600 transition-colors duration-300"
                          onClick={() => handleYearClick(item.year)}>
                          {item.year}
                        </p>
                        <hr className="mt-1 border-gray-200" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image (only on desktop) */}
          <div className="hidden md:flex md:w-1/2 items-start justify-center md:justify-end">
            {activeItem?.imageSrc && (
              <div className={`overflow-hidden  sm:min-h-[560px] sm:max-w-[550px] sm:max-h-[560px] transition-all duration-500 ease-in-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ maxWidth: '90%' }}>
                <img
                  src={activeItem.imageSrc}
                  alt={`${activeItem.year} - ${activeItem.title}`}
                  className="w-full h-full md:py-[20px] lg:py-0  min-h-[560px] max-w-[550px] max-h-[560px] object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneAligned;
