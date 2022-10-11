import React from 'react'

import language from '../../../data/text';
import QuantityButton from '../../atoms/QuantityButton';
import SelectShow from '../../atoms/SelectShow';
import BillingInformation from '../../molecules/BillingInformation';

const text = language.en

const FormTemplate = () => {
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto max-w-md">
                    <div className="text-center">
                        <h4 className="text-xl font-semibold mt-1 mb-3 pb-1">{text.appName}</h4>
                    </div>
                    <div className="divide-y divide-gray-300/50">
                        <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                            <p>{text.form.messageSelect}</p>
                            <div className="mt-auto mx-auto">
                                <SelectShow />
                            </div>
                            <p>{text.form.quantity}</p>
                            <div className="mt-auto">
                                <QuantityButton />
                            </div>
                        </div>
                        <div className="pt-8 text-base font-semibold leading-7">
                            <BillingInformation />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormTemplate
