/* light and dark theme switch */

import Switch from '@mui/material/Switch';
import { useColorMode } from './contextTheme';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function ToggleSwitch() {

      const colorMode = useColorMode();

  return (
    <div>
      <Switch onClick={colorMode.toggleColorMode} color='default' {...label} />
    </div>
  );
}
