import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../css/DropdownMenu.css";

const DropdownMenu = ({ iconClass, menuItems, selectText, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`dropdown ${className}`} ref={dropdownRef}>
      {/* Icon that toggles the dropdown */}
      <div className="dropdown-icon" onClick={toggleDropdown}>
        <i className={iconClass}></i>
        <span className="dropdown-text">{selectText}</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="dropdown-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropdownMenu.propTypes = {
  iconClass: PropTypes.string.isRequired, // Font Awesome or custom icon class
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DropdownMenu;
