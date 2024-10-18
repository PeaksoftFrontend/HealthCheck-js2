import { styled } from "@mui/material";
import { services } from "../../utils/constants/service";

export const ServicesList = () => {
  return (
    <StyledDiv>
      <StyledH2>
        Наши <span>услуги</span>
      </StyledH2>
      <StyledServices>
        <IconContainer>
          {services.map((service, index) => (
            <ServiceContainer key={index}>
              <IconWrapper>
                <img src={service.icon} alt={service.text} />
              </IconWrapper>
              <Title>{service.text}</Title>
            </ServiceContainer>
          ))}
        </IconContainer>
      </StyledServices>
    </StyledDiv>
  );
};

const StyledDiv = styled("div")({
  maxWidth: "1300px",
});

const StyledH2 = styled("h2")({
  width: "96%",
  margin: "0 auto",
  fontFamily: "Manrope",
  fontWeight: 600,
  fontSize: "2rem",
  lineHeight: "3.07rem",
  marginTop: "2rem",
  marginLeft: "auto",
  marginRight: "auto",
  "& span": {
    color: "#048741",
  },
});
const StyledServices = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "886px",
  height: "1250px",
  padding: "0 20px",
});

const IconContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "10px",
  margin: "2rem 0",
  width: "100%",
  maxWidth: "900px",
});

const ServiceContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "10px 15px",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "background 0.3s ease",
  width: "430px",
  height: "90px",
  cursor: "pointer",
  "&:hover": {
    background: "linear-gradient(to bottom, #FDFDFD, #E4E7EE)",
  },
});

const IconWrapper = styled("div")({
  marginRight: "10px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& img": {
    width: "40px",
    height: "40px",
  },
});

const Title = styled("span")({
  fontSize: "1rem",
  fontWeight: "500",
  color: "#333",
});
