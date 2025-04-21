import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div className='child'>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name='Rafsan'></Cousin>
                <Cousin name='Jasmine'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;