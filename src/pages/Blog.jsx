import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import data from "../data/blog";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

const LIMIT = 10;

export async function loader({ request }) {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "10");

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // TODO: Replace with API call to backend when ready

    return data.slice(startIndex, endIndex);
}

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const newArticles = useLoaderData();

    useEffect(() => {
        setArticles([...articles, ...newArticles]);
    }, [newArticles]);

    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page") || "1");

    const handleShowMore = () => {
        const nextPage = currentPage + 1;
        navigate(`/blog?page=${nextPage}&limit=${LIMIT}`);
    };

    return (
        <>
            <header>
                <NavBar />
            </header>
            <section>
                <div className="rounded-2xl border-2 border-primary-800 bg-primary-800 px-12 py-10 text-center lg:text-left">
                    <p className="display mb-8 !text-4xl !text-accent-400 sm:!text-5xl md:!text-6xl">
                        Explorer le Monde de Robotique!
                    </p>
                </div>
                <div className="mt-12 flex flex-col">
                    {articles.map((article) => {
                        return <BlogCard article={article} />;
                    })}
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
