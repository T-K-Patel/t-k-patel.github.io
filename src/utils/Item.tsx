import { ReactNode } from "react";

function Item({ children, href }: { children: ReactNode; href?: string }) {
    return (
        <>
            {href ? (
                <a href={href} target="_blank">
                    <div className="flex w-max flex-shrink-0 justify-center rounded-full bg-white px-4 py-2 align-middle text-black">
                        {children}
                    </div>
                </a>
            ) : (
                <div className="flex w-max flex-shrink-0 justify-center gap-2 rounded-full bg-white px-4 py-2 align-middle text-black">
                    {children}
                </div>
            )}
        </>
    );
}

export default Item;
