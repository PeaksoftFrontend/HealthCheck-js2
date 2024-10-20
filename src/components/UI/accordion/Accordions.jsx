import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Icons } from "../../../assets/icons";

export const Accordions = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <p>{title}</p>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
});

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<Icons.Vector style={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))({
  backgroundColor: "#DBF0E5",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
  boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.15)",
  fontWeight: 500,
  borderLeft: "10px solid #048741",
  fontSize: "20px",
  color: "#4D4E51",

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: "8px",
  },
  "&.Mui-expanded": {
    backgroundColor: "#048741",
    color: "#FFF",
  },
});

const AccordionDetails = styled(MuiAccordionDetails)({
  padding: "16px",
});
