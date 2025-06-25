import { useTheme } from "@mui/material"
import {Brightness4, Brightness7 } from '@mui/icons-material'
import ToggleSwitch from "./switch";


const ToggleTheme = () => {

  const theme = useTheme();
  
  return (
    <ToggleSwitch>
      {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </ToggleSwitch>
  )
}

export default ToggleTheme