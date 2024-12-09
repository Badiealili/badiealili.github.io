import NavBar from "../../components/NavBar";
import Logo from "../../components/Logo";

export default function Hero() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <section className="relative h-full" id="Hero">
                <h1 className="display mx-auto mb-12 text-center">
                    L'innovation Commence Ici!
                </h1>
                <Logo />
            </section>
        </>
    );
}
