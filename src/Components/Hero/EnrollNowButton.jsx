import React from 'react';
import { Button } from '@mui/material';
import styles from './EnrollNowButton.module.css';

const EnrollNowButton = () => {
  return (
    <Button
      className={`${styles['button']} mt-5 ml-2 text-white w-[225px] py-3 flex justify-center items-center uppercase`}
      sx={{ fontSize: '20px', fontWeight: '700' }}
    >
      <span>Enroll Now</span>
      <i className="fa-solid fa-angle-right ml-3"></i>
    </Button>
  );
};

export default EnrollNowButton;
