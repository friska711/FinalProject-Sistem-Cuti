import React from 'react';
import { Button, TextField, Box } from '@mui/material';
import { ButtonGoogleLogin } from '../components/ButtonGoogleLogin';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/home';
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" style={{ backgroundColor: '#ECEFF1', minHeight: '100vh' }}>
      <h2>Login</h2>
      <p>Access your Employee Management System account to manage your employees effectively.</p>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" type="email" fullWidth required margin="normal" defaultValue="friskasinaga711@gmail.com" />
        <TextField label="Password" type="password" fullWidth required margin="normal" defaultValue="friska" />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign In
        </Button>
      </form> <br/>
      <ButtonGoogleLogin />
    </Box>
  );
};

export default Login;
