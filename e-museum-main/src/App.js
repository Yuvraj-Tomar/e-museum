import React, { useEffect, useState } from "react";
import Header from "./Component/Header";
import Banner from "./Component/Banner";
import OurProducts from "./Component/OurProducts";
import Footer from "./Component/Footer";

const App = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <Header toggle={toggle} />
        <Banner />
        <OurProducts />
        <Footer toggle={toggle} />
      </div>
    </>
  );
};

export default App;
