import React, { useCallback, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

import { Button } from "./index";
import { Input } from "../components";
import { useTypedDispatch } from "../hooks/useTypedDispatch";
import { addItem, Item } from "../store/slices/itemSlice";

export const AddItem: React.FC = () => {
    const dispatch = useTypedDispatch();

    const [value, setValue] = useState<string>("");

    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.currentTarget.value);
        },
        [],
    );

    const handleAddItem = useCallback(() => {
        dispatch(addItem({ name: value } as Item));
        setValue("");
    }, [dispatch, value]);

    const handleKeyPress = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
                handleAddItem();
            }
        },
        [handleAddItem],
    );

    return (
        <div className="relative">
            <Input
                name="tracker"
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter tracker name"
                className="mb-5"
            />

            <Button
                type="button"
                onClick={handleAddItem}
                className="absolute right-1 top-[2px]"
                disabled={value.length <= 0 ? true : false}
            >
                <FaTelegramPlane />
            </Button>
        </div>
    );
};
