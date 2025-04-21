import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {

    const [money, setMoney] = use(MoneyContext);
    console.log(money);

    return (
        <div className='child'>
            <h3>Brother</h3>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 taka</button>
        </div>
    );
};

export default Brother;