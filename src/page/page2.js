import './index.css';

const Page2 = () => (
  <div className='page2Container'>
    <div className='mainPage2'>
      <div className='page2Item'>
        <div className='page2Title' />
        <div className='groupButton'>
          <div className='button'>
            <p>Create</p>
          </div>
          <div className='button'>
            <p>Export</p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='firstPart'>
          <h3 className='normal'>Company name:</h3>
        </div>
        <div className='skeleton'></div>
      </div>
      <div className='rowS'>
        <div className='firstPart'>
          <h3 className='normalS'>Description:</h3>
        </div>
        <div className='skeletonS'></div>
      </div>
      <div className='row'>
        <div className='firstPart'>
          <h3 className='normalS'>Version number</h3>
        </div>
        <div className='skeleton'></div>
      </div>
      <div className='row'>
        <div className='firstPart'>
          <h3 className='normal'>Version date</h3>
        </div>
        <div className='skeleton'></div>
      </div>
      <div className='row'>
        <div className='firstPart'>
          <h3 className='normal'>Deployment date</h3>
        </div>
        <div className='skeleton'></div>
      </div>
      <div className='row'>
        <div className='firstPart'>
          <h3 className='normal'>Hash date</h3>
        </div>
        <div className='skeleton'></div>
      </div>
    </div>
    <div className='mainPage2'>
      <h2>Model Usage Statistics</h2>
      <div className='row'>
        <div className='firstPart'>
          <h3 className='normal'>Session run:</h3>
        </div>
        <div className='skeleton'></div>
      </div>
      <div className='row'>
        <div className='firstPart'>
          <h3 className='normalS'>Thread classes</h3>
        </div>
        <div className='skeleton'></div>
      </div>
      <div className='row'>
        <div className='firstPart'>
          <h3 className='normal'>Non-threat classes</h3>
        </div>
        <div className='skeleton'></div>
      </div>
      <div className='row'>
        <div className='firstPart'>
          <h3 className='normal'>Information</h3>
        </div>
        <div className='skeleton'>
          <p>url</p>
        </div>
      </div>
    </div>
  </div>
);

export default Page2;
