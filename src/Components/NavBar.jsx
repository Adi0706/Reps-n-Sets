import React, { useState } from 'react';
import Logo from '../Images/reps n sets.png';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import signup from '../Images/signup.jpg';
import login from '../Images/login.jpg';

const defaultTheme = createTheme();

function NavBar() {
  const [loginPopUP, setLoginPopUp] = useState(false);
  const [signupPopUP, setSignup] = useState(false);
  const [ishover, setIshover] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const handleloginPopUP = () => {
    setLoginPopUp(true);
  };

  const handleloginpopupclose = () => {
    setLoginPopUp(false);
  };

  const handlesignup = () => {
    setSignup(true);
  };

  const handleSignuppopupclose = () => {
    setSignup(false);
  };

  const handlehover = () => {
    setIshover(true);
  };

  const handleclosehover = () => {
    setIshover(false);
  };

  const handleOpenPopup = () => {
    setPopUp(true);
  };

  const handleClosePopup = () => {
    setPopUp(false);
  };

  const handleSubmitlogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleSubmitSignup = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      Name: data.get('Name'),
      Contact: data.get('Contact'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const openLoginPopup = () => {
    setLoginPopUp(true);
    setSignup(false);
  };

  const openSignUpPopup = () => {
    setLoginPopUp(false);
    setSignup(true);
  };

  const renderPopUp = () => {
    if (ishover || popUp) {
      return (
        <div
          className="modal"
          onMouseEnter={handlehover}
          onMouseLeave={handleclosehover}
        >
          <ul className="plans">
            <Link to="/trainingplan">
              <li>
                <span id="train-txt"></span>TRAINING PLAN
              </li>
            </Link>
            <Link to="/dietplan">
              <li>
                <span className="diet-txt"></span>DIET PLAN
              </li>
            </Link>
          </ul>
        </div>
      );
    }
  };

  const renderLogin = () => {
    if (loginPopUP === true) {
      return (
        <div className="popup-overlay">
          <div className="popupmodal" style={{ margin: '0' }}>
            <span className="close-btn" onClick={handleloginpopupclose}>
              X
            </span>
            <ThemeProvider theme={defaultTheme}>
              <Grid
                container
                component="main"
                sx={{
                  height: '100vh',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <CssBaseline />
                <Grid
                  item
                  xs={false}
                  sm={4}
                  md={7}
                  sx={{
                    backgroundImage: `url(${login})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top',
                    backgroundSize: '120%',
                    backgroundColor: (t) =>
                      t.palette.mode === 'light'
                        ? t.palette.grey[50]
                        : t.palette.grey[900],
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
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                      {/* <LockIcon/> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      LOG IN
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmitlogin} sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
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
                        <Grid item>
                          <Link href="#" variant="body2" onClick={openSignUpPopup}>
                            {"Don't have an account?  Sign Up"}
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </ThemeProvider>
          </div>
        </div>
      );
    }
  };

  const rendersignup = () => {
    if (signupPopUP === true) {
      return (
        <div className="popup-overlay">
          <div className="popupmodal" style={{ margin: '0' }}>
            <span className="close-btn" onClick={handleSignuppopupclose}>
              X
            </span>
            <ThemeProvider theme={defaultTheme}>
              <Grid
                container
                component="main"
                sx={{
                  height: '100vh',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <CssBaseline />
                <Grid
                  item
                  xs={false}
                  sm={4}
                  md={7}
                  sx={{
                    backgroundImage: `url(${signup})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top center',
                    backgroundSize: '200%',
                    backgroundColor: (t) =>
                      t.palette.mode === 'light'
                        ? t.palette.grey[50]
                        : t.palette.grey[900],
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
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                      {/* <LockIcon/> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      SIGN UP
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmitSignup} sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Full Name"
                        name="Name"
                        autoComplete="Name"
                        autoFocus
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Contact"
                        type="tel"
                        label="Phone Number"
                        name="contact"
                        autoComplete="contact"
                        autoFocus
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label=" Set Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
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
                        <Grid item>
                          <Link href="#" variant="body2" onClick={openLoginPopup}>
                            {"Already have an account?  Log In"}
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </ThemeProvider>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="NavBar">
      <Link to="/">
        <span className="logo">
          <img src={Logo} alt="Logo" />
        </span>
      </Link>
      <ul className="list">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/aboutus">ABOUT US</Link>
        </li>
        <li onMouseEnter={handleOpenPopup} onMouseLeave={handleClosePopup}>
          PROGRAMS
        </li>
        <li> 
          <Link to="/contact">FIND GYMS</Link>
        </li>
      </ul>

      <div className="Login-signup">
        <button className="LOGIN" onClick={handleloginPopUP}>
          LOG IN
        </button>
        <button className="SIGNUP" onClick={handlesignup}>
          SIGN UP
        </button>
      </div>
      {renderLogin()}
      {rendersignup()}
      {renderPopUp()}
    </div>
  );
}

export default NavBar;
