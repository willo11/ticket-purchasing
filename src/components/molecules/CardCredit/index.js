import React, { useContext } from 'react'
import { OrderContext } from '../../../context/OrderContext';
import language from '../../../data/text';

import visa from '../../../assets/visa.jpg'
import masterCard from '../../../assets/mastercard.jpg'
import americanExpress from '../../../assets/American-Express.png'
import { franchise } from '../../atoms/SelectFranchise';
import SecurirtyInput from '../../atoms/SecurityInput';

import { PlusIcon, CreditCardIcon } from '@heroicons/react/24/outline'



const text = language.en

const franchiseImg = [visa, masterCard, americanExpress]

const CardCredit = () => {

    const { billingData, setView } = useContext(OrderContext);

    const formatExp = (exp) => {
        const divide = exp.match(/.{1,2}/g);
        const join = divide.join('/')
        return join
    }

    const addNew = (e) => {
        setTimeout(() => {
            setView(1)
        }, 1000);
        e.preventDefault();
    }

    const image = franchise.findIndex((franchiseName) => billingData.franchise === franchiseName)

    return (
        <div className="mt-3 space-y-4">
            <div className=" shadow-md flex items-start flex-col justify-between max-w-2xl px-3 py-4 border border-zinc-500 cursor-pointer bg-zinc-50 rounded-none">
                <div className="flex gap-2 items-start">
                    <input type="radio" readOnly className="border-grey-300 border border-x w-5 h-5 mt-2" checked />
                    <div className="flex flex-col  gap-2">
                        <div className="flex gap-2 ">
                            <div className="w-10">
                                <img src={franchiseImg[image]} alt="Logo" />
                            </div>
                            <div className="flex flex-col items-start text-xs min-w-max">
                                <h2 className="font-bold text-sm text-gray-900">
                                    {`${billingData.franchise} - ${billingData['card-code'].slice(-4)}`}
                                </h2>
                                <div className="">
                                    <h2 className="font-light">
                                        {text.payment.userName} | exp. {formatExp(billingData.exp)}
                                    </h2>
                                </div>
                                <div className="flex  font-light  gap-2">
                                    <h2 className=" text-sky-500 font-medium hover:text-sky-600 ">
                                        {text.payment.edit}
                                    </h2>
                                    |
                                    <h2 className=" text-sky-500 font-medium hover:text-sky-600 ">
                                        {text.payment.delete}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-fit">
                            <SecurirtyInput />
                        </div>
                    </div>
                </div>
            </div>
            <div
                onClick={addNew}
                className="px-3 flex items-center text-sky-500 hover:text-sky-600 cursor-pointer">
                <PlusIcon className="w-8 h-8" />
                <CreditCardIcon className="h-9 w-9 ml-2 font-light text-black mx-2" />
                <p className="font-semibold">
                    {text.payment.newCard}
                </p>
            </div>
        </div>
    )
}

export default CardCredit