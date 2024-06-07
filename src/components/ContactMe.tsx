import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMobileAlt,
    faPaperPlane,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

import Memoji from "../assets/memoji-with-imac.svg";
import React, { useState } from "react";
import Container from "./Container";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";

function ContactMe() {
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(contactData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(async (res) => {
                if (res.ok) {
                    return await res.json();
                } else {
                    throw new Error((await res.json())?.error || "Something went wrong")
                }
            }).then((data) => {
                alert(data.msg);
                setContactData({
                    name: "",
                    email: "",
                    mobile: "",
                    subject: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.log(error);
                alert(error.message || "Something went wrong");
            })
            .finally(() => {
                setSubmitting(false);
            });
    };
    return (
        <Container id="contact-me" className="pt-20">
            <div className="relative mx-4 grid gap-5 rounded-3xl bg-white p-4 pt-2 md:mx-10 md:p-10 md:pt-5">
                <div className="relative my-4">
                    <h1 className="text-stroke-black select-none !stroke-black stroke-2 text-center text-7xl font-extrabold text-transparent max-lg:text-6xl max-md:hidden">
                        Contact Me
                    </h1>
                    <h1 className="bottom-0 left-0 right-0 top-0 flex items-center justify-center text-center text-4xl font-extrabold text-black sm:text-5xl md:absolute lg:text-6xl">
                        Contact Me
                    </h1>
                </div>
                <form
                    className="mx-auto flex w-full flex-col gap-4 max-md:px-3 md:gap-7"
                    onSubmit={handleContactSubmit}
                >
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
                        <label
                            htmlFor="name"
                            className="flex cursor-text items-center gap-2 rounded-full bg-black bg-opacity-10 ps-4 sm:ps-6"
                        >
                            <FontAwesomeIcon icon={faUser} size="lg" />
                            <input
                                id="name"
                                type="text"
                                placeholder="Name *"
                                className="h-full w-full rounded-e-full bg-transparent py-3 ps-2 text-lg outline-none placeholder:text-black placeholder:text-opacity-70 sm:py-6"
                                required
                                value={contactData.name}
                                onChange={(e) => {
                                    setContactData({
                                        ...contactData,
                                        name: e.target.value,
                                    });
                                }}
                            />
                        </label>
                        <label
                            htmlFor="email"
                            className="flex cursor-text items-center gap-2 rounded-full bg-black bg-opacity-10 ps-4 sm:ps-6"
                        >
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                            <input
                                id="email"
                                type="email"
                                placeholder="Email *"
                                className="h-full w-full rounded-e-full bg-transparent py-3 ps-2 text-lg outline-none placeholder:text-black placeholder:text-opacity-70 sm:py-6"
                                required
                                value={contactData.email}
                                onChange={(e) => {
                                    setContactData({
                                        ...contactData,
                                        email: e.target.value,
                                    });
                                }}
                            />
                        </label>
                        <label
                            htmlFor="mobile"
                            className="flex cursor-text items-center gap-2 rounded-full bg-black bg-opacity-10 ps-4 sm:ps-6"
                        >
                            <FontAwesomeIcon icon={faMobileAlt} size="lg" />
                            <input
                                id="mobile"
                                type="tel"
                                placeholder="Mobile"
                                pattern={"[0-9]{10}"}
                                className="h-full w-full rounded-e-full bg-transparent py-3 ps-2 text-lg outline-none placeholder:text-black placeholder:text-opacity-70 sm:py-6"
                                value={contactData.mobile}
                                onChange={(e) => {
                                    setContactData({
                                        ...contactData,
                                        mobile: e.target.value,
                                    });
                                }}
                            />
                        </label>
                        <label
                            htmlFor="subject"
                            className="flex cursor-text items-center gap-2 rounded-full bg-black bg-opacity-10"
                        >
                            <input
                                id="subject"
                                type="text"
                                placeholder="Subject *"
                                className="h-full w-full rounded-full bg-transparent py-3 ps-6 text-lg outline-none placeholder:text-black placeholder:text-opacity-70 sm:py-6"
                                required
                                value={contactData.subject}
                                onChange={(e) => {
                                    setContactData({
                                        ...contactData,
                                        subject: e.target.value,
                                    });
                                }}
                            />
                        </label>
                        <textarea
                            placeholder="Message *"
                            rows={5}
                            className="rounded-xl bg-black bg-opacity-10 p-6 text-lg outline-none placeholder:text-black placeholder:text-opacity-70 sm:col-span-2"
                            required
                            onChange={(e) => {
                                setContactData({
                                    ...contactData,
                                    message: e.target.value,
                                });
                            }}
                        >
                            {contactData.message}
                        </textarea>
                    </div>
                    <div>
                        <button
                            disabled={
                                contactData.name === "" ||
                                contactData.email === "" ||
                                contactData.subject === "" ||
                                contactData.message === "" ||
                                submitting
                            }
                            className="flex items-center justify-center gap-3 rounded-full bg-yellow-500 p-2 px-4 text-xl font-semibold text-black disabled:bg-yellow-600 sm:p-4 sm:px-6"
                        >
                            Send
                            <FontAwesomeIcon
                                icon={faPaperPlane}
                                size="xl"
                                className="w-5 sm:w-8"
                            />
                        </button>
                    </div>
                </form>
                <div className="pointer-events-none select-none absolute -bottom-5 right-5 z-30 max-xs:hidden sm:right-24 md:right-32 lg:right-36">
                    <img src={Memoji} alt="" className="w-40 sm:w-56 md:w-72" />
                </div>
            </div>
        </Container>
    );
}

export default ContactMe;
