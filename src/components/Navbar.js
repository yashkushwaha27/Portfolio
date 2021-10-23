import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { AccountTree } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import judgementFreeZone from "../judgementFreeZone.png";

import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "transparent",
    borderBottom: 0,
  },
  arrow: {
    color: "tomato",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: 250,
    background: "tan",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  listItem: {
    color: "#222",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  {
    listIcon: <AssignmentInd />,
    listText: "Work Experience",
    listPath: "/Portfolio/WorkExperience",
  },
  { listIcon: <AccountTree />, listText: "Projects", listPath: "/Portfolio/projects" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/Portfolio/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar
        className={classes.avatar}
        variant="square"
        src={judgementFreeZone}
        alt="Yash Kushwaha"
      />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <div style={{ marginBottom: "5 %" }}>
        <Box component="nav">
          <AppBar position="static" className={classes.appbar}>
            <Toolbar>
              <IconButton onClick={() => setOpen(true)}>
                <Apps className={classes.title} fontSize='large' />
              </IconButton>
              <Typography variant="h4" className={classes.title}>
                Portfolio
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
