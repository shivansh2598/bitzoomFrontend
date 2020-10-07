import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { baseIp } from "../../config";
import Auth from "../../Components/Jsx/auth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <a color="inherit" href="https://shivansh2598.tech/" target = "_blank" rel="noopener noreferrer">
        shivansh2598.tech
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const SignUp = () => {
  //states
  const [FirstName, SetFirstName] = useState("");
  const [LastName, SetLastName] = useState("");
  const [Roll, SetRoll] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [ConfPassword, SetConfPassword] = useState("");
  const classes = useStyles();


  const signup = (event) => {
    event.preventDefault();
    axios
      .post(`${baseIp}/signup`, {
        name: FirstName + " " + LastName,
        email: Email,
        roll: Roll,
        password: Password,
        passwordconf: ConfPassword,
      })
      .then((response) => {
        if (response.data.status === 200) {
          Auth.login(() => {
            localStorage.setItem("token", response.data.token);
            this.props.history.push("/app");
          });
        } else {
          alert(response.data.message);
        }
      });
    console.log(event)
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(event) => {
            signup(event);
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={FirstName}
                onChange={(event) => {
                  SetFirstName(event.target.value);
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={LastName}
                onChange={(event) => {
                  SetLastName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={Email}
                onChange={(event) => {
                  SetEmail(event.target.value);
                }}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={Password}
                autoComplete="current-password"
                onChange={(event) => {
                  SetPassword(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Confirm Password"
                label="Confirm Password"
                type="password"
                value={ConfPassword}
                onChange={(event) => {
                  SetConfPassword(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Roll Number"
                label="Roll Number"
                type="Roll Number"
                id="Roll Number"
                value={Roll}
                onChange={(event) => {
                  SetRoll(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUp;
