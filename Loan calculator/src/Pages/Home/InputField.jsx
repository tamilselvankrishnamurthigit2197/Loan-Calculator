import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
} from '@mui/material';
import { useMemo, useState } from 'react';

/* emi calculation */
function calcEMI(principal, annualRate, years) {
  
  if (!principal || !annualRate || !years) return 0;

  /* rate per month */
  const r = annualRate / 12 / 100;

  /* total months */
  const n = years * 12;
  
  if (r === 0) return principal / n;
  
  const factor = Math.pow(1 + r, n);
  
  return (principal * r * factor) / (factor - 1);
}

const InputField = () => {

  const [principal, setPrincipal] = useState(100000);
  const [annualRate, setAnnualRate] = useState(8.5)
  const [years, setYears] = useState(5)

  /* amortization schedule */
  const [showSchedule, setShowSchedule] = useState(true)

  /* EMI calculation Memoize */
  const emi = useMemo(()=> calcEMI(
    Number(principal),
    Number(annualRate),
    Number(years)
  ), [principal, annualRate, years]);

  return (
    <Box
      component="form"
      sx={{
        
        flexGrow: 1,
        p: { xs: 2, sm: 3, md: 4 },
        pt: 0,  
        maxWidth: 800, // prevent stretching too much on big screens
      }}
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
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="outlined-interest"
            label="Interest Rate (%)"
            defaultValue="8.5"
            fullWidth
            margin='dense'
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="outlined-term"
            label="Term (Years)"
            defaultValue="6"
            fullWidth
            margin='dense'
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
            value={principal}
          >
            CALCULATE
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InputField;
