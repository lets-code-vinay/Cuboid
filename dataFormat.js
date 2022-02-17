const userBasicDetails = {
Basic:{  
  salutation: {label: 'Salutation', value:'salutation', inputType:'dropDown'}, // dropDown
  firstName: {label: 'First Name', value:'firstName', inputType:'input'}, // input
  lastName: {label: 'Last Name', value:'lastName', inputType:'input'}, // input
  selectImage: {label: 'Image', value:'selectImage', inputType:'dropDown'}, // dropDown
},

Contact: { 
  mobileNumber: {label: 'Mobile Number', value:'mobileNumber', inputType:'input'}, // Number
  email: {label: 'Email', value:'email', inputType:'input'}, // Number
  gender: {label: 'Gender', value:'gender', inputType:'Radio'}, // Number
},

Address:{
  address1: {label: 'Address1', value:'address1', inputType:'input'}, // Input
  address2: {label: 'Address2', value:'address2', inputType:'input'}, // OptionalInput
  
  city: {label: 'City', value:'city', inputType:'input'}, // Input/DropDown
  state: {label: 'State', value:'state', inputType:'input'}, // Input/DropDown
  country: {label: 'Country', value:'country', inputType:'input'}, // Input/DropDown
  zipCode: {label: 'Zip Code', value:'zipCode', inputType:'input/Number'}, // Input
}


};

const  educationDetail= {
  higherEducation: "", // dropdown of education
  instituteName: "",
  gradeOrMarks: "", // radio button
  CGPA: "", // only [a,b,c,d,e]
  percentage: "", // 60 with suffix %
},
const experience = {
  wordExperience: {
    company1: {
      name: "",
      location: "",
      designation: "",
      totalWorkTime: "",
      totalCTC: "", // 1,245,112,42
      joiningDate: "", // date YYYY-MM-DD
      leavingDate: "", // date YYYY-MM-DD
      reasonForLeaving: "",
    },
  },
};
