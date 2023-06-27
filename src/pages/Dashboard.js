import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import {
  Favorite as FavoriteIcon,
  BeachAccess as BeachAccessIcon,
  PregnantWoman as PregnantWomanIcon,
  MoodBad as MoodBadIcon,
  Timer as TimerIcon,
  PeopleAlt as PeopleAltIcon,
  FlightTakeoff as FlightTakeoffIcon,
  HourglassEmpty as HourglassEmptyIcon,
  Close as CloseIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const Dashboard = () => {
  // Dummy data for leave statistics
  const leaveTypes = [
    { label: 'Cuti Sakit', value: 'sick_leave', count: 10, icon: <FavoriteIcon /> },
    { label: 'Cuti Liburan', value: 'vacation_leave', count: 5, icon: <BeachAccessIcon /> },
    { label: 'Cuti Melahirkan', value: 'maternity_leave', count: 3, icon: <PregnantWomanIcon /> },
    { label: 'Cuti Berduka', value: 'bereavement_leave', count: 2, icon: <MoodBadIcon /> },
    { label: 'Cuti Kompensasi', value: 'compensation_leave', count: 0, icon: <TimerIcon /> },
    { label: "Cuti Ayah", value: 'fathers_leave', count: 0, icon: <PeopleAltIcon /> },
    { label: 'Cuti Panjang', value: 'long_leave', count: 0, icon: <FlightTakeoffIcon /> },
  ];
  const pendingLeaves = 4;
  const rejectedLeaves = 2;
  const approvedLeaves = 14;

  return (
    <div style={{ marginLeft: '20px', marginTop: '20px'}}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to your dashboard! 
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="#F3E5F5" p={2}>
            <Typography variant="h5" gutterBottom>
              Leave Types
            </Typography>
            {leaveTypes.map((leaveType, index) => (
              <Typography key={index} variant="body1">
                {leaveType.icon} {leaveType.label}: {leaveType.count}
              </Typography>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Box bgcolor="#FFF3E0" p={2}>
            <Typography variant="h5" gutterBottom>
              Pending Leaves
            </Typography>
            <Typography variant="h3" gutterBottom>
              {pendingLeaves} {<HourglassEmptyIcon />}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Box bgcolor="#FFCDD2" p={2}>
            <Typography variant="h5" gutterBottom>
              Rejected Leaves
            </Typography>
            <Typography variant="h3" gutterBottom>
              {rejectedLeaves} {<CloseIcon />}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Box bgcolor="#C8E6C9" p={2}>
            <Typography variant="h5" gutterBottom>
              Approved Leaves
            </Typography>
            <Typography variant="h3" gutterBottom>
              {approvedLeaves} {<CheckCircleIcon />}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
