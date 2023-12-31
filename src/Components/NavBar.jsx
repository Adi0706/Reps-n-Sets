import React, { useState } from 'react';
import Logo from '../Images/reps n sets.png';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import signup from '../Images/signup.jpg';
import login from '../Images/login.jpg';
import axios from 'axios' ; 
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme();

function NavBar() {
  const [loginPopUP, setLoginPopUp] = useState(false);
  const [signupPopUP, setSignup] = useState(false);
  const [name,setName] = useState() ;
  const[email,setEmail]=useState() ;
  const[password,setPassword]=useState();
  const [alertSeverity, setAlertSeverity] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [loginEmail,setLoginEmail] = useState('') ;
  const [loginPassword,setLoginPassword] = useState('') ; 
  const navigate = useNavigate() ; 

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




  const handleSubmitLogin = (event) => {
    event.preventDefault();

    if (!loginEmail || !loginPassword) {
        alert('Please fill in both email and password fields.');
        return;
    }

    axios.post('http://localhost:3002/login', {
        loginEmail: loginEmail,
        loginPassword: loginPassword
    })
    .then((response) => {
        console.log(response); 

        if (response.data === 'Login Successful') {
            console.log(response);
            navigate('/loginhome');

            setLoginEmail('');
            setLoginPassword('');
        } else {
            alert('Email or password do not match.');
        }
    })
    .catch(err => {
        console.log('An error occurred:', err);
    });
};


  const handleSubmitSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setAlertSeverity('error');
      setAlertMessage('Please fill in all fields');
      return; 
    }
    
    axios.post('http://localhost:3002/signups', {
        name: name,
        email: email,
        password: password
    })
    .then((response) => {
      console.log('server response',response.data)
      setAlertSeverity('success');
      setAlertMessage('Account Created');
      setSignup(false);
  
      // Clear the form fields
      setName('');
      setEmail('');
      setPassword('');
    })
    .catch(err => {
      console.log(err);
      setAlertSeverity('error');
      setAlertMessage('Error occurred');
    }); 
  };
  
  
  const renderAlert = () => {
    if (alertMessage) {
      setTimeout(() => {
        setAlertMessage('');
      }, 3000);
  
      return (
        <div className="alert-container">
          <Alert severity={alertSeverity} sx={{ display: "flex", alignItems: "center" }}>
            {alertMessage}
          </Alert>
        </div>
      );
    }
  };
  


  const openLoginPopup = () => {
    setLoginPopUp(true);
    setSignup(false);
  };

  const openSignUpPopup = () => {
    setLoginPopUp(false);
    setSignup(true);
  };

  // const renderPopUp = () => {
  //   if (ishover || popUp) {
  //     return (
  //       <div
  //         className="modal"
  //         onMouseEnter={handlehover}
  //         onMouseLeave={handleclosehover}
  //       >
  //         <ul className="plans">
  //           <Link to="/trainingplan">
  //             <li>
  //               <span id="train-txt"></span>TRAINING PLAN
  //             </li>
  //           </Link>
  //           <Link to="/dietplan">
  //             <li>
  //               <span className="diet-txt"></span>DIET PLAN
  //             </li>
  //           </Link>
  //         </ul>
  //       </div>
  //     );
  //   }
  // };

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
                    <Box component="form" noValidate onSubmit={ handleSubmitLogin} sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e)=>{setLoginEmail(e.target.value)}}
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
                        onChange={(e)=>{setLoginPassword(e.target.value)}}
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        LOG IN
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
                        onChange={(e)=>setName(e.target.value)}
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address Ex: abcd@xyz.com"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e)=>setEmail(e.target.value)}
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
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        
                      >
                        SIGN IN
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
      {renderAlert()}
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
        {/* <li onMouseEnter={handleOpenPopup} onMouseLeave={handleClosePopup}>
          PROGRAMS
        </li> */}
        <li> 
          <Link to="/Testimonials">SUCCESS STORIES</Link>
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
      {/* {renderPopUp()} */}
      
    </div>
  );
}

export default NavBar;
