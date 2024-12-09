import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export default function NavBar() {
    const [mobileNavMenuOpen, setMobileNavMenuOpen] = useState(false);
    const [currentScroll, setCurrentScroll] = useState(0);
    const mobileNavMenuRef = useRef(null);
    const desktopNavMenuRef = useRef(null);
    const navBarYOffset = useRef(null);

    const toggleMobileNavMenu = (e) => {
        if (e.currentTarget.tagName == "BUTTON") {
            setMobileNavMenuOpen((prev) => !prev);
        }
    };

    const handleClickOutside = (event) => {
        if (
            mobileNavMenuRef.current &&
            !mobileNavMenuRef.current.contains(event.target) &&
            event.target.id != "mobile-menu-toggle"
        ) {
            setMobileNavMenuOpen(false);
        }
    };

    // calculate the navbar y offset when the component mounts
    useEffect(() => {
        if (desktopNavMenuRef.current) {
            navBarYOffset.current =
                desktopNavMenuRef.current.offsetHeight +
                desktopNavMenuRef.current.offsetTop;
        }
    }, []);

    // function to gradually tuck up the navbar when scrolling down, and pop it down when scrolling up
    const handleScroll = (e) => {
        const currentMarginTop =
            parseInt(desktopNavMenuRef.current.style.marginTop.slice(0, -2)) ||
            0;
        if (currentScroll < window.scrollY) {
            desktopNavMenuRef.current.style.marginTop =
                Math.max(
                    currentMarginTop -
                        (Math.ceil(window.scrollY) - currentScroll) / 2,
                    -navBarYOffset.current,
                ) + "px";
            setCurrentScroll(() => parseInt(window.scrollY));
        } else if (currentScroll - window.scrollY > 0) {
            desktopNavMenuRef.current.style.transition = "all 100ms ease-in-out";
            desktopNavMenuRef.current.style.marginTop = "0";
            // Waiting for the transition to happen before cancelling the peoperty
            setTimeout(()=>{
                desktopNavMenuRef.current.style.transition = "";
            }, 100);
            setCurrentScroll(() => parseInt(window.scrollY));
        }
    };

    // event listener to close the mobile navigation menu when clicking outside of it
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentScroll]);

    return (
        <>
            {/* Overlay to dim the background when menu is open */}
            <div
                id="overlay"
                className={`pointer-events-none fixed inset-0 z-40 bg-accent-900 opacity-30 transition-all duration-300 ease-in ${
                    mobileNavMenuOpen ? "block" : "hidden"
                }`}
            ></div>
            {/* Desktop navigation menu */}
            <nav
                ref={desktopNavMenuRef}
                className="navigation center-abs !fixed z-40 mb-12 mt-0 hidden w-fit rounded-full border-2 border-accent-400 bg-primary-800 px-3 py-3 font-medium text-accent-400 sm:block sm:border sm:px-8"
            >
                <ul className="flex w-fit flex-row gap-4 whitespace-nowrap">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/blog"}>Blog</Link>
                    </li>
                    <li>
                        <Link to={"/gallery"}>Gallery</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li>
                        <a href="#LinkToGoFundMe">Support Us</a>
                    </li>
                </ul>
            </nav>
            {/* Phone navigation button */}
            <button
                id="mobile-menu-toggle"
                className="fixed right-12 z-40 block h-12 w-12 rounded-full border-2 border-primary-800 bg-neutral-50 sm:hidden"
                onClick={toggleMobileNavMenu}
            >
                {mobileNavMenuOpen ? (
                    <i className="fi fi-bs-cross text-primary-800"></i>
                ) : (
                    <i className="fi fi-bs-menu-burger text-primary-800"></i>
                )}
            </button>
            {/* Phone navigation menu */}
            <nav
                ref={mobileNavMenuRef}
                className={`navigation fixed right-12 top-16 z-40 w-fit transition-all duration-300 ease-in-out sm:hidden ${
                    mobileNavMenuOpen
                        ? "max-h-screen opacity-100"
                        : "max-h-0 overflow-hidden opacity-0"
                }`}
            >
                <ul className="mt-8 flex w-fit flex-col items-center gap-4 rounded-2xl border-2 border-primary-800 bg-neutral-50 px-8 py-4 font-medium text-primary-800">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/blog"}>Blog</Link>
                    </li>
                    <li>
                        <Link to={"/Gallery"}>Gallery</Link>
                    </li>
                    <li>
                        <Link to={"/Contact"}>Contact</Link>
                    </li>
                    <li>
                        <a href="#LinkToGoFundMe">Support Us</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
