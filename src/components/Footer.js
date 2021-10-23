import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { LinkedIn, GitHub, Instagram } from "@material-ui/icons";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "white",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} target="_blank" href="https://www.linkedin.com/in/yash-kushwaha-47a52a172/" />
      <BottomNavigationAction icon={<GitHub />} className={classes.root} target="_blank" href="https://github.com/yashkushwaha27" />
      <BottomNavigationAction icon={<Instagram />} className={classes.root} target="_blank" href="https://www.instagram.com/_yash.kushwaha_/" />
    </BottomNavigation>
  );
};
export default Footer;
