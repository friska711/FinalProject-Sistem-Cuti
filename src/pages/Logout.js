import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const Logout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const handleConfirmLogout = () => {
    navigate('/');
  };

  const handleCancelLogout = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleCancelLogout}>
        <DialogTitle>Logout Confirmation</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Are you sure you want to logout?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelLogout} color="error">
            No
          </Button>
          <Button onClick={handleConfirmLogout} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Logout;
