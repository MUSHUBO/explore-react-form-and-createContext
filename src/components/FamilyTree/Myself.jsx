import React from 'react';
import Special from './Special';

const Myself = ({asset}) => {
    return (
        <div className='child'>
            <h3>Myself</h3>
            <Special asset={asset}></Special>
        </div>
    );
};

export default Myself;