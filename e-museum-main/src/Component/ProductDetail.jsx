import React, { useState } from "react";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon issue with default Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const FullMap = ({ position, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full h-full flex flex-col justify-center items-center relative">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              You are here
            </Popup>
          </Marker>
        </MapContainer>
        <button onClick={onClose} className="absolute top-0 right-0 m-4 z-50 text-gray-700 hover:text-red-500"><FaTimes size={24} /></button>
      </div>
    </div>
  );
};

const ProductDetail = ({ item, onClose }) => {
  const [showMap, setShowMap] = useState(false);
  const position = [item.latitude, item.longitude]; // Latitude and longitude for the location

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[80%] max-w-4xl rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          <div className="w-1/2">
            <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-4">{item.details}</p>
            <div className="flex items-center text-gray-700 mb-4">
              <FaMapMarkerAlt className="mr-2" />
              <span>{item.location}</span>
            </div>
            <div className="w-full h-64 mb-4 relative">
              <button onClick={toggleMap} className="w-full h-full">
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full rounded">
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={position}>
                    <Popup>
                      {item.name} - {item.location}
                    </Popup>
                  </Marker>
                </MapContainer>
                {showMap && <FullMap position={position} onClose={toggleMap} />}
                {showMap && (
                  <button onClick={toggleMap} className="absolute top-0 right-0 m-4 z-50 text-gray-700 hover:text-red-500">
                    <FaTimes size={24} />
                  </button>
                )}
              </button>
            </div>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

