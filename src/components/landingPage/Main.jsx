import { styled } from "@mui/material";
import { list } from "../../utils/constants/general";
import { MainItem } from "./MainItem";

export const Main = () => {
  return (
    <StyledContainerMain>
      <a>
        Почему
        <span> нас выбирают?</span>
      </a>
      <section>
        {list.map((item) => (
          <MainItem key={item.id} {...item} />
        ))}
      </section>
    </StyledContainerMain>
  );
};

const StyledContainerMain = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "3.75rem",
  "& a": {
    fontSize: "2.25rem",
    fontWeight: "600",
    paddingLeft: "7.8125rem",

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
