import { CiShare2 } from "react-icons/ci";
import { FaEye, FaRegBookmark } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

function NewsCard({aNews }) {
    const { author, title, image_url, details, rating, total_view ,_id} = aNews;
    console.log(aNews)
    return (
        <div className="border rounded mb-5">
            <div className="flex items-center justify-between bg-stone-200 mb-4 p-4">
                <div className="flex items-center gap-2">
                    <img className="w-10 rounded-full" src={author.img} />
                    <div>
                        <span className="text-gray-500 font-semibold ">{author.published_date}</span>
                        <p className="text-gray-600">{author.name}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FaRegBookmark className="text-xl" />
                    <CiShare2 className="text-xl" />
                </div>
            </div>
            <h3 className="text-xl font-semibold p-3 mb-3">{title}</h3>
            <img className="p-3" src={image_url} />
            {
                details.length > 200
                    ? <p
                        className="mb-4 text-gray-500 p-2">
                        {details.slice(0, 200)}
                        <Link
                            to={`/news/${_id}`}
                            className="text-orange-500 font-semibold p-2
                            ">Read more...</Link>
                    </p>
                    :
                    <p>{details}</p>
            }
            <hr />
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1 text-xl items-center text-orange-500">
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                    </div>
                    <p className="text-gray-500">{rating.number}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye className="text-xl" />
                    <p>{total_view}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
