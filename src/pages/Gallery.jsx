import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import data from "../data/gallery";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GalleryImage from "../components/GalleryImage";
import useMasonryEffect from "../hooks/useMasonryEffect";

const LIMIT = 16;
export async function loader({ request }) {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || LIMIT);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // TODO: Replace with API call to backend when ready

    return data.slice(startIndex, endIndex);
}

export default function Gallery() {
    const [images, setImages] = useState([]);
    const newImages = useLoaderData();

    useEffect(() => {
        setImages([...images, ...newImages]);
    }, [newImages]);

    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page") || "1");

    const handleShowMore = () => {
        const nextPage = currentPage + 1;
        navigate(`/gallery?page=${nextPage}&limit=${LIMIT}`);
    };

    useMasonryEffect(images);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <section>
                <div className="rounded-2xl border-2 border-primary-800 bg-primary-800 px-12 py-10 text-center lg:text-left">
                    <p className="display mb-8 !text-4xl !text-accent-400 sm:!text-5xl md:!text-6xl">
                        Partageons les moments :)
                    </p>
                </div>
                <div
                    className={`gallery mx-0 mt-12 grid cursor-pointer sm:-mx-8 md:-mx-16 lg:-mx-28 auto-rows-[10px] gap-[16px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
                >
                    {images.map((image) => (
                        <GalleryImage image={image} />
                    ))}
                </div>
                {(currentPage + 1) * LIMIT <= data.length && (
                    <button
                        className="btn-primary-dark mt-10 w-full"
                        onClick={handleShowMore}
                    >
                        Charger Plus
                    </button>
                )}
            </section>
            <Footer />
        </>
    );
}
