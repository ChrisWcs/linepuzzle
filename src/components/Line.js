import React from 'react';
import PixelBtn from './PixelBtn';

const Line = ({ arr, func }) => (
    <div>
        {arr.map( ( x, i) => <PixelBtn func={func(i)} type={x} />) }
    </div>
);

export default Line;