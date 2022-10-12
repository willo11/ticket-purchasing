import React, { createContext, useState } from "react";
import { countries } from "../components/atoms/SelectCountry";
import { franchise } from "../components/atoms/SelectFranchise";
import { showsData } from "../data/shows/showsData";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [showSelected, setShowSelected] = useState(showsData[0]);
    const [billingData, setBillingData] = useState({
        "first-name": '',
        "last-name": '',
        "email-address": '',
        "card-code": '',
        "street-address": '',
        "city": '',
        "region": '',
        "postal-code": '',
        'franchise': franchise[0],
        'country': countries[0]
    });
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
