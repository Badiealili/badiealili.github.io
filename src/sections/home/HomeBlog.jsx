import Line3 from "../../assets/Line 3.png";
import BlogCard from "../../components/BlogCard";
import data from "../../data/blog"

// TODO: Change section names from normal names to prefixed with page name

export default function Blog() {
    // TODO: replace to change dynamically
    const article = data[0];
    return (
        <section className="bg-primary-800 lg:px-36 px-12" id="blog">
            <img className="mx-auto w-72" src={Line3} alt="" />
            <h1 className="mb-8 text-center uppercase text-neutral-50">
                À la une sur notre blog
            </h1>
            <BlogCard article={article} />
            <a className="btn-secondary-light center-mx" href="/gallery">
                Voir Tous les Articles
            </a>
        </section>
    );
}
