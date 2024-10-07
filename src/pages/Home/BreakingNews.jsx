import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function BreakingNews() {
  return (
    <div className="flex items-center py-3 mb-2 bg-stone-200">
          <button className="btn rounded-none hover:text-black hover:bg-orange-600 bg-[#D72050] ms-5 text-white">Breaking News</button>
          <Marquee pauseOnHover="true" speed="100">
              <Link className="ml-5"> I can be a React component, multiple React components, or just some text.</Link>
              <Link className="ml-5"> I can be a React component, multiple React components, or just some text.</Link>
              <Link className="ml-5"> I can be a React component, multiple React components, or just some text.</Link>
          </Marquee>
    </div>
  )
}

export default BreakingNews
