import Hands from '../assets/hero-hand.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
function Hero() {
    return (
        <section className='my-10 text-white'>
            <div className="flex flex-col min-h-screen gap-8 bg-[url(/images/bg-vector.svg)] bg-center bg-no-repeat bg-contain">
                <div className='flex max-md:flex-col items-center md:items-end justify-center text-center'>
                    <img src={Hands} alt="✌️" loading='lazy' width={118} height={118} decoding="async" className='select-none' />
                    <h1 className="text-6xl max-lg:text-5xl max-sm:text-4xl text-center text-white font-extrabold align-baseline">
                        Hello! I&lsquo;m {" "}
                        <span className='text-primary mt-auto max-md:block'>TIRTH&nbsp;KAPADI</span>
                    </h1>
                </div>
                <div className="flex items-end justify-center text-center">
                    <h2 className='text-3xl max-lg:text-2xl max-sm:text-lg'>
                        A <span className="font-bold">Front End Developer | Web Designer</span>
                    </h2>
                </div>
                <div className="flex items-end justify-center text-center">
                    <h2 className='text-3xl max-lg:text-2xl max-sm:text-lg'>
                        with <span className='px-6 py-1 text-primary font-bold border-primary border-[0.5px] border-opacity-30 border-solid rounded-full bg-gray-800 bg-opacity-80'>1.2+&nbsp;Years</span> Experience
                    </h2>
                </div>
                <div className="flex max-xs:flex-col gap-6 mt-5 mx-auto align-middle justify-center text-2xl max-lg:text-xl max-sm:text-lg select-none">
                    <button type='button' className='bg-primary text-primary hover:text-black font-semibold hover:bg-opacity-100 bg-opacity-20 p-4 px-8 rounded-full border-primary border-2'>
                        <FontAwesomeIcon icon={faDownload} /> Resume
                    </button>
                    <button type='button' className='bg-primary cursor-[url(/tk.png)] hover:text-primary text-black font-semibold hover:bg-opacity-20 p-4 px-8 rounded-full border-primary border-2'>Hire Me</button>
                </div>
            </div>
        </section>
    )
}

export default Hero
