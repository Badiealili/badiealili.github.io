import R2T2_Logo from "../assets/logos/R2T2_Logo.png";

export default function Logo() {
    return (
        <div className="mx-auto my-6 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <img className="w-16" src={R2T2_Logo} alt="Logo de l'association" />
            <div className="rounded-full bg-primary-800 px-5 py-3 text-accent-50">
                <p>Association Etudiante R2T2</p>
            </div>
        </div>
    );
}
