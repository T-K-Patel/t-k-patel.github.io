import { ReactNode } from "react";

function Item({ children, href }: { children: ReactNode, href?: string }) {
    return (
        <>
            {href ?
                <a href={href} target="_blank">
                    <div className='w-max py-2 px-4 flex flex-shrink-0 align-middle justify-center rounded-full bg-white text-black'>
                        {children}
                    </div>
                </a>
                : <div className='w-max py-2 px-4 flex gap-2 flex-shrink-0 align-middle justify-center rounded-full bg-white text-black'>
                    {children}
                </div>
            }
        </>
    )
}

export default Item
