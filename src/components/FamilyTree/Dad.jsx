import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';

const Dad = ({asset}) => {
    return (
        <div className='child'>
            <h3>Dad</h3>
            <section className='flex'>
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;