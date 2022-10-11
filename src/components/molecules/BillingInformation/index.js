import React, { useContext } from 'react'
import { OrderContext } from '../../../context/OrderContext';
import InputForm from '../../atoms/InputForm';
import SelectCountry from '../../atoms/SelectCountry';
import SelectFranchise from '../../atoms/SelectFranchise';

const BillingInformation = () => {

    const { billingData, setBillingData } = useContext(OrderContext);


    return (
        <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <InputForm
                                    label="First name"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <InputForm
                                    label="Last name"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-4 lg:col-span-6">
                                <InputForm
                                    label="Email address"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    type='email'
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                <InputForm
                                    label="Card Number"
                                    name="card-code"
                                    id="card-code"
                                    autoComplete="card-code"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <SelectFranchise />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <SelectCountry />
                            </div>

                            <div className="col-span-6">
                                <InputForm
                                    label="Street address"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <InputForm
                                    label="City"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <InputForm
                                    label="State / Province"
                                    name="region"
                                    id="region"
                                    autoComplete="address-level1"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <InputForm
                                    label="ZIP / Postal code"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-6 pb-3 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-green-800 py-2 px-5 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BillingInformation