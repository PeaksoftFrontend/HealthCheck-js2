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
export const Contacts = () => {
  return (
    <>
      <MainContainer>
        <h1 className="title">
          Наши <span>контакты</span>
        </h1>
        <p className="text">
          Комфорт и спокойствие пациента — это часть качественного лечения!
          Предупредите администратора, что вы едете к нам на машине и мы
          предложим бесплатную подземную парковку при нашей клинике.
        </p>
        <section>
          <div>
            <h4>Контактные номера: </h4>
            <p>+996(800) 000 000 ; +996(505) 000 000 </p>
          </div>
          <div>
            <h4>Наш адрес: </h4>
            <p>Кыргызстан, г. Бишкек, Медерова 44 </p>
          </div>
          <div>
            <h4>Режим работы клиники: </h4>
            <p>Понедельник - суббота с 08:00 до 18:00. </p>
          </div>
          <div>
            <h4>Электронная почта : </h4>
            <p>healthchek.kg </p>
          </div>
        </section>
      </MainContainer>
      <StyledMapContainer
        center={[42.8846, 74.589]}
        zoom={13}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[42.8846, 74.589]}>
          <StyledPopup>HealthCheck</StyledPopup>
        </Marker>
      </StyledMapContainer>
    </>
  );
};

const MainContainer = styled("div")({
  width: "681px",
  height: "474px",
  marginLeft: "120px",
  display: "flex",
  flexDirection: "column",
  gap: "35px",
  "& .title": {
    fontWeight: "600",
    fontSize: "36px",
    "& span": {
      color: "#048741",
    },
  },
  "& .text": {
    fontSize: "18px",
    fontWeight: "400",
    width: "681px",
  },
  "& section": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  "& div": {
    width: "350px",
    "& h4": {
      fontSize: "18px",
      fontWeight: "400",
    },
    "& p": {
      fontSize: "18px",
      fontWeight: "500",
      color: "#048741",
    },
  },
});

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

const StyledMapContainer = styled(MapContainer)({
  width: "100%",
  height: "300px",
});
