import React, { createContext, useState } from "react";
import { showsData } from "../data/shows/showsData";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [showSelected, setShowSelected] = useState(showsData[0]);
    const [billingData, setBillingData] = useState({});
    const [view, setView] = useState(1);
    const [quantity, setQuantity] = useState(1);



    return (
        <OrderContext.Provider
            value={{
                showSelected,
                billingData,
                setShowSelected,
                setBillingData,
                view,
                setView,
                quantity,
                setQuantity
            }}
        >
            {children}
        </OrderContext.Provider>
    );
};
