import { Button } from "../UI/button/Button";

export const Schedule = () => {
  return (
    <div>
      <Button>Изменить день </Button>
      <Button>Установить по шаблону</Button>
      <div></div>
    </div>
  );
};

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
//   Typography,
// } from "@mui/material";

// // Данные о специалистах
// const data = [
//   {
//     name: "Манак Елена",
//     role: "Врач-хирург",
//     avatar: "", // сюда можно вставить путь к аватару
//     schedule: {},
//   },
//   {
//     name: "Гаталусский Артур",
//     role: "Врач-хирург",
//     avatar: "", // сюда можно вставить путь к аватару
//     schedule: {},
//   },
// ];

// // Компонент таблицы
// export const ScheduleTable = () => {
//   const days = [
//     "Пн 1 Май",
//     "Вт 2 Май",
//     "Ср 3 Май",
//     "Чт 4 Май",
//     "Пт 5 Май",
//     "Сб 6 Май",
//     "Вс 7 Май",
//   ];

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Специалисты</TableCell>
//             {days.map((day) => (
//               <TableCell key={day}>{day}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((specialist) => (
//             <>
//               <TableRow key={specialist.name}>
//                 <TableCell>
//                   <Avatar alt={specialist.name} src={specialist.avatar} />
//                   <Typography variant="body1">{specialist.name}</Typography>
//                   <Typography variant="body2">{specialist.role}</Typography>
//                 </TableCell>
//                 {days.map((day) => (
//                   <TableCell key={day}>
//                     {specialist.schedule[day]?.map((time, index) => (
//                       <div key={index}>{time}</div>
//                     ))}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };
