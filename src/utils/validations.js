import * as yup from "yup";

// Form 1 validations
export const form_1_validations = yup.object().shape({
  emailId: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*[0-9].*[0-9])(?=.*[!@#$%^&*].*[!@#$%^&*]).{8,}$/,
      "Password must contain minimum 2 capital letters, 2 small letters, 2 numbers and 2 special characters"
    )
    .required("Password is required"),
});

// Form 2 validations
export const form_2_validations = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
    .min(2, "Minimum of 2 characters")
    .max(50, "Maximum of 50 characters")
    .required("First Name is required"),
  lastName: yup
    .string()
    .matches(/^[A-Za-z]*$/, "Only alphabets are allowed")
    .max(50, "Maximum of 50 characters"),
  address: yup
    .string()
    .min(10, "Minimum length of 10 characters")
    .required("Address is required"),
});

// Form 3 validations
export const form_3_validations = yup.object().shape({
  countryCode: yup
    .string()
    .oneOf(["+91", "+1"], "Invalid country code")
    .required("Country Code is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  acceptTermsAndCondition: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});
