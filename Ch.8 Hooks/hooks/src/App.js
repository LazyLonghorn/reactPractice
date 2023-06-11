import React, { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';

const App = () => {
  // const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* <div>
        <button onClick={ () => {setVisible(!visible)} }>
          { visible ? 'Hide' : 'Show' }
        </button>
      </div>
      { visible && <Info/> } */}
      {/* <Counter/> */}
      {/* <Info/> */}
      {/* <Average/> */}
      <Info/>
    </div>
  );
};

export default App;