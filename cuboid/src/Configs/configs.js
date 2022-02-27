export const INPUT_TYPES = {
  input: "Input",
  dropDown: "DropDown",
  radio: "Radio",
  checkBox: "CheckBox",
  date: "Date",
  inputNumber: "InputNumber",
};

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

export const IMAGE_URL = "https://avatars.githubusercontent.com/u/#CODE#?v=4";
/**
 * User basic details for tab 1
 */
export const userBasicDetails = {
  Basic: {
    salutation: {
      label: "Salutation",
      value: "SALUTATION",
      inputType: INPUT_TYPES.dropDown,
    }, // dropDown
    selectImage: {
      label: "Image",
      value: "SELECT_IMAGE",
      inputType: INPUT_TYPES.dropDown,
    }, // dropDown
    firstName: {
      label: "First Name",
      value: "firstName",
      inputType: INPUT_TYPES.input,
    }, // input
    lastName: {
      label: "Last Name",
      value: "lastName",
      inputType: INPUT_TYPES.input,
    }, // input
    summary: "Your Basic Details",
  },

  Contact: {
    mobileNumber: {
      label: "Mobile Number",
      value: "mobileNumber",
      inputType: INPUT_TYPES.input,
    }, // Number
    email: { label: "Email", value: "email", inputType: INPUT_TYPES.input }, // Number
    gender: { label: "Gender", value: "gender", inputType: INPUT_TYPES.radio }, // Number
    summary: "Your Contact details",
  },

  Address: {
    address1: {
      label: "Address1",
      value: "address1",
      inputType: INPUT_TYPES.input,
    }, // Input
    address2: {
      label: "Address2",
      value: "address2",
      inputType: INPUT_TYPES.input,
    }, // OptionalInput

    city: { label: "City", value: "city", inputType: INPUT_TYPES.input }, // Input/DropDown
    state: { label: "State", value: "state", inputType: INPUT_TYPES.input }, // Input/DropDown
    country: {
      label: "Country",
      value: "country",
      inputType: INPUT_TYPES.input,
    }, // Input/DropDown
    zipCode: {
      label: "Zip Code",
      value: "zipCode",
      inputType: INPUT_TYPES.inputNumber,
    }, // Input
    summary: "Your Address details",
  },
};

/**
 * user Education Details
 */
export const educationDetail = [
  {
    label: "Higher Education",
    value: "higherEducation",
    inputType: INPUT_TYPES.input,
  },
  {
    label: "institute Name",
    value: "instituteName",
    inputType: INPUT_TYPES.input,
  },
  {
    label: "Grade / Marks",
    value: "gradeOrMarks",
    inputType: INPUT_TYPES.radio,
  },
  { label: "CGPA", value: "CGPA", inputType: INPUT_TYPES.dropDown },
  { label: "Percentage", value: "percentage", inputType: INPUT_TYPES.input },
  { label: "Passing Year", value: "passingYear", inputType: INPUT_TYPES.date },
];
