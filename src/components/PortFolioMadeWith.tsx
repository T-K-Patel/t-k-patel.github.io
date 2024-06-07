import React from "react";
import Title from "../utils/Title";
import Item from "../utils/Item";
import { TOOLS_AND_TECH } from "../utils/ToolsAndTechs";
import Container from "./Container";

const frameworksUsed: (keyof typeof TOOLS_AND_TECH)[] = [
    "Vite",
    "React JS",
    "TypeScript",
    "Figma",
    "Tailwind CSS",
];

function PortFolioMadeWith() {
    return (
        <Container className="text-white" id="portfolioMadeWith">
            <Title title="Portfolio Made With" />
            <div className="mx-auto my-10 flex w-4/5 flex-wrap justify-center gap-4 pt-5 text-lg font-medium">
                {frameworksUsed.map((val, index) => {
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

export default PortFolioMadeWith;
