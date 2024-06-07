import Container from "./Container";

function Footer() {
    return (
        <Container className="pt-10">
            <footer className="z-40 px-10 py-8 backdrop-blur-sm max-md:px-5 max-xs:p-2">
                <div className="flex items-center justify-between rounded-full bg-primary p-2 max-sm:flex-col max-xs:p-1">
                    <div className="relative my-auto flex h-12 flex-shrink-0 select-none rounded-full align-middle max-sm:h-8">
                        <span className="my-auto ms-4">
                            All Rights Reserved &copy;{" "}
                            {new Date().getFullYear()}
                        </span>
                    </div>
                    <div className="relative my-auto flex h-12 flex-shrink-0 select-none rounded-full align-middle max-sm:h-8 max-xs:hidden">
                        <span className="my-auto">Designed and Built by</span>
                        &nbsp;
                        <span className="my-auto me-4 font-bold">
                            Tirth&nbsp;Kapadi
                        </span>
                    </div>
                </div>
            </footer>
        </Container>
    );
}

export default Footer;
