import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "./placeholder.png",
  iconSize: [38, 38],
});

const position = [51.505, -0.09];



const Map = () => {

  return (
    <MapContainer
      center={position}
      zoom={8}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=UFHOz1k5jJt4O2CpHXDg"
      />

        <Marker position={position} icon={icon}>
          <Popup>
            Location <br /> My Location.
          </Popup>
        </Marker>

    </MapContainer>
  );
}
export default Map;