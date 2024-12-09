import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import "./index.css";
import App, { loader as appLoader } from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Contact from "./pages/Contact.jsx";
import Blog, { loader as blogLoader } from "./pages/Blog.jsx";
import BlogPost, { loader as blogPostLoader } from "./pages/BlogPost.jsx";
import Robot, { loader as robotLoader } from "./pages/Robot.jsx";
import Gallery, { loader as galleryLoader } from "./pages/Gallery.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        loader: appLoader,
    },
    {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/blog",
        element: <Blog />,
        errorElement: <ErrorPage />,
        loader: blogLoader,
    },
    {
        path: "/blog/:blogId",
        element: <BlogPost />,
        errorElement: <ErrorPage />,
        loader: blogPostLoader,
    },
    {
        path: "/robot/:robotId",
        element: <Robot />,
        errorElement: <ErrorPage />,
        loader: robotLoader,
    },
    {
        path: "/gallery",
        element: <Gallery />,
        errorElement: <ErrorPage />,
        loader: galleryLoader,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
