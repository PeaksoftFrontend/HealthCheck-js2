const [data, setData] = useState(
  [
    {
      number: 1,
      // status: true,
      specialist: {
        name: "Манак Елена",
        role: "Главный врач",
        image: "https://via.placeholder.com/40",
      },
      department: "Анестезиолог",
      schedule: "30 января 2023",
    },
    {
      number: 2,
      // status: true,
      specialist: {
        name: "Манак Елена",
        role: "Главный врач",
        image: "https://via.placeholder.com/40",
      },
      department: "Анестезиолог",
      schedule: "30 января 2023",
    },
    {
      number: 3,
      // status: false,
      specialist: {
        name: "Манак Елена",
        role: "Главный врач",
        image: "https://via.placeholder.com/40",
      },
      department: "Анестезиолог",
      schedule: "30 января 2023",
    },
  ],
  []
);

import { Checkbox } from "@mui/material";
import { Icons } from "../../assets/icons";
import { useMemo, useState } from "react";
import { ContainerDiv, StyledDiv, StyledImg, Switch } from "./tableCss";

const toggleSwitch = (rowIndex) => {
  const newData = [...data];
  newData[rowIndex].status = !newData[rowIndex].status;
  setData(newData);
};

export const TABLE = useMemo(
  () => [
    {
      Header: "№",
      accessor: "number",
    },
    {
      Header: "Статус",
      accessor: "status",
      Cell: ({ row: { index } }) => (
        <Switch
          isActive={data[index].status}
          onClick={() => toggleSwitch(index)}
        />
      ),
    },
    {
      Header: "Специалист",
      accessor: "specialist",
      Cell: ({ value }) => (
        <StyledDiv>
          <StyledImg src={value.image} alt={value.name} />
          <div>
            <div>{value.name}</div>
            <span>{value.role}</span>
          </div>
        </StyledDiv>
      ),
    },
    {
      Header: "Отделение",
      accessor: "department",
    },
    {
      Header: "Расписание до",
      accessor: "schedule",
    },
    {
      Header: "Действия",
      Cell: () => (
        <ContainerDiv>
          <Icons.ModeEdition>✏️</Icons.ModeEdition>
          <Icons.DeleteOutlineIcon>🗑️</Icons.DeleteOutlineIcon>
        </ContainerDiv>
      ),
    },
  ],
  [data]
);

export const TABLEBODY = [
  {
    id: 1,
    name: "Айназик",
    date: "12.01.23",
    phone: "+996 707 123 456",
    processed: <Checkbox />,
  },
  {
    id: 2,
    name: "Айназик",
    date: "12.01.23",
    phone: "+996 707 123 456",
    processed: <Checkbox />,
  },
  {
    id: 3,
    name: "Айназик",
    date: "12.01.23",
    phone: "+996 707 123 456",
    processed: <Checkbox />,
  },
  {
    id: 4,
    name: "Айназик",
    date: "12.01.23",
    phone: "+996 707 123 456",
    processed: <Checkbox />,
  },
];

export const columns = [
  {
    Header: ({ value }) => <Checkbox {...value} />,
    accessor: "processed",
  },
  {
    Header: ({ value }) => <Icons.DeleteOutlineIcon {...value} />,
    accessor: "kj",
  },
  {
    Header: "№",
    accessor: "id",
  },
  {
    Header: "Имя",
    accessor: "name",
  },
  {
    Header: "Дата",
    accessor: "date",
  },
  {
    Header: "Номер телефона",
    accessor: "phone",
  },
  {
    Header: "Обработан",
    Cell: ({ value }) => <Checkbox {...value} />,
  },
  {
    Header: "Действия",
    Cell: () => <Icons.DeleteOutlineIcon>🗑</Icons.DeleteOutlineIcon>,
  },
];
