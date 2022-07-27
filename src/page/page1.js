import { FiEdit2 } from 'react-icons/fi';
import { GrFilter } from 'react-icons/gr';
import { CgArrowsV } from 'react-icons/cg';
import './index.css';

const Page1 = () => (
  <div className='main'>
    <div className='pageItem'>
      <div className='mainTitle'>
        <h2>Sessions</h2>
      </div>
      <div className='groupButton'>
        <div className='button'>
          <p>Create</p>
        </div>
        <div className='button'>
          <p>Export</p>
        </div>
        <p className='search'>Search</p>
      </div>
    </div>
    <div className='outter'>
      <table className='border-none'>
        <tr>
          <td>
            <label class='checkboxContainer'>
              <input type='checkbox' />
              <span class='checkmark'></span>
            </label>
          </td>
          <td>
            <p>
              Session name <GrFilter />
            </p>
          </td>
          <td>
            <p>
              <CgArrowsV /> Date
            </p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <label class='checkboxContainer'>
              <input type='checkbox' />
              <span class='checkmark'></span>
            </label>
          </td>
          <td>test</td>
          <td>5/16/2021 10:09</td>
          <td>
            <FiEdit2 />
          </td>
        </tr>
        <tr>
          <td>
            <label class='checkboxContainer'>
              <input type='checkbox' />
              <span class='checkmark'></span>
            </label>
          </td>
          <td>large</td>
          <td>5/16/2021 10:09</td>
          <td>
            <FiEdit2 />
          </td>
        </tr>
        <tr>
          <td>
            <label class='checkboxContainer'>
              <input type='checkbox' />
              <span class='checkmark'></span>
            </label>
          </td>
          <td>large</td>
          <td>5/16/2021 10:09</td>
          <td>
            <FiEdit2 />
          </td>
        </tr>
        <tr>
          <td>
            <label class='checkboxContainer'>
              <input type='checkbox' />
              <span class='checkmark'></span>
            </label>
          </td>
          <td>large</td>
          <td>5/16/2021 10:09</td>
          <td>
            <FiEdit2 />
          </td>
        </tr>
      </table>
    </div>
  </div>
);

export default Page1;
