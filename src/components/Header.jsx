import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import AirplayIcon from '@mui/icons-material/Airplay';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useMediaQuery, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #6e45e2, #88d3ce)', // Lighter galaxy-themed gradient
}));

const drawerWidth = 240;

function Header() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <List>
        <ListItem button component={Link} to="/home" onClick={handleDrawerToggle}>
          <ListItemIcon><HouseIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/projects" onClick={handleDrawerToggle}>
          <ListItemIcon><AirplayIcon /></ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={Link} to="/resume" onClick={handleDrawerToggle}>
          <ListItemIcon><TextSnippetIcon /></ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>
        <ListItem button component={Link} to="/https://github.com/kimngan295?tab=repositories" onClick={handleDrawerToggle}>
          <ListItemIcon><GitHubIcon /></ListItemIcon>
          <ListItemText primary="Github" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          {!isMobile && (
            <>
              <Button component={Link} to="/home" color="inherit">
                <HouseIcon sx={{ mr: 1 }} />
                Home
              </Button>
              <Button component={Link} to="/about" color="inherit">
                <PersonIcon sx={{ mr: 1 }} />
                About
              </Button>
              <Button component={Link} to="/projects" color="inherit">
                <AirplayIcon sx={{ mr: 1 }} />
                Projects
              </Button>
              <Button component={Link} to="/resume" color="inherit">
                <TextSnippetIcon sx={{ mr: 1 }} />
                Resume
              </Button>
              <Button component={Link} to="https://github.com/kimngan295?tab=repositories" color="inherit">
                <GitHubIcon sx={{ mr: 1 }} />
                GitHub
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile.
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>
    </StyledAppBar>
  );
}

export default Header;
