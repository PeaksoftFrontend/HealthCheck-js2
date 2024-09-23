import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

// Import Swiper modules
import { Navigation, Pagination } from "swiper";

export const ReviewSlider = () => {
  const reviews = [
    {
      id: 1,
      img: "/src/assets/images/men profile.png",
      name: "Александр",
      rating: "/src/assets/images/stars.png",
      title:
        "Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!",
    },
    {
      id: 2,
      img: "/src/assets/images/Manak.png",
      name: "Ольга",
      rating: "/src/assets/images/stars.png",
      title:
        "Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!",
    },
    {
      id: 3,
      img: "/src/assets/images/men profile.png",
      name: "Александр",
      rating: "/src/assets/images/stars.png",
      title:
        "Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!",
    },
    {
      id: 4,
      img: "/src/assets/icons/others/Profile.svg",
      name: "Cергей",
      rating: "/src/assets/images/stars.png",
      title:
        "Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <div className="review-card">
            <img src={review.img} alt={review.name} className="review-img" />
            <h3>{review.name}</h3>
            <img src={review.rating} alt="rating" className="review-rating" />
            <p>{review.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
