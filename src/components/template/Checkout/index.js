import React from 'react'
import Delivery from '../../atoms/Delivery'
import Payment from '../../atoms/Payment'

const Checkout = () => {
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-7 w-full p-4">
                <div class="grid overflow-hidden grid-cols-6 grid-rows-10 gap-2.5">
                    <div class="row-span-2 col-start-auto col-span-6 md:col-span-4">
                        <Delivery />
                    </div>
                    <div class="row-span-6 col-span-6 md:col-span-2">
                        2
                    </div>
                    <div class="row-span-4 col-span-6 md:col-span-4">
                        <Payment />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
