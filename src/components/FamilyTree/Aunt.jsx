import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {

    const [money, setMoney] = use(MoneyContext);
    const handleAddMoney = () => {
        setMoney(money + 5000)
    }

    return (
        <div className='child'>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin asset={asset} name='Gojo'></Cousin>
                <Cousin name='Hayato'></Cousin>
                <button onClick={handleAddMoney}>Add Money</button>
            </section>
        </div>
    );
};

export default Aunt;