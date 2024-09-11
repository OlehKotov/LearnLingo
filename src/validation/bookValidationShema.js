import * as yup from "yup";


export const bookValidationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    reason: yup.string().required("At least one reason must be selected"),
  });