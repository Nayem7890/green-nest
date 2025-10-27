import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import plantsData from "../../public/plants.json"


const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCareLevel, setSelectedCareLevel] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPlants(plantsData);
    setFilteredPlants(plantsData);
    setLoading(false);
  }, []);

  // Get unique categories and care levels
  const categories = ['All', ...new Set(plants.map(plant => plant.category))];
  const careLevels = ['All', ...new Set(plants.map(plant => plant.careLevel))];

  // Filter and search logic
  useEffect(() => {
    let filtered = plants.filter(plant => {
      const matchesSearch = plant.plantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           plant.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory;
      const matchesCareLevel = selectedCareLevel === 'All' || plant.careLevel === selectedCareLevel;
      
      return matchesSearch && matchesCategory && matchesCareLevel;
    });

    // Sort plants
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.plantName.localeCompare(b.plantName);
      }
    });

    setFilteredPlants(filtered);
  }, [plants, searchTerm, selectedCategory, selectedCareLevel, sortBy]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  const getCareLevelColor = (careLevel) => {
    switch (careLevel) {
      case 'Easy': return 'badge-success';
      case 'Medium': return 'badge-warning';
      case 'Hard': return 'badge-error';
      default: return 'badge-neutral';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Air Purifier': return 'badge-primary';
      case 'Tropical': return 'badge-secondary';
      case 'Statement Plant': return 'badge-accent';
      case 'Trailing': return 'badge-info';
      case 'Low Maintenance': return 'badge-success';
      default: return 'badge-neutral';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loading loading-spinner loading-lg text-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-600 mb-4">🌱 Our Plant Collection</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of beautiful, healthy plants perfect for your home or office.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Search Plants</span>
              </label>
              <input
                type="text"
                placeholder="Search by name or description..."
                className="input input-bordered"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Category</span>
              </label>
              <select
                className="select select-bordered"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Care Level Filter */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Care Level</span>
              </label>
              <select
                className="select select-bordered"
                value={selectedCareLevel}
                onChange={(e) => setSelectedCareLevel(e.target.value)}
              >
                {careLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Sort By</span>
              </label>
              <select
                className="select select-bordered"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="rating">Rating (Highest First)</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            Showing {filteredPlants.length} of {plants.length} plants
          </div>
        </div>

        {/* Plants Grid */}
        {filteredPlants.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No plants found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedCareLevel('All');
                setSortBy('name');
              }}
              className="btn btn-primary bg-green-600 hover:bg-green-700 text-white"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlants.map(plant => (
              <div key={plant.plantId} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <figure className="px-4 pt-4">
                  <img
                    src={plant.image}
                    alt={plant.plantName}
                    className="rounded-xl h-48 w-full object-cover"
                  />
                </figure>
                
                <div className="card-body">
                  {/* Plant Name and Price */}
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="card-title text-lg">{plant.plantName}</h2>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">${plant.price}</div>
                    </div>
                  </div>

                  {/* Provider */}
                  <p className="text-sm text-gray-500 mb-3">by {plant.providerName}</p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{plant.description}</p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className={`badge ${getCategoryColor(plant.category)}`}>
                      {plant.category}
                    </div>
                    <div className={`badge ${getCareLevelColor(plant.careLevel)}`}>
                      {plant.careLevel} Care
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {renderStars(plant.rating)}
                    </div>
                    <span className="text-sm font-semibold">{plant.rating}</span>
                  </div>

                  {/* Stock Status */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">Stock:</span>
                    <span className={`text-sm font-semibold ${
                      plant.availableStock > 5 ? 'text-green-600' : 
                      plant.availableStock > 0 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {plant.availableStock > 0 ? `${plant.availableStock} available` : 'Out of stock'}
                    </span>
                  </div>

                  {/* Action Button */}
                  <div className="card-actions justify-end">
                    <Link
                      to={`/plants/${plant.plantId}`}
                      className="btn btn-primary bg-green-600 hover:bg-green-700 text-white w-full"
                      
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12 bg-green-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-green-600 mb-4">Need Help Choosing?</h3>
          <p className="text-gray-600 mb-6">
            Our plant experts are here to help you find the perfect plant for your space and lifestyle.
          </p>
          <Link
            to="/"
            className="btn btn-primary bg-green-600 hover:bg-green-700 text-white"
          >
            Get Expert Advice
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plants;