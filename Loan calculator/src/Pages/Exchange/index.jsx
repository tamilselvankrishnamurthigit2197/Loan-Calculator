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
import React from "react";
import { Box } from "@mui/material";

export default function Exchange() {

  const [rows, setRows] = React.useState([]);
  const columns = [
    { id: "currency", label: "Currency", minWidth: 80},
    {
      id: "rate",
      label: "Rate",
      minWidth: 100,  
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

  const [base, setBase] = React.useState("USD");

  /* when compound mounts or page reloads */
  React.useEffect(() => {
    const url =
      "https://v6.exchangerate-api.com/v6/741a571ab91393226387553c/latest/USD";

    const fetchRates = async () => {
      try {
        const { data } = await axios.get(url);

        /* filters except USD currency and rate(data.base_code) */
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
    <Box
      component="form"
      sx={{
        flexGrow: 1,
        p: { xs: 2, sm: 3, md: 4 },
        pt: 0,  
        maxWidth: 800, // prevent stretching too much on big screens
      }}
      marginTop={'4rem'}
      marginBottom={'1.5rem'}
      noValidate
      autoComplete="off"
    >
       <Typography
        variant="h5"
        sx={{
          mb: 3,
          mt: 0,
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }, // responsive text
          textAlign: { xs: "left", sm: "left" },
        }}
      >
        Live Exchange Rates (Base: {base})
      </Typography>

      <TableContainer
            component={Paper}
            sx={{
              mt: 2,
              maxHeight: 800, // sets scrollable area height
              overflow: "auto",
            }}
        >
          <Table size="small" stickyHeader>
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
        </Box>
  );
}
