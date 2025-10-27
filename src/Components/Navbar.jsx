import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Error signing out");
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="navbar bg-base-100 shadow-lg justify-center">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  return (
    <div className=''>
      <div className="navbar shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to="/" className="text-green-600 hover:text-green-700">Home</NavLink></li>
            <li><NavLink to="/plants" className="text-green-600 hover:text-green-700">Plants</NavLink></li>
            <li><NavLink to="/profile" className="text-green-600 hover:text-green-700">My Profile</NavLink></li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl font-bold text-green-600">
          🍃 GreenNest
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/" className={({ isActive }) => (isActive ? "text-green-700 font-semibold border-b-2 border-green-600" : "text-green-600 hover:text-green-700 hover:bg-green-50")}>Home</NavLink></li>
          <li><NavLink to="/plants" className={({ isActive }) => (isActive ? "text-green-700 font-semibold border-b-2 border-green-600" : "text-green-600 hover:text-green-700 hover:bg-green-50")}>Plants</NavLink></li>
          <li><NavLink to="/profile" className={({ isActive }) => (isActive ? "text-green-700 font-semibold border-b-2 border-green-600" : "text-green-600 hover:text-green-700 hover:bg-green-50")}>My Profile</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  className="object-cover"
                  alt="User Avatar"
                  src={
                    user.photoURL ||
                    `https://ui-avatars.com/api/?name=${user.displayName || "User"}&background=4CAF50&color=fff`
                  }
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
              <li className="menu-title">
                <span>{user.displayName || "User"}</span>
              </li>
              <li>
                <button onClick={handleLogout} className="text-red-600 hover:text-red-700 hover:bg-red-50">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <NavLink to="/login" className="btn btn-outline btn-sm text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
              Login
            </NavLink>
            <NavLink to="/signup" className="btn btn-sm bg-green-600 text-white hover:bg-green-700">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;