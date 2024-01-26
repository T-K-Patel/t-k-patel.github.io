import React from 'react'
import Title from '../utils/Title'
import Item from '../utils/Item'
import Vite from "../assets/vite.svg"
import ReactImg from "../assets/react.svg"
import TypeScript from "../assets/typescript.svg"
import Figma from "../assets/figma.svg"
import TailwindCSS from "../assets/tailwindcss.svg"

const frameworksUsed = [
    {
        name: "Vite",
        image: Vite
    },
    {
        name: "React JS",
        image: ReactImg
    },
    {
        name: "TypeScript",
        image: TypeScript
    },
    {
        name: "Figma",
        image: Figma
    },
    {
        name: "Tailwind CSS",
        image: TailwindCSS
    }
]

function PortFolioMadeWith() {
    return (
        <section className='my-10 py-10 text-white' id='portfolioMadeWith'>
            <Title title='Portfolio Made With' />
            <div className='flex gap-4 pt-5 my-10 flex-wrap w-4/5 mx-auto font-medium justify-center text-lg'>
                {frameworksUsed.map((val, index) => {
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

export default PortFolioMadeWith
