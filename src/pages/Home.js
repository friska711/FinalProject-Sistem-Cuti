import React, { useState } from 'react';
import { Avatar, List, ListItem, ListItemText, Typography } from '@mui/material';
import Dashboard from './Dashboard';
import Leave from './Leave';
import Department from './Department'
import LeavePending from './LeavePending';
import Employee from './Employee'
import Logout from './Logout'

import yamiProfilePicture from '../image/yami.jpg'; 
import LeaveApproved from './LeaveApproved';
import LeaveDeclined from './LeaveDeclined';
import LeaveHistory from './LeaveHistory';


const Home = () => {
  const [selectedPage, setSelectedPage] = useState('');

  const handlePageSelect = (page) => {
    setSelectedPage(page);
  };

  const renderPageContent = () => {
    switch (selectedPage) {
      case 'dashboard':
        return <div> <Dashboard/> </div>;
      case 'employeeList':
        return <div><Employee/></div>;
      case 'department':
        return <div> <Department/> </div>;
      case 'leave':
        return <div> <Leave/> </div>;
      case 'pendingleave':
        return <div> <LeavePending/></div>
      case 'approvedleave':
        return <div><LeaveApproved/></div>
      case 'declinedleave':
        return <div><LeaveDeclined/></div>
      case 'leavehistory':
        return <div><LeaveHistory/></div>
      case 'logout':
        return <div><Logout/></div>;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#E1F1FF', minHeight: '100vh'}}>
      <List sx={{ width: '170px', marginRight: '20px', marginLeft: '20px',backgroundColor: '#E1F1FF' ,  marginTop: '20px'}}>
      <Avatar alt="Profile Picture" src={yamiProfilePicture} sx={{ width: 120, height: 120 }} />
        <ListItem
          button
          onClick={() => handlePageSelect('dashboard')}
          sx={{ backgroundColor: selectedPage === 'dashboard' ? '#D4E9FF' : 'transparent' }}
        >
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          onClick={() => handlePageSelect('employeeList')}
          sx={{ backgroundColor: selectedPage === 'employeeList' ? '#D4E9FF' : 'transparent' }}
        >
          <ListItemText primary="Employee List" />
        </ListItem>
        <ListItem
          button
          onClick={() => handlePageSelect('department')}
          sx={{ backgroundColor: selectedPage === 'deparment' ? '#D4E9FF' : 'transparent' }}
        >
        <ListItemText primary="Department" />
        </ListItem>
        <ListItem
          button
          onClick={() => handlePageSelect('leave')}
          sx={{ backgroundColor: selectedPage === 'leave' ? '#D4E9FF' : 'transparent' }}
        >
          <ListItemText primary="Leave Types" />
        </ListItem>
        <Typography>Manage Leave</Typography>
        <ListItem
          button
          onClick={() => handlePageSelect('pendingleave')}
          sx={{ backgroundColor: selectedPage === 'pendingleave' ? '#D4E9FF' : 'transparent' }}
        >
          <ListItemText primary="Pending" />
        </ListItem>
        <ListItem
          button
          onClick={() => handlePageSelect('approvedleave')}
          sx={{ backgroundColor: selectedPage === 'approvedleave' ? '#D4E9FF' : 'transparent' }}
        >
          <ListItemText primary="Approved" />
        </ListItem>
        <ListItem
          button
          onClick={() => handlePageSelect('declinedleave')}
          sx={{ backgroundColor: selectedPage === 'declinedleave' ? '#D4E9FF' : 'transparent' }}
        >
          <ListItemText primary="Declined" />
        </ListItem>
        <ListItem
          button
          onClick={() => handlePageSelect('leavehistory')}
          sx={{ backgroundColor: selectedPage === 'leavehistory' ? '#D4E9FF' : 'transparent' }}
        >
          <ListItemText primary="History" />
        </ListItem> <br/>
        <ListItem
          button
          onClick={() => handlePageSelect('logout')}
          sx={{ backgroundColor: selectedPage === 'logout' ? '#D4E9FF' : 'transparent' }}
        >
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
      <div style={{ backgroundColor: 'white', flex: 1, height: '100vh' }}>
        {renderPageContent()}
      </div>
    </div>
  );
};

export default Home;
