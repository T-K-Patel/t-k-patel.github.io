import Hands from "../assets/hero-hand.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faDownload } from "@fortawesome/free-solid-svg-icons";
import { LegacyRef, useEffect, useRef, useState } from "react";
import Container from "./Container";

function getExpreienceTime() {
    const experienceStartDate = new Date("2023-01-01");
    const experienceEndDate = new Date();
    return (
        (experienceEndDate.getTime() - experienceStartDate.getTime()) /
        31556952000
    ).toFixed(1);
}

const RESUME_URL =
    "/assets/MY_RESUME.pdf";

function Hero() {
    const dialogRef = useRef<HTMLDialogElement>();
    const [open, setOpen] = useState(false);
    const openDialog = () => {
        setOpen(true);
        dialogRef.current?.showModal();
    };
    const closeDialog = () => {
        setOpen(false);
        dialogRef.current?.close();
    };

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", open);
    }, [open]);

    return (
        <>
            <Container className="text-white">
                <div className="flex flex-col gap-8 bg-[url(/images/bg-vector.svg)] bg-contain bg-center bg-no-repeat max-xl:min-h-[80vh] xl:aspect-[21/9]">
                    <div className="flex items-center justify-center text-center max-md:flex-col md:items-end">
                        <img
                            src={Hands}
                            alt="✌️"
                            loading="lazy"
                            width={118}
                            height={118}
                            decoding="async"
                            className="select-none"
                        />
                        <h1 className="text-center align-baseline text-6xl font-extrabold text-white max-lg:text-5xl max-sm:text-4xl">
                            Hello! I&lsquo;m{" "}
                            <span className="mt-auto text-primary max-md:block">
                                TIRTH&nbsp;KAPADI
                            </span>
                        </h1>
                    </div>
                    <div className="flex items-end justify-center text-center">
                        <h2 className="text-3xl max-lg:text-2xl max-sm:text-lg">
                            A{" "}
                            <span className="font-bold">
                                Full Stack Developer | Software Developer
                            </span>
                        </h2>
                    </div>
                    <div className="flex items-end justify-center text-center">
                        <h2 className="text-3xl max-lg:text-2xl max-sm:text-lg">
                            with{" "}
                            <span className="rounded-full border-[0.5px] border-solid border-primary border-opacity-30 bg-gray-800 bg-opacity-80 px-6 py-1 font-bold text-primary">
                                {getExpreienceTime()}+&nbsp;Years
                            </span>{" "}
                            Experience
                        </h2>
                    </div>
                    <div className="mx-auto mt-5 flex select-none justify-center gap-6 align-middle text-2xl max-lg:text-xl max-sm:text-lg max-xs:flex-col">
                        <button
                            type="button"
                            onClick={openDialog}
                            className="rounded-full border-2 border-primary bg-primary bg-opacity-20 p-4 px-8 font-semibold text-primary transition-all duration-300 hover:scale-95 hover:bg-opacity-100 hover:text-black"
                        >
                            <FontAwesomeIcon icon={faDownload} /> Resume
                        </button>
                        <button
                            type="button"
                            className="rounded-full border-2 border-primary bg-primary p-4 px-8 font-semibold text-black transition-all duration-300 hover:scale-95 hover:bg-opacity-20 hover:text-primary"
                        >
                            Hire Me
                        </button>
                    </div>
                </div>
            </Container>
            <Container className="pt-0">
                <dialog
                    ref={dialogRef as LegacyRef<HTMLDialogElement>}
                    className="h-[95vh] max-h-[1536px] w-[97vw] max-w-screen-2xl rounded-lg bg-black border-2 border-yellow-500 bg-opacity-90 p-3"
                >
                    <div className="flex h-full w-full flex-col gap-2">
                        <div className="flex justify-end">
                            <button
                                className="rounded-md bg-yellow-500 p-3"
                                onClick={closeDialog}
                            >
                                <FontAwesomeIcon
                                    icon={faClose}
                                    color="black"
                                    size="xl"
                                />
                            </button>
                        </div>
                        <div className="h-full">
                            <object
                                data={RESUME_URL}
                                type="application/pdf"
                                className="flex h-full w-full items-center justify-center rounded-lg"
                            >
                                <p style={{ lineHeight: "2rem" }}>
                                    It appears you don't have a PDF plugin for
                                    this browser. No worries, you can{" "}
                                    <a
                                        href={RESUME_URL}
                                        target="_blank"
                                        className="text-nowrap rounded-md bg-black p-2 text-yellow-400"
                                    >
                                        click here
                                    </a>{" "}
                                    to download the PDF file.
                                </p>
                            </object>
                        </div>
                    </div>
                </dialog>
            </Container>
        </>
    );
}

export default Hero;
