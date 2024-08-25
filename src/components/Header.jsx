import React from "react";

function Header() {
  return (
    <header className="bg-white pt-3 px-2 pb-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="nav_menu">
            <i className="fa-solid fa-bars"></i>
          </div>
          <img
            className="position-relative header-image cursor-pointer"
            alt="TyrePlx"
            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
          />
        </div>
        <ul className="nav position-relative fw-bold">
          <li className="nav-item mx-2 cursor-pointer link-text">Cars Tyres</li>
          <li className="nav-item mx-2 cursor-pointer link-text">Bike Tyres</li>
          <li className="nav-item mx-2 cursor-pointer link-text">Tyre Pressure</li>
          <li className="nav-item mx-2 cursor-pointer link-text">
            Commercial Tyres
          </li>
          <li className="nav-item mx-2 cursor-pointer link-text">Accessories</li>
          <li className="nav-item mx-2 cursor-pointer link-text">More</li>
        </ul>
        <div className="d-flex align-items-center mx-3 cursor-pointer link-text">
          <i className="fa-regular fa-user mx-2"></i>
          <span>Login</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
