import React from 'react';
import classes from './Card.module.scss';

const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes['card-container']}>
        <img
          src={require('../assets/image-qr-code.png')}
          alt='QR-code'
          className={classes['card-img']}
        />
        <div className={classes['tex-container']}>
          <h2 className={classes['tex-container-header']}>
            Improve your font-end <br></br>skill by building projects
          </h2>
          <p className={classes['tex-container-context']}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next levels
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
