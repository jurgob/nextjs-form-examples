

import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string;
    onClick: () => void;
    className?: string;
};

export const Button = ({ children, onClick, className, ...props }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={
                "border border-gray-200 p-2 bg-gray-200 text-black rounded-lg hover:bg-gray-600 transition-colors duration-300 active:scale-99 active:bg-gray-800 " +
                className
            }
            {...props}
        >
            {children}
        </button>  );
};