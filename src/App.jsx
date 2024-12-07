import React, { useState, useEffect } from "react";
import Presentation from "./components/PresentationComponent";
import DevWeb from "./components/DevWebComponent";
import Experiences from "./components/ExperiencesComponent";
import Formations from "./components/FormationsComponent";
import Autres from "./components/AutresComponent";
import Sidebar from "./components/Sidebar";
import Projets from "./components/ProjetsComponent";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeComponent, setActiveComponent] = useState("presentation");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "presentation":
        return <Presentation />;
      case "devweb":
        return <DevWeb />;
      case "autres":
        return <Autres />;
      case "experiences":
        return <Experiences />;
      case "formations":
        return <Formations />;
      case "projets":
        return <Projets />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [activeComponent]);

  const handleClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <Sidebar setActiveComponent={setActiveComponent} onClick={handleClick} />

      <main className={`${isMobile ? "haut" : ""}`}>
        {renderActiveComponent()}
      </main>
    </>
  );
}

export default App;
