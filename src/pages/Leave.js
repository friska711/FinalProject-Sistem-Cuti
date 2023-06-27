import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

const LeaveTypes = () => {
  const [leaveTypes, setLeaveTypes] = useState([
    { number: 1, type: 'Cuti Sakit', value: 'sick_leave', description: 'Leave taken due to illness', dateCreated: new Date() },
    { number: 2, type: 'Cuti Liburan', value: 'vacation_leave', description: 'Leave taken for vacation', dateCreated: new Date() },
    { number: 3, type: 'Cuti Melahirkan', value: 'maternity_leave', description: 'Leave taken for maternity purposes', dateCreated: new Date() },
    { number: 4, type: 'Cuti Berduka', value: 'bereavement_leave', description: 'Leave taken for bereavement', dateCreated: new Date() },
    { number: 5, type: 'Cuti Kompensasi', value: 'compensation_leave', description: 'Leave taken as compensation', dateCreated: new Date() },
    { number: 6, type: "Cuti Ayah", value: 'fathers_leave', description: "Leave taken by father for family reasons", dateCreated: new Date() },
    { number: 7, type: 'Cuti Panjang', value: 'long_leave', description: 'Extended leave taken for personal reasons', dateCreated: new Date() },
  ]);

  const [open, setOpen] = useState(false);
  const [newLeaveType, setNewLeaveType] = useState({ type: '', description: '' });

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleSaveLeaveType = () => {
    const updatedLeaveTypes = [...leaveTypes];
    const newNumber = leaveTypes.length + 1;
    const newLeaveTypeWithNumber = {
      ...newLeaveType,
      number: newNumber,
      dateCreated: new Date()
    };
    updatedLeaveTypes.push(newLeaveTypeWithNumber);
    setLeaveTypes(updatedLeaveTypes);
    setOpen(false);
    setNewLeaveType({ type: '', description: '' });
  };

  const handleChangeType = (event) => {
    setNewLeaveType({ ...newLeaveType, type: event.target.value });
  };

  const handleChangeDescription = (event) => {
    setNewLeaveType({ ...newLeaveType, description: event.target.value });
  };

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px' }}>
      <Typography variant="h5" sx={{ color: '#3f51b5', marginBottom: '16px' }}>
        Leave Types
      </Typography>
      <Button variant="contained" onClick={handleOpenDialog} sx={{ marginBottom: '16px' }}>
        Add New Leave Type
      </Button>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Add New Leave Type</DialogTitle>
        <DialogContent>
          <TextField
            label="Type"
            value={newLeaveType.type}
            onChange={handleChangeType}
            fullWidth
            sx={{ marginBottom: '16px' }}
          />
          <TextField
            label="Description"
            value={newLeaveType.description}
            onChange={handleChangeDescription}
            fullWidth
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSaveLeaveType}
            disabled={!newLeaveType.type || !newLeaveType.description}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Date Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaveTypes.map((leaveType) => (
                <TableRow key={leaveType.number}>
                  <TableCell>{leaveType.number}</TableCell>
                  <TableCell>{leaveType.type}</TableCell>
                  <TableCell>{leaveType.description}</TableCell>
                  <TableCell>{leaveType.dateCreated.toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default LeaveTypes;
