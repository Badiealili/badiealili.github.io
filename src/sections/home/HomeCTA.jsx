import { Link } from "react-router-dom";

export default function CTA() {
    return (
        <section className="bg-accent-300 pb-8">
            <p className="text-center font-display text-xl font-bold text-primary-800 sm:text-2xl">
                <Link to="/contact" className="text-xl underline sm:text-2xl">
                    Contactez Nous!
                </Link>{" "}
                Ou{" "}
                <a className="text-xl underline sm:text-2xl" href="#">
                    Faites Un Don!
                </a>
            </p>
        </section>
    );
}
