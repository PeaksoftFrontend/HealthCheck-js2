import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Запольните!!!"),
  phone: Yup.string()
    .matches(
      /^[+]996\s\(\d{3}\)\s\d{3}-\d{4}$/,
      "Введите номер в формате +996 (XXX) XXX-XXXX"
    )
    .required("Запольните!!! "),
});
