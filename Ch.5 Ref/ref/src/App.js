import React, { Component } from 'react';

import ScrollBox from './ScrollBox';
import ValidationSample from './ValidationSample';

class App extends Component {
  render () {
    return (
      <div>
        {/* <ValidationSample/> */}
        <ScrollBox ref={(ref) => this.scrollBox = ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          To Bottom
        </button>
      </div>
    )
  }
}

export default App;
