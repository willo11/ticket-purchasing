import React, { useState } from 'react'
import language from '../../../data/text';
import { CheckCircleIcon, CreditCardIcon } from '@heroicons/react/24/outline'


const text = language.en



const SecurirtyInput = () => {
    const [cardCode, setCardCode] = useState();

    const handleChange = (e) => {
        setCardCode(e.target.value)
    }


    return (
        <>
            <label className="block text-sm font-medium text-gray-700 mb-1">{text.payment.securityCode}</label>
            <div className="flex items-center">
                <div className="relative flex items-center w-32">
                    <input
                        type="password"
                        minLength="3"
                        maxLength="3"
                        pattern="[0-9]{3}"
                        onChange={handleChange}
                        className="relative w-full max-w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                        value={cardCode}
                    />
                    {
                        cardCode?.length === 3 &&
                        <CheckCircleIcon className="h-8 w-8 text-green-700 ml-2 font-bold absolute right-2.5" />

                    }
                </div>
                <div className="md:flex-nowrap flex-wrap flex flex-row md:items-center">
                    <CreditCardIcon className="h-9 w-9 ml-2" />
                    <p className="min-w-max ml-2 font-light text-sm">
                        {text.payment.digits}
                    </p>
                </div>
            </div>
        </>
    )
}

export default SecurirtyInput