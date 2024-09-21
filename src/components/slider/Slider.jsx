import { styled } from "@mui/material";
import { reviews } from "../../utils/constants/constants";
import { SliderItem } from "./SliderItem";
import Carousel from "react-material-ui-carousel";
import { useEffect, useState } from "react";

export const Slider = () => {
  const [activeStep, setActiveStep] = useState(0); // Состояние для текущего активного слайда

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % reviews.length);
    }, 3000); // Прокрутка каждые 3 секунды

    return () => clearInterval(interval); // Очищаем таймер, когда компонент размонтируется
  }, []);

  return (
    <StyledContainer>
      <h1>
        Отзывы наших <span>пациентов</span>
      </h1>
      <Carousel
        index={activeStep} // Управляемый индекс для переключения слайдов
        onChange={(index) => setActiveStep(index)} // Обновляем индекс при смене слайда вручную
        animation="slide"
        navButtonsAlwaysVisible
        indicators={true}
        autoPlay={false} // Отключаем встроенное автоматическое воспроизведение
      >
        {reviews.map((review, index) => (
          <SliderItem key={index} {...review} />
        ))}
      </Carousel>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")(() => ({
  width: "100%",
  height: "481px",
  display: "flex",
  gap: "34px",
  flexDirection: "column",
  flexWrap: "wrap",
  "& span": {
    color: "#048741",
  },
}));
// // CarouselComponent.jsx
// import { useEffect, useState } from "react";
// import Carousel from "react-material-ui-carousel";
// import { Paper, Typography, Avatar, Box, Container } from "@mui/material";
// export const reviews = [
//   {
//     img: "../../assets/images/men profile.png",
//     name: "Александр",
//     rating: "../assets/images/stars.png",
//     title:
//       "Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!",
//   },
//   {
//     img: "../../assets/images/men profile.png",
//     name: "Александр",
//     rating: "../assets/images/stars.png",
//     title:
//       "Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!",
//   },
//   {
//     img: "../../assets/images/men profile.png",
//     name: "Александр",
//     rating: "../assets/images/stars.png",
//     title:
//       "Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!",
//   },
//   {
//     img: "../../assets/images/men profile.png",
//     name: "Александр",
//     rating: "../assets/images/stars.png",
//     title:
//       "Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!",
//   },
//   {
//     img: "../../assets/images/men profile.png",
//     name: "Александр",
//     rating: "../assets/images/stars.png",
//     title:
//       "Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!",
//   },
//   {
//     img: "../../assets/images/men profile.png",
//     name: "Александр",
//     rating: "../assets/images/stars.png",
//     title:
//       "Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!",
//   },
//   {
//     img: "../../assets/images/men profile.png",
//     name: "Александр",
//     rating: "../assets/images/stars.png",
//     title:
//       "Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!",
//   },
//   {
//     img: "../../assets/images/men profile.png",
//     name: "Александр",
//     rating: "../assets/images/stars.png",
//     title:
//       "Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!",
//   },
// ];

// export const CarouselComponent = () => {
//   const [activeStep, setActiveStep] = useState(0); // Состояние для текущего активного слайда

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStep((prevActiveStep) => (prevActiveStep + 1) % reviews.length);
//     }, 3000); // Прокрутка каждые 3 секунды

//     return () => clearInterval(interval); // Очищаем таймер, когда компонент размонтируется
//   }, []);

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" align="center" gutterBottom>
//         Отзывы наших <span style={{ color: "green" }}>пациентов</span>
//       </Typography>
//       <Carousel
//         index={activeStep} // Управляемый индекс для переключения слайдов
//         onChange={(index) => setActiveStep(index)} // Обновляем индекс при смене слайда вручную
//         animation="slide"
//         navButtonsAlwaysVisible
//         indicators={true}
//         autoPlay={false} // Отключаем встроенное автоматическое воспроизведение
//       >
//         {reviews.map((review, index) => (
//           <ReviewItem key={index} review={review} />
//         ))}
//       </Carousel>
//     </Container>
//   );
// };

// const ReviewItem = ({ review }) => (
//   <Paper elevation={3} style={{ padding: "30px", backgroundColor: "#F0F8F5" }}>
//     <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
//       <Avatar alt={review.name} src="../../src/assets/images/men profile.png" />
//       <Box ml={2}>
//         <Typography variant="h6">{review.name}</Typography>
//         <Typography variant="body2">{"⭐".repeat(review.rating)}</Typography>
//       </Box>
//     </Box>
//     <Typography variant="h6">{review.title}</Typography>
//     <Typography variant="body1" align="center"></Typography>
//   </Paper>
// );
