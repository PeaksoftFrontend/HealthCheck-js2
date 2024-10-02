import { AdminHeader } from "../../components/adminHeader/AdminHeader";
import { Doctors } from "../../components/landingPage/Doctors";
import { Footer } from "../../components/landingPage/Footer";
import { Header } from "../../components/landingPage/Header";
import { HealthCheck } from "../../components/landingPage/HealthCheck";
import { Main } from "../../components/landingPage/Main";
import { MainBanner } from "../../components/landingPage/MainBanner";
import { SliderReview } from "../../components/landingPage/Slider";

export const MainLanding = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <Main />
      <HealthCheck />
      <Doctors />
      <SliderReview />
      <AdminHeader />
      <Footer />
    </>
  );
};
