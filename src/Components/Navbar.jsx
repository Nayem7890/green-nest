import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";
import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const mainNavLinks = [
    { label: "Home", path: "/" },
    { label: "All Items", path: "/plants" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Support", path: "/support" },
  ];

  const navLinks = user
    ? mainNavLinks
    : [...mainNavLinks, {path: "/login" }];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
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
      <div className="sticky top-0 z-50 bg-green-900 px-4 py-3 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-center">
          <span className="loading loading-spinner text-white"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-green-900 via-green-800 to-green-600 shadow-lg backdrop-blur-xl transition-all">
      <div className="max-w-xl mx-auto px-4">
        <div className="navbar px-0 py-3 text-white">

          {/* LEFT - Logo + Mobile Menu */}
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown lg:hidden">
              <button
                tabIndex={0}
                className="btn btn-ghost text-white hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Mobile Dropdown */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-3 z-50 w-56 bg-green-900/95 shadow-xl rounded-xl border border-white/10 animate-fadeIn"
              >
                {navLinks.map(link => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-white/20 text-white font-semibold rounded-lg"
                          : "text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo */}
            <NavLink
              to="/"
              className="btn btn-ghost text-xl font-bold text-white hover:scale-105 transition-transform"
            >
              <span className="text-2xl mr-2">🍃</span>
              <span className="bg-gradient-to-r from-lime-200 to-green-100 bg-clip-text text-transparent">
                GreenNest
              </span>
            </NavLink>
          </div>

          {/* CENTER - Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              {navLinks.map(link => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "px-4 py-2 rounded-full bg-white/20 text-white font-semibold border border-white/40 shadow-sm"
                        : "px-4 py-2 rounded-full text-white/75 hover:text-white hover:bg-white/10 transition-all"
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT - Theme + Profile */}
          <div className="navbar-end gap-4">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-circle btn-ghost text-white hover:bg-white/10 hover:scale-110 transition-all"
            >
              {theme === "dark" ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </button>

            {/* User Dropdown / Login Buttons */}
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-lime-300 transition-all hover:scale-110"
                >
                  <div className="w-10 rounded-full ring-2 ring-white/40">
                    <img
                      alt="User Avatar"
                      src={
                        user.photoURL ||
                        `https://ui-avatars.com/api/?name=${
                          user.displayName || "User"
                        }&background=4CAF50&color=fff`
                      }
                      className="object-cover"
                    />
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-3 w-52 p-2 z-50 rounded-xl bg-green-900/95 text-white shadow-xl border border-white/10"
                >
                  <li className="menu-title">
                    <span className="font-semibold">
                      {user.displayName || "User"}
                    </span>
                  </li>

                  <li>
                    <NavLink className="hover:bg-white/10 rounded-lg" to="/profile">
                      My Profile
                    </NavLink>
                  </li>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-error hover:bg-error/20 rounded-lg"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex gap-2">
                <NavLink
                  to="/login"
                  className="btn btn-sm text-green-700  border hover:bg-lime-100"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="btn btn-sm bg-white text-green-700 hover:bg-lime-100"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
