import React from "react";
import { twMerge } from "tailwind-merge";
function Container({
    id,
    children,
    className,
}: {
    id?: string;
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <section className={twMerge("pt-20", className)} id={id}>
            <div className="mx-auto max-w-screen-2xl px-3 md:px-6">
                {children}
            </div>
        </section>
    );
}

export default Container;
