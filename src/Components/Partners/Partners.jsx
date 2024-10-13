import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './Partners.module.css';
import { motion } from 'framer-motion';

function Sponsors() {
  const sponsors = [
    { name: 'Sponsor 1', logo: 'https://via.placeholder.com/100x100' },
    { name: 'Sponsor 2', logo: 'https://via.placeholder.com/100x100' },
    { name: 'Sponsor 3', logo: 'https://via.placeholder.com/100x100' },
    { name: 'Sponsor 4', logo: 'https://via.placeholder.com/100x100' },
    { name: 'Sponsor 5', logo: 'https://via.placeholder.com/100x100' },
    { name: 'Sponsor 6', logo: 'https://via.placeholder.com/100x100' },
    { name: 'Sponsor 7', logo: 'https://via.placeholder.com/100x100' },
    { name: 'Sponsor 8', logo: 'https://via.placeholder.com/100x100' },
    { name: 'Sponsor 9', logo: 'https://via.placeholder.com/100x100' },
    { name: 'Sponsor 10', logo: 'https://via.placeholder.com/100x100' },
  ];

  return (
    <div>
      <motion.h1 whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }} className={styles["heading"]}>Our Partners</motion.h1>
      <Marquee speed={50} loop={0}>
        {sponsors.map((sponsor, index) => (
          <div className={styles['sponsor-box']} key={index}>
            <img className={styles['sponsor-image']} src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Sponsors;