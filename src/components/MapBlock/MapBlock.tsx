import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import styles from "./MapBlock.module.scss";
import { TMapBlockProps } from "./types";

const MapBlock: React.FC<TMapBlockProps> = ({ lon, lat }) => {
  return (
    <section className={styles.mapBlock}>
      {lon && lat && (
        <MapContainer
          center={{ lat, lng: lon }}
          zoom={9}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={{ lat, lng: lon }}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>Your current location</Popup>
          </Marker>
        </MapContainer>
      )}
    </section>
  );
};

export default MapBlock;
