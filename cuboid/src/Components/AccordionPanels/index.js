import React from "react";
import { shape } from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { Typography } from "@material-ui/core";
import { userBasicDetails } from "../../Configs/configs";

const AccordionPanels = ({ userBasicDetail }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {userBasicDetail}
          </Typography>

          <Typography
            sx={{ color: "text.secondary" }}
            style={{
              color: "grey",
              fontSize: "12px",
              marginLeft: "10%",
              paddingTop: "5px",
            }}
          >
            {userBasicDetails[userBasicDetail].summary}
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {Object.values(userBasicDetails[userBasicDetail]).map(
              ({ label }, index) => {
                return (
                  <Grid item xs={6} key={index}>
                    <p>{label}</p>
                  </Grid>
                );
              }
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

/**
 * Prop validation
 */
AccordionPanels.propTypes = {
  userBasicDetail: shape({}),
};

/**
 * Prop Default values
 */
AccordionPanels.defaultProps = {
  userBasicDetail: {},
};

export default AccordionPanels;
