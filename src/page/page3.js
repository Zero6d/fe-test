import { FiEdit2, FiTrash } from 'react-icons/fi';
import './index.css';

const Page3 = () => (
  <div className='main'>
    <div className='pageItem'>
      <div className='mainTitle'>
        <h2>Sessions</h2>
      </div>
      <div className='groupButton'>
        <div className='button'>
          <p>Create</p>
        </div>
        <p className='search'>Search</p>
      </div>
    </div>
    <table className='border-none'>
      <tr>
        <td>
          <label class='checkboxContainer'>
            <input type='checkbox' />
            <span class='checkmark'></span>
          </label>
        </td>
        <td>Questionnaire</td>
        <td></td>
      </tr>
      <tr>
        <td>
          <label class='checkboxContainer'>
            <input type='checkbox' checked />
            <span class='checkmark'></span>
          </label>
        </td>
        <td>Difficult per threshold</td>
        <td>
          <div className='iconLeft'>
            <FiEdit2 />
            <FiTrash />
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <label class='checkboxContainer'>
            <input type='checkbox' checked />
            <span class='checkmark'></span>
          </label>
        </td>
        <td>large</td>
        <td>
          <div className='iconLeft'>
            <FiEdit2 />
            <FiTrash />
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <label class='checkboxContainer'>
            <input type='checkbox' checked />
            <span class='checkmark'></span>
          </label>
        </td>
        <td>large</td>
        <td>
          <div className='iconLeft'>
            <FiEdit2 />
            <FiTrash />
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <label class='checkboxContainer'>
            <input type='checkbox' checked />
            <span class='checkmark'></span>
          </label>
        </td>
        <td>large</td>
        <td>
          <div className='iconLeft'>
            <FiEdit2 />
            <FiTrash />
          </div>
        </td>
      </tr>
    </table>
  </div>
);

export default Page3;
