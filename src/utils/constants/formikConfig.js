import * as Yup from "yup";

export const forConfig = (onSubmit) => ({
  initialValues: {
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  validationSchema: Yup.object({
    firstName: Yup.string()
      .min(2, "Имя должно содержать минимум 2 символа")
      .required("Имя обязательно"),
    lastName: Yup.string()
      .min(2, "Фамилия должна содержать минимум 2 символа")
      .required("Фамилия обязательна"),
    number: Yup.string()
      .matches(
        /^\+7\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/,
        "Неверный формат номера телефона. Введите номер в формате +7 (XXX) XXX-XX-XX"
      )
      .required("Номер телефона обязателен"),
    email: Yup.string()
      .email("Неверный формат email")
      .required("Email обязателен"),
    password: Yup.string()
      .min(8, "Пароль должен содержать минимум 8 символов")
      .required("Пароль обязателен"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
      .required("Подтверждение пароля обязательно"),
    department: Yup.string()
      .required("Отделение обязательно")
      .min(3, "Отделение должно содержать минимум 3 символа"),
    position: Yup.string()
      .required("Должность обязательна")
      .min(2, "Должность должна содержать минимум 2 символа"),
    description: Yup.string()
      .required("Описание обязательно")
      .min(10, "Описание должно содержать минимум 10 символов"),
  }),
  onSubmit,
});

export const config = (onSubmit) => ({
  initialValues: {
    firstName: "",
    lastName: "",

    department: "",
    position: "",
    description: "",
  },
  validationSchema: Yup.object({
    firstName: Yup.string()
      .min(2, "Имя должно содержать минимум 2 символа")
      .required("Имя обязательно"),
    lastName: Yup.string()
      .min(2, "Фамилия должна содержать минимум 2 символа")
      .required("Фамилия обязательна"),

    department: Yup.string()
      .required("Отделение обязательно")
      .min(3, "Отделение должно содержать минимум 3 символа"),
    position: Yup.string()
      .required("Должность обязательна")
      .min(2, "Должность должна содержать минимум 2 символа"),
    description: Yup.string()
      .required("Описание обязательно")
      .min(10, "Описание должно содержать минимум 10 символов"),
  }),
  onSubmit,
});

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Некорректный email адрес")
    .required("Email обязателен"),
  password: Yup.string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .required("Пароль обязателен"),
});

export const formikConfig = (onSubmit) => ({
  initialValues: {
    email: "",
    password: "",
  },
  validationSchema,
  onSubmit,
});

export const formikForgotPassword = (onSubmit) => ({
  initialValues: {
    email: "",
  },
  validationSchema: Yup.object({
    email: Yup.string()
      .email("Некорректный email адрес")
      .required("Email обязателен"),
  }),
  onSubmit,
});

export const formikConfigChangePassword = (onSubmit) => ({
  initialValues: {
    password: "",
    confirmPassword: "",
  },
  validationSchema: Yup.object({
    password: Yup.string()
      .min(8, "Пароль должен содержать минимум 8 символов")
      .required("Пароль обязателен"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
      .required("Подтверждение пароля обязательно"),
  }),
  onSubmit,
});

export const formikConfigSelect = (onSubmit) => ({
  initialValues: {
    select: "",
    date: null,
    file: null,
  },
  validationSchema: Yup.object({
    select: Yup.string().min(3, "lkafhdskhf").required("Выберите услугу"),
    date: Yup.date().nullable().required("Выберите дату"),
    file: Yup.mixed().required("Загрузите файл").nullable(),
  }),
  onSubmit,
});
