import React, { useContext } from 'react'
import { OrderContext } from '../../../context/OrderContext';

const QuantityButton = () => {
    const { quantity, setQuantity } = useContext(OrderContext);

    const decrement = () => {
        setQuantity(prevState => {
            const result = Math.max(prevState - 1, 0)
            return result
        });
    }

    const increment = () => {
        setQuantity(prevState => {
            const result = Math.min(prevState + 1, 10)
            console.log(result)
            return result
        });
    }

    const handleChange = (e) => {
        const result = Math.min(e.currentTarget.value, 10)
        setQuantity(parseInt(result))
    }

    return (
        <div className="custom-number-input h-10 w-fit  mx-auto">
            <div className="flex flex-row  h-10  rounded-lg relative bg-transparent mt-1">
                <button onClick={decrement} className="bg-green-800 text-white hover:text-gray-700 hover:bg-white hover:border-green-800 hover:border h-full w-20 rounded-l cursor-pointer outline-none">
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                    type="number"
                    className="focus:outline-none text-center w-full bg-green-800 text-white font-semibold text-md hover:text-neutral-50 focus:text-neutral-50  md:text-basecursor-default flex items-cente outline-none"
                    onChange={handleChange}
                    value={quantity} />
                <button onClick={increment} className="bg-green-800 text-white hover:text-gray-700 hover:bg-white hover:border-green-800 hover:border h-full w-20 rounded-r cursor-pointer">
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    )
}

export default QuantityButton