import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Typography from "@mui/material/Typography";

export default function Exchange() {
  const [rows, setRows] = React.useState([]);
  const [base, setBase] = React.useState("USD");

  const columns = [
    { id: "currency", label: "Currency", minWidth: 80 },
    {
      id: "rate",
      label: "Rate",
      minWidth: 100,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

  React.useEffect(() => {
    const url =
      "https://v6.exchangerate-api.com/v6/741a571ab91393226387553c/latest/USD";

    const fetchRates = async () => {
      try {
        const { data } = await axios.get(url);

        if (data?.conversion_rates) {
          const formattedRows = Object.entries(data.conversion_rates).filter(
            ([currency]) => currency !== data.base_code
          ).map(
            ([currency, rate]) => ({
              currency,
              rate,
            })
          );
          setRows(formattedRows);
          setBase(data.base_code);
        }
      } catch (err) {
        console.log("Error happened:", err.message);
      }
    };
    fetchRates();
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", p: 1 }}>
      <Typography
        sx={{ textAlign: "left", p: 1 }}
      >
        Live Exchange Rates (Base: {base})
      </Typography>

      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    minWidth: column.minWidth,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.currency}>
                  {columns.map((column) => {
                    
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
