import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { MapPin, ImagePlus, DollarSign, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import "leaflet/dist/leaflet.css";

const fetchAddress = async (lat, lng, setLocation) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );
    const data = await response.json();
    if (data.display_name) {
      setLocation(data.display_name);
    } else {
      setLocation(`Lat: ${lat}, Lng: ${lng}`);
    }
  } catch (error) {
    console.error("Error fetching address:", error);
    setLocation(`Lat: ${lat}, Lng: ${lng}`);
  }
};

const LocationPicker = ({ setCoordinates }) => {
  useMapEvents({
    click(e) {
      setCoordinates(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
};

const CreatePackageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    images: [],
    price: "",
    coordinates: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const updateCoordinates = async (lat, lng) => {
    setFormData((prev) => ({
      ...prev,
      coordinates: { lat, lng },
      location: "Fetching address...",
    }));

    await fetchAddress(lat, lng, (address) => {
      setFormData((prev) => ({
        ...prev,
        location: address,
      }));
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-white to-gray-100 shadow-xl rounded-2xl border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Create Your Package
      </h2>
      <div className="space-y-5">
        <Input
          type="text"
          name="name"
          placeholder="Package Name"
          value={formData.name}
          onChange={handleChange}
          className="border-gray-300 rounded-lg shadow-sm"
        />

        <div className="relative flex items-center">
          <MapPin className="absolute left-3 text-gray-500" size={20} />
          <Input
            type="text"
            name="location"
            placeholder="Click on the map to select a location"
            value={formData.location}
            onChange={handleChange}
            className="pl-10 border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Map for selecting location */}
        <MapContainer
          center={[20, 78]} // Default center (India)
          zoom={5}
          style={{ height: "300px", borderRadius: "10px", marginTop: "10px" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {formData.coordinates && (
            <Marker
              position={[formData.coordinates.lat, formData.coordinates.lng]}
            />
          )}
          <LocationPicker setCoordinates={updateCoordinates} />
        </MapContainer>

        <Textarea
          name="description"
          placeholder="Describe your experience..."
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className="border-gray-300 rounded-lg shadow-sm"
        />

        <div className="relative flex items-center">
          <DollarSign className="absolute left-3 text-gray-500" size={20} />
          <Input
            type="number"
            name="price"
            placeholder="Enter Price"
            value={formData.price}
            onChange={handleChange}
            className="pl-10 border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        <Button className="w-full bg-teal-600 text-white hover:bg-teal-700 rounded-lg shadow-lg py-3 text-lg">
          Create Package
        </Button>
      </div>
    </div>
  );
};

export default CreatePackageForm;
