import { useLoaderData } from "react-router-dom";

import Hero from "../sections/home/HomeHero";
import Presentation from "../sections/home/HomePresentation";
import Partners from "../sections/home/HomePartners";
import RobotGallery from "../sections/home/HomeRobotGallery";
import Blog from "../sections/home/HomeBlog";
import loadRobotList from "../data/robots";
import Members from "../sections/home/HomeMembers";
import CTA from "../sections/home/HomeCTA";
import Footer from "../components/Footer";

export async function loader() {
    // API Call for the backend to get the needed data for the display of the home page
    const robotList = loadRobotList();
    return robotList;
}

export default function Home() {
    const robotList = useLoaderData();
    return (
        <>
            <Hero />
            <Presentation />
            <Partners />
            <RobotGallery robotList={robotList} />
            <Blog />
            <Members />
            <CTA />
            <Footer />
        </>
    );
}
