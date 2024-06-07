import Title from "../utils/Title";
import Container from "./Container";
import AboutMeImage from "../assets/AboutMeImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
    return (
        <Container id="about-me" className="text-white">
            <Title title="About Me" />
            <div className="mt-10 grid grid-cols-1 gap-2 px-5 md:grid-cols-3 md:gap-4">
                <div className="mx-auto my-auto">
                    <div className="w-96 rounded-xl bg-yellow-500 pb-2 pe-2 transition-all duration-150 hover:scale-105">
                        <div className="-ms-2 -mt-2 w-96 transform-gpu overflow-hidden rounded-lg bg-black">
                            <img
                                src={AboutMeImage}
                                alt="Image"
                                className="h-full w-96 rounded-lg object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 mx-8 flex flex-col h-full">
                    <div className="rounded-xl bg-white bg-opacity-30 p-6">
                        <article>
                            <p className="text-lg text-white">
                                I am a Full Stack Developer with a passion for
                                learning and teaching. I love to code and help
                                others learn to code as well. I have been coding
                                for the past 2 years and have learned a lot in
                                this time. I have worked with various
                                technologies like React JS, TypeScript, Tailwind
                                CSS, Vite, Figma, and many more. I have also
                                worked on various projects like Projekt X,
                                Furnace Design Calculator, and many more. I am
                                currently working on a project management tool
                                for developers called Projekt X. I am also
                                learning new technologies like Next JS, GraphQL,
                                and many more. I am also learning to design
                                using Figma and Adobe XD. I am also learning to
                                use Tailwind CSS for designing websites. I am
                                also learning to use Vite for building websites.
                                I am also learning to use TypeScript for writing
                                type-safe code. I am also learning to use React
                                JS for building web applications. I am also
                                learning to use Next JS for building web
                                applications. I am also learning to use GraphQL
                                for building APIs.
                            </p>
                        </article>
                    </div>
                    <div className="flex justify-center mt-auto">
                        <a href="#contact-me">
                            <div className="mt-5 flex w-fit flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-yellow-500 p-4 text-lg transition-all duration-200 hover:scale-90 hover:bg-yellow-500 hover:bg-opacity-30">
                                <FontAwesomeIcon icon={faMobileAlt} />
                                Contact Me
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default AboutMe;
