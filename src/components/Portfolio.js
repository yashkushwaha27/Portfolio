import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import reactReduxThunk from "../images/react-redux-thunk.jpg";
import reactRedux from "../images/react-redux.jpg";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "transparent",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [  
  {
    name: "React Redux Product List",
    description: `A basic usage of fakestore API using react-redux. A catalog like structure created using cards.`,
    image: reactRedux,
    liveDemo: "https://yashkushwaha27.github.io/React-Redux/",
  },
  {
    name: "React Redux Thunk Product List",
    description: `A basic usage of fakestore API using react-redux-thunk. A catalog like structure created using cards.`,
    image: reactReduxThunk,
    liveDemo: "https://yashkushwaha27.github.io/React-Redux-Thunk/"
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer} style={{ height: "400px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ overflowY: "scroll", height: "100px" }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button
                  size="small"
                  color="primary"
                  target="_blank"
                  href={project.liveDemo}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
