import RobotCardSlider from "../../components/RobotCardSlider";
import Line2 from "../../assets/Line 2.png";

export default function RobotGallery({ robotList }) {
    return (
        <section className="px-0 overflow-x-hidden" id="robot-gallery">
            <img className="mx-auto w-72" src={Line2} alt="" />
            <h1 className="mb-8 text-center uppercase text-primary-800">
                Admirez Nos Créations!
            </h1>
            <RobotCardSlider robotList={robotList} />
        </section>
    );
}
