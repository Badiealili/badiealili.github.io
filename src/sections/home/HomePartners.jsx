import CERI from "../../assets/logos/CERI.png";
import Quadient from "../../assets/logos/Quadient.png";
import Avignon from "../../assets/logos/Avignon.png";

export default function Partners() {
    return (
        <section
            className="overflow-hidden border-y-2 border-primary-800 bg-neutral-50 px-0 py-6"
            id="partners"
        >
            <div className="inline-flex w-full flex-nowrap">
                <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
                    <li>
                        <img className="w-16" src={Avignon} alt="Avignon" />
                    </li>
                    <li>
                        <img className="w-32" src={Quadient} alt="Quadient" />
                    </li>
                    <li>
                        <img className="w-24" src={CERI} alt="CERI" />
                    </li>
                </ul>
                <ul
                    className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
                    aria-hidden="true"
                >
                    <li>
                        <img className="w-16" src={Avignon} alt="Facebook" />
                    </li>
                    <li>
                        <img className="w-32" src={Quadient} alt="Quadient" />
                    </li>
                    <li>
                        <img className="w-24" src={CERI} alt="CERI" />
                    </li>
                </ul>
                <ul
                    className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
                    aria-hidden="true"
                >
                    <li>
                        <img className="w-16" src={Avignon} alt="Facebook" />
                    </li>
                    <li>
                        <img className="w-32" src={Quadient} alt="Quadient" />
                    </li>
                    <li>
                        <img className="w-24" src={CERI} alt="CERI" />
                    </li>
                </ul>
                <ul
                    className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
                    aria-hidden="true"
                >
                    <li>
                        <img className="w-16" src={Avignon} alt="Avignon" />
                    </li>
                    <li>
                        <img className="w-32" src={Quadient} alt="Quadient" />
                    </li>
                    <li>
                        <img className="w-24" src={CERI} alt="CERI" />
                    </li>
                </ul>
            </div>
        </section>
    );
}
