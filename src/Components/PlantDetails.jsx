
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

import { onAuthStateChanged } from 'firebase/auth';
import plantsData from '../../public/plants.json';
import toast from 'react-hot-toast';
import { auth } from '../firebase/firebase.config';


const PlantDetails = () => {
    const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: ''
  });

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        navigate('/login', { state: { from: `/plant/${id}` } });
      }
    });
    return () => unsubscribe();
  }, [navigate, id]);

  
  useEffect(() => {
    const foundPlant = plantsData.find(
      (p) => p.plantId === parseInt(id)
    );
    if (foundPlant) {
      setPlant(foundPlant);
    } else {
      navigate('/');
    }
    setLoading(false);
  }, [id, navigate]);

  
  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    if (!consultationForm.name || !consultationForm.email) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Consultation booked successfully! We’ll contact you soon.');
    setConsultationForm({ name: '', email: '' });
  };

  const handleInputChange = (e) => {
    setConsultationForm({
      ...consultationForm,
      [e.target.name]: e.target.value
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
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600">Plant not found</h2>
          <button
            onClick={() => navigate('/')}
            className="btn bg-green-600 hover:bg-green-700 text-white mt-4"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  
  return (
    <div className="min-h-screen bg-base-100 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
       
        <div>
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="flex space-x-3 mt-4">
            <div className="badge bg-green-600 text-white">{plant.category}</div>
            <div className="badge bg-blue-100 text-blue-700">{plant.careLevel} Care</div>
            <div className="badge bg-yellow-100 text-yellow-700">⭐ {plant.rating}</div>
          </div>
        </div>

     
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-green-600">{plant.plantName}</h1>
          <p className="text-2xl font-semibold text-gray-800">${plant.price}</p>
          <p className="text-gray-500">Provided by {plant.providerName}</p>
          <p className="text-gray-600 leading-relaxed">{plant.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="card bg-green-50 p-4">
              <h4 className="font-semibold text-green-800">Stock Available</h4>
              <p className="text-2xl font-bold text-green-600">{plant.availableStock}</p>
            </div>
            <div className="card bg-blue-50 p-4">
              <h4 className="font-semibold text-blue-800">Care Level</h4>
              <p className="text-2xl font-bold text-blue-600">{plant.careLevel}</p>
            </div>
          </div>

   
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-green-600">Book Expert Consultation</h3>
              <form onSubmit={handleConsultationSubmit} className="space-y-4 mt-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={consultationForm.name}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={consultationForm.email}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="btn bg-green-600 hover:bg-green-700 text-white w-full"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;