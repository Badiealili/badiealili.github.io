import { Link } from "react-router-dom";

import Line1 from "../../assets/Line 1.png";
import Image1 from "../../assets/images/Membres.jpg";
import Image2 from "../../assets/images/Gozlan.jpg";
import Image3 from "../../assets/images/Peinture.webp";

export default function Presentation() {
    return (
        <section className="bg-primary-800" id="presentation">
            <img className="mx-auto" src={Line1} alt="" />
            <h1 className="text-center uppercase text-neutral-50">
                R2T2, C’est Quoi Déja?
            </h1>
            <p className="text-center text-neutral-50">
                L’association R2T2 a été créée en 2001 pour permettre à des
                étudiants de 3ème année de licence informatique à l’Université
                d’Avignon de participer à la Coupe de France de Robotique
                (anciennement E=M6). Depuis sa création l’association est
                entièrement gérée par les étudiants sous la supervision d’un
                enseignant du CERI, Philippe GOZLAN. Chaque année l’association
                change de bureau avec un(e) nouveau/nouvelle président(e), un(e)
                secrétaire, un(e) trésorier(e).
            </p>
            <div className="mx-auto mb-8 mt-8 flex w-full justify-center md:mb-4">
                <div className="multi-shadow relative z-30 -mr-3 mt-8 aspect-square h-fit w-1/3 -rotate-30 border-8 md:-mr-5 md:mt-12">
                    <img
                        className="h-full w-full object-cover"
                        src={Image1}
                        alt="Etudiants dans un espace de travail"
                    />
                </div>
                <div className="multi-shadow relative z-10 aspect-square h-fit w-1/3 border-8">
                    <img
                        className="h-full w-full object-cover"
                        src={Image2}
                        alt="Image collective de l'équipe"
                    />
                </div>
                <div className="multi-shadow relative z-0 -ml-3 mt-8 aspect-square h-fit w-1/3 rotate-30 border-8 md:-ml-5 md:mt-12">
                    <img
                        className="h-full w-full object-cover"
                        src={Image3}
                        alt="Etudiant qui fait la peinture"
                    />
                </div>
            </div>
            <Link to="/gallery?page=1&limit=16" className="btn-secondary-light center-mx">
                Voir Plus de Photos
            </Link>
        </section>
    );
}