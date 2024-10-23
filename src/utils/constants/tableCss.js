import styled from "styled-components";

export const Switch = styled.div`
  width: 43px;
  height: 26px;
  background-color: ${(props) => (props.isActive ? "#4CAF50" : "#ccc")};
  border-radius: 34px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    top: 3px;
    left: ${(props) => (props.isActive ? "20px" : "4px")};
    transition: left 0.2s ease;
  }
`;

export const StyledImg = styled("img")(() => ({
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  objectFit: "cover",
}));

export const StyledDiv = styled("div")(() => ({
  display: "flex",
  gap: "10px",
}));
export const ContainerDiv = styled.div`
  display: flex;
  gap: 24.93px;
`;
