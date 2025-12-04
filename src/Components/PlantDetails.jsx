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
      navigate("/404"); // Optional: navigate to a custom error page
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

  return (
    <div className="min-h-screen bg-base-100 py-16">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-6">
          <ul>
            <li>
              <button onClick={() => navigate("/")} className="hover:text-green-600">
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
            <li className="text-green-600">{plant.plantName}</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Plant Image */}
          <div>
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />

            <div className="flex flex-wrap gap-3 mt-4">
              <div className="badge bg-green-600 text-white">
                {plant.category}
              </div>
              <div className="badge bg-blue-200 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                {plant.careLevel} Care
              </div>
              <div className="badge bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                ⭐ {plant.rating}
              </div>
            </div>
          </div>

          {/* RIGHT: Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-green-600">
              {plant.plantName}
            </h1>
            <p className="text-3xl font-semibold text-base-content">
              ${plant.price}
            </p>
            <p className="text-base text-base-content/70">
              Provided by {plant.providerName}
            </p>

            <p className="text-base-content/80 leading-relaxed">
              {plant.description}
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200">
                  Stock Available
                </h4>
                <p className="text-2xl font-bold text-green-600">
                  {plant.availableStock}
                </p>

                {plant.availableStock <= 3 && (
                  <p className="text-sm text-red-500 mt-2">
                    Hurry! Limited stock remaining.
                  </p>
                )}
              </div>

              <div className="card bg-blue-50 dark:bg-sky-900/20 p-5 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-sky-200">
                  Care Level
                </h4>
                <p className="text-2xl font-bold text-blue-600 dark:text-sky-300">
                  {plant.careLevel}
                </p>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="card bg-base-100 shadow-xl rounded-xl">
              <div className="card-body">
                <h3 className="card-title text-green-600">
                  Book Expert Consultation
                </h3>

                <form
                  onSubmit={handleConsultationSubmit}
                  className="space-y-4 mt-4"
                >
                  <div>
                    <label className="block text-sm font-medium">
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
                    <label className="block text-sm font-medium">
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
                    className="btn bg-green-600 hover:bg-green-700 text-white w-full mt-3"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlantDetails;
