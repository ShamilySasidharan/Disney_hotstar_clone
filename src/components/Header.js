import { DISNEY_LOGO, PROFILE_ICON } from "../utils/constants";
import { LuUserCircle } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { BiCategoryAlt } from "react-icons/bi";
import { FiTv } from "react-icons/fi";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { MdOutlineMovie } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice"
import { useEffect, useState } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { removeTheCart, toggleSearchPage } from "../utils/searchSlice";
// import Search from "./Search";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
 
  const user = useSelector((store) => store.user);
 
  const goToSearch =()=>{
    // TO SEARCH PAGE
   dispatch(toggleSearchPage())
   
   
   
  }

  const goToHome =()=>{
    // BACK TO BROWSE PAGE
    // console.log("clicked")
    dispatch(toggleSearchPage())
    // dispatch(removeTheCart())
    navigate("/")



  }
   
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      dispatch(removeUser())
        // navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

//onAuthStateChange function changed from app.js to header because of the navigation error 
// useNavigate() can only be used inside the RouterProvider not outside the Router Provider 
// All navigation will handle from here 
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
        // USER SIGNED IN
        const {uid,email,displayName,photoURL} = user;
        // UPDATE THE REDUX STORE BY DISPATCHING AN ACTION
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
       navigate("/browse")
      } else {
        // USER SIGNED OUT
        dispatch(removeUser())
        navigate("/")
      }
    });
    return ()=> unsubscribe()
  },[])


  return (
    <div className="bg-black h-screen flex w-full ">
      <section className="bg-gradient-to-r from-slate-900 to-slate-900 mx-auto p-4 ">
        {/* DISNEY LOGO */}
        <div className="p-2 m-2 w-20">
          <img src={DISNEY_LOGO} alt="logo" />
        </div>
        {/* ICONS */}
        <nav className="p-2 m-2 ">
          <ul className=" px-4 py-10 ">
          {user ? (<li className="py-4">
              
              <img
                src={PROFILE_ICON}
                alt="profile_icon"
                width="20"
                height="20"
                className="text-white hover:translate-y-1 font-extrabold size-6" 
              />
            </li>) :  <li className="py-4">
              <LuUserCircle  className="text-white hover:translate-y-1:font-extrabold size-6" />
            </li> }
           
        
            <li className="py-4">
              <IoIosSearch size={20} className="text-white hover:translate-y-1 font-extrabold size-8" onClick={goToSearch}/>
            </li>
            <li className="py-4">
              <GoHome size={20} className="text-white hover:translate-y-1 font-extrabold size-6"  onClick={goToHome}/>
            </li>
            <li className="py-4 ">
              <MdOutlineMovie size={20} className="text-white hover:translate-y-1 font-extrabold size-6" />
            </li>
            <li className="py-4 ">
              <FiTv size={20} className="text-white hover:translate-y-1 font-extrabold size-6" />
            </li>
            <li className="py-4 ">
              <MdOutlineSportsBaseball size={20} className="text-white hover:translate-y-1 font-extrabold size-6" />
            </li>
            <li className="py-4 ">
              <BiCategoryAlt size={20} className="text-white hover:translate-y-1 font-extrabold size-6" />
            </li>
          </ul>
        </nav>

        {user && (
          <div>
            <button
              className="font-bold text-white py-2 px-4"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Header;
