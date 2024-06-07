import React from "react";
import Title from "../utils/Title";
import Item from "../utils/Item";
import { TOOLS_AND_TECH } from "../utils/ToolsAndTechs";
import Container from "./Container";

let technologiesKnown: (keyof typeof TOOLS_AND_TECH)[] = [
    "HTML5",
    "CSS3",
    "Node.js",
    "Vite",
    "Next",
    "React JS",
    "JavaScript",
    "TypeScript",
    "Django",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
];
technologiesKnown = Object.keys(
    TOOLS_AND_TECH,
) as (keyof typeof TOOLS_AND_TECH)[];
const Tools: (keyof typeof TOOLS_AND_TECH)[] = [
    "Visual Studio Code",
    "GitHub",
    "Postman",
    "Vercel",
    "Docker",
];

function Skills() {
    return (
        <Container className="text-white" id="skills">
            <Title title="Skills" />
            <h1 className="mt-5 flex items-center justify-center text-center text-3xl font-extrabold text-primary sm:text-3xl lg:text-5xl">
                Technologies I use
            </h1>
            <div className="mx-auto my-10 flex w-4/5 flex-wrap justify-center gap-4 pt-5 text-lg font-medium">
                {technologiesKnown.map((val, index) => {
                    console.log(val);
                    return (
                        <React.Fragment key={index}>
                            <Item>
                                <img
                                    src={TOOLS_AND_TECH[val]}
                                    alt=""
                                    className="w-10"
                                />
                                <span className="my-auto me-2">{val}</span>
                            </Item>
                        </React.Fragment>
                    );
                })}
            </div>
            <h1 className="mt-5 flex items-center justify-center text-center text-3xl font-extrabold text-primary sm:text-3xl lg:text-5xl">
                Development & Productivity <br />
                Tools I Use
            </h1>
            <div className="mx-auto my-10 flex w-4/5 flex-wrap justify-center gap-4 pt-5 text-lg font-medium">
                {Tools.map((val, index) => {
                    console.log(val);
                    return (
                        <React.Fragment key={index}>
                            <Item>
                                <img
                                    src={TOOLS_AND_TECH[val]}
                                    alt=""
                                    className="w-10"
                                />
                                <span className="my-auto me-2">{val}</span>
                            </Item>
                        </React.Fragment>
                    );
                })}
            </div>
        </Container>
    );
}

export default Skills;
