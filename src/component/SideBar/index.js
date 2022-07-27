import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

function SideBar() {
  const location = useLocation();

  return (
    <div className='sidebar'>
      <h2>Manage</h2>
      <div className='sidebarItem'>
        <div className='scrbar' />
        <div
          className={
            location.pathname === '/fe-test'
              ? 'scrbarFocus'
              : location.pathname === '/page2'
              ? 'scrbarFocus2'
              : 'scrbarFocus3'
          }
        />
        <div className='barItem'>
          <Link to='/fe-test'>
            <h4 className={location.pathname === '/fe-test' ? '' : 'normal'}>
              Sessions
            </h4>
          </Link>
          <h4 className='normal'>Threshold Sets</h4>
          <Link to='/page3'>
            <h4 className={location.pathname === '/page3' ? '' : 'normal'}>
              Questionnaire
            </h4>
          </Link>
          <Link to='/page2'>
            <h4 className={location.pathname === '/page2' ? '' : 'normal'}>
              AI Model
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
