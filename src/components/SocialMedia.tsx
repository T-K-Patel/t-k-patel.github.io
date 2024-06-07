import Container from "./Container";
import Title from "../utils/Title";
import FaceBook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import LinkedIn from "../assets/linkedIn.svg";
import Gmail from "../assets/gmail.svg";
import Item from "../utils/Item";

function SocialMedia() {
    return (
        <Container id="social-media">
            <Title title="Connect With Me" />
            <div className="flex flex-wrap justify-center gap-8 pt-5">
                <Item href="https://www.facebook.com/tirth.kapadi">
                    <img src={FaceBook} alt="Facebook" className="w-16" />
                    <h3 className="my-auto ms-2 text-3xl font-bold text-blue-600">
                        FaceBook
                    </h3>
                </Item>
                <Item href="https://www.instagram.com/mr._t.k.patel._iitd">
                    <img src={Instagram} alt="Instagram" className="w-16" />
                    <h3 className="my-auto ms-2 text-3xl font-bold text-red-600">
                        Instagram
                    </h3>
                </Item>
                <Item href="https://www.linkedin.com/in/tirth-kapadi">
                    <img src={LinkedIn} alt="LinkedIn" className="w-16" />
                    <h3 className="my-auto ms-2 text-3xl font-bold text-violet-500">
                        LinkedIn
                    </h3>
                </Item>
                <Item href="mailto:mr.t.k.patel@gmail.com">
                    <img src={Gmail} alt="Gmail" className="w-16" />
                    <h3 className="my-auto ms-2 text-3xl font-bold text-yellow-600">
                        mr.t.k.patel@gmail.com
                    </h3>
                </Item>
            </div>
        </Container>
    );
}

export default SocialMedia;
