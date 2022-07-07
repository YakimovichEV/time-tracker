import React from "react";

interface ButtonProps {
    type: "submit" | "button" | "reset" | undefined;
    className?: string;
    children: React.ReactNode;
    processing?: any;
}

export const Button: React.FC<ButtonProps> = ({
    type = "submit",
    className,
    children,
    processing,
    ...props
}) => {
    return (
        <button
            type={type}
            className={
                `inline-flex items-center px-4 py-4 bg-gray-900 border rounded-full border-transparent font-semibold text-sm text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${
                    processing && "opacity-25"
                } ` + className
            }
            disabled={processing}
            {...props}
        >
            {children}
        </button>
    );
};
