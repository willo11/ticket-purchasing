import React, { useContext, useState } from 'react'
import { OrderContext } from '../../../context/OrderContext';

import { ChevronUpIcon } from '@heroicons/react/24/outline'

import language from '../../../data/text';

const text = language.en

const fees = 0.1925;
const orderFee = 2.95;

const Summary = () => {
    const { quantity, showSelected, setView } = useContext(OrderContext);
    const [loading, setLoading] = useState(false)

    const handleFee = (amount) => {
        const result = amount * fees
        return result.toFixed(2)
    }

    const result = (showSelected.price * quantity) + (handleFee(showSelected.price) * quantity) + (orderFee * quantity)

    const handleSaveClick = (e) => {
        setLoading(true)
        setTimeout(() => {
            setView(1)
            setLoading(false)
        }, 1000);
        e.preventDefault();
    }



    return (
        <div className="flex shadow-xl flex-col content-start p-3 border-solid rounded border-slate-400 border">
            <div className="flex items-center text-xl font-bold text-gray-900">
                <p className="">
                    {text.summary.total}
                </p>
                <div className="flex-grow" />
                <div className="flex items-center">
                    {`$${result.toFixed(2)}`}
                    <ChevronUpIcon className="h-5 w-5 text-gray-900 ml-1 font-light" />

                </div>
            </div>
            <div className="my-3">
                <h3 className="text-base font-bold text-gray-900">
                    {text.summary.tickets}
                </h3>
                <div className="flex">
                    <p className="font-light">
                        {`${text.summary.resale}${showSelected.price} x ${quantity}`}
                    </p>
                    <div className="flex-grow" />
                    <p className="font-light">
                        {`$${(showSelected.price * quantity).toFixed(2)}`}
                    </p>
                </div>
            </div>
            <div className="my-3">
                <h3 className="text-base font-bold text-gray-900">
                    {text.summary.notes}
                </h3>
                <p className="font-light">
                    {showSelected.notes}
                </p>
            </div>
            <div className="my-3">
                <h3 className="text-base font-bold text-gray-900">
                    {text.summary.fees}
                </h3>
                <div className="flex">
                    <p className="font-light">
                        {`${text.summary.service}${handleFee(showSelected.price)} x ${quantity}`}
                    </p>
                    <div className="flex-grow" />
                    <p className="font-light">
                        {`$${(handleFee(showSelected.price) * quantity).toFixed(2)}`}
                    </p>
                </div>
                <div className="flex">
                    <p className="font-light">
                        {text.summary.order}
                    </p>
                    <div className="flex-grow" />
                    <p className="font-light">
                        {`$${(orderFee * quantity).toFixed(2)}`}
                    </p>
                </div>
                <div className="my-3 ">
                    <h3 className="text-base font-bold text-gray-900">
                        {text.summary.delivery}
                    </h3>
                    <div className="flex">
                        <p className="font-light">
                            {text.summary.mobile}
                        </p>
                        <div className="flex-grow" />
                        <p className="font-light">
                            Free
                        </p>
                    </div>
                </div>
                <div className="my-3 ">
                    <h3
                        onClick={handleSaveClick}
                        className="text-base font-semibold text-sky-500 hover:text-sky-600 cursor-pointer">
                        {text.summary.cancel}
                    </h3>
                </div>
                <div className="mt-5 mb-3 ">
                    <h3 className="text-base font-semibold text-gray-900">
                        {text.summary.refund}
                    </h3>
                </div>
                <div className="flex my-3">
                    <input type="checkbox" readOnly />
                    <p className="text-base font-semibold text-gray-900 ml-2">
                        {text.summary.textTerms}
                        <span className="text-sky-500 hover:text-sky-600 cursor-pointer">
                            {text.summary.terms}
                        </span>
                    </p>
                </div>
                <div className="my-3">
                    <button
                        disabled={loading}
                        onClick={handleSaveClick}
                        className="bg-green-800 py-3 text-white hover:text-gray-700 hover:bg-white hover:border-green-800 hover:border h-full w-full rounded-sm cursor-pointer outline-none">
                        <span className="m-auto text-2xl font-thin">{text.summary.button}</span>
                    </button>
                </div>
                <div className="mt-3 ">
                    <h3 className="text-base font-semibold text-gray-900">
                        {text.summary.exception}
                    </h3>
                </div>
            </div>

        </div>
    )
}

export default Summary