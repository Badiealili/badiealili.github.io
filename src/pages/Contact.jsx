import { useState } from "react";

import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(0);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <section className="lg:px-24">
                <div className="flex flex-col items-stretch gap-12 lg:flex-row">
                    <div className="flex-1 rounded-2xl border-2 border-primary-800 bg-primary-800 px-12 py-10 text-center lg:text-left">
                        <p className="display mb-8 !text-4xl !text-accent-400 sm:!text-5xl md:!text-6xl">
                            {isSubmitted === 0 && "Laissez Nous Un Message :)"}
                            {isSubmitted === 1 && "Patientez ..."}
                            {isSubmitted === 2 && "Message Envoyé :)"}
                        </p>
                    </div>
                    <ContactForm
                        isSubmitted={isSubmitted}
                        setIsSubmitted={setIsSubmitted}
                    />
                </div>
            </section>
            <Footer />
        </>
    );
}
