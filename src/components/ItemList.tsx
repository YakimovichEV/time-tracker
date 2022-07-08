import React from "react";

import { Item } from "./index";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectItems } from "../store/slices/itemSlice";

export const ItemList: React.FC = () => {
    const { items } = useTypedSelector(selectItems);

    if (items.length === 0) {
        return (
            <h1 className="text-center text-xl font-bold">
                No trackers found <span>😕</span>
            </h1>
        );
    }

    return (
        <>
            {items.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </>
    );
};

// To do: LocalStorage
