import React from 'react';
import './index.css';

function Header() {
  return (
    <div className='headerBg'>
      <div className='header'>
        <div></div>
        <div className='headerItem'>
          <h2 className='normal'>SESSIONS</h2>
          <h2>MANAGE</h2>
          <h2 className='normal'>USER ADMIN</h2>
        </div>
        <h3 className='logout'>Logout</h3>
      </div>
      <div className='bar'></div>
    </div>
  );
}

export default Header;
