import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';
import { auth } from '../firebase/firebase.config';


const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    photoURL: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setFormData({
          displayName: user.displayName || '',
          photoURL: user.photoURL || ''
        });
      } else {
        navigate('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      await updateProfile(auth.currentUser, {
        displayName: formData.displayName,
        photoURL: formData.photoURL || null
      });
      
      // Update local user state
      setUser({
        ...user,
        displayName: formData.displayName,
        photoURL: formData.photoURL
      });
      
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile: ' + error.message);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loading loading-spinner loading-lg text-green-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600">Please log in to view your profile</h2>
          <button 
            onClick={() => navigate('/login')}
            className="btn btn-primary bg-green-600 hover:bg-green-700 text-white mt-4"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-3xl font-bold text-green-600 mb-6">My Profile</h1>
            
            {/* Current Profile Info */}
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Current Profile</h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img 
                      src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName || 'User'}&background=4CAF50&color=fff`} 
                      alt="Profile" 
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {user.displayName || 'No name set'}
                  </h3>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Update Profile Form */}
            <form onSubmit={handleUpdateProfile} className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Update Profile</h2>
              
              <div>
                <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-2">
                  Display Name
                </label>
                <input
                  type="text"
                  id="displayName"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  placeholder="Enter your display name"
                />
              </div>

              <div>
                <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 mb-2">
                  Photo URL
                </label>
                <input
                  type="url"
                  id="photoURL"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  placeholder="Enter your photo URL"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Leave empty to use default avatar
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={updating}
                  className="btn btn-primary bg-green-600 hover:bg-green-700 text-white flex-1"
                >
                  {updating ? (
                    <>
                      <div className="loading loading-spinner loading-sm"></div>
                      Updating...
                    </>
                  ) : (
                    'Update Profile'
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="btn btn-outline text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
                >
                  Back to Home
                </button>
              </div>
            </form>

            {/* Account Information */}
            <div className="divider"></div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium">{user.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email Verified:</span>
                  <span className={`font-medium ${user.emailVerified ? 'text-green-600' : 'text-red-600'}`}>
                    {user.emailVerified ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Account Created:</span>
                  <span className="font-medium">
                    {user.metadata.creationTime ? 
                      new Date(user.metadata.creationTime).toLocaleDateString() : 
                      'Unknown'
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Sign In:</span>
                  <span className="font-medium">
                    {user.metadata.lastSignInTime ? 
                      new Date(user.metadata.lastSignInTime).toLocaleDateString() : 
                      'Unknown'
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;