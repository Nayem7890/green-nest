import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import plantsData from "../../public/plants.json";
import toast from "react-hot-toast";

const PlantDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);

  const [consultationForm, setConsultationForm] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const foundPlant = plantsData.find((p) => p.plantId === parseInt(id));

    if (foundPlant) {
      setPlant(foundPlant);
    } else {
      navigate("/404");
    }

    setLoading(false);
  }, [id, navigate]);

  const handleConsultationSubmit = (e) => {
    e.preventDefault();

    if (!consultationForm.name || !consultationForm.email) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success(
      "Consultation booked successfully! Our expert will contact you soon."
    );

    setConsultationForm({
      name: "",
      email: "",
    });
  };

  const handleInputChange = (e) => {
    setConsultationForm({
      ...consultationForm,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }

  if (!plant) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-base-content/80">
            Plant not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="btn bg-green-600 hover:bg-green-700 text-white"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const isBestSeller = plant.rating >= 4.8;
  const isEasyCare = plant.careLevel.toLowerCase() === "easy";

  return (
    <div className="min-h-screen bg-base-100 py-16">
      <div className="container mx-auto px-4 space-y-10">
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-2">
          <ul>
            <li>
              <button
                onClick={() => navigate("/")}
                className="hover:text-green-600"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/plants")}
                className="hover:text-green-600"
              >
                All Plants
              </button>
            </li>
            <li className="text-green-600 font-semibold">
              {plant.plantName}
            </li>
          </ul>
        </div>

        {/* Title strip */}
        <div className="flex flex-wrap justify-between items-center gap-3">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-700">
              {plant.plantName}
            </h1>
            <p className="text-base-content/70">
              A curated <span className="font-medium">{plant.category}</span> from{" "}
              <span className="font-medium">{plant.providerName}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {isBestSeller && (
              <span className="badge badge-lg bg-yellow-500 text-white border-none">
                Best Seller
              </span>
            )}
            {isEasyCare && (
              <span className="badge badge-lg bg-emerald-500 text-white border-none">
                Easy to Care
              </span>
            )}
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Plant Image & quick badges */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-base-100 border border-base-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent pointer-events-none" />
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-96 object-cover transform hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                <div className="badge bg-green-600 text-white border-none">
                  {plant.category}
                </div>
                <div className="badge bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {plant.careLevel} Care
                </div>
                <div className="badge bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  ⭐ {plant.rating}
                </div>
              </div>
            </div>

            {/* Quick facts row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-base-100 shadow-md border border-base-300 p-4">
                <p className="text-sm text-base-content/60">Price</p>
                <p className="text-2xl font-bold text-green-600">
                  ${plant.price}
                </p>
              </div>
              <div className="rounded-xl bg-base-100 shadow-md border border-base-300 p-4">
                <p className="text-sm text-base-content/60">In Stock</p>
                <p className="text-2xl font-bold text-green-600">
                  {plant.availableStock}
                </p>
                {plant.availableStock <= 3 && (
                  <p className="text-xs text-red-500 mt-1">
                    Almost sold out. Order soon.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: Details, care summary, consultation */}
          <div className="space-y-8">
            {/* Description block */}
            <div className="rounded-2xl bg-base-100 shadow-md border border-base-300 p-6 space-y-3">
              <h2 className="text-xl font-semibold text-base-content">
                About this plant
              </h2>
              <p className="text-base-content/80 leading-relaxed">
                {plant.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-3 text-sm text-base-content/70">
                <span className="badge bg-green-50 text-green-700 border border-green-200">
                  Indoor Friendly
                </span>
                <span className="badge bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Air Refreshing
                </span>
                <span className="badge bg-slate-50 text-slate-700 border border-slate-200">
                  Ideal for Living Rooms & Offices
                </span>
              </div>
            </div>

            {/* Care Summary */}
            <div className="rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800 p-6 space-y-4">
              <h2 className="text-xl font-semibold text-green-700 dark:text-green-900">
                Care Summary
              </h2>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-base-content/80 mb-1">
                    Light
                  </p>
                  <p className="text-base-content/70">
                    Prefers bright, indirect light. Avoid harsh midday sun.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-base-content/80 mb-1">
                    Water
                  </p>
                  <p className="text-base-content/70">
                    Water when the top soil feels dry. Do not let it sit in
                    water.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-base-content/80 mb-1">
                    Difficulty
                  </p>
                  <p className="text-base-content/70">
                    {plant.careLevel} care. Suitable for{" "}
                    {isEasyCare ? "beginners and busy plant parents." : "plant lovers with some experience."}
                  </p>
                </div>
              </div>
            </div>

            {/* Consultation Form Card */}
            <div className="card bg-base-100 shadow-xl rounded-2xl border border-base-300">
              <div className="card-body space-y-4">
                <div>
                  <h3 className="card-title text-green-600">
                    Book an Expert Consultation
                  </h3>
                  <p className="text-sm text-base-content/70">
                    Need help choosing the right spot or setting up a care
                    routine for this plant? Share your details and our plant
                    expert will reach out with personalized advice.
                  </p>
                </div>

                <form
                  onSubmit={handleConsultationSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-base-content/80">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={consultationForm.name}
                      onChange={handleInputChange}
                      className="input input-bordered w-full mt-1"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-base-content/80">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={consultationForm.email}
                      onChange={handleInputChange}
                      className="input input-bordered w-full mt-1"
                      placeholder="Enter your email"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn bg-green-600 hover:bg-green-700 text-white w-full mt-1"
                  >
                    Book Consultation
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

        {/* Optional bottom CTA */}
        <div className="mt-8 flex justify-between flex-wrap gap-4 text-sm text-base-content/70">
          <button
            onClick={() => navigate("/plants")}
            className="btn btn-ghost px-0 text-green-600"
          >
            ← Back to all plants
          </button>
          <p>
            Looking for more options? Explore our full collection of curated
            indoor plants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
