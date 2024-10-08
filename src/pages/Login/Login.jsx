import { Link } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"

function Login() {
  return (
    <div>
      <Navbar/>
      <h2 className="text-3xl text-center py-5 text-gray-400 font-bold">Login your account</h2>
      <div className="w-[700px] mx-auto"> 
        <label
          className="block text-xl text-gray-500 font-semibold"
          htmlFor="name">Email</label>
        <input
          className="input input-bordered w-full my-2 bg-stone-200"
          type="email"
          name="email"
          placeholder="Email"
          required />
        <label
          className="block text-xl text-gray-500 font-semibold"
          htmlFor="name">Password</label>
        <input
          className="input input-bordered w-full my-2 mb-4 bg-stone-200"
          type="password"
          name="password"
          placeholder="Password"
          required />
        <button className="bg-[#403F3F] hover:bg-orange-600 text-white btn w-full rounded-none hover:text-black">
          <Link>Login</Link>
        </button>
      </div>
    </div>
  )
}

export default Login
