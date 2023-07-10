import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Box } from '@mui/material';

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#ECEFF1' }}>
      <Container maxWidth="xs" style={{ backgroundImage: 'url("/image/ikon.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%' }}>
        <h2>Sistem Manajemen Cuti Karyawan</h2>
        <p>Please choose an option:</p>
        <Box mt={2} mb={2}>
          <Button component={Link} to="/login" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
        
        <Box mb={2}>
          <Button component={Link} to="/register" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default LandingPage;
