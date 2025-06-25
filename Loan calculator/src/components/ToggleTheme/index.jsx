import { IconButton, useTheme } from "@mui/material"
import { useColorMode } from "./contextTheme";
import {Brightness4, Brightness7 } from '@mui/icons-material'
import ToggleSwitch from "./switch";

const ToggleTheme = () => {

  const theme = useTheme();
  const colorMode = useColorMode();
  return (
    <ToggleSwitch onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </ToggleSwitch>
  )
}

export default ToggleTheme