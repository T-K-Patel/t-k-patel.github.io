import React from 'react'
import Title from '../utils/Title'
import Item from '../utils/Item'
import HTML5 from "../assets/html.svg"
import CSS3 from "../assets/css.svg"
import Vite from "../assets/vite.svg"
import Next from "../assets/nextjs.svg"
import ReactImg from "../assets/react.svg"
import TypeScript from "../assets/typescript.svg"
import Figma from "../assets/figma.svg"
import Bootstrap from "../assets/bootstrap.svg"
import TailwindCSS from "../assets/tailwindcss.svg"
import GitHub from "../assets/github.svg"
import Postman from "../assets/postman.svg"
import VSCode from "../assets/vscode.svg"
import JavaScript from "../assets/javascript.svg"

const technologiesKnown = [
    {
        name: "HTML5",
        image: HTML5
    },
    {
        name: "CSS3",
        image: CSS3
    },
    {
        name: "Node.js",
        image: Next
    },
    {
        name: "Vite",
        image: Vite
    },
    {
        name: "Next",
        image: Next
    },
    {
        name: "React JS",
        image: ReactImg
    },
    {
        name: "JavaScript",
        image: JavaScript
    },
    {
        name: "TypeScript",
        image: TypeScript
    },
    {
        name: "Django",
        image: Figma
    },
    {
        name: "Tailwind CSS",
        image: TailwindCSS
    },
    {
        name: "Bootstrap",
        image: Bootstrap
    },
    {
        name: "GitHub",
        image: GitHub
    }
]
const Tools = [
    {
        name: "Visual Studio Code",
        image: VSCode
    },
    {
        name: "GitHub",
        image: GitHub
    },
    {
        name: "Postman",
        image: Postman
    }
]
function Skills() {
    return (
        <section className='my-10 py-10 text-white' id='skills'>
            <Title title="Skills" />
            <h1 className='mt-5 flex justify-center items-center text-3xl sm:text-3xl lg:text-5xl text-primary text-center font-extrabold'>Technologies I use</h1>
            <div className='flex gap-4 pt-5 my-10 flex-wrap w-4/5 mx-auto font-medium justify-center text-lg'>
                {technologiesKnown.map((val, index) => {
                    console.log(val)
                    return <React.Fragment key={index}>
                        <Item>
                            <img src={val.image} alt="" className='w-10' />
                            <span className='my-auto me-2'>{val.name}</span>
                        </Item>
                    </React.Fragment>
                })}
            </div>
            <h1 className='mt-5 flex justify-center items-center text-3xl sm:text-3xl lg:text-5xl text-primary text-center font-extrabold'>Tools I use</h1>
            <div className='flex gap-4 pt-5 my-10 flex-wrap w-4/5 mx-auto font-medium justify-center text-lg'>
                {Tools.map((val, index) => {
                    console.log(val)
                    return <React.Fragment key={index}>
                        <Item>
                            <img src={val.image} alt="" className='w-10' />
                            <span className='my-auto me-2'>{val.name}</span>
                        </Item>
                    </React.Fragment>
                })}
            </div>
        </section>
    )
}

export default Skills
