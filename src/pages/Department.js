import React, { useState } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';

const Department= () => {
  const [departments, setDepartments] = useState([
    { number: 1, name: 'HR Manager', code: 'HRM' },
    { number: 2, name: 'HR Coordinator', code: 'HRC' },
    { number: 3, name: 'Recruiter', code: 'REC' },
    { number: 4, name: 'Office Manager', code: 'OM' },
    { number: 5, name: 'Administrative Assistant', code: 'AA' },
    { number: 6, name: 'Finance Manager', code: 'FM' },
    { number: 7, name: 'Accountant', code: 'ACC' },
    { number: 8, name: 'Financial Analyst', code: 'FA' },
    { number: 9, name: 'IT Manager', code: 'ITM' },
    { number: 10, name: 'Software Engineer', code: 'SE' },
    { number: 11, name: 'Network Administrator', code: 'NA' },
  ]);

  const [open, setOpen] = useState(false);
  const [newDepartmentName, setNewDepartmentName] = useState('');
  const [newDepartmentCode, setNewDepartmentCode] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddDepartment = () => {
    const newDepartment = {
      number: departments.length + 1,
      name: newDepartmentName,
      code: newDepartmentCode,
    };
    setDepartments([...departments, newDepartment]);
    setNewDepartmentName('');
    setNewDepartmentCode('');
    setOpen(false);
  };

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px' }}>
      <Typography variant="h5" sx={{ color: '#3f51b5', marginBottom: '16px' }}>
        Department List
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Department Name</TableCell>
              <TableCell>Department Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departments.map((department) => (
              <TableRow key={department.number}>
                <TableCell>{department.number}</TableCell>
                <TableCell>{department.name}</TableCell>
                <TableCell>{department.code}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" color="primary" onClick={handleOpen} sx={{ marginTop: '16px' }}>
        Add Department
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Department</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Department Name"
            fullWidth
            value={newDepartmentName}
            onChange={(e) => setNewDepartmentName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Department Code"
            fullWidth
            value={newDepartmentCode}
            onChange={(e) => setNewDepartmentCode(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddDepartment} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Department;
