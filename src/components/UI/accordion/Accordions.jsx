import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Icons } from "../../../assets/icons";
import { useState } from "react";

export const Accordions = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
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
    expandIcon={<Icons.Down style={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))({
  backgroundColor: "#DBF0E5", // Light background color
  borderRadius: "8px",
  boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.15)",
  fontWeight: 500,
  borderLeft: "10px solid #048741",
  transition: "background-color 0.3s, color 0.3s",

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: "8px", // Equivalent to theme.spacing(1)
  },
  "&.Mui-expanded": {
    backgroundColor: "#048741", // Expanded background color
    color: "#FFF", // Text color when expanded
  },
});

const AccordionDetails = styled(MuiAccordionDetails)({
  padding: "16px", // Equivalent to theme.spacing(2)
});
