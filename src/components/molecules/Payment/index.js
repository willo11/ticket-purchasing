import React, { useContext } from 'react'
import { OrderContext } from '../../../context/OrderContext';

import { CheckCircleIcon } from '@heroicons/react/24/outline'

import language from '../../../data/text';
import CardCredit from '../CardCredit';

const text = language.en

const Payment = () => {
    const order = useContext(OrderContext);

    return (
        <div className="flex shadow-xl flex-col content-start p-3 border-solid rounded border-slate-400 border">
            <div className="flex items-center">
                <h4 className="text-xl font-bold text-gray-900">
                    {text.payment.action}
                </h4>
                <CheckCircleIcon className="h-8 w-8 text-green-700 ml-2 font-bold" />
            </div>
            <div className="my-3">
                <h3 className="text-base font-bold text-gray-900 ml-3">
                    {text.payment.useCard}
                </h3>
            </div>

            <div className="divide-y divide-gray-300/50">
                <div>
                    <CardCredit />
                </div>
                <div className="mt-4 p-4 text-lg font-semibold text-gray-900">
                    <p>
                        {text.payment.payWith}
                    </p>
                    <p className="text-sm block">
                        {text.payment.payWtihDescription}
                        <span className="text-sky-500 hover:text-sky-600">
                            {text.payment.terms}
                        </span>
                        .
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Payment