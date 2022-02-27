import React from "react";
import { string, arrayOf, shape } from "prop-types";
import {
  IMAGE_URL,
  INPUT_TYPES,
  userBasicDetails,
} from "../../Configs/configs";
import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";

const InputFields = ({ inputType, dropDownData, dropDownImages, label }) => {
  return (
    <>
      {/* When Input type is DropDown */}
      {INPUT_TYPES.dropDown === inputType &&
        label !== userBasicDetails.Basic.selectImage.label && (
          <Autocomplete
            freeSolo
            id={label}
            class="dropDownInput"
            fullWidth
            disableClearable
            options={Object.values(dropDownData).map(({ label }) => label)}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        )}

      {/* When Input type is DropDown with Images*/}
      {INPUT_TYPES.dropDown === inputType &&
        label === userBasicDetails.Basic.selectImage.label && (
          <Autocomplete
            freeSolo
            id={label}
            class="dropDownInput"
            fullWidth
            disableClearable
            options={dropDownImages.map(({ label }) => label)}
            renderOption={(props, option, state) => {
              return (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  {console.log(IMAGE_URL.replace("#CODE#", option))}
                  <img
                    loading="lazy"
                    width="30"
                    src={IMAGE_URL.replace("#CODE#", option)}
                    style={{ border: "1px solid black", borderRadius: "50%" }}
                    srcSet={`${IMAGE_URL.replace("#CODE#", option)} 2x`}
                    alt={option}
                  />
                  {option}
                </Box>
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        )}

      {/* When input type is input box */}
      {INPUT_TYPES.input === inputType && (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      )}

      {/* When input type is Radio button */}
      {INPUT_TYPES.radio === inputType && <h5>{inputType}</h5>}

      {/* When input type is Checkbox */}
      {INPUT_TYPES.checkBox === inputType && <h5>{inputType}</h5>}

      {/* When input type is date-type */}
      {INPUT_TYPES.date === inputType && <h5>{inputType}</h5>}

      {/* When input type is Number Input */}
      {INPUT_TYPES.inputNumber === inputType && <h5>{inputType}</h5>}
    </>
  );
};

// Props Validation
InputFields.propTypes = {
  inputType: string,
  dropDownData: arrayOf(shape({})),
  dropDownImages: arrayOf(shape({})),
  label: string,
};

// Default Props
InputFields.defaultProps = {
  inputType: "input",
  dropDownData: [],
  label: "Please Enter a Valid input",
};
export default InputFields;
