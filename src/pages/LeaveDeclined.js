import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { red } from '@mui/material/colors';

const LeaveDeclined = () => {
  const [leaveRequests] = useState([
    { id: 'LR001', employeeId: 'EMP001', employeeName: 'Asta', leaveType: 'Cuti Sakit', applyDate: new Date().toLocaleDateString(), status: 'Declined', reason: 'Not approved due to workload.' },
    { id: 'LR002', employeeId: 'EMP002', employeeName: 'Yuri', leaveType: 'Cuti Liburan', applyDate: new Date().toLocaleDateString(), status: 'Declined', reason: 'Not approved due to overlapping requests.' },
    { id: 'LR003', employeeId: 'EMP003', employeeName: 'Mikasa', leaveType: 'Cuti Melahirkan', applyDate: new Date().toLocaleDateString(), status: 'Declined', reason: 'Not approved due to insufficient leave balance.' },
    // Add more leave requests here
  ]);

  const employeeData = [
    { id: 'EMP001', name: 'Asta' },
    { id: 'EMP002', name: 'Yuri' },
    { id: 'EMP003', name: 'Mikasa' },
    { id: 'EMP004', name: 'Eren' },
    { id: 'EMP005', name: 'Levi' },
    { id: 'EMP006', name: 'Yami' },
    { id: 'EMP007', name: 'Gabimaru' },
    { id: 'EMP008', name: 'Tensen' },
    { id: 'EMP009', name: 'Reki' },
    { id: 'EMP010', name: 'Langa' },
  ];

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState(null);

  const handleViewDetails = (leaveId) => {
    const leave = leaveRequests.find((request) => request.id === leaveId);
    setSelectedLeave(leave);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const getEmployeeName = (employeeId) => {
    const employee = employeeData.find((emp) => emp.id === employeeId);
    return employee ? employee.name : '';
  };

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px' }}>
      <Typography variant="h5">Leave Requests - Declined</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Employee ID</TableCell>
              <TableCell>Employee Name</TableCell>
              <TableCell>Leave Type</TableCell>
              <TableCell>Apply Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveRequests.map((request, index) => (
              <TableRow key={request.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{request.employeeId}</TableCell>
                <TableCell>{getEmployeeName(request.employeeId)}</TableCell>
                <TableCell>{request.leaveType}</TableCell>
                <TableCell>{request.applyDate}</TableCell>
                <TableCell>
                  {request.status === 'Declined' ? (
                    <div style={{ display: 'flex', alignItems: 'center', color: red[500] }}>
                      <CloseIcon style={{ marginRight: '8px' }} />
                      Declined
                    </div>
                  ) : (
                    request.status
                  )}
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleViewDetails(request.id)}>
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Leave Request Details</DialogTitle>
        <DialogContent>
          <DialogContentText>{selectedLeave ? selectedLeave.reason : ''}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LeaveDeclined;
