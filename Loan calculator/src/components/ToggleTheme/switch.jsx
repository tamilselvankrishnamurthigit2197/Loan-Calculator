/* light and dark theme switch */

import Switch from '@mui/material/Switch';
import { useThemeCurrency } from './contextTheme';

 const label = { inputProps: { 'aria-label': 'Switch demo' } }; 

 export default function ToggleSwitch() {

      /* const colorMode = useColorMode(); */
      const {toggleTheme} = useThemeCurrency();

  return (
    <div>
      {/* <Switch onClick={colorMode.toggleColorMode} color='default' {...label} /> */}
      <Switch
      onChange={toggleTheme}
      color='default'
       {...label} />
    </div>
  );
}
