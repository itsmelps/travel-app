import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../assets/LeafletMap.css";
import customMarker from "../assets/images/marker.png";

const myIcon = L.icon({
    iconUrl: customMarker,
    iconSize: [60, 60], 
  });

const hotelPosition = [28.4595, 77.0266]; // Replace with your actual coordinates

const LeafletMap = () => {
  return (
    <div className="map-card">
      <MapContainer
        center={hotelPosition}
        zoom={13}
        scrollWheelZoom={false}
        className="custom-map"
      >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={hotelPosition} icon={myIcon}>
            <Popup>My Custom Marker</Popup>
        </Marker>;
      </MapContainer>
    </div>
  );
};

export default LeafletMap;

