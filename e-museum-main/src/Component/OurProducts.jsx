import React, { useState } from "react"; // Import useState
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import icons
import { statuteData } from "../data/branches"; // Import statuteData
import ProductDetail from "./ProductDetail"; // Import ProductDetail component

const OurProducts = () => {
  const [data, setData] = useState(statuteData); // Initialize useState
  const [selectedItem, setSelectedItem] = useState(null); // Initialize useState

  return (
    <>
      <div id="ourProduct" className="main-container pb-16"> {/* Add padding bottom to accommodate footer */}
        <h1 className="text-center my-8 text-4xl font-fontMOnte font-bold">
          Our Collection
        </h1>
        <div className="grid grid-cols-3 w-[60%] mx-auto gap-y-8 max-lg:grid-cols-2 h-auto max-md:grid-cols-1">
          {data.map((items) => (
            <div
              key={items.id}
              className="w-[95%] hover:shadow-lg hover:ease-in-out cursor-pointer rounded-md px-2 py-2"
              onClick={() => setSelectedItem(items)}
            >
              <img className="w-full h-[250px] object-cover rounded-lg" src={items.image} alt={items.name} />
              <h1 className="font-bold"> Name: {items.name}</h1>
              <h2>Location: {items.location}</h2>
              <h2>Detail:{items.details}</h2>
            </div>
          ))}
        </div>
      </div>
      {selectedItem && (
        <ProductDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
      
    </>
  );
};

export default OurProducts;
