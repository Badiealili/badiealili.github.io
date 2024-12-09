import Line4 from "../../assets/Line 4.png";
import MemberCardSlider from "../../components/MemberCardSlider";

export default function Members() {
    return (
        <section className="overflow-hidden bg-neutral-50" id="blog">
            <img className="mx-auto w-72" src={Line4} alt="" />
            <h1 className="mb-8 pb-12 text-center uppercase text-primary-800">
                Les Avis de Nos Membres
            </h1>
            <MemberCardSlider />
        </section>
    );
}
