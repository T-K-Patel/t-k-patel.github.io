function Title({ title }: { title: string }) {
    return (
        <>
            <div className="relative my-4">
                <h1 className="text-stroke select-none stroke-primary stroke-2 text-center text-7xl font-extrabold text-transparent max-lg:text-6xl max-md:hidden">
                    {title}
                </h1>
                <h1 className="bottom-0 left-0 right-0 top-0 flex items-center justify-center text-center text-4xl font-extrabold text-primary sm:text-5xl md:absolute lg:text-6xl">
                    {title}
                </h1>
            </div>
        </>
    );
}

export default Title;
