import { Link } from "react-router-dom";

export default function RobotCard({ name, image }) {
    return (
        // TODO: add glow effect when hovering
        // TODO: change cursor to a pixelized one
        // TODO: display detailed page on click
        <Link to={name} className="flex w-fit flex-col gap-3 rounded-2xl border-2 border-primary-800 bg-neutral-50 px-5 py-4 drop-shadow-xl">
            <div className="h-52 w-60 overflow-hidden rounded-xl border-2 border-primary-800">
                <img className="object-cover" src={image} alt="Robot" />
            </div>
            <h2 className="text-center font-display text-2xl text-primary-800">
                {name}
            </h2>
        </Link>
    );
}
