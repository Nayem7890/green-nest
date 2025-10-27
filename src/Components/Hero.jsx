import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";
import plantsData from "../../public/plants.json";

const Hero = () => {
    const [plants, setPlants] = useState([]);

  useEffect(() => {
    setPlants(plantsData);
  }, []);

  const topRatedPlants = plants.filter(plant => plant.rating >= 4.0);

  const careTips = [
    {
      title: "Watering",
      description: "Water your plants when the top inch of soil feels dry. Overwatering is the most common cause of plant death.",
      icon: "💧"
    },
    {
      title: "Sunlight",
      description: "Most indoor plants prefer bright, indirect light. Avoid direct sunlight which can burn leaves.",
      icon: "☀️"
    },
    {
      title: "Fertilizing",
      description: "Feed your plants monthly during growing season with a balanced liquid fertilizer diluted to half strength.",
      icon: "🌱"
    }
  ];

  const experts = [
    {
      name: "Sarah Green",
      specialization: "Tropical Plants",
      image: "https://i.pinimg.com/1200x/23/28/0c/23280cd9347dc9cb073a2e06e4e08667.jpg",
      experience: "10 years"
    },
    {
      name: "Mike Plant",
      specialization: "Succulents & Cacti",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      experience: "8 years"
    },
    {
      name: "Emma Leaf",
      specialization: "Air Purifying Plants",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      experience: "12 years"
    },
    {
      name: "David Root",
      specialization: "Plant Care Consultation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      experience: "15 years"
    }
  ];

  const heroSlides = [
    {
      title: "Bring Nature Home",
      subtitle: "Transform your space with beautiful indoor plants",
      image: "https://i.pinimg.com/736x/27/54/1c/27541cd50be0edd0ee2ec355f2fd8cdf.jpg",
      cta: "Shop Plants"
    },
    {
      title: "Expert Care Tips",
      subtitle: "Learn from our green experts how to keep your plants thriving",
      image: "https://i.pinimg.com/736x/58/b9/bb/58b9bb60831a8e8fa5992d9f9a4a4a02.jpg",
      cta: "Get Advice"
    },
    {
      title: "Plant Consultation",
      subtitle: "Book a session with our plant care specialists",
      image: "https://i.pinimg.com/736x/c8/eb/a7/c8eba7f096b45c5729fded725fe79ecc.jpg",
      cta: "Book Now"
    }
  ];

  return (
    <div className="min-h-screen">
      
      <section className="hero min-h-screen">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="hero-swiper"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="hero-content text-center text-white"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '100vh'
                }}
              >
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">{slide.title}</h1>
                  <p className="mb-5 text-xl">{slide.subtitle}</p>
                  <button className="btn btn-primary bg-green-600 hover:bg-green-700 text-white">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

     
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-600 mb-4">Top Rated Indoor Plants</h2>
            <p className="text-lg text-gray-600">Discover our most loved plants</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topRatedPlants.map((plant) => (
              <div key={plant.plantId} className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={plant.image} alt={plant.plantName} className="w-full h-75 object-cover" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-green-600">{plant.plantName}</h3>
                  <p className="text-gray-600">{plant.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-yellow-500">⭐</span>
                      <span className="ml-1">{plant.rating}</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">${plant.price}</span>
                  </div>
                  <div className="card-actions justify-center">
                    <Link to={`/plants/${plant.plantId}`} className="btn bg-green-600 text-white">
  View Details
</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-600 mb-4">Plant Care Tips</h2>
            <p className="text-lg text-gray-600">Essential tips to keep your plants healthy</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careTips.map((tip, index) => (
              <div key={index} className="card bg-base-100 shadow-lg">
                <div className="card-body text-center">
                  <div className="text-6xl mb-4">{tip.icon}</div>
                  <h3 className="card-title text-green-600 justify-center">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-600 mb-4">Meet Our Green Experts</h2>
            <p className="text-lg text-gray-600">Get personalized advice from our plant specialists</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="card bg-base-100 shadow-lg">
                <div className="card-body flex flex-col items-center">
                  <div className="avatar mb-4">
                    <div className="w-35 rounded-full">
                      <img src={expert.image} alt={expert.name} />
                    </div>
                  </div>
                  <h3 className="card-title text-green-600 justify-center">{expert.name}</h3>
                  <p className="text-gray-600 font-semibold">{expert.specialization}</p>
                  <p className="text-sm text-gray-500">{expert.experience} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">🌿 Plant of the Week</h2>
            <p className="text-xl mb-8">This week's featured plant: Monstera Deliciosa</p>
            <div className="max-w-md mx-auto">
              <img 
                src="https://i.pinimg.com/1200x/ff/f3/ef/fff3efe79be2eb9352736aa87e560c23.jpg" 
                alt="Plant of the Week" 
                className="rounded-lg shadow-lg mb-4"
              />
              <p className="text-lg">
                The Monstera Deliciosa is a stunning tropical plant with distinctive split leaves. 
                Perfect for adding a jungle vibe to any space!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;