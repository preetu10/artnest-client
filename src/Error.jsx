import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
const Error = () => {
    return (
        <div className="text-center mt-48 mx-auto">
               <p className="mb-12 text-stone-800 text-5xl font-bold">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1500}
            deleteSpeed={25}
            loop={0}
            typeSpeed={50}
            words={[
              "404 Not Found"
            ]}
          />
        </p>
       
            <Link to="/">
            <button className="btn btn-ghost  text-white font-medium bg-[#A79277] text-lg">Go to Home Page</button>
            </Link>
        </div>
    );
};

export default Error;