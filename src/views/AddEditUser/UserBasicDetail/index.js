import React, { useState } from "react";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@material-ui/core";

import { userBasicDetails } from "../../../Configs/configs";

const UserBasicData = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {Object.keys(userBasicDetails).map((userBasicDetail, indexValue) => {
        return (
          <Accordion
            expanded={expanded === indexValue}
            onChange={handleChange(indexValue)}
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
        );
      })}
    </>
  );
};

export default UserBasicData;
