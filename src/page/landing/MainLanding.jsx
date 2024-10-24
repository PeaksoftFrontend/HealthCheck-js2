import { Doctors } from "../../components/landingPage/Doctors";
import { Footer } from "../../components/landingPage/Footer";
import { HealthCheck } from "../../components/landingPage/HealthCheck";
import { Main } from "../../components/landingPage/Main";
import { MainBanner } from "../../components/landingPage/MainBanner";
import { MainServices } from "../../components/landingPage/MainService";
import { SliderReview } from "../../components/landingPage/Slider";
import { Form } from "../../components/landingPage/validationform/Form";

export const MainLanding = () => {
  return (
    <>
      <MainBanner />
      <Main />
      <MainServices />
      <HealthCheck />
      <Doctors />
      <SliderReview />
      <Form />
      <Footer />
    </>
  );
};
