import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 const InputField = () => {
   
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >

      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="100000"
        />
        </div>

        <div>
        <TextField
          required
          id="outlined-required"
          label="Interest Rate(%)"
          defaultValue="8.5"
        />
        </div>

        <div>
        <TextField
          required
          id="outlined-required"
          label="Term(Years)"
          defaultValue="6"
        />
        </div>
        </Box>
  )
 }
 
 export default InputField
