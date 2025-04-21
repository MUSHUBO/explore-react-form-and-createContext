import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {

    const [money, setMoney] = use(MoneyContext)

    return (
        <div className='child'>
            <h3>Friend</h3>
            <p>Family got: {money}</p>
            <button onClick={() => setMoney(money + 5000)}>Gift Money</button>
        </div>
    );
};

export default Friend;