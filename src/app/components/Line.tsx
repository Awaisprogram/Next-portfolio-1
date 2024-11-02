import React from 'react';
import Link from 'next/link';

const Line = () => {
  return (
    <div className="line-container">
      <div className="line"></div>
      <Link href={'/contact'}>
      <p className="line-text">Lets get in touch</p></Link>
      <div className="line"></div>
    </div>
  );
};

export default Line;
