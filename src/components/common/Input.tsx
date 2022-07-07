import React, { useCallback, useState } from "react";
import classNames from "classnames";
import { FaTelegramPlane } from "react-icons/fa";

import { Button } from "./Button";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { addItem, Item } from "../../store/slices/itemSlice";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    className?: string;
    ref?: React.RefObject<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
    name,
    label,
    className,
    ref,
    ...props
}) => {
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

    return (
        <div className="relative">
            <label htmlFor={name}>{label}</label>
            <input
                ref={ref}
                value={value}
                onChange={onChange}
                className={classNames(
                    "py-3 px-5 w-full border-2 rounded-xl",
                    className,
                )}
                id={name}
                {...props}
            />
            <Button
                type="button"
                onClick={handleAddItem}
                className="bg-green-600 absolute right-1 top-[2px]"
            >
                <FaTelegramPlane />
            </Button>
        </div>
    );
};
