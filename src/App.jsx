import { Doctors } from "./components/landingPage/Doctors";
import { Footer } from "./components/landingPage/Footer";
import { Header } from "./components/landingPage/Header";
import { HealthCheck } from "./components/landingPage/HealthCheck";
import { Main } from "./components/landingPage/Main";
import { MainBanner } from "./components/landingPage/MainBanner";

export const App = () => {
  return (
    <div>
      <h1>Healtcheck</h1>
      <Header />
      <MainBanner />
      <Main />
      <HealthCheck />
      <Doctors />
      <Footer />
    </div>
  );
};
