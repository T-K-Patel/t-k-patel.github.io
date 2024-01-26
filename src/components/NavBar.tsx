import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
function NavBar() {
    const [show, setShow] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current?.contains(event.target as Node)) {
                setShow(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <header className="sticky top-0  backdrop-blur-sm py-4 max-md:px-5 max-xs:p-2 px-10 z-40">
                <nav className="rounded-full p-2 max-xs:p-1 flex justify-between bg-white">
                    <div className="flex flex-shrink-0 align-middle">
                        <img src="/images/tk.png" alt="TK" className="w-12 max-sm:w-8 aspect-square object-contain rounded-full select-none bg-black" />
                        <h1 className="my-auto mx-3 text-2xl max-sm:text-lg uppercase">TIRTH <span className="font-semibold">KAPADI</span></h1>
                    </div>
                    <div className="relative sm:bg-black text-white h-12 max-sm:h-8 my-auto rounded-full select-none cursor-pointer flex flex-shrink-0 align-middle"
                        onClick={() => setShow(s => !s)}
                        ref={menuRef}
                    >
                        <span className="mx-4 my-auto max-sm:hidden">Menu</span>
                        <button className={"h-full aspect-square bg-primary text-black hover:bg-opacity-80 rounded-full" + (show ? " bg-opacity-80" : "")}>
                            <FontAwesomeIcon icon={show ? faClose : faBars} />
                        </button>
                        <menu className='absolute bg-gray-600 p-2 top-14 rounded-xl w-max right-0 cursor-auto' hidden={!show} translate='yes'>
                            <ul className='flex flex-col gap-1'>
                                <a href="#"><li className='py-1 px-2 text-sm w-full hover:bg-gray-700 rounded-lg'>Home</li></a>
                                <a href="#"><li className='py-1 px-2 text-sm w-full hover:bg-gray-700 rounded-lg'>About Me</li></a>
                                <a href="#"><li className='py-1 px-2 text-sm w-full hover:bg-gray-700 rounded-lg'>Education</li></a>
                                <a href="#"><li className='py-1 px-2 text-sm w-full hover:bg-gray-700 rounded-lg'>Experience</li></a>
                                <a href="#"><li className='py-1 px-2 text-sm w-full hover:bg-gray-700 rounded-lg'>Certificates</li></a>
                                <a href="#"><li className='py-1 px-2 text-sm w-full hover:bg-gray-700 rounded-lg'>Skills</li></a>
                                <a href="#"><li className='py-1 px-2 text-sm w-full hover:bg-gray-700 rounded-lg'>Projects</li></a>
                                <a href="#"><li className='py-1 px-2 text-sm w-full hover:bg-gray-700 rounded-lg'>Social Media</li></a>
                                <a href="#"><li className='py-1 px-2 text-sm w-full hover:bg-gray-700 rounded-lg'>Contact Me</li></a>
                                <a href="#portfolioMadeWith"><li className='py-1 px-2 text-sm w-full hover:bg-gray-700 rounded-lg'>Portfolio Made With</li></a>
                            </ul>
                        </menu>
                    </div>
                </nav>
            </header>
            {show && <div className="fixed top-0 left-0 w-full h-full" />}
        </>
    )
}

export default NavBar
