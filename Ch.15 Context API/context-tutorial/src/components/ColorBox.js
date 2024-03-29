import React, { useContext } from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
    const { state } = useContext(ColorContext);
    
    return (
        <>
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    background: state.color
                }}
            />
            <div
                style={{
                    width: '32px',
                    height: '32px',
                    background: state.subColor
                }}
            />
        </>
        // <ColorConsumer>
        //     {({ state }) => (
        //         <>
        //             <div
        //                 style={{
        //                     width: '64px',
        //                     height: '64px',
        //                     background: state.color
        //                 }}
        //             />
        //             <div
        //                 style={{
        //                     width: '32px',
        //                     height: '32px',
        //                     background: state.subColor
        //                 }}
        //             />
        //         </>                
        //     )}
        // </ColorConsumer>
    );
};

export default ColorBox;