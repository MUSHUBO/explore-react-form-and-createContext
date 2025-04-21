import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousin = ({name, asset}) => {
    return (
        <div className='child'>
            <h3>{name}</h3>
            {
                name === 'Gojo' && <Special asset={asset}></Special>
            }
            {
                name === 'Hayato' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;