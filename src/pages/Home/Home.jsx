import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSiteNav from "../Shared/LeftSiteNav/LeftSiteNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSiteNav from "../Shared/RightSiteNav/RightSiteNav";
import NewsCard from "./NewsCard";

function Home() {
    const news = useLoaderData();

    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
                <div>
                    <LeftSiteNav />
                </div>
                <div className="md:col-span-2">
                    <h2 className="font-bold text-gray-600 mb-5">Dragon News Home</h2>
                    {
                        news.map(aNews => <NewsCard key={aNews._id} aNews={aNews} />)
                    }
                </div>
                <div>
                    <RightSiteNav />
                </div>
            </div>
        </div>
    )
}

export default Home
