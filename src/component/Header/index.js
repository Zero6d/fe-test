import React from 'react';
import './index.css';
import Hamburger from 'hamburger-react';
import Modal from 'react-modal';
import { useLocation, useNavigate } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    height: '100%',
    width: '100%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement(document.getElementById('root'));
function Header() {
  const location = useLocation();
  const [isOpen, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const toPage = (e) => {
    setOpen(false);
    navigate(e);
  };

  return (
    <div className='headerBg'>
      <div className='header'>
        <div className='blank'></div>
        <div className='headerTitle'>
          <div className='headerItem'>
            <h2 className='withMargin'>SESSIONS</h2>
            <h2 className='withMarginS'>MANAGE</h2>
            <h2 className='withMargin'>USER ADMIN</h2>
          </div>
          <div className='buger'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setOpen(false)}
            style={customStyles}
          >
            <div className='modalTitle'>
              <div>
                <div className='marginTitle'>
                  <h3>Manage</h3>
                </div>
                <h4
                  onClick={() => toPage('/fe-test/')}
                  className={location.pathname === '/fe-test/' ? '' : 'normal'}
                >
                  Sessions
                </h4>
                <h4 className='normal'>Threshold Sets</h4>

                <h4
                  onClick={() => toPage('/page3')}
                  className={location.pathname === '/page3' ? '' : 'normal'}
                >
                  Questionnaire
                </h4>

                <h4
                  onClick={() => toPage('/page2')}
                  className={location.pathname === '/page2' ? '' : 'normal'}
                >
                  AI Model
                </h4>

                <div className='modalLogout'>
                  <h3>Logout</h3>
                </div>
              </div>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <div></div>
          </Modal>
          <h3 className='logout'>Logout</h3>
        </div>
      </div>
      <div className='bar'></div>
    </div>
  );
}

export default Header;
