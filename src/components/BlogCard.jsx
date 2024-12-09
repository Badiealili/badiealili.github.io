import { Link } from "react-router-dom";

export default function BlogCard({ article }) {
    return (
        <Link
            to={`/blog/${article.id}`}
            className="group mb-8 transition-all hover:border-neutral-50 duration-100 ease-in grid cursor-pointer grid-cols-5 grid-rows-[auto] gap-y-6 rounded-2xl border border-primary-800 bg-neutral-50 px-8 py-8 hover:bg-primary-800 sm:px-16 sm:py-12 lg:gap-x-6 lg:gap-y-0 lg:px-8 lg:py-6"
        >
            <h2 className="col-span-5 row-span-1 text-center text-primary-800 group-hover:text-accent-400 md:text-4xl lg:col-span-3 lg:mb-2 lg:text-left">
                {article.title}
            </h2>
            <p className="col-span-5 row-start-5 row-end-9 max-h-24 overflow-hidden group-hover:text-neutral-50 lg:col-span-3 lg:row-start-2 lg:row-end-6">
                {article.bodyText}
            </p>
            <Link
                className="col-start-1 col-end-3 row-span-1 text-primary-800 underline group-hover:text-neutral-50 lg:col-end-2 lg:row-start-9 lg:row-end-10"
                to={`/blog/${article.id}`}
            >
                Lire la suite
            </Link>
            <p className="col-start-4 col-end-6 row-span-1 justify-self-end text-primary-800 group-hover:text-neutral-50 lg:col-start-3 lg:col-end-4 lg:row-start-9 lg:row-end-10">
                {article.date}
            </p>
            <div className="col-span-5 row-start-2 row-end-5 max-h-52 self-stretch overflow-hidden rounded-xl lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-10">
                <img
                    className="h-full w-full object-cover"
                    src={article.image}
                    alt=""
                />
            </div>
        </Link>
    );
}
