import React from 'react';

const style = {
    width: 30,
    height: 30,
    border: 'none',
};

const aS = {
    background: "red"
};

const bS = {
    background: "blue"
};

const PixelBtn = ({ type, func}) => (
    <button style={ type === 'a' ? { ...style, ...aS } : { ...style, ...bS}}
            func={func}
    />
);

export default PixelBtn;