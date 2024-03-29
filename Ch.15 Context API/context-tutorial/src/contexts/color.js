import { createContext, useState } from 'react';

const ColorContext = createContext({ 
    state: { color: 'black', subColor: 'red' },
    actions: {
        setColor: () => {},
        setSubColor: () => {}
    }
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subColor, setSubColor] = useState('red');

    const value = {
        state: { color: color, subColor: subColor },
        actions: { setColor, setSubColor }
    }

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    )
}

// const ColorConsumer = ColorContext.Consumer
const { Consumer: ColorConsumer } = ColorContext;

export {ColorConsumer, ColorProvider};
export default ColorContext;