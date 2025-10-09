
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";


const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-lg w-fit mx-auto mt-4 px-6 py-3 z-50 sticky top-0">
      <nav className="flex items-center bg-white gap-10">
        {/* Logo + Company Name */}
        <div className="flex items-center gap-2">
          <img
            src="/newlogo.png"
            alt="Company Logo"
            className="w-8 h-8 object-contain"
          />
          <span
            className="text-xl font-bold text-[#007BFF]"
            style={{
              fontFamily: "Sansation, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "-0.06em",
              textAlign: "center",
            }}
          >
            FOKOREMOVALS
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            style={{
              fontFamily: "Ariel",
              fontWeight: 400,
              fontStyle: "regular",
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "-0.06em",
              textAlign: "center",
            }}
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "text-gray-700 hover:text-blue-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            style={{
              fontFamily: "Ariel",
              fontWeight: 400,
              fontStyle: "regular",
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "-0.06em",
              textAlign: "center",
            }}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold"
                : "text-gray-700 hover:text-blue-500"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/service"
            style={{
              fontFamily: "Ariel",
              fontWeight: 400,
              fontStyle: "regular",
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "-0.06em",
              textAlign: "center",
            }}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold"
                : "text-gray-700 hover:text-blue-700"
            }
          >
            Service
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden ml-4">
          <button onClick={() => setOpen((v) => !v)} aria-label="Open menu">
            <FiMenu size={32} color="#007BFF" />
          </button>
        </div>
      </nav>
      {/* Mobile Nav Links Dropdown */}
      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden animate-fade-in bg-white rounded-lg shadow p-4 fixed top-16 right-0 w-48 z-50">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold"
                : "text-gray-700 hover:text-blue-500"
            }
            style={{ fontSize: "20px" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold"
                : "text-gray-700 hover:text-blue-500"
            }
            style={{ fontSize: "20px" }}
          >
            Contact
          </NavLink>
          <NavLink
            to="/service"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold"
                : "text-gray-700 hover:text-blue-500"
            }
            style={{ fontSize: "20px" }}
          >
            Service
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
