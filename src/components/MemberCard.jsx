import profile from "../assets/profile.png";

export default function MemberCard() {
    return (
        <li className="relative flex flex-col shrink-0 w-96 rounded-2xl px-6 pb-4 border-2 border-primary-800">
            <img
                className="center-abs w-1/4 -translate-y-1/2 rounded-full border-2 border-primary-800"
                src={profile}
                alt="Member profile picture"
            />
            <h2 className="mb-0 mt-16 text-center text-2xl text-primary-800">
                Yacine
            </h2>
            <p className="mb-4 text-center text-xs text-accent-400">Membre</p>
            <p className="text-center">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim."
            </p>
        </li>
    );
}
