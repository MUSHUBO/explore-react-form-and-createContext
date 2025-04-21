import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Sister = () => {

    const [money, setMoney] = use(MoneyContext);
    const handleCostMoney = () => {
        if(money < 1000){
            return alert('Money nai bahan-gi')
        } else {
            setMoney(money - 1000)
        }
    }

    return (
        <div className='child'>
            <h3>Sister</h3>
            <button onClick={handleCostMoney}>Cost</button>
        </div>
    );
};

export default Sister;