import React from 'react'

import language from '../../../data/text';

const text = language.en

const Checkout = () => {
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto max-w-md">
                    <div className="text-center">
                        <h4 className="text-xl font-semibold mt-1 mb-3 pb-1">{text.appName}</h4>
                    </div>
                    <div className="divide-y divide-gray-300/50">
                        <div className="pt-8 text-base font-semibold leading-7">
                            <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
                            <p>
                                <a href="https://tailwindcss.com/docs" className="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
