import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem"; 
import ListItemText from "@mui/material/ListItemText"; 
import navImg from '../images/logo-normal.svg'
import { useSelector } from "react-redux";
const Navbar = () => {
  const [state, setState] = React.useState(false);
  const theme = useTheme();

  const appointments = useSelector(state=> state.services.appointments)
  const useStyles = makeStyles({
    navItem: {
      textDecoration: "none",
      color: "black",
    },
    navIcon: {
        
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    navContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    navLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
    },
  });
  const { navItem, navIcon, navContainer, navLogo } = useStyles();

  const list = (
    <Box sx={{ width: 250, backgroundColor:'blue',height:'100vh' }} role="presentation">
      <List>
        <ListItem>
          <ListItemText>
            <Link className={navItem} to="/">
              <Button color="inherit">Home</Button>
            </Link>
          </ListItemText>
          </ListItem>
          <ListItem>
          <ListItemText>
            <Link className={navItem} to="/about">
              <Button color="inherit">About Us</Button>
            </Link>
          </ListItemText>
          </ListItem>
          <ListItem>
          <ListItemText>
            <Link className={navItem} to="/contact">
              <Button color="inherit">Contact Us</Button>
            </Link> 
          </ListItemText> 
        </ListItem>
        <Button sx={{ ml:2 }} color="inherit">Login</Button>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor:"#CAB4A9" }} position="static">
          <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navIcon}
            onClick={()=> setState(true)}
          >
            <MenuIcon />
          </IconButton>
            
            <Typography
              className={navLogo}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img style={{ height:'55px',paddingTop:'5px' }} src={navImg} alt="" />
            </Typography>
            <Box className={navContainer}>
              <Link className={navItem} to="/">
                <Button color="inherit">Home</Button>
              </Link>
              <Link className={navItem} to="/services">
                <Button color="inherit">Services</Button>
              </Link> 
              <Link className={navItem} to="/appointments">
                <Button color="inherit">Appointments <span style={{ color:'yellow',marginLeft:'2px', fontWeight:"bold" }}>{appointments.length}</span>  </Button>
              </Link>
              <Button color="inherit">Login</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box >
        {
          <React.Fragment >
            <Drawer  open={state} onClose={() => setState(false)}>
              {list}
            </Drawer>
          </React.Fragment>
        }
      </Box>
    </>
  );
};

export default Navbar;
