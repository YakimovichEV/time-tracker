import React from "react";
import classNames from "classnames";
import { FaTelegramPlane } from "react-icons/fa";

import { Button } from "./Button";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    className?: string;
    ref?: any;
}

export const Input: React.FC<InputProps> = ({
    name,
    label,
    className,
    ref,
    ...props
}) => {
    return (
        <div className="relative">
            <label htmlFor={name}>{label}</label>
            <input
                ref={ref}
                className={classNames(
                    "py-3 px-5 w-full border-2 rounded-xl",
                    className,
                )}
                id={name}
                {...props}
            />
            <Button
                type="submit"
                className="bg-green-600 absolute right-1 top-[2px]"
            >
                <FaTelegramPlane />
            </Button>
        </div>
    );
};
