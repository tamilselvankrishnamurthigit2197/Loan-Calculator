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
        p: {xs: 2, sm: 3, md: 4},
        margin: "0 auto",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Loan Calculator Dashboard
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{xs: 12, sm: 6, md: 4}}>
          <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="100000"
          fullWidth
          margin='normal'
        />
        
        <TextField
          required
          id="outlined-required"
          label="Interest Rate(%)"
          defaultValue="8.5"
          fullWidth
          margin='normal'
        />
        
        <TextField
          required
          id="outlined-required"
          label="Term(Years)"
          defaultValue="6"
          fullWidth
          margin='normal'
        />
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ mt: 3 }}> CACULATE </Button>
    </Box>
  )
 }
 
 export default InputField
