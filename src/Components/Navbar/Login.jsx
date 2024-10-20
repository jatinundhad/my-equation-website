import React from 'react';
import Button from '@mui/material/Button';

export const Login = () => {
  return (
    <div className="block place-content-center">
      {/* login button */}
      <Button
        variant="contained"
        className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"
        sx={{
          textTransform: 'none',
          fontWeight: 'bolder',
          borderRadius: '20px',
          paddingX: '20px'
        }}
      >
        Login
        <i className="ml-2 fa-solid fa-arrow-right-to-bracket"></i>
      </Button>
    </div>
  );
};
