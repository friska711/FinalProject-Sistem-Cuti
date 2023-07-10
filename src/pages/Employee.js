import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Employee = () => {
  const [employees, setEmployees] = useState([
    { id: 'EMP001', name: 'Asta', email: 'asta@example.com', contact: '1234567890', position: 'HR Manager' },
    { id: 'EMP002', name: 'Yuri', email: 'yuri@example.com', contact: '2345678901', position: 'HR Coordinator' },
    { id: 'EMP003', name: 'Mikasa', email: 'mikasa@example.com', contact: '3456789012', position: 'Recruiter' },
    { id: 'EMP004', name: 'Eren', email: 'eren@example.com', contact: '4567890123', position: 'Administration Manager' },
    { id: 'EMP005', name: 'Levi', email: 'levi@example.com', contact: '5678901234', position: 'Office Manager' },
    { id: 'EMP006', name: 'Yami', email: 'yami@example.com', contact: '6789012345', position: 'Administrative Assistant' },
    { id: 'EMP007', name: 'Gabimaru', email: 'gabimaru@example.com', contact: '7890123456', position: 'Finance Manager' },
    { id: 'EMP008', name: 'Tensen', email: 'tensen@example.com', contact: '8901234567', position: 'Accountant' },
    { id: 'EMP009', name: 'Reki', email: 'reki@example.com', contact: '9012345678', position: 'Financial Analyst' },
    { id: 'EMP010', name: 'Langa', email: 'langa@example.com', contact: '0123456789', position: 'IT Manager' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
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
    const newEmployee = {
      id: `EMP${employees.length + 1}`,
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      position: formData.position,
    };

    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);

    setFormData({
      id: '',
      name: '',
      email: '',
      contact: '',
      position: '',
    });

    setShowAddForm(false);
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setFormData({
      id: '',
      name: '',
      email: '',
      contact: '',
      position: '',
    });
  };

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px' }}>
      <Typography variant="h5">Employee</Typography>
      {!showAddForm && (
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setShowAddForm(true)}
        >
          Add Employee
        </Button>
      )}
      {showAddForm && (
        <form onSubmit={handleSubmit}>
          <TextField
            label="ID"
            name="id"
            value={formData.id}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            select
            label="Position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          >
            {positions.map((position) => (
              <MenuItem key={position} value={position}>
                {position}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
          <Button onClick={handleCancel} variant="contained" color="error">
            Cancel
          </Button>
        </form>
      )}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Position</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.contact}</TableCell>
                <TableCell>{employee.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Employee;
