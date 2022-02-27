import React, { useState } from "react";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { Divider } from "@mui/material";

import {
  userBasicDetails,
  INPUT_TYPES,
  SALUTATION,
} from "../../../Configs/configs";
import InputFields from "../../../Components/InputFields";
import { getUserImages } from "../../../Redux/userData/selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { arrayOf, string } from "prop-types";

const UserBasicData = ({ predefinedImages }) => {
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
            <Divider />

            <AccordionDetails>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {Object.values(userBasicDetails[userBasicDetail]).map(
                  ({ label = "", inputType = "", value = "" }, index) => {
                    return (
                      <>
                        <Grid item xs={6} key={index}>
                          <Box style={{ display: "flex" }}>
                            <Typography>{label}</Typography>

                            {/* When input type is input Box */}
                            {inputType === INPUT_TYPES.input && (
                              <InputFields
                                inputType={inputType}
                                dropDownData={SALUTATION}
                                label={label}
                              />
                            )}

                            {/* When input type is dropDown  & Salutation*/}
                            {inputType === INPUT_TYPES.dropDown &&
                              label ===
                                userBasicDetails.Basic.salutation.label && (
                                <InputFields
                                  inputType={inputType}
                                  dropDownData={SALUTATION}
                                  label={label}
                                />
                              )}

                            {/* When input type is dropDown & images*/}
                            {inputType === INPUT_TYPES.dropDown &&
                              label ===
                                userBasicDetails.Basic.selectImage.label && (
                                <InputFields
                                  inputType={inputType}
                                  dropDownImages={predefinedImages}
                                  label={label}
                                />
                              )}
                          </Box>
                        </Grid>
                      </>
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

/**
 * Props -validation
 */
UserBasicData.propTypes = {
  predefinedImages: arrayOf(string),
};

/**
 * Default Props
 */
UserBasicData.defaultProps = {
  predefinedImages: [],
};

const mapStateToProps = createStructuredSelector({
  predefinedImages: getUserImages(),
});

export default connect(mapStateToProps, {})(UserBasicData);
