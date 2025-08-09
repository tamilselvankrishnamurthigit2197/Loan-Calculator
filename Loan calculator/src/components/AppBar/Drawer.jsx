import React from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import ToggleTheme from '../ToggleTheme';

const drawerWidth = 240;

export default function SideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const navItems = [
    { text: 'Home', to: '/' },
    { text: 'Exchange Rates (Live)', to: '/exchange' },
    { text: 'About', to: '/about' },
    { text: 'Error Page', to: '*' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        Loan Calculator
      </Typography> */}

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {navItems.map((item) => (
          <Button
            key={item.text}
            component={Link}
            to={item.to}
            sx={{
              color: 'inherit',
              textTransform: 'none',
              justifyContent: 'flex-start',
              width: '100%',
              padding: 1.5,
            }}
          >
            {item.text}
          </Button>
        ))}
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* AppBar with menu button and theme toggle : open view  */}
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Loan Calculator
            </Typography>

            <Box sx={{mr: 2, display: { sm: 'none'}, alignItems: 'flex-end'}}>
              <ToggleTheme  />
            </Box>
          </Box>

          {/* Desktop Navigation Buttons */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.to}
                sx={{ color: 'white', textTransform: 'none' }}
              >
                {item.text}
              </Button>
            ))}
            <ToggleTheme />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
