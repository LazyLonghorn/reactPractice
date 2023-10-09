import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext, { ColorProvider } from './contexts/color';
import SelectColor from './components/SelectColor';

const App = () => {
  return (
    <div>
      <ColorProvider>
        <div>
          <SelectColor/>
          <ColorBox/>
        </div>
      </ColorProvider>
    </div>
  );
};

export default App;<ColorBox/>