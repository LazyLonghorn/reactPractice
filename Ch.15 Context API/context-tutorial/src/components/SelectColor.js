import React from 'react';
import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const SelectColor = () => {
    return (
        <>
            <h2>Select Color</h2>
            <ColorConsumer>
                {({ actions }) => (
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        {colors.map((color) => (
                            <div
                                key={color}
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    background: color,
                                    cursor: 'pointer'
                                }}
                                onClick={() => actions.setColor(color)}
                                onContextMenu={(e) => {
                                    e.preventDefault();
                                    actions.setSubColor(color)
                                }}
                            />
                        ))}
                    </div>  
                )}
                
            </ColorConsumer>
        </>
    );
};

export default SelectColor;