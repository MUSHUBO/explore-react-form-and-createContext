import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';


const Grandpa = ({asset}) => {
    return (
        <div className='family-tree'>
            <h3>Grandpa</h3>
            <section className='flex child'>
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunt asset={asset}></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;