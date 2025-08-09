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

export default function SideBar({ window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Toggle the mobile drawer
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

/* instead of navbar component, just list nav contents here */
  const navItems = [
    { text: 'HOME', to: '/' },
    { text: 'EXCHANGE RATES (LIVE)', to: '/exchange' },
    { text: 'ABOUT', to: '/about' },
    { text: 'ERROR PAGE', to: '*' },
  ];

  // Drawer content for mobile
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
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

  // For responsive drawer mounting
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Top AppBar */}
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: 'space-between', margin: '2px' }}>
          
          {/* Left side of AppBar : mobile view */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyItems: 'start', flexGrow: 1 }}>
            {/* Menu icon only for mobile */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            {/* App name */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: {sm: 'block'} }}>
              Loan Calculator
            </Typography>

            {/* Mobile Theme Toggle */}
            <Box sx={{ mr: 2, display: { sm: 'none' } }}>
              <ToggleTheme />
            </Box>
          </Box>

          
          
          {/* Desktop Navigation */}
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

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Keeps drawer state during transitions
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
