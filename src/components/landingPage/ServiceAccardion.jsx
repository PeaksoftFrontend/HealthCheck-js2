import { styled } from "@mui/material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ServiceAccardion = () => {
  const faqData = [
    {
      question: "Как проходит процедура?",
      answer: (
        <StyledList>
          <p>
            На первом этапе, консультации нашего специалиста, вам будет нужно
            определиться с желаемым результатом — тоном отбеливания при помощи
            специальной палитры. Дальнейшие действия выполняются в следующей
            последовательности:
          </p>
          <li>Обработка десен защитным составом;</li>
          <li>Защита глаз при помощи специальных очков;</li>
          <li>Нанесение отбеливающего геля;</li>
          <li>
            Первая процедура отбеливания в течение 15 минут под воздействием
            лампы;
          </li>
          <li>Полосканье для удаления остатков геля;</li>
          <li>
            Вторая процедура отбеливания в течение 15 минут под воздействием
            лампы;
          </li>
          <li>Полосканье;</li>
          <li>
            Третья процедура отбеливания в течение 15 минут под воздействием
            лампы;
          </li>
          <li>
            Нанесение реминерализирующего геля для защиты эмали от
            чувствительности и её восстановления.
          </li>
        </StyledList>
      ),
    },
    {
      question: "Показания",
      answer: (
        <StyledList>
          <li>Хронические или острые боли в различных частях тела;</li>
          <li>
            Проблемы с пищеварением, включая изжогу, тошноту, или боли в животе;
          </li>
          <li>
            Различные неврологические симптомы, такие как головные боли,
            головокружение или онемение;
          </li>
          <li>
            Симптомы депрессии, тревожности или других психологических проблем;
          </li>
          <li>
            Обследование для выявления заболеваний или наследственных факторов
            риска;
          </li>
          <li>
            Требуется профилактический медицинский осмотр или обследование;
          </li>
          <li>Проблемы с сном или беспокойство по поводу качества сна;</li>
          <li>
            Управление хроническими заболеваниями, такими как диабет или
            гипертония;
          </li>
          <li>
            Желание проконсультироваться по вопросам здорового образа жизни,
            питания или физической активности;
          </li>
          <li>
            Подготовка к беременности или проблемы с репродуктивным здоровьем.
          </li>
        </StyledList>
      ),
    },
    {
      question: "Противопоказания",
      answer: (
        <StyledList>
          <p>
            Противопоказания к процедуре отбеливания могут включать следующее:
          </p>
          <li>Беременность или кормление грудью;</li>
          <li>Аллергия на компоненты отбеливающего геля;</li>
          <li>Повреждение эмали зубов;</li>
          <li>Кариес или другие заболевания зубов, требующие лечения;</li>
          <li>Чувствительные зубы;</li>
          <li>
            Необходимость кардинального отбеливания, которое может быть
            нежелательно из-за возможного повреждения зубов.
          </li>
        </StyledList>
      ),
    },
    {
      question: "Насколько безопасно отбеливание Zoom 4?",
      answer: (
        <StyledList>
          <p>
            Процедура отбеливания Zoom 4 является относительно безопасной,
            однако следует учитывать некоторые аспекты:
          </p>
          <li>
            Процедура должна проводиться под контролем опытного стоматолога или
            специалиста по косметической стоматологии;
          </li>
          <li>
            Предварительное обследование зубов и десен необходимо для исключения
            противопоказаний и оценки возможных рисков;
          </li>
          <li>
            Важно соблюдать рекомендации врача после процедуры, чтобы избежать
            возможных осложнений;
          </li>
          <li>
            Как и у любой процедуры отбеливания, могут возникнуть временные
            чувствительность зубов и десен, которые обычно проходят в течение
            нескольких дней;
          </li>
          <li>
            Важно соблюдать инструкции по уходу за зубами после процедуры, чтобы
            поддерживать результаты отбеливания и предотвращать повторное
            окрашивание.
          </li>
        </StyledList>
      ),
    },
    {
      question: "Сколько держится результат?",
      answer: (
        <StyledList>
          <li>
            Важно поддерживать хорошую оральную гигиену, регулярно чистить зубы
            и по возможности избегать потребления пигментированных продуктов,
            таких как кофе, чай, красное вино и курение, чтобы продлить эффект
            отбеливания;
          </li>
          <li>
            Рекомендуется также регулярные профессиональные чистки у стоматолога
            для поддержания здоровья полости рта и состояния эмали.
          </li>
        </StyledList>
      ),
    },
  ];

  return (
    <StyledDiv>
      <FAQContainer>
        <StyledH2>Часто задаваемые вопросы</StyledH2>
        <p>
          Специалисты нашей клиники с удовольствием ответят на все ваши вопросы.
          Ниже представленны наиболее популярные.
        </p>
        {faqData.map((faq, index) => (
          <StyledAccordion key={index}>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Typography>{faq.answer}</Typography>
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </FAQContainer>
    </StyledDiv>
  );
};
const StyledDiv = styled("div")({
  maxWidth: "1300px",
  margin: "0 auto",
});
const StyledH2 = styled("h1")({
  width: "460px",
  height: "36px",
  top: "1760px",
  left: "120px",
  margin: "20px",
});

const FAQContainer = styled("div")({
  maxWidth: "1300px",
  display: "flex",
  flexDirection: "column",
  width: "886px",
  height: "auto",
  padding: "0 20px",
  backgroundColor: "#fff",
  borderRadius: "20px",
});

const StyledAccordion = styled(Accordion)({
  margin: "8px 0",
  boxShadow: "none",
  border: "1px solid #e0e0e0",
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: "0",
  },
});

const StyledAccordionSummary = styled(AccordionSummary)({
  color: "#4D4E51",
  borderRadius: "4px",
  padding: "8px 16px",
  borderLeft: "8px solid #048741",
  background: "#DBF0E5",
  width: "852px",
  height: "60px",
  "&:hover": {
    background: "#048741",
  },
  "& .css-20bmp1-MuiSvgIcon-root": {
    background: "#fff",
    borderRadius: "50%",
  },
});

const StyledAccordionDetails = styled(AccordionDetails)({
  backgroundColor: "#fff",
  padding: "16px",
  width: "818px",
  height: "auto",
  "& p": {
    margin: "10px 0",
  },
});

const StyledList = styled("ul")({
  paddingLeft: "20px",
  listStyleType: "disc",
  "& li::marker": {
    color: "#009344",
  },
  color: "#4D4E51",
});
