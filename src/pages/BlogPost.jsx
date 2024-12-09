import { useLoaderData } from "react-router-dom";
import data from "../data/blog";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export async function loader({ params }) {
    // API Call for the backend to get the specified blog post
    const articleId = parseInt(params.blogId);
    const blogPost = data.find((article) => article.id === articleId);
    return blogPost;
}

export default function BlogPost() {
    const blogPost = useLoaderData();
    return (
        <>
            <header>
                <NavBar />
            </header>
            <section className="lg:px-52 pt-24">
                <div className="bg-neutral-50 px-8 pb-8 rounded-lg border border-primary-800">
                <h1 className="mb-2 text-primary-800">{blogPost.title}</h1>
                <p className="mb-6">{blogPost.subtitle}</p>
                <img className="rounded-xl mb-8" src={blogPost.image} alt="" />
                <p>{blogPost.bodyText}</p>
                </div>
            </section>
            <Footer />
        </>
    );
}
