
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Home from '../components/Home';
import Exchange from '../components/Exchange';
import About from '../components/About';
import { Route, Routes } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exchange' element={<Exchange />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Error />} />
            </Routes>

       {/* theme toggle */}
            <ToggleTheme />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}