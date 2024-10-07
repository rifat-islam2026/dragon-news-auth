import { CiShare2 } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";

function NewsPost({ newsPost }) {
    const { author, title, thumbnail_url } = newsPost;
    console.log(newsPost)
  return (
    <div>
          <div className="flex items-center justify-between bg-stone-200 mb-4 p-4">
              <div className="flex items-center gap-2">
                  <img className="w-10 rounded-full" src={author.img} />
                  <div>
                      <span className="text-gray-500 font-semibold ">{author.published_date}</span>
                      <p className="text-gray-400">{author.name}</p>
                  </div>
              </div>
              <div className="flex items-center gap-2">
                  <FaRegBookmark className="text-xl" />
                  <CiShare2 className="text-xl" />
              </div>
          </div>
          <h3 className="text-xl font-semibold p-2 mb-3">{title}</h3>
          <img src={thumbnail_url} />
    </div>
  )
}

export default NewsPost
