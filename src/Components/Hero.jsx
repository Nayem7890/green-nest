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

  const topRatedPlants = plants.filter((plant) => plant.rating >= 4.6);

  const careTips = [
    {
      title: "Watering",
      description: "Water your plants when the top inch of soil feels dry. Overwatering is the most common cause of plant death.",
      icon: "💧",
    },
    {
      title: "Sunlight",
      description: "Most indoor plants prefer bright, indirect light. Avoid direct sunlight which can burn leaves.",
      icon: "☀️",
    },
    {
      title: "Fertilizing",
      description: "Feed your plants monthly during growing season with a balanced liquid fertilizer diluted to half strength.",
      icon: "🌱",
    },
  ];

  const experts = [
    {
      name: "Sarah Green",
      specialization: "Tropical Plants",
      image: "https://i.pinimg.com/1200x/23/28/0c/23280cd9347dc9cb073a2e06e4e08667.jpg",
      experience: "10 years",
    },
    {
      name: "Mike Plant",
      specialization: "Succulents & Cacti",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      experience: "8 years",
    },
    {
      name: "Emma Leaf",
      specialization: "Air Purifying Plants",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      experience: "12 years",
    },
    {
      name: "David Root",
      specialization: "Plant Care Consultation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      experience: "15 years",
    },
  ];

  const heroSlides = [
    {
      title: "Bring Nature Home",
      subtitle: "Transform your space with beautiful indoor plants",
      image: "https://i.pinimg.com/736x/27/54/1c/27541cd50be0edd0ee2ec355f2fd8cdf.jpg",
      cta: "Shop Plants",
      link: "/plants",
    },
    {
      title: "Expert Care Tips",
      subtitle: "Learn from our green experts how to keep your plants thriving",
      image: "https://i.pinimg.com/736x/58/b9/bb/58b9bb60831a8e8fa5992d9f9a4a4a02.jpg",
      cta: "Get Advice",
      link: "/care-tips",
    },
    {
      title: "Plant Consultation",
      subtitle: "Book a session with our plant care specialists",
      image: "https://i.pinimg.com/736x/c8/eb/a7/c8eba7f096b45c5729fded725fe79ecc.jpg",
      cta: "Book Now",
      link: "/consultation",
    },
  ];

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x300?text=Plant+Image";
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`Thank you for subscribing with ${email}!`);
    e.target.reset();
  };

  return (
    <div className="min-h-screen">
      
      {/* HERO SECTION - 65vh height requirement */}
      <section className="hero w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="hero-swiper"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex items-center justify-center text-center text-white"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "65vh",
                  minHeight: "65vh",
                  maxHeight: "65vh",
                }}
              >
                <div className="container mx-auto px-4 max-w-7xl">
                  <div className="max-w-2xl mx-auto">
                    <h1 className="mb-5 text-4xl md:text-5xl font-bold drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="mb-5 text-lg md:text-xl drop-shadow-md">
                      {slide.subtitle}
                    </p>
                    <Link
                      to={slide.link}
                      className="btn bg-green-600 hover:bg-green-700 text-white px-8 border-none"
                    >
                      {slide.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* TOP RATED ITEMS - 4 columns requirement */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
              Top Rated Indoor Plants
            </h2>
            <p className="text-lg text-base-content/70">
              Discover our most loved plants
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topRatedPlants.slice(0, 8).map((plant) => (
              <div
                key={plant.plantId}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
              >
                <figure className="h-56 overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.plantName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={handleImageError}
                  />
                </figure>
                <div className="card-body flex flex-col flex-1 p-6">
                  <h3 className="card-title text-green-600 dark:text-green-400 text-xl">
                    {plant.plantName}
                  </h3>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500 text-lg">⭐</span>
                      <span className="font-semibold text-base-content">
                        {plant.rating}
                      </span>
                    </div>
                    <span className="text-green-600 dark:text-green-400 font-bold text-xl">
                      ${plant.price}
                    </span>
                  </div>
                  <div className="card-actions mt-auto pt-4 justify-center">
                    <Link
                      to={`/plants/${plant.plantId}`}
                      className="btn bg-green-600 hover:bg-green-700 text-white w-full border-none"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARE TIPS */}
      <section className="py-20 bg-green-50 dark:bg-green-900/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
              Plant Care Tips
            </h2>
            <p className="text-lg text-base-content/70">
              Essential tips to keep your plants healthy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careTips.map((tip, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
              >
                <div className="card-body text-center p-8">
                  <div className="text-6xl mb-4">{tip.icon}</div>
                  <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-base-content/70 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTS - 4 columns */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
              Meet Our Green Experts
            </h2>
            <p className="text-lg text-base-content/70">
              Get personalized advice from our plant specialists
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
              >
                <div className="card-body flex flex-col items-center p-6">
                  <div className="avatar mb-4">
                    <div className="w-32 h-32 rounded-full ring ring-green-600 dark:ring-green-400 ring-offset-base-100 ring-offset-2">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        loading="lazy"
                        onError={handleImageError}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-green-600 dark:text-green-400 text-center mb-2">
                    {expert.name}
                  </h3>
                  <p className="text-base-content/80 font-semibold text-center mb-1">
                    {expert.specialization}
                  </p>
                  <p className="text-sm text-base-content/60">
                    {expert.experience} experience
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANT OF THE WEEK */}
      <section className="py-20 bg-green-600 dark:bg-green-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🌿 Plant of the Week
            </h2>
            <p className="text-xl mb-8 opacity-90">
              This week's featured plant: Monstera Deliciosa
            </p>
            <div className="max-w-lg mx-auto">
              <img
                src="https://i.pinimg.com/1200x/ff/f3/ef/fff3efe79be2eb9352736aa87e560c23.jpg"
                alt="Monstera Deliciosa - Plant of the Week"
                className="rounded-xl shadow-2xl mb-6 w-full"
                loading="lazy"
                onError={handleImageError}
              />
              <p className="text-lg leading-relaxed opacity-90">
                The Monstera Deliciosa is a stunning tropical plant with distinctive split leaves.
                Perfect for adding a jungle vibe to any space!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION - Required */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center bg-green-50 dark:bg-green-900/20 rounded-2xl p-10 shadow-lg border border-green-200 dark:border-green-800">
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-3">
              Stay Updated with GreenNest
            </h2>
            <p className="text-base-content/70 mt-3 mb-6 text-base md:text-lg">
              Subscribe to receive plant care guides, new arrivals, and exclusive promotions directly to your inbox.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                aria-label="Email address for newsletter subscription"
                className="input input-bordered w-full sm:w-2/3 focus:outline-green-600 dark:focus:outline-green-400"
              />
              <button
                type="submit"
                className="btn bg-green-600 hover:bg-green-700 text-white px-6 border-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
