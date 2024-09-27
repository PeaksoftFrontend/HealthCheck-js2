import { Table } from "./components/Table";
import Delete from "@mui/icons-material/Delete";
import { Checkbox } from "@mui/material";

export const App = () => {
  const data = [
    {
      id: 1,
      name: "Айназик",
      date: "12.01.23",
      phone: "+996 707 123 456",
    },
    {
      id: 2,
      name: "Айназик",
      date: "12.01.23",
    },
    {
      id: 3,
      name: "Айназик",
      date: "12.01.23",
      phone: "+996 707 123 456",
    },
    {
      id: 4,
      name: "Айназик",
      date: "12.01.23",
      phone: "+996 707 123 456",
    },
  ];

  const columns = [
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
      accessor: "processed",
      Cell: ({ value }) => <Checkbox checked={value} />,
    },
    {
      Header: "Действия",
      Cell: () => <Delete />,
    },
  ];

  return (
    <div>
      <h1>Healtcheck</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};
