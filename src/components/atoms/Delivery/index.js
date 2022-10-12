import React, { useContext } from 'react'
import { OrderContext } from '../../../context/OrderContext';

import { CheckCircleIcon } from '@heroicons/react/24/outline'

import language from '../../../data/text';

const text = language.en

const Delivery = () => {
    const order = useContext(OrderContext);

    const formatDate = (date) => {
        const dateTemp = new Date(date);
        return dateTemp.toDateString()
    }

    return (
        <div className="flex shadow-xl flex-col content-start p-3 border-solid rounded border-slate-400 border">
            <div className="flex items-center">
                <h4 className="text-xl font-bold text-gray-900">
                    {text.delivery.action}
                </h4>
                <CheckCircleIcon className="h-8 w-8 text-green-700 ml-2 font-bold" />
            </div>
            <div className="my-3">
                <h3 className="text-base font-bold text-gray-900">
                    {text.delivery.mobile}
                </h3>
            </div>
            <div>
                <p className="font-light">
                    {`${text.delivery.ticketDate} ${formatDate(order?.showSelected?.date)} `}
                </p>
                <p className="font-light">
                    {text.delivery.description}
                </p>

            </div>

        </div>
    )
}

export default Delivery