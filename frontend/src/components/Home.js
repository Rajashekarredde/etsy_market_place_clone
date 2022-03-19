import React from "react";
import Navbar from "./Navbar";
import Hoverbar from "./Hoverbar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import EtsyBody from "./EtsyBody";
import AboutFooter from "./AboutFooter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hoverbar />
      <Dashboard />
      <EtsyBody />
      <Footer/>

      {/* <AboutFooter /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
