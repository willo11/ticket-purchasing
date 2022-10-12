import React from 'react'

import language from '../../../data/text';

const text = language.en

const Checkout = () => {
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-7 w-full p-4">
                <div class="grid overflow-hidden grid-cols-6 grid-rows-10 gap-2.5">
                    <div class="box row-span-2 col-start-auto col-span-6 md:col-span-4">1</div>
                    <div class="box row-span-6 col-span-6 md:col-span-2">2</div>
                    <div class="box row-span-4 col-span-6 md:col-span-4">3</div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
