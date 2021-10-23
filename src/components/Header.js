import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import bitmoji from "../bitmoji.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(1),
  },
  title: {
    color: "white",
    textTransform: "uppercase",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  description: {
    color: "tomato",
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  typedContainer: {
    position: "absolute",
    top: "10%",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          variant="square"
          src={bitmoji}
          alt="Yash Kushwaha"
        />
      </Grid>
      <Typography className={classes.title} variant="h2">
        <Typed strings={["Yash Kushwaha"]} typeSpeed={50} />
      </Typography>

      <Typography className={classes.subtitle} variant="h4">
        <Typed
          strings={[
            "React Developer",
            "Vue Developer",
            "Node Developer",
            "Native Developer",
          ]}
          typeSpeed={60}
          backSpeed={60}
          loop
        />
      </Typography>

      <Typography className={classes.description} variant="h5">
        <Typed
          strings={[
            `A technology enthusiast with a keen interest in front-end development.
          Good experience in Python programming along with the development of web based
          applications using Django framework and React JS.`,
          ]}
          typeSpeed={20}
        />
      </Typography>
    </Box>
  );
};

export default Header;
