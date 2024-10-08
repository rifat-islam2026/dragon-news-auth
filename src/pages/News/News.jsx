import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSiteNav from "../Shared/RightSiteNav/RightSiteNav";

function News() {
    const { id } = useParams();
  return (
      <div>
          <Header />
          <Navbar/>
          <div className="grid md:grid-cols-4">
              <div className="col-span-3">
                  <p>{id}</p>
              </div>
              <div>
                  <RightSiteNav/>
              </div>
      </div>
    </div>
  )
}

export default News
