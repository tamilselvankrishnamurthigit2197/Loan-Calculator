import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function ToggleSwitch() {
  return (
    <div>
      <Switch {...label} />
      
    </div>
  );
}
