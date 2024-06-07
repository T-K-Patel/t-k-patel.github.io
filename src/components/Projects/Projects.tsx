import React, { LegacyRef, useEffect } from "react";
import Item from "../../utils/Item";
import { TOOLS_AND_TECH } from "../../utils/ToolsAndTechs";
import Title from "../../utils/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faLink } from "@fortawesome/free-solid-svg-icons";
import FurnaceDesignCalculator from "./assets/Furnace Design Calculator (05.06.2024 23_03).png";
import Container from "../Container";

type Project = {
    url: string;
    title: string;
    description: string | string[];
    technologies: (keyof typeof TOOLS_AND_TECH)[];
    workDone?: string[];
    image: string;
};

const PROJECT_LIST: Project[] = [
    {
        url: "https://projekt-x.vercel.app",
        title: "Projekt X",
        description: "A project management tool for developers",
        technologies: [
            "React JS",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "Vercel",
        ],
        workDone: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti quis soluta omnis explicabo iusto maiores facilis quidem nostrum, ad earum? Aliquam ipsa adipisci deleniti iure possimus nobis unde impedit minus praesentium nemo eligendi perspiciatis inventore deserunt, dignissimos quibusdam aperiam optio suscipit reprehenderit debitis? Iste maxime non architecto ex quasi.",
        ],
        image: FurnaceDesignCalculator,
    },
    {
        url: "https://furnace-design-calculator.vercel.app",
        title: "Furnace Design Calculator",
        description:
            "A Web based tool to calculate the design parameters of a furnace",
        technologies: ["React JS", "TypeScript", "Tailwind CSS"],
        workDone: [
            "Developed the UI/UX for the tool",
            "Developed the logic for the tool",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti quis soluta omnis explicabo iusto maiores facilis quidem nostrum, ad earum? Aliquam ipsa adipisci deleniti iure possimus nobis unde impedit minus praesentium nemo eligendi perspiciatis inventore deserunt, dignissimos quibusdam aperiam optio suscipit reprehenderit debitis? Iste maxime non architecto ex quasi.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, enim est id provident aliquam quasi quas amet! Voluptatem earum, blanditiis aliquam iure repellat fugiat perspiciatis vel vero eligendi nisi expedita eaque, numquam ipsum asperiores doloremque velit, ducimus non cumque assumenda temporibus. Cumque saepe dignissimos earum exercitationem tempora similique optio ipsum ex quisquam voluptates magnam veniam adipisci voluptatibus quos, ducimus amet alias voluptatem, dolore facilis velit. Tenetur, sequi quo aperiam necessitatibus perspiciatis minus quas! Quod exercitationem sed autem ipsa harum deserunt repudiandae! Earum nostrum adipisci delectus qui. Aliquid laboriosam suscipit facere? Beatae fuga officia labore ducimus molestias omnis alias iure accusamus!",
        ],
        image: FurnaceDesignCalculator,
    },
];

function Projects() {
    const dialogRef = React.useRef<HTMLDialogElement>();
    const [selectedProjectInd, setSelectedProjectInd] =
        React.useState<number>(0);
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", open);
    }, [open]);
    const handleClick = (index: number) => {
        setSelectedProjectInd(index);
        setOpen(true);
        dialogRef.current?.showModal();
    };
    const handleClose = () => {
        setOpen(false);
        dialogRef.current?.close();
    };
    const selectedProject = PROJECT_LIST[selectedProjectInd];
    return (
        <Container className="text-white" id="projects">
            <Title title="Projects" />
            <div className="px-10">
                {PROJECT_LIST.map((val, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="mx-auto my-10 grid h-fit gap-4 rounded-3xl bg-orange-400 p-3 text-lg font-medium md:grid-cols-2">
                                <div className="">
                                    <img
                                        src={val.image}
                                        className="aspect-square max-h-96 w-full rounded-xl bg-black bg-opacity-40 object-contain"
                                    />
                                </div>
                                <div className="flex h-full w-full flex-col gap-3 py-4 text-lg">
                                    <div className="flex justify-between pe-3">
                                        <h1 className="me-2 text-4xl font-bold">
                                            {val.title}
                                        </h1>
                                        <FontAwesomeIcon
                                            icon={faInfoCircle}
                                            size="2x"
                                            onClick={() => {
                                                handleClick(index);
                                            }}
                                            className="my-auto cursor-pointer hover:text-white"
                                        />
                                    </div>
                                    <div>
                                        <h1>Technologies used</h1>
                                        <div className="mt-3 flex flex-wrap gap-2 text-sm font-medium">
                                            {val.technologies.map(
                                                (v, index) => {
                                                    return (
                                                        <React.Fragment
                                                            key={index}
                                                        >
                                                            <Item>
                                                                <img
                                                                    src={
                                                                        TOOLS_AND_TECH[
                                                                        v
                                                                        ]
                                                                    }
                                                                    alt=""
                                                                    className="w-8"
                                                                />
                                                                <span className="my-auto me-2">
                                                                    {v}
                                                                </span>
                                                            </Item>
                                                        </React.Fragment>
                                                    );
                                                },
                                            )}
                                        </div>
                                    </div>
                                    <div className="mt-auto">
                                        <a
                                            href={val.url}
                                            className="w-min"
                                            target="_blank"
                                        >
                                            <div className="flex w-fit items-center gap-2 rounded-full border-2 border-white bg-white bg-opacity-10 p-3 transition-all duration-300 hover:scale-95 hover:bg-opacity-100 hover:text-black">
                                                <FontAwesomeIcon
                                                    icon={faLink}
                                                />
                                                Go To the Link
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
            <dialog
                ref={dialogRef as LegacyRef<HTMLDialogElement>}
                className="h-[95vh] max-h-[1536px] w-[97vw] max-w-screen-2xl rounded-2xl border-2 border-yellow-500 bg-black bg-opacity-90 p-2 text-white"
            >
                <div className="flex h-full w-full flex-col justify-between overflow-y-auto">
                    <div className="flex items-center justify-between px-4 py-2">
                        <h1 className="text-3xl font-bold text-yellow-400">
                            {selectedProject.title}
                        </h1>
                        <button
                            onClick={handleClose}
                            className="m-0 rounded-xl bg-yellow-600 p-2"
                        >
                            Close
                        </button>
                    </div>
                    {selectedProject && (
                        <div className="flex h-full w-full flex-col overflow-y-auto px-3 py-4">
                            <p>{selectedProject.description}</p>
                            <div className="my-3">
                                <h1 className="text-3xl">Technologies used</h1>
                                <div className="mt-3 flex flex-wrap gap-2 text-sm font-medium">
                                    {selectedProject.technologies.map(
                                        (val, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <Item>
                                                        <img
                                                            src={
                                                                TOOLS_AND_TECH[
                                                                val
                                                                ]
                                                            }
                                                            alt=""
                                                            className="w-8"
                                                        />
                                                        <span className="my-auto me-2">
                                                            {val}
                                                        </span>
                                                    </Item>
                                                </React.Fragment>
                                            );
                                        },
                                    )}
                                </div>
                            </div>
                            <div className="pt-4">
                                <h2 className="text-3xl">What I have done</h2>
                                <hr className="border border-yellow-400" />
                            </div>
                            <div className="my-4">
                                <div className="mt-3 px-4">
                                    <ul className="list-inside list-disc">
                                        {selectedProject.workDone?.map(
                                            (val, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="my-1 w-full text-justify"
                                                    >
                                                        {val}
                                                    </li>
                                                );
                                            },
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="mx-auto mt-auto h-fit w-fit">
                                <a
                                    href={selectedProject.url}
                                    className="w-min"
                                    target="_blank"
                                >
                                    <div className="flex w-fit items-center gap-2 rounded-full border-2 border-white bg-white bg-opacity-10 p-3 transition-all duration-300 hover:scale-95 hover:bg-opacity-100 hover:text-black">
                                        <FontAwesomeIcon icon={faLink} />
                                        Go To the Link
                                    </div>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </dialog>

            <div className="mt-auto flex w-full justify-center">
                <a
                    href="https://github.com/t-k-patel"
                    className="w-max"
                    target="_blank"
                >
                    <div className="flex w-fit items-center gap-4 rounded-full bg-yellow-400 p-4 text-lg text-black transition-all duration-300 hover:scale-95">
                        <img
                            src={TOOLS_AND_TECH.GitHub}
                            alt=""
                            className="w-8"
                        />
                        See Github
                    </div>
                </a>
            </div>
        </Container>
    );
}

export default Projects;
