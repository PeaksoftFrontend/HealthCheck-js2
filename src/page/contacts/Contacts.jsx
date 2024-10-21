import { styled } from "@mui/material";
// import { useEffect, useState } from "react";

export const Contacts = () => {
  //   const apiKey = "YOUR_API_KEY"; // Замените на ваш API-ключ Google Maps
  //   const moscowCoordinates = "55.7558,37.6173"; // Координаты Москвы (широта и долгота)
  //   const mapSrc = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${moscowCoordinates}&zoom=12`;

  return (
    <MainContainer>
      <h1 className="title">
        Наши <span>контакты</span>
      </h1>
      <p className="text">
        Комфорт и спокойствие пациента — это часть качественного лечения!
        Предупредите администратора, что вы едете к нам на машине и мы предложим
        бесплатную подземную парковку при нашей клинике.
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098374!2d144.9630578153163!3d-37.81627977975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57742e125d2128f!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1614362413682!5m2!1sen!2sus"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </MainContainer>
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
