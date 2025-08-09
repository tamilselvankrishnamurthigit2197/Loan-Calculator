import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Stack,
} from '@mui/material';

 const InputField = () => {
   
  return (
    <Box
      component="form"
      sx={{
        flexGrow: 1,
        p: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" gutterBottom>
        <h2>Loan Calculator Dashboard</h2>
      </Typography>

      <Grid container spacing={2} xs={12} sm={6} md={4}>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="100000"
        />
        
        <TextField
          required
          id="outlined-required"
          label="Interest Rate(%)"
          defaultValue="8.5"
        />
        
        <TextField
          required
          id="outlined-required"
          label="Term(Years)"
          defaultValue="6"
        />
          <Button variant="contained"> CACULATE </Button>
      </Grid>
    </Box>
  )
 }
 
 export default InputField
