import React from "react";

const Banner = () => {
  return (
    <>
      <div
        id="home"
        className="banner-container flex items-center justify-center text-center text-white"
      >
        <div>
          <h1 className="text-5xl font-fontMOnte font-bold">
            Welcome to E-Sangrahalaya.{" "}
          </h1>
          <p className="w-[50%] mx-auto mt-4 font-medium">
            Bhopal Museum (Indira Gandhi Rashtriya Manav Sangrahalaya)
            <br />
            The Indira Gandhi Rashtriya Manav Sangrahalaya (IGRMS), also known
            as the National Museum of Mankind, is a unique and vibrant museum
            located in Bhopal, Madhya Pradesh, India.
          </p>
          <a href="#ourProduct">
            {" "}
            <button className="px-3 py-2 mt-4 rounded-xl bg-red-600 text-white cursor-pointer font-bold">
              Explore Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
