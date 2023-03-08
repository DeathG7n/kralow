import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  country: Yup.string().required("Country is required"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email address"),
  // confirmEmail: Yup.string()
  //   .oneOf([Yup.ref('email'), null], 'Email must match'),
  phone: Yup.number().required("Phone number is a required field"),
  // amount: Yup.number().required("Phone number is a required field"),
  // confirmPhone: Yup.number()
  //   .oneOf([Yup.ref('phone'), null], 'Phone number must match'),
  agreePrivacy: Yup.string().required("Check the box above"),
  agreeTerms: Yup.string().required("Check the box above"),

});
 