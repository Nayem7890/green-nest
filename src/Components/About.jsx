import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-base-100 py-16">
      <div className="container mx-auto px-4 space-y-20">

        {/* TOP HERO SECTION */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-green-600 font-semibold tracking-wide">
            About GreenNest
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-base-content">
            Growing Happiness, One Plant at a Time
          </h1>
          <p className="text-base-content/70 leading-relaxed">
            At GreenNest, we believe plants bring peace, beauty, and balance to
            your home. Our mission is to make plant care simple and joyful for
            everyone—from beginners to plant experts.
          </p>
        </div>

        {/* ABOUT IMAGE BANNER */}
        <div className="max-w-5xl mx-auto">
          <img
            src="https://i.pinimg.com/1200x/0a/cf/64/0acf644b9c64e93f521ea93101ada2a3.jpg"
            alt="GreenNest Plants"
            className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* FEATURES SECTION */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-800 mb-2">
              Curated Plants
            </h3>
            <p className="text-base-content/70 leading-relaxed">
              Every plant is handpicked based on quality, growth health, and
              aesthetic appeal—perfect for enhancing any living space.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-800 mb-2">
              Expert Guidance
            </h3>
            <p className="text-base-content/70 leading-relaxed">
              Learn from certified horticulture specialists to keep your plants
              thriving through every season.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-800 mb-2">
              Community Support
            </h3>
            <p className="text-base-content/70 leading-relaxed">
              Connect with plant lovers, share tips, ask questions, and get
              inspired by beautiful plant collections.
            </p>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl bg-base-100 shadow-md border border-base-300">
            <h3 className="text-2xl font-bold text-green-600 mb-3">Our Mission</h3>
            <p className="text-base-content/70 leading-relaxed">
              We aim to make plant care accessible to everyone. Whether you're
              starting your first plant journey or expanding a thriving indoor
              garden, GreenNest provides the guidance, products, and support you
              need.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-base-100 shadow-md border border-base-300">
            <h3 className="text-2xl font-bold text-green-600 mb-3">Our Vision</h3>
            <p className="text-base-content/70 leading-relaxed">
              To build a world where every home has a touch of nature—and where
              plant parents feel confident, supported, and connected through a
              shared love of greenery.
            </p>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600">Our Green Experts</h2>
            <p className="text-base-content/70 mt-2">
              Meet the minds behind the plant magic.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Green",
                role: "Plant Specialist",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
              },
              {
                name: "James Leaf",
                role: "Horticulture Expert",
                image:
                  "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500"
              },
              {
                name: "Amina Bloom",
                role: "Growth Consultant",
                image:
                  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500"
              },
              {
                name: "Victor Root",
                role: "Botanical Advisor",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
              }
            ].map((expert, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow-xl rounded-xl border border-base-300 text-center p-5"
              >
                <div className="avatar mx-auto mb-4">
                  <div className="w-28 rounded-full ring-2 ring-green-500/40">
                    <img src={expert.image} alt={expert.name} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-green-600">{expert.name}</h3>
                <p className="text-base-content/70 text-sm">{expert.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="text-center max-w-3xl mx-auto bg-green-600 text-white p-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Join the GreenNest Family</h3>
          <p className="mb-6 text-white/90">
            Be the first to know about plant care tips, new arrivals, and
            exclusive community events.
          </p>
          <button className="btn bg-white text-green-700 hover:bg-lime-100 px-8">
            Become a Member
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
