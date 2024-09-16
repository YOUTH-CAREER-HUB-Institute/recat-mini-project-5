import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <NavLink to="/" id="logo" className="flex gap-2 items-center">
          <img
            src="src/assets/logo_header.png" // Ensure the path is correct
            alt="logo_header"
            className="object-cover max-w-12 max-h-12"
          />
          <span className="font-medium text-lg font-display">MovieMania</span>
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className="mx-2"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "orange" : "transparent",
                color: isActive ? "white" : "gray", // Ensure color changes when active
                padding: "0.5rem 1rem", // Ensure padding for the active state
                borderRadius: "0.25rem" // Optional: Add border-radius for better visual effect
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="mx-2"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "orange" : "transparent",
                color: isActive ? "white" : "gray",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem"
              })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movie" // Ensure `to` prop is included and correctly points to the route
              className="mx-2"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "orange" : "transparent",
                color: isActive ? "white" : "gray",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem"
              })}
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="mx-2"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "orange" : "transparent",
                color: isActive ? "white" : "gray",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem"
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
