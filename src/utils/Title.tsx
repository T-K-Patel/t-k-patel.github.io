function Title({ title }: { title: string }) {
    return (
        <>
            <div className='relative my-4'>
                <h1 className='max-md:hidden text-7xl max-lg:text-6xl text-transparent text-stroke select-none stroke-primary stroke-2 text-center font-extrabold'>{title}</h1>
                <h1 className='md:absolute top-0 bottom-0 flex justify-center items-center left-0 right-0 text-4xl sm:text-5xl lg:text-6xl text-primary text-center font-extrabold'>{title}</h1>
            </div>
        </>
    )
}

export default Title
