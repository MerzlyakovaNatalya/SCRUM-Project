import { useState } from "react";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "../../images/Krasivaya-priroda.jpg";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/users/action";
import { useNavigate, useLocation } from "react-router-dom";
import { getProfileData } from "../../store/profileData/action";
// import { profileDataApi } from "../../utils/constants";

const theme = createTheme();

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";

  const back = () => {
    navigate(-1);
  };

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://46.17.248.74:58235/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.name) {
      localStorage.setItem("token", data.name);
      alert("Авторизация успешна");
      dispatch(getUser(data.token));

      const response2 = await fetch(
        "http://46.17.248.74:58235/api/user/update",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );

      const data2 = await response2.json();
      dispatch(getProfileData(data2));

      console.log(data2);

      // profileDataApi(data.token).then((data) => {
      //   console.log(data);
      // });
      // apidata.then((data) => console.log("adasdsds", data));
      {
        /*window.location.href = '/layout'*/
      }
    } else {
      alert("проверьте ваше имя пользователя и пароль");
    }
  }

  return (
    <div>
      {fromPage}

      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${Image})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Войти
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={loginUser}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Забыли пароль?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"У вас нет аккаунта? Зарегистрироваться"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
              <Grid
                item
                sx={{
                  m: "2rem",
                }}
              >
                <Link href="#" variant="body2" onClick={back}>
                  {"Вернуться назад"}
                </Link>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
