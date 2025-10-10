import { useState, type CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  // Common inline style for all links
  const linkStyle: CSSProperties = {
    fontFamily: "Arial, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "24px",
    lineHeight: "100%",
    letterSpacing: "-0.06em",
    textAlign: "center",
  };

  // Reusable Tailwind link classes
  const baseLinkClasses =
    "relative transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:left-0 after:bottom-[-4px] hover:after:w-full";

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
            style={linkStyle}
            className={({ isActive }) =>
              `${baseLinkClasses} ${
                isActive
                  ? "text-blue-500 font-semibold after:w-full"
                  : "text-[#007BFF] hover:text-blue-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            style={linkStyle}
            className={({ isActive }) =>
              `${baseLinkClasses} ${
                isActive
                  ? "text-blue-500 font-semibold after:w-full"
                  : "text-[#007BFF] hover:text-blue-500"
              }`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/service"
            style={linkStyle}
            className={({ isActive }) =>
              `${baseLinkClasses} ${
                isActive
                  ? "text-blue-500 font-semibold after:w-full"
                  : "text-[#007BFF] hover:text-blue-500"
              }`
            }
          >
            Service
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden ml-4">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            className="focus:outline-none"
          >
            <FiMenu size={32} color="#007BFF" />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden animate-fade-in bg-white rounded-lg shadow p-4 fixed top-16 right-0 w-48 z-50">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold transition duration-200"
                : "text-gray-700 hover:text-blue-500 transition duration-200"
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
                ? "text-blue-500 font-semibold transition duration-200"
                : "text-gray-700 hover:text-blue-500 transition duration-200"
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
                ? "text-blue-500 font-semibold transition duration-200"
                : "text-gray-700 hover:text-blue-500 transition duration-200"
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
