function Footer() {
    return (
        <footer className="sticky top-0  backdrop-blur-sm py-8 max-md:px-5 max-xs:p-2 px-10 z-40">
            <div className="rounded-full p-2 max-xs:p-1 flex justify-between bg-primary">
                <div className="flex flex-shrink-0 align-middle">
                    <img src="/images/tk.png" alt="TK" className="w-12 max-sm:w-8 aspect-square object-contain rounded-full select-none bg-black" />
                    <h1 className="my-auto mx-3 text-2xl max-sm:text-lg uppercase">TIRTH <span className="font-semibold">KAPADI</span></h1>
                </div>
                <div className="relative h-12 max-sm:h-8 my-auto rounded-full select-none flex flex-shrink-0 align-middle">
                    <span className='my-auto'>Designed and Built by</span>&nbsp;<span className="me-4 my-auto max-sm:hidden font-bold">Tirth Kapadi</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
