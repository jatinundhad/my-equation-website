import styles from './Card.module.css';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function Card({ data }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? 'scale(1.03)' : 'scale(1)',
    boxShadow: show ? '0 20px 25px rgb(0 0 0 / 25%)' : '0 2px 10px rgb(0 0 0 / 8%)'
  });
  return (
    <animated.div
      className={styles['card']}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img className={styles['avatar']} src={data.imgSrc} alt="" />
      <div className={styles['text']}>
        <h3 className={styles['name']}>{data.name}</h3>
        <i className={styles['position']}>{data.position}</i>
        <p className={styles['testimony']}>{data.quote}</p>
      </div>
    </animated.div>
  );
}

export default Card;
