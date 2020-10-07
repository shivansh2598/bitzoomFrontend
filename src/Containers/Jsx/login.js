import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { baseIp } from "../../config";
import auth from "../../Components/Jsx/auth";
import logo from "../../Images/bitzoomLogo.png";
import '../Css/login.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <a
        color="inherit"
        href="https://shivansh2598.tech/"
        target="_blank"
        rel="noopener noreferrer"
      >
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    axios
      .post(`${baseIp}/login`, {
        email: Email,
        password: Password,
      })
      .then((response) => {
        if (response.data.status === 200) {
          auth.login(() => {
            localStorage.setItem("token", response.data.token);
            props.history.push("/app");
          });
        } else alert(response.data.message);
      });
  };

  return (
    <div>
      <div className="login_container">
        <div>
          <span className="login_heading">
            {" "}
            <img className="login_bitzoomLogo" src={logo} alt="" /> <b>Bitzoom</b>
          </span>
        </div>
      </div>
      <br />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(event) => {
              login(event);
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={Email}
              onChange={(event) => SetEmail(event.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={Password}
              onChange={(event) => SetPassword(event.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
