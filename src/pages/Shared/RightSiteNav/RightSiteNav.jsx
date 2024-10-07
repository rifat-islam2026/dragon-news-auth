import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa"
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

function RightSiteNav() {
  return (
    <div>
          <h2 className="font-bold text-gray-600 mb-5">Login With</h2>
          <div className="mb-5">
              <button className="btn btn-outline outline-sky-500 mb-3 w-full text-sky-400 "><FaGoogle /> Login in with Google</button>
              <button className="btn btn-outline w-full"><FaGithub/> Login in with Github</button>
          </div>

          <h2 className="font-bold text-gray-600 mb-5">Find Us On</h2>
          <div className="mb-5 border rounded-t rounded-b">
              <button className="btn w-full border bg-transparent rounded-none"><FaFacebook /> Facebook</button>
              <button className="btn w-full border bg-transparent rounded-none"><FaTwitter /> Twitter</button>
              <button className="btn w-full border bg-transparent rounded-none"><FaInstagram /> Instagram</button>
          </div>
          <div className="mb-5">
              <img src={qZone1} className="mb-2" />
              <img src={qZone2} className="mb-2" />
              <img src={qZone3} className="mb-2" />
          </div>
    </div>
  )
}

export default RightSiteNav
