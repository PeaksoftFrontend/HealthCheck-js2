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

export const Table = ({ columns, data, isVariant }) => {
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
                    {headerGroup.headers
                      .slice(0, isVariant === "outlined" ? 6 : 4)
                      .map((column) => (
                        <span {...column.getHeaderProps()} key={column.id}>
                          {column.render("Header")}
                        </span>
                      ))}
                  </div>
                  <div className="right-content">
                    {headerGroup.headers
                      .slice(isVariant === "outlined" ? 6 : 4)
                      .map((column) => (
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
                      {row.cells
                        .slice(0, isVariant === "outlined" ? 6 : 4)
                        .map((cell) => (
                          <span {...cell.getCellProps()} key={cell.column.id}>
                            {cell.render("Cell")}
                          </span>
                        ))}
                    </div>
                    <div className="right-content">
                      {row.cells
                        .slice(isVariant === "outlined" ? 6 : 4)
                        .map((cell) => (
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

  width: 99%;
  justify-content: space-between;
  border-bottom: "1px solid black";

  .left-content {
    display: flex;
    /* gap: 5px; */
    align-items: center;

    span:last-child {
      width: 150px;
    }
    span {
      width: 100px;
      span:last-child {
        font-weight: 500;
        font-size: 14px;
        color: #959595;
      }
    }
    span:first-child {
      width: 50px;
    }
  }

  .right-content {
    display: flex;
    gap: 40px;
    span {
      width: 100px;
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

  "& .MuiTableHead-root": {
    height: "3.688rem",
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
  },

  "& .MuiTableCell-root": {
    fontWeight: "500",
  },

  "& .MuiTableRow-root:last-of-type": {
    borderBottom: "none",
  },

  // "& .MuiTableRow-root:nth-of-type(even)": {
  // backgroundColor: "#F5F5F59C",
  // },
});
