import React, { useState } from 'react';
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const LeaveHistory = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 'EMP001',
      employeeName: 'Asta',
      leaveType: 'Cuti Sakit',
      applyDate: '2023-06-01',
      duration: 3,
      description: 'Feeling unwell',
      status: 'Pending',
    },
    {
      id: 'EMP002',
      employeeName: 'Yuri',
      leaveType: 'Cuti Liburan',
      applyDate: '2023-06-05',
      duration: 5,
      description: 'Family vacation',
      status: 'Pending',
    },
    {
      id: 'EMP003',
      employeeName: 'Mikasa',
      leaveType: 'Cuti Melahirkan',
      applyDate: '2023-06-10',
      duration: 60,
      description: 'Maternity leave request',
      status: 'Pending',
    },
    {
      id: 'EMP004',
      employeeName: 'Eren',
      leaveType: 'Cuti Berduka',
      applyDate: '2023-06-15',
      duration: 3,
      description: 'Attending a funeral',
      status: 'Pending',
    },
    {
      id: 'EMP005',
      employeeName: 'Levi',
      leaveType: 'Cuti Kompensasi',
      applyDate: '2023-06-20',
      duration: 1,
      description: 'Compensation for overtime',
      status: 'Pending',
    },
  ]);

  const handleStatusChange = (status, requestId) => {
    const updatedLeaveRequests = leaveRequests.map((request) => {
      if (request.id === requestId) {
        return { ...request, status };
      }
      return request;
    });
    setLeaveRequests(updatedLeaveRequests);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved':
        return <CheckIcon style={{ color: 'green' }} />;
      case 'Declined':
        return <ClearIcon style={{ color: 'red' }} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px' }}>
      <Typography variant="h5">Leave History</Typography>
      {leaveRequests.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="subtitle1">Leave Requests:</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Karyawan</TableCell>
                  <TableCell>Jenis Cuti</TableCell>
                  <TableCell>Apply Date</TableCell>
                  <TableCell>Lama Cuti</TableCell>
                  <TableCell>Deskripsi</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaveRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.id}</TableCell>
                    <TableCell>{request.employeeName}</TableCell>
                    <TableCell>{request.leaveType}</TableCell>
                    <TableCell>{request.applyDate}</TableCell>
                    <TableCell>{request.duration}</TableCell>
                    <TableCell>{request.description}</TableCell>
                    <TableCell>
                      <Typography
                        variant="subtitle2"
                        style={
                          request.status === 'Approved'
                            ? { color: 'green' }
                            : request.status === 'Declined'
                            ? { color: 'red' }
                            : {}
                        }
                      >
                        {request.status}
                        {getStatusIcon(request.status)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {request.status === 'Pending' && (
                        <>
                          <Button
                            variant="contained"
                            color="success"
                            onClick={() =>
                              handleStatusChange('Approved', request.id)
                            }
                            startIcon={<CheckCircleIcon />}
                          >
                            Approve
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() =>
                              handleStatusChange('Declined', request.id)
                            }
                            startIcon={<CloseIcon />}
                          >
                            Decline
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default LeaveHistory;
