import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table as MuiTable,
} from "@mui/material";
import { useTable } from "react-table";
import styled from "styled-components";

export const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <StyledTableContainer>
      <MuiTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id}
            >
              <TableCell colSpan={6}>
                <RowContainer>
                  <div className="left-content">
                    {headerGroup.headers.slice(0, 4).map((column) => (
                      <span
                        className="first_title"
                        {...column.getHeaderProps()}
                        key={column.id}
                      >
                        {column.render("Header")}
                      </span>
                    ))}
                  </div>
                  <div className="right-content">
                    {headerGroup.headers.slice(4).map((column) => (
                      <span {...column.getHeaderProps()} key={column.id}>
                        {column.render("Header")}
                      </span>
                    ))}
                  </div>
                </RowContainer>
              </TableCell>
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()} key={row.id}>
                <TableCell colSpan={6}>
                  <RowContainer>
                    <div className="left-content">
                      {row.cells.slice(0, 4).map((cell) => (
                        <span
                          className="Title"
                          {...cell.getCellProps()}
                          key={cell.column.id}
                        >
                          {cell.render("Cell")}
                        </span>
                      ))}
                    </div>
                    <div className="right-content">
                      {row.cells.slice(4).map((cell) => (
                        <span {...cell.getCellProps()} key={cell.column.id}>
                          {cell.render("Cell")}
                        </span>
                      ))}
                    </div>
                  </RowContainer>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
    </StyledTableContainer>
  );
};

const RowContainer = styled.div`
  display: flex;

  justify-content: space-between;
  .left-content {
    display: flex;
    width: 100%;
    .Title {
      font-size: 16px;
      font-weight: 400;
    }
    .first_title {
      font-size: 14px;
      font-weight: 600;
    }
    span {
      width: 200px;
    }
    span:first-child {
      width: 100px;
    }
  }

  .right-content {
    display: flex;
    gap: 65px;
    width: 100%;
    span {
      width: 90px;
    }

    span:last-of-type {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    span:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const StyledTableContainer = styled(TableContainer)({
  borderRadius: "6px",
  display: "flex",
  justifyContent: "center",
  width: "100%",

  "& .MuiTableHead-root": {
    height: "3.688rem",
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
  },

  "& .MuiTableCell-root": {
    fontWeight: "600",
    border: "none",
  },

  "& .MuiTableRow-root:last-of-type": {
    borderBottom: "none",
  },

  "& .MuiTableRow-root:nth-of-type(even)": {
    backgroundColor: "#F5F5F59C",
  },
});
