import * as React from "react";
// import { useFormik } from "formik";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function SignUp() {
  // const formik = useFormik({
  //     initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     password: "",

  //   },
  //   validate: (data) => {
  //     let errors = {};

  //     if (!data.firstName) {
  //       errors.firstName = "firstName is required.";
  //     }
  //     if (!data.lastName) {
  //       errors.lastName = "lastName is required.";
  //     }
  //     if (!data.email) {
  //       errors.email = "Email is required.";
  //     } else if (
  //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
  //     ) {
  //       errors.email = "Invalid email address. E.g. example@email.com";
  //     }
  //     if (!data.password) {
  //       errors.password = "Password is required.";
  //     }

  //     return errors;
  //   },
  //   onSubmit: (data) => {
  //     console.log("sss");
  //     var values = JSON.stringify({
  //       first_name: data.firstName,
  //       last_name: data.lastName,
  //       email: data.email,
  //       password: data.password,
  //       mobile: data.Phone.toString(),
  //       address: data.country.name,
  //     });
  //     console.log(values);
  //     let formData = new FormData();
  //     formData.append("first_name", data.firstName);
  //     formData.append("last_name", data.lastName);
  //     formData.append("email", data.email);
  //     formData.append("password", data.password);
  // axios
  //   .post("http://127.0.0.1:8000/api/register/", formData, {
  //     headers: {
  //       // Accept: "application/json, text/plain, */*",
  //       // "Content-Type": "multipart/form-data",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //     console.log("sss");
  //     if (response.status === 201) {
  //       console.log("done");
  //       formik.resetForm();
  //       navigate("/login");
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log("error");
  //     console.log(error);
  //   });
  //   },
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
