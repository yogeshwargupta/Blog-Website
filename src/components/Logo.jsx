import React from 'react';
import logo from '../Asset/logo.png'; 

function Logo({ width = '100px' }) {
  return (
    <div>
      <img src={logo} alt="Logo" style={{ width }} />
    </div>
  );
}

export default Logo;
