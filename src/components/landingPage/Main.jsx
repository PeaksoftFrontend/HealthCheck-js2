import { styled } from "@mui/material";
import { list } from "../../utils/constants/general";
import { MainItem } from "./MainItem";

export const Main = () => {
  return (
    <StyledContainerMain>
      <StyledBox>
        <a>
          Почему
          <span> нас выбирают?</span>
        </a>
        <section>
          {list.map((item) => (
            <MainItem key={item.id} {...item} />
          ))}
        </section>
      </StyledBox>
    </StyledContainerMain>
  );
};

const StyledContainerMain = styled("div")(() => ({
  paddingBottom: "120px",
  "& a": {
    fontSize: "2.25rem",
    fontWeight: "600",

    "& span": {
      color: "#048741",
    },
  },
  "& section": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.125rem",
  },
}));
const StyledBox = styled("div")(() => ({
  maxWidth: "1300px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "60px",
}));
