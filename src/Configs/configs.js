/**
 * Tabs for user Add/Edit Details
 */
export const USER_TABS = {
  USER_DETAIL: { label: "Bio-data", value: "USER_DETAIL" },
  EDUCATION_DETAIL: {
    label: "Education",
    value: "EDUCATION_DETAIL",
  },
  WORK_EXPERIENCE: { label: "Experience", value: "WORK_EXPERIENCE" },
};

/**
 * Salutations
 */
export const SALUTATION = {
  MR: { label: "Mr.", value: "MR" },
  MISS: { label: "Miss", value: "MISS" },
  MRS: { label: "Mrs.", value: "MRS" },
  DR: { label: "Dr.", value: "DR" },
};

/**
 * Grades
 */
export const CGPA = {
  GRADE_A: { label: "A", value: "GRADE_A" },
  GRADE_B: { label: "B", value: "GRADE_B" },
  GRADE_C: { label: "C", value: "GRADE_C" },
  GRADE_D: { label: "D", value: "GRADE_D" },
  GRADE_E: { label: "E", value: "GRADE_E" },
};

/**
 * User basic details for tab 1
 */
export const userBasicDetails = {
  Basic: {
    salutation: {
      label: "Salutation",
      value: "salutation",
      inputType: "dropDown",
    }, // dropDown
    selectImage: {
      label: "Image",
      value: "selectImage",
      inputType: "dropDown",
    }, // dropDown
    firstName: { label: "First Name", value: "firstName", inputType: "input" }, // input
    lastName: { label: "Last Name", value: "lastName", inputType: "input" }, // input
    summary: "Your Basic Details",
  },

  Contact: {
    mobileNumber: {
      label: "Mobile Number",
      value: "mobileNumber",
      inputType: "input",
    }, // Number
    email: { label: "Email", value: "email", inputType: "input" }, // Number
    gender: { label: "Gender", value: "gender", inputType: "Radio" }, // Number
    summary: "Your Contact details",
  },

  Address: {
    address1: { label: "Address1", value: "address1", inputType: "input" }, // Input
    address2: { label: "Address2", value: "address2", inputType: "input" }, // OptionalInput

    city: { label: "City", value: "city", inputType: "input" }, // Input/DropDown
    state: { label: "State", value: "state", inputType: "input" }, // Input/DropDown
    country: { label: "Country", value: "country", inputType: "input" }, // Input/DropDown
    zipCode: { label: "Zip Code", value: "zipCode", inputType: "input/Number" }, // Input
    summary: "Your Address details",
  },
};

/**
 * user Education Details
 */
export const educationDetail = [
  { label: "Higher Education", value: "higherEducation", inputType: "input" },
  { label: "institute Name", value: "instituteName", inputType: "input" },
  { label: "Grade / Marks", value: "gradeOrMarks", inputType: "Radio" },
  { label: "CGPA", value: "CGPA", inputType: "dropDown" },
  { label: "Percentage", value: "percentage", inputType: "input" },
  { label: "Passing Year", value: "passingYear", inputType: "date" },
];
