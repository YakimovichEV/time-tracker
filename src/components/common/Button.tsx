import React from "react";

interface ButtonProps {
    type: "submit" | "button" | "reset" | undefined;
    className?: string;
    children: React.ReactNode;
    processing?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    type = "submit",
    className,
    children,
    processing,
    onClick,
    ...props
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `inline-flex items-center px-4 py-4 bg-green-600 border rounded-full border-transparent font-semibold text-sm text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 disabled:bg-gray-900 ${
                    processing && "opacity-25"
                } ` + className
            }
            {...props}
        >
            {children}
        </button>
    );
};
