import React, { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
import menuIcon from "../assets/menu.png";

export default function Sidebar({ setActiveComponent, onClick }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleClick = () => {
    setIsSidebarActive(!isSidebarActive);
    onClick();
  };

  const handleNavLinkClick = (component) => {
    setActiveComponent(component);
    if (isMobile) {
      setIsSidebarActive(false); // Cacher la sidebar sur mobile après un clic sur un nav-link
    }
  };

  return (
    <nav className={`sidebar ${isMobile ? "mobile" : ""}`}>
      <div className="sidebar-header">
        <div className="photo">
          <img src={profile} alt="Benjamin Busselet" title="photo" />
        </div>
        {isMobile && (
          <div className="prenomnom">
            <h3 className="title_item name">BENJAMIN BUSSELET</h3>
          </div>
        )}
        {isMobile && (
          <div className="button">
            <img
              id="toggleButton"
              className="toggle-button"
              src={menuIcon}
              alt="Button Toggle"
              onClick={handleClick}
            />
          </div>
        )}
      </div>
      <div className={`sidebar-nav ${isSidebarActive ? "active" : ""}`}>
        <div
          className="nav-link"
          onClick={() => handleNavLinkClick("presentation")}
          data-value="presentation"
        >
          Présentation
        </div>
        <div className={`menu_competences ${isSidebarActive ? "active" : ""}`}>
          Compétences
          <div className={`sub_menu ${isSidebarActive ? "active" : ""}`}>
            <div
              className="nav-link"
              onClick={() => handleNavLinkClick("devweb")}
              data-value="devweb"
            >
              Développement Web
            </div>
            <div
              className="nav-link"
              onClick={() => handleNavLinkClick("autres")}
              data-value="autres"
            >
              Autres
            </div>
          </div>
        </div>
        <div
          className="nav-link"
          onClick={() => handleNavLinkClick("experiences")}
          data-value="experiences"
        >
          Expériences
        </div>
        <div
          className="nav-link"
          onClick={() => handleNavLinkClick("formations")}
          data-value="formations"
        >
          Formations
        </div>
        <div
          className="nav-link"
          onClick={() => handleNavLinkClick("projets")}
          data-value="projets"
        >
          Projets
        </div>
      </div>
    </nav>
  );
}
