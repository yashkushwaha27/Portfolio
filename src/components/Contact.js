import { Avatar } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { WhatsApp } from "@material-ui/icons";
import { styled } from "@material-ui/styles";
import React from "react";
import dp from "../dp.jpg";



const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "transparent",
  },
  heading: {
    color: "tan",
    textAlign: "center",
    textTransform: "uppercase",
  },
  form: {
    top: "20%",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tan",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
  inputPlaceholder: {
    color: "tan",
    fontSize: "20px",
  },
  avatar: {
    height: "300px",
    width: "300px",
    marginBottom: "1rem",
    objectFit: "cover",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tan",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const ColorButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: 'tan',
  fontWeight: 'bold',
  fontStyle: 'italic',
  "&:hover": {
    backgroundColor: 'white',
    color: 'black'
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h4" className={classes.heading}>
            Contact Details
          </Typography>
          <Grid container justify="center">
            <Avatar className={classes.avatar} src={dp} alt="Yash Kushwaha" />
          </Grid>
          <InputField
            label="Name"
            variant="outlined"
            style={{ marginRight: "2%", width: "26%" }}
            defaultValue="Yash Kushwaha"
            InputProps={{
              readOnly: true,
              classes: { input: classes.inputPlaceholder },
            }}
          />
          <InputField
            label="Email"
            variant="outlined"
            style={{ marginRight: "2%", width: "42%" }}
            defaultValue="yashkkushwaha@gmail.com"
            InputProps={{
              readOnly: true,
              classes: { input: classes.inputPlaceholder },
            }}
          />
          <InputField
            label="Phone Number"
            variant="outlined"
            defaultValue="+919650360671"
            style={{ width: "28%" }}
            InputProps={{
              readOnly: true,
              classes: { input: classes.inputPlaceholder },
            }}
          />
          <ColorButton
            variant="contained"
            fullWidth={true}
            // style={{ color: "tan", fontColor: "white" }}
            endIcon={<WhatsApp style={{ color: "green" }} />}
            className={classes.button}
            href="https://wa.me/919650360671?text=Hello%21%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch%20with%20you%21"
            target="_blank"
          >
            Contact Me On WhatsApp
          </ColorButton>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
