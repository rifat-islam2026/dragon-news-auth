import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSiteNav from "../Shared/LeftSiteNav/LeftSiteNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSiteNav from "../Shared/RightSiteNav/RightSiteNav";
import NewsPost from "./newsPost";

function Home() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    // console.log('news :' ,news)
  return (
      <div>
          <Header />
          <Navbar/>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
              <div>
                  <LeftSiteNav />
              </div>
              <div className="md:col-span-2">
                  <h2 className="font-bold text-gray-600 mb-5">Dragon News Home</h2>
                  {
                      news.map(newsPost => <NewsPost key={newsPost._id} newsPost={ newsPost} />)
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
