import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import Img from "../../assets/icons/others/img.svg";

export const AddingDoctors = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    department: "",
    position: "",
    description: "",
    photo: null,
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("department", formData.department);
    data.append("position", formData.position);
    data.append("description", formData.description);
    data.append("photo", formData.photo);

    fetch("/add-specialist", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          setMessage("Специалист успешно добавлен.");
        } else {
          setMessage("Ошибка при добавлении специалиста.");
        }
      })
      .catch(() => {
        setMessage("Ошибка при соединении с сервером.");
      });
  };

  return (
    <SryledDiv>
      <FormContainer>
        <Typography variant="h5" gutterBottom>
          Добавление специалиста
        </Typography>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <InputRow>
            <StyledFormControl>
              <StyledInputLabel shrink htmlFor="firstName">
                Имя
              </StyledInputLabel>
              <StyledTextField
                id="firstName"
                name="firstName"
                placeholder="Напишите имя"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </StyledFormControl>

            <StyledFormControl>
              <StyledInputLabel shrink htmlFor="lastName">
                Фамилия
              </StyledInputLabel>
              <StyledTextField
                id="lastName"
                name="lastName"
                placeholder="Напишите фамилию"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </StyledFormControl>
          </InputRow>

          <InputRow>
            <StyledFormControl>
              <StyledInputLabel shrink htmlFor="department">
                Отделение
              </StyledInputLabel>
              <Select
                labelId="department"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
              >
                <MenuItem value="">
                  <em>Выберите отделение</em>
                </MenuItem>
                <MenuItem value="Отдел 1">Отдел 1</MenuItem>
                <MenuItem value="Отдел 2">Отдел 2</MenuItem>
                <MenuItem value="Отдел 3">Отдел 3</MenuItem>
              </Select>
            </StyledFormControl>

            <StyledFormControl>
              <StyledInputLabel shrink htmlFor="position">
                Должность
              </StyledInputLabel>
              <StyledTextField
                id="position"
                name="position"
                placeholder="Напишите должность"
                value={formData.position}
                onChange={handleInputChange}
                required
              />
            </StyledFormControl>
          </InputRow>

          <StyledFormControlPhoto>
            <StyledButton
              component="label"
              htmlFor="photo"
              variant="outlined"
              color="primary"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            >
              <img
                src={Img}
                alt="Upload"
                style={{ width: "50%", height: "auto", border: "none" }}
              />
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
                required
              />
            </StyledButton>
          </StyledFormControlPhoto>

          <StyledTextarea
            id="description"
            name="description"
            placeholder="Введите описание специалиста"
            minRows={4}
            value={formData.description}
            onChange={handleInputChange}
            required
          />

          <ButtonContainer>
            <StyledButton variant="contained" color="grey" type="reset">
              Отменить
            </StyledButton>
            <StyledButton variant="contained" color="primary" type="submit">
              Добавить
            </StyledButton>
          </ButtonContainer>
        </form>

        {message && <Typography color="primary">{message}</Typography>}
      </FormContainer>
    </SryledDiv>
  );
};

// Стилизация компонентов с MUI styled
const SryledDiv = styled("div")({
  width: "1301px",
  height: "1327px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "6px",
  position: "relative",
  top: "223px",
});

const FormContainer = styled("div")({
  position: "relative",
  width: "100%",
  paddingLeft: "200px",
  paddingTop: "20px",
  backgroundColor: "#fff",
  borderRadius: "6px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
});

const StyledButton = styled(Button)({
  marginTop: "20px",
  "&:first-of-type": {
    marginRight: "10px",
  },
  border: "none", // Remove the border
  "&:hover": {
    background: "rgba(0, 0, 0, 0.1)", // Optional: Add hover effect
  },
});

const StyledTextField = styled(TextField)({
  marginBottom: "20px",
  flex: 1,
});

const StyledFormControl = styled(FormControl)({
  width: "490px",
  height: "38px",
  marginBottom: "20px",
});

const StyledInputLabel = styled(InputLabel)({
  marginBottom: "8px",
});

const StyledFormControlPhoto = styled(FormControl)({
  position: "absolute",
  top: "20px",
  left: "20px",
  width: "150px",
  height: "150px",
  backgroundColor: "#f0f0f0",
  padding: "10px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
  cursor: "pointer",
});

const StyledTextarea = styled(TextareaAutosize)({
  width: "100%",
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  marginBottom: "20px",
});

const ButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "20px",
});

const InputRow = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  marginBottom: "20px",
  justifyContent: "space-between",
});
