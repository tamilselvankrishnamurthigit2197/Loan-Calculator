import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useThemeCurrency } from '../ToggleTheme/contextTheme';

export default function CurrencySelect() {
  /* const [currency, setCurrency] = React.useState('USD'); */

  const {currency, setCurrency} = useThemeCurrency();

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{currency}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={currency}
          onChange={handleChange}
          autoWidth
          label="USD"
        >
          <MenuItem value={'USD'}>USD</MenuItem>
          <MenuItem value={'EUR'}>EUR</MenuItem>
          <MenuItem value={'INR'}>INR</MenuItem>
          <MenuItem value={'GBP'}>GBP</MenuItem>
          <MenuItem value={'JPY'}>JPY</MenuItem>
          <MenuItem value={'AUD'}>AUD</MenuItem>
          <MenuItem value={'CAD'}>CAD</MenuItem>
        </Select>
      </FormControl>
  );
}
