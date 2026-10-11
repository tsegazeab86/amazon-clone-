import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./LowerHeader.css";

function LowerHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="lower__container">
      <div className="lower__menuToggle" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
        <p>All</p>
      </div>

      <ul className={menuOpen ? "nav__items active" : "nav__items"}>
        <li onClick={() => setMenuOpen(false)}>Today's Deals</li>
        <li onClick={() => setMenuOpen(false)}>Customer Service</li>
        <li onClick={() => setMenuOpen(false)}>Registry</li>
        <li onClick={() => setMenuOpen(false)}>Gift Cards</li>
        <li onClick={() => setMenuOpen(false)}>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;