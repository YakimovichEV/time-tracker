import React from "react";
import classNames from "classnames";

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
    return (
        <>
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
        </>
    );
};
