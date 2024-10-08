import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

function Register() {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handelRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        // console.log(name, email, password, photo)
        createUser(email, password)
            .then(result => {
                e.target.reset()
                navigate("/login")
                // update profile 
                updateProfile(result.user, {
                    displayName: name,
                    photoURL:photo
                })
                    .then()
                .catch()
            console.log(result.user)
            })
            .catch(error => {
            console.log(error.message)
            })
    }
  return (
      <div>
          <Navbar /> 
          <div className="hero">
              <div className="flex-col w-4/5">
                  <div className="text-center lg:text-left">
                      <h1 className="text-3xl text-center py-5 text-gray-600 font-bold">Register your account</h1>
                      <hr className="m-10" />
                  </div>
                  <div className="w-full mx-auto shrink-0">
                      <form onSubmit={handelRegister}>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text text-xl font-semibold text-gray-600">Name</span>
                              </label>
                              <input
                                  className="input input-bordered w-full my-2 bg-stone-100"
                                  type="text"
                                  name="name"
                                  placeholder="Name"
                                  required />
                          </div>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text text-xl font-semibold text-gray-600">Photo Url</span>
                              </label>
                              <input
                                  className="input input-bordered w-full my-2 bg-stone-100"
                                  type="text"
                                  name="photo"
                                  placeholder="Photo Url"
                                  required />
                          </div>
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
                          <div className="flex gap-2 py-3">
                              <input
                                  className=""
                                  type="checkbox"
                                  name="terms" />
                              <p>Accept <Link className="font-semibold text-gray-500">Term & Conditions</Link></p>
                          </div>
                          <button className="bg-[#403F3F] hover:bg-orange-600 text-white btn w-full rounded-none hover:text-black">
                              <Link>Login</Link>
                          </button>
                      </form>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Register
