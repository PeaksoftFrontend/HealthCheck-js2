import { useTable } from "react-table";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
`;

const Th = styled.th`
  background-color: #fff;
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #d9d9d9;
`;

const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #d9d9d9;
`;

export const SpecialistCell = styled.div`
  display: flex;
  align-items: center;
`;

export const SpecialistImage = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  width: 40px;
  height: 40px;
`;

export const RoleText = styled.div`
  font-size: 12px;
  color: gray;
`;

export const ActionsCell = styled.div`
  display: flex;
  align-items: center;
`;

export const ActionButton = styled.button`
  margin-right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #333;
`;

export const StatusToggle = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
  appearance: none;
  width: 40px;
  height: 20px;
  background-color: ${(props) => (props.checked ? "green" : "gray")};
  border-radius: 20px;
  position: relative;
  outline: none;
  transition: background-color 0.2s;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: ${(props) => (props.checked ? "20px" : "2px")};
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    transition: left 0.2s;
  }
`;

export const Table = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};
