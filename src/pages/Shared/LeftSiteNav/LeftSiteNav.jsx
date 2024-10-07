import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LeftSiteNav() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
        .then(data=>setCategories(data))
    }, [])
    
  return (
    <div>
          <h2 className="font-bold text-gray-600 mb-5">All Caterogy</h2>
          {
              categories.map(category => <Link
                  to={`category/${category.id}`}
                  key={category.id}
                  className="block ms-5 p-5 text-gray-400 hover:bg-gray-300 hover:text-gray-500 font-semibold"
              >{category.name}</Link>)
          }
    </div>
  )
}

export default LeftSiteNav
