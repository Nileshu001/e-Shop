import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "../appBar/Appbar";
import CopyRight from "../../common/CopyRight";
import axios from "axios";
import "./SignUp.css";

const defaultTheme = createTheme();

export default function SignUp() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = React.useState("");

  // const [submitAction, setSubmitAction] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      rePassword: data.get("rePassword")
    };

    try {
      // Make a POST request to the signup API endpoint
      const response = await axios.post("http://localhost:3001/api/v1/users", userData);

      console.log(response.data);

      localStorage.setItem("userData", JSON.stringify(userData));

      // Redirect to the homepage
      window.location.href = "./";
    } catch (error) {
      console.error("Something going wrong! please Try again");
      // Handle any errors that occurred during the API call
      
    }
  };

  const HandleSigninClick = (e) => {
    e.preventDefault();

    window.location.href = "/auth";
  };

  return (

    <ThemeProvider theme={defaultTheme}>
      <AppBar />
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box className="signup-container" component="form" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                autoComplete="family-name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                autoComplete="password"
                onChange={(e) =>
                  setPassword(e.currentTarget.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="RePassword"
                type="password"
                id="rePassword"
                value={rePassword}
                autoComplete="Re-password"
                onChange={(e) => setRePassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" className="signup-button" sx={{ mt: 3, mb: 2 }} >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="#" variant="body2" onClick={HandleSigninClick}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
        <CopyRight sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
