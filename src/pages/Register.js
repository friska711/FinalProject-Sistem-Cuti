import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Select, MenuItem, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    contact: '',
    position: '',
  });

  const positions = [
    'HR Manager',
    'HR Coordinator',
    'Recruiter',
    'Administration Manager',
    'Office Manager',
    'Administrative Assistant',
    'Finance Manager',
    'Accountant',
    'Financial Analyst',
    'IT Manager',
  ];

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data ke data employee atau lakukan tindakan lain yang diperlukan
    console.log(formData); // Contoh: Tampilkan data di konsol
    navigate('/home');
  };

  return (
    <div style={{ display: 'flex',alignItems: 'center', minHeight: '100vh', backgroundColor: '#ECEFF1' }} >
      <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          required
          size="small"
          margin="dense"
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          required
          size="small"
          margin="dense"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          size="small"
          margin="dense"
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
          size="small"
          margin="dense"
        />
        <TextField
          label="Date of Birth"
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          fullWidth
          required
          size="small"
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          fullWidth
          required
          size="small"
          margin="dense"
        />
        <InputLabel id="position-label">Position</InputLabel>
        <Select
          labelId="position-label"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          fullWidth
          required
          size="small"
          margin="dense"
        >
          {positions.map((position) => (
            <MenuItem key={position} value={position}>
              {position}
            </MenuItem>
          ))}
        </Select>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
    </div>
  );
};

export default Register;
