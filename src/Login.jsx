import { useContext, useEffect, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthProvider";
 import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typewriter } from "react-simple-typewriter";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
    const {
      signInWithGoogle,
      signInWithGithub,
      signInUser } = useContext(AuthContext);

  const [showPW, setShowPW] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "ArtNest-LogIn";
  }, []);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        toast.success("You have successfully logged in.");
        navigate("/");

      })
      .catch((error) => {
        console.error(error);
        toast.error("Incorrect email or password. Please try again.");
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("You have successfully logged in.");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to log in with Google. Please try again.");
      });
  };

  const handleGithub = () => {
    signInWithGithub()
      .then(() => {
        toast.success("You have successfully logged in.");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to log in with Github. Please try again.");
      });
  };
  return (
    <div className="flex flex-col items-center justify-center mb-5">
      <div className="w-full py-6 rounded-xl border-[#CC935C] border-1 max-w-lg shadow-2xl shadow-[#b79b7c] bg-base-100 my-6">
        <p className="text-4xl font-bold text-center mx-auto mt-5">
          Art<span className="text-[#715329]">Nest</span>
        </p>
        <p className="text-center font-semibold text-3xl  mb-2 mt-5">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1500}
            deleteSpeed={25}
            loop={0}
            typeSpeed={50}
            words={[
              "Welcome to ArtNest",
              "Please Log In",
            ]}
          />
        </p>
        <form className="card-body" onSubmit={handleLogIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPW ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <span
              className="absolute top-12 right-5"
              onClick={() => setShowPW(!showPW)}
            >
              {showPW ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#715329] text-white">Login</button>
          </div>
        </form>
        <hr></hr>
        <div className="text-center my-4">
          <button
            onClick={handleGoogle}
            className="btn bg-[#715329] text-white"
          >
            <FaGoogle></FaGoogle>
            Log In With Google
          </button>
          <p>OR</p>
          <button
            onClick={handleGithub}
            className="btn bg-[#715329] text-white"
          >
            <FaGithub></FaGithub>
            Log In With Github
          </button>
        </div>
        <hr />
        <div>
          <p className="text-center font-base text-base mb-2 mt-5">
            Do not have an account? Please{" "}
            <Link to="/register" className="font-bold text-[#715329]">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
