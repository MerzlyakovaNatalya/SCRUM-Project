import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MoodIcon from '@mui/icons-material/Mood';
import Image from '../../images/plyazhi.jpg'

const theme = createTheme();

export function Register() {
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		
    event.preventDefault()

    const first_name = firstName;
    const last_name = lastName;
    const birthday = "1968-09-25";

    const test = JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      birthday: birthday,
    });
    console.log(test)

		const response = await fetch('http://46.17.248.74:58235/api/user/create', {
			method: 'POST',
			headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
				first_name: first_name,
        last_name: last_name,
				email: email,
				password: password,
        birthday: birthday,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
      console.log("Ответ пришёл");
      console.log(data);
			navigate("/login")
		}
	}

	return (
		<div>
			
	<ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <MoodIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Регистрация
            </Typography>
            <Box component="form" noValidate onSubmit={registerUser} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="Имя"
                name="firstName"
                autoComplete="name"
                autoFocus
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}

              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Фамилия"
                name="lastName"
                autoComplete="name"
                autoFocus
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}

              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
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
                label="Пароль"
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
				        onSubmit={registerUser}
              >
                зарегистрироваться
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>


		</div>
	)
}



