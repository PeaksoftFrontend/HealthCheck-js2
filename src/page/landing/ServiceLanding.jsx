import { Footer } from "../../components/landingPage/Footer";
import { Header } from "../../components/landingPage/Header";
import { ServiceAccardion } from "../../components/landingPage/ServiceAccardion";
import { ServicesList } from "../../components/landingPage/ServicesList";
import { Form } from "../../components/landingPage/validationform/Form";

export const ServiceLanding = () => {
  return (
    <>
      <Header />
      <ServicesList />
      <ServiceAccardion />
      <Form />
      <Footer />
    </>
  );
};
