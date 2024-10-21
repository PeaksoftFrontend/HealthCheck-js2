import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { Icons } from "../../assets/icons";
import { styled } from "@mui/material";

let DefaultIcon = L.icon({
  iconUrl: Icons.Label,
  shadowUrl: markerShadow,
  iconSize: [70, 70],
});

L.Marker.prototype.options.icon = DefaultIcon;

export const MapComponent = () => {
  return (
    <MapContainer
      center={[42.8846, 74.589]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[42.8846, 74.589]}>
        <StyledPopup>HealthCheck</StyledPopup>
      </Marker>
    </MapContainer>
  );
};

const StyledPopup = styled(Popup)({
  "& .leaflet-popup-content-wrapper": {
    width: "115px",
    height: "39px",
    borderRadius: "8.08px",
    background: "#048741",
    position: "absolute",
    right: "-135px",
    top: "-55px",
  },
  "& .leaflet-popup-tip": {
    display: "none",
  },
  "& a.leaflet-popup-close-button": {
    display: "none",
  },
  "& .leaflet-popup-content": {
    color: "white",
    height: "35px",
    fontSize: "16.5px",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0",
    letterSpacing: "5%",
  },
});
