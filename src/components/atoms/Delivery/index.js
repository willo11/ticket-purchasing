import React, { useContext } from 'react'
import { OrderContext } from '../../../context/OrderContext';

import language from '../../../data/text';

const text = language.en

const Delivery = () => {
    const order = useContext(OrderContext);
    console.log(order);

    return (
        <>Delivery</>
    )
}

export default Delivery