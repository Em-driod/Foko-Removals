
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
  <div className="bg-white shadow-md rounded-lg w-fit mx-auto mt-4 px-6 py-3 z-50 sticky top-0">
      <nav className="flex items-center bg-white  gap-10">
        {/* Logo + Company Name */}
        <div className="flex items-center gap-2">
          <img 
            src="/folalogo.png" 
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
              textAlign: "center"
            }}
          >
            FOKOREMOVALSLTD
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <NavLink 
            to="/" 
              style={{
              fontFamily: "Ariel",
              fontWeight: 400,
              fontStyle: "regular",
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "-0.06em",
              textAlign: "center"
            }}
            className={({ isActive }) => 
              isActive 
                ? "text-blue-700 font-bold" 
                : "text-gray-700 hover:text-blue-500"
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
              textAlign: "center"
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
              textAlign: "center"
            }}
            className={({ isActive }) => 
              isActive 
                ? "text-blue-700 font-bold" 
                : "text-gray-700 hover:text-blue-500"
            }
          >
            Service
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
