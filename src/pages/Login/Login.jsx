import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

function Login() {
  const { userSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelLogin = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    
    userSignIn(email,password)
      .then(result => {
        e.target.reset()
        navigate('/')
      console.log(result)
      })
    .catch(error=>{
      console.log(error)
    })
    
  }

  return (
    <div>
      <Navbar/>
     
      <div className="hero">
        <div className="flex-col w-4/5">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-center py-5 text-gray-600 font-bold">Login your account</h1>
            <hr className="m-10" />
          </div>
          <div className="w-full mx-auto shrink-0">
            <form onSubmit={handelLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold text-gray-600">Email</span>
                </label>
                <input
                  className="input input-bordered w-full my-2 bg-stone-100"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold text-gray-600">Password</span>
                </label>
                <input
                  className="input input-bordered w-full my-2 mb-4 bg-stone-100"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required />
              </div>
              <button className="bg-[#403F3F] hover:bg-orange-600 text-white btn w-full rounded-none hover:text-black">
                <Link>Login</Link>
              </button>
              <div className="text-center py-3 text-gray-500"> 
                <span className="font-semibold">
                  Dont’t Have An Account ? <Link to="/register" className="text-orange-600">Register</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
