import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
function NavBar() {
    const [show, setShow] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current?.contains(event.target as Node)
            ) {
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
            <Container className="sticky top-0 z-40 pt-0">
                <header className="px-10 py-4 backdrop-blur-sm max-md:px-5 max-xs:p-2">
                    <nav className="flex justify-between rounded-full bg-white p-2 shadow-lg shadow-black max-xs:p-1">
                        <div className="flex flex-shrink-0 align-middle">
                            <img
                                src="/images/tk.png"
                                alt="TK"
                                className="aspect-square w-12 select-none rounded-full bg-black object-contain max-sm:w-8"
                            />
                            <h1 className="mx-3 my-auto text-2xl uppercase max-sm:text-lg">
                                TIRTH{" "}
                                <span className="font-semibold">KAPADI</span>
                            </h1>
                        </div>
                        <div
                            className="relative my-auto flex h-12 flex-shrink-0 cursor-pointer select-none rounded-full align-middle text-white max-sm:h-8 sm:bg-black"
                            onClick={() => setShow((s) => !s)}
                            ref={menuRef}
                        >
                            <span className="mx-4 my-auto max-sm:hidden">
                                Menu
                            </span>
                            <button
                                className={
                                    "aspect-square h-full rounded-full bg-primary text-black hover:bg-opacity-80" +
                                    (show ? "bg-opacity-80" : "")
                                }
                            >
                                <FontAwesomeIcon
                                    icon={show ? faClose : faBars}
                                />
                            </button>
                            <menu
                                className="absolute right-0 top-14 z-[1000] w-max cursor-auto rounded-xl bg-gray-600 p-2"
                                hidden={!show}
                                translate="yes"
                            >
                                <ul className="flex flex-col gap-1">
                                    <a href="#">
                                        <li className="w-full rounded-lg px-2 py-1 text-sm hover:bg-gray-700">
                                            Home
                                        </li>
                                    </a>
                                    <a href="#about-me">
                                        <li className="w-full rounded-lg px-2 py-1 text-sm hover:bg-gray-700">
                                            About Me
                                        </li>
                                    </a>
                                    <a href="#education">
                                        <li className="w-full rounded-lg px-2 py-1 text-sm hover:bg-gray-700">
                                            Education
                                        </li>
                                    </a>
                                    <a href="#skills">
                                        <li className="w-full rounded-lg px-2 py-1 text-sm hover:bg-gray-700">
                                            Skills
                                        </li>
                                    </a>
                                    <a href="#projects">
                                        <li className="w-full rounded-lg px-2 py-1 text-sm hover:bg-gray-700">
                                            Projects
                                        </li>
                                    </a>
                                    <a href="#social-media">
                                        <li className="w-full rounded-lg px-2 py-1 text-sm hover:bg-gray-700">
                                            Social Media
                                        </li>
                                    </a>
                                    <a href="#contact-me">
                                        <li className="w-full rounded-lg px-2 py-1 text-sm hover:bg-gray-700">
                                            Contact Me
                                        </li>
                                    </a>
                                    <a href="#portfolioMadeWith">
                                        <li className="w-full rounded-lg px-2 py-1 text-sm hover:bg-gray-700">
                                            Portfolio Made With
                                        </li>
                                    </a>
                                </ul>
                            </menu>
                        </div>
                    </nav>
                </header>
            </Container>
            {show && <div className="fixed left-0 top-0 h-full w-full" />}
        </>
    );
}

export default NavBar;
