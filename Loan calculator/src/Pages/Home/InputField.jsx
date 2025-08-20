import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Table,
  TableRow,
  TableHead,
  Paper,
  TableCell,
  TableBody,
  TableContainer,
} from '@mui/material';

import { useMemo, useState } from 'react';
import CurrencySelect from '../../components/CurrencyContext/CuSelect';
import { useThemeCurrency } from '../../components/ToggleTheme/contextTheme';

/* emi calculation */
function calcEMI(principal, annualRate, years) {

  if (!principal || !annualRate || !years) return 0;
  const r = annualRate / 12 / 100; /* rate per month */
  const n = years * 12; /* total months */

  if (r === 0) return principal / n;

  const factor = Math.pow(1 + r, n);

  return (principal * r * factor) / (factor - 1);
}

const InputField = () => {

  const [principal, setPrincipal] = useState(100000);
  const [annualRate, setAnnualRate] = useState(8.5)
  const [years, setYears] = useState(5)

  const {currency, rate } = useThemeCurrency()

  /* amortization schedule */
  const [showSchedule, setShowSchedule] = useState([])

  /* EMI calculation Memoize */
  const emi = useMemo(()=> calcEMI(
    Number(principal),
    Number(annualRate),
    Number(years)
  ), [principal, annualRate, years]);

  /* Amortization schedule Table */
  function amortizationSchedule(){
     let balance = Number(principal);
    const r = Number(annualRate) / 12 / 100;
    const months = Number(years) * 12;
    const table = [];

/* rotates until months to cover accor to years */
    for (let i = 1; i <= months; i++) {
      const interestPayment = balance * r;
      const principalPayment = emi - interestPayment;
      balance -= principalPayment;

      table.push({
        month: i,
        principal: principalPayment,
        interest: interestPayment,
        balance: balance > 0 ? balance : 0,
      });

      if (balance <= 0) break;
    }

    return table;
  }
  
  /* calculate holds : currency selector - EMI value with currency - reset button */
  function handleCalculate(){
    const tableData = amortizationSchedule();
    setShowSchedule(tableData); 
  }

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
        Loan Calculator Dashboard
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="outlined-loan-amount"
            label="Loan Amount"
            fullWidth
            margin='dense'
            onChange={(e)=>setPrincipal(e.target.value)}
            value={principal}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="outlined-interest"
            label="Interest Rate (%)"
            /* defaultValue="8.5" */
            fullWidth
            margin='dense'
            onChange={(e)=>setAnnualRate(e.target.value)}
            value={annualRate}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="outlined-term"
            label="Term (Years)"
            /* defaultValue="6" */
            fullWidth
            margin='dense'
            onChange={(e)=>setYears(e.target.value)}
            value={years}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: { xs: 2, sm: 3 },
              py: 1.5,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
            onClick={handleCalculate}
          >
            CALCULATE
          </Button>
        </Grid>
      </Grid>
      {showSchedule.length > 0 && (
          <>
          <Typography
            variant="h6"
            sx={{ mt: 3, display: 'flex', flexGrow: 1,}}
          >
            <p> Monthly EMI: ${emi.toFixed(2)}</p>
          </Typography>
            <div style={{
                display: 'flex',
                flexGrow: 1,
                flexDirection: 'row',
                padding: '2px',
                pt: 0,  
                mt: 2,
                maxHeight: 600, // prevent stretching too much on big screens
            }}>
                <CurrencySelect />
                <p> Converted EMI: {emi*rate.toFixed(2)} {currency} </p>
                <Button
                  sx={{
                    mx: 1,
                    py: 0.2,
                  }}
                  variant="outlined"
                  size='small'
                  color='secondary'
                  onClick={()=>{
                    setShowSchedule([]);      
                  }}
                > RESET TABLE</Button>
            </div>
          
        <TableContainer
            component={Paper}
            sx={{
              mt: 2,
              maxHeight: 600, // sets scrollable area height
              overflow: "auto",
            }}
        >
          <Table
            size="small"
            stickyHeader
          >
          {/* <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table"> */}
          <TableHead>
          <TableRow>
          <TableCell
            colSpan={4}
            align='left'> Amortization Schedule {currency}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell> Month</TableCell>
          <TableCell align="center"> Principal</TableCell>
          <TableCell align="center"> Interest</TableCell>
          <TableCell align="right"> Remaining Balance</TableCell>
          </TableRow>
          </TableHead>

          <TableBody>
          {showSchedule.map((row)=>(
          <TableRow key={row.month}>
          <TableCell align='left'> {row.month}</TableCell>
          <TableCell align='center'> {(row.principal*rate).toFixed(2)} {currency}</TableCell>
          <TableCell align='center'> {(row.interest*rate).toFixed(2)} {currency}</TableCell>
          <TableCell align='right'> {(row.balance*rate).toFixed(2)} {currency}</TableCell>
          </TableRow>
          ))}
          </TableBody>

          </Table>
        </TableContainer>
      
      </>
      )}
    </Box>
  );
};

export default InputField
