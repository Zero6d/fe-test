import './App.css';
import SideBar from './component/SideBar';
import Header from './component/Header';
import Main from './component/Main';

export default function App() {
  return (
    <div className='bg'>
      <Header />
      <div className='containers'>
        <SideBar />
        <Main />
      </div>
    </div>
  );
}
