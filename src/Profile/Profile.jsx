import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

const Profile = () => {
  const {user}=useContext(AuthContext);
  useEffect(() => {
    document.title=`ArtNest-${user.displayName}`
  },[user]);
  
    return (
        <div className="hero  bg-orange-50 my-12 shadow-2xl shadow-[#715329] rounded-xl">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img src={user.photoURL} className="w-[420px] h-[450px] rounded-xl shadow-3xl shadow-[#d2b99b]" />
          <div>
            <h1 className="text-4xl font-semibold">{user.displayName}</h1>
            <p className="text-xl py-6">{user.email}</p>
          </div>
        </div>
      </div>
    );
};

export default Profile;