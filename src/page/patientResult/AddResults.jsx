import { styled } from "@mui/material";
import { useCallback, useState, useEffect } from "react";
import { Datepicker } from "../../components/UI/datePicker/DatePicker";
import { Button } from "../../components/UI/button/Button";
import { useDropzone } from "react-dropzone";
import { Icons } from "../../assets/icons";
import { useFormik } from "formik";
// import { Error } from "../../components/auth/ChangePassword";
import { formikConfigSelect } from "../../utils/constants/formikConfig";
import { Select } from "../../components/UI/inputSelect/Select";
import { Error } from "../../components/auth/ChangePassword";

export const AddResults = ({ isOpen, onHandleClick }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [file, setFile] = useState(null);
  const [value, setValue] = useState("");

  const formik = useFormik(
    formikConfigSelect((values) => {
      console.log("Успешно отправлен", values);
    })
  );

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);
        formik.setFieldValue("file", selectedFile);
      }
    },
    [formik]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1024 * 2,
  });

  useEffect(() => {
    return () => {
      if (file) URL.revokeObjectURL(file);
    };
  }, [file]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    formik.setFieldValue("date", date);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    formik.setFieldValue("select", e.target.value);
  };

  const service = [
    { label: "Анестезиология", value: "Анестезиология" },
    { label: "Вакцинация", value: "Вакцинация" },
    { label: "Гинекология", value: "Гинекология" },
    { label: "Дерматология", value: "Дерматология" },
    { label: "Кардиология", value: "Кардиология" },
    { label: "Неврология", value: "Неврология" },
    { label: "Нейрохирургия", value: "Нейрохирургия" },
  ];

  return (
    <Container>
      <StyledDiv>
        <h1>Добавление результата</h1>
        <StyledForm onSubmit={formik.handleSubmit}>
          <article>
            <StyledContainer>
              <Select
                options={service}
                value={value}
                onBlur={formik.handleBlur}
                onChange={handleChange}
                placeholder="Выберите услугу"
                label="Услуга"
                error={formik.touched.select && formik.errors.select}
              />
              {formik.touched.select && formik.errors.select && (
                <Error>{formik.errors.select}</Error>
              )}
            </StyledContainer>

            <ContainerDate>
              <label>Дата сдачи</label>
              <StyledDatepicker
                selectedDate={selectedDate}
                onDateChange={handleDateChange}
                onBlur={formik.handleBlur}
                error={formik.touched.date && formik.errors.date}
              />
              {formik.touched.date && formik.errors.date && (
                <Error>{formik.errors.date}</Error>
              )}
            </ContainerDate>
          </article>

          <StyledSection>
            <div className="container">
              <label>Файл</label>
              <div
                className={`imageBlock ${isDragActive ? "drag-active" : ""}`}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {file ? (
                  <img
                    className="image"
                    src={URL.createObjectURL(file)}
                    alt="Загруженный файл"
                  />
                ) : (
                  <Icons.Download />
                )}
              </div>
            </div>
            <div className="containerTitle">
              <h3>Нажмите или перетащите файл</h3>
              <p>Минимальное разрешение 450x600</p>
            </div>
          </StyledSection>
          <div className="containerBtn">
            <Button
              className="firstButton"
              variant={"outlined"}
              onClick={isOpen}
            >
              Отменить
            </Button>
            <Button type={"submit"} onClick={onHandleClick}>
              добавить
            </Button>
          </div>
        </StyledForm>
      </StyledDiv>
    </Container>
  );
};

const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  background: "#FFFFFF",
}));

const StyledDiv = styled("div")(() => ({
  width: "570px",
  height: "388px",
  background: "#FFFFFF",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "32px",
  gap: "30px",

  "& h1": {
    fontWeight: "500",
    fontSize: "24px",
  },
  "& article": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  "& .containerBtn": {
    display: "flex",
    gap: "55px",
    "& button": {
      width: "216px",
    },
    "& .firstButton": {
      border: "1px solid #959595",
      color: "#959595",
      "&:hover": {
        background: "transparent",
      },
    },
  },
}));

const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "300px",
  gap: "3px",
  height: "85px",
}));

const StyledDatepicker = styled(Datepicker)(() => ({
  height: "200px",
}));

const ContainerDate = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "170px",
  gap: "4px",
  height: "85px",
}));

const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));

const StyledSection = styled("section")(() => ({
  display: "flex",
  width: "490px",
  alignItems: "center",
  gap: "20px",
  height: "110px",
  "& .imageBlock": {
    cursor: "pointer",
    width: "88px",
    height: "88px",
    borderRadius: "8px",
    background: "#E0E2E7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .image": {
      width: "88px",
      height: "88px",
      borderRadius: "8px",
    },
  },
  "& .container": {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  "& .containerTitle": {
    width: "208px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginTop: "20px",
    "& h3": {
      fontSize: "14px",
      fontWeight: "400",
    },
    "& p": {
      fontSize: "12px",
      color: "#959595",
    },
  },
}));
