export default function Footer() {
    return (
        <footer className="flex flex-col justify-between gap-6 bg-primary-800 px-8 pt-16 lg:flex-row lg:gap-0 lg:px-24">
            <p className="text-center font-display !text-8xl text-accent-400">
                R2T2
            </p>
            <ul className="text-center text-accent-200 lg:list-square lg:text-left">
                <li className="mb-2">r2t2@gmail.com</li>
                <li className="mb-2">+33 7 77 77 77 77</li>
                <li className="mb-2">339 Chem. des Meinajaries, 84000 Avignon</li>
            </ul>
        </footer>
    );
}
