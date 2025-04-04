import React, { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MapLibreMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapRef.current,
      style: "https://demotiles.maplibre.org/style.json", // Open-source style
      center: [78.0421, 27.1751], // Taj Mahal
      zoom: 14,
    });

    new maplibregl.Marker().setLngLat([78.0421, 27.1751]).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        height: "400px",
        width: "75%",
        borderRadius: "16px",
        margin: "20px auto",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    />
  );
};

export default MapLibreMap;
