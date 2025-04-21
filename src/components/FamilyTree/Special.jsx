import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({asset}) => {

    const gift = useContext(AssetContext);
    // console.log('new asset', gift);

    return (
        <div className='child'>
            <h3>Special</h3>
            <p>Assent: {asset}</p>
            <p>New Asset: {gift}</p>
        </div>
    );
};

export default Special;