import React, { forwardRef } from 'react';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className = '', ...props }, ref) => {
        return (
            <h1
                ref={ref}
                className={`text-4xl font-bold leading-tight ${className}`}
                {...props}
            >
                {props.children}
            </h1>
        );
    }
);
Heading.displayName = 'Heading';


export const Heading2 = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className = '', ...props }, ref) => {
        return (
            <h2
                ref={ref}
                className={`text-3xl font-bold leading-tight ${className}`}
                {...props}
            >
                {props.children}
            </h2>
        );
    }
);
Heading2.displayName = 'Heading2';

