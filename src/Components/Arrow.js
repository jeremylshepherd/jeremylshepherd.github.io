import React from 'react';
import SVG from './arrow.svg';

const Arrow = ({ width, height }) => <SVG width={width} height={height} />;

Arrow.defaultProps = {
    width: 20,
    height: 20
};

export default Arrow;
