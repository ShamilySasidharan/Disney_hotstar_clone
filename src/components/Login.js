// import { useNavigate } from "react-router-dom"
import { LOGIN_SCREEN_IMAGE, STAR_BACKGROUND } from "../utils/constants";
import Footer from "./Footer";
import Header from "./Header";
import { useRef, useState } from "react";
import { LoginValidation, SignupValidation } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile   } from "firebase/auth";
import {auth} from "../utils/firebase"

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
 
  const dispatch =  useDispatch()
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  // const phone = useRef(null);

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setSignUpForm] = useState(false);
  const [loginErr, setLoginErrMsg] = useState("");
  const [signupErr, setSignUpErrMsg] = useState("");

  // SHOW ORIGINAL LOGIN FORM WHEN USER CLICK THE LANDING LOGIN BTN
  const handleLogin = () => {
    setShowLoginForm(!showLoginForm);
  };

  // VALIDATION && DATA (EMAIL,PASSWORD ETC) USING useRef
  const handleBtnClick = () => {

    // VALIDATE FOR SIGNUP AND CREATE A USER IN FIREBASE
    if (showSignUpForm) {
      const messageSignup = SignupValidation(
        email.current.value,
        password.current.value,
        name.current.value
         // phone.current.value.trim(),
      );
      setSignUpErrMsg(messageSignup);
     
      // ONLY CREATE A USER WHEN VALIDATION PASS/NO ERROR MESSAGE
      if(!messageSignup){
      // CREATEING A USER IN FIREBASE
      createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        // AFTER USER CREATION UPDATE THE USER WITH DISPLAY NAME AND PHOTO URL
            updateProfile(user, {
              displayName: name.current.value, photoURL: "https://tse1.mm.bing.net/th?id=OIP.jg6Gqqdik-QMyEdihr5U7wHaHa&pid=Api&P=0&h=180"
            }).then(() => {
            // After Profile is updated then
            // Important to note that the email,displayName,photoURL comes from the `auth`  not from the `user` because 
            // it is not an updated user meaning without the displayName and url
            // const {uid,email,displayName,photoURL} = user; changes to auth to get the new user information 
              const {uid,email,displayName,photoURL} = auth.currentUser;
                  // UPDATING THE REDUX STORE AGAIN BY DISPATCHING AN ACTION
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              // console.log(user)
              // Navigation handling from the header.js 
              // navigate("/browse")
            }).catch((error) => {
              // An error occurred
              setSignUpErrMsg(error.Message)
            });
        // CONSOLE.LOG(USER) > the firebase gives us a access token to us and is used for the authentication
          })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setSignUpErrMsg(errorCode + " " + errorMessage)
      });
    }
}
      
      // VALIDATION AND AUTHENTICATION  OF SIGN IN 
      else {
        const messageLogin = LoginValidation(
          email.current.value,
          password.current.value
        );
        setLoginErrMsg(messageLogin || "");

      // ONLY LOGIN A USER WHEN VALIDATION PASS/NO ERROR MESSAGE
        if(!messageLogin){
        // LOGIN AUTH
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          // Navigation handling from the header.js 
          // navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoginErrMsg(errorCode + "-" + errorMessage)
          // Navigation handling from the header.js 
          // navigate("/")
        });
        }
    
    }
  };


  // TOGGLE BETWEEN THE SIGNUP AND LOGIN FROM
  const toggleForm = () => {
    setSignUpForm(!showSignUpForm);
  };

  return (
    <div className="flex bg-yellow w-full h-screen relative">
      {/* HEADER */}
      <div className="w-12/12 mx-auto ">
        <Header />
      </div>
      {/* LOGIN LANDING PAGE CONTENT */}
      <div className="flex-1 flex-col justify-center items-center bg-gradient-to-r from-slate-900 to-slate-900  ">
        <img src={STAR_BACKGROUND} alt="star" />
        <div className="flex flex-col text-white text-center p-4 pt-30 ">
          <img
            src={LOGIN_SCREEN_IMAGE}
            alt="login_screenImage"
            className="w-[350px] h-[150px] mx-auto"
          />
          <h1 className="py-3 font-bold text-3xl">Login to Disney+ Hotstar</h1>
          <p>
            Start watching from where you left off, personalise for kids and
            more
          </p>
          <button
            className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700  text-center rounded-md w-60 py-3 mx-auto my-4"
            onClick={handleLogin}
          >
            Login
          </button>
          {/* SHOW LOGIN FORM WHEN LOGIN BTN CLICKED */}
          {showLoginForm && (
            <div className=" bg-black h-screen justify-center items-center flex fixed inset-0 bg-opacity-75">
              <div className=" rounded-3xl shadow-md py-10 px-20 bg-neutral-900">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className=" flex flex-col mx-4 px-6 "
                >
                  <h1
                    className="text-white text-center font-bold text-2xl p-2 "
                    onClick={toggleForm}
                  >
                    {showSignUpForm ? (
                      <p className="text-left px-2 flex flex-col">
                        Sign Up
                        <span className="text-sm cursor-pointer hover:font-extrabold decoration-white ">
                          Already a user ? Login now.
                        </span>
                      </p>
                    ) : (
                      <p className="text-left px-2 flex flex-col">
                        Login
                        <span className="text-sm cursor-pointer py-3  hover:font-extrabold decoration-white ">
                          Not a user ? Signup now.
                        </span>
                      </p>
                    )}
                  </h1>
                  {showSignUpForm && (
                    <div className="flex flex-col">
                      <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="px-12 py-5 m-4 rounded-md border border-white bg-neutral-900"
                      />

                      {/* <input
                        ref={phone}
                        type="text"
                        placeholder="Phone Number"
                        className="px-12 py-5 m-4 rounded-md border border-white bg-neutral-900"
                      /> */}
                    </div>
                  )}

                  <input
                    type="email"
                    ref={email}
                    placeholder="Enter your email here..."
                    className="px-12 py-5 m-4 rounded-md border border-white bg-neutral-900"
                  />

                  <input
                    ref={password}
                    type="password"
                    placeholder="Password..."
                    className="px-12 py-5 m-4 rounded-md border border-white bg-neutral-900"
                  />
                  {/* ERROR MESSAGE */}

                  <p className="text-red-700 font-bold p-2 text-lg">
                    {showSignUpForm ? signupErr : loginErr}
                  </p>
                  <button
                    className="px-12 py-4 m-4 bg-gradient-to-r from-blue-500 to-blue-700  rounded-md text-white font-bold"
                    onClick={handleBtnClick}
                  >
                    {showSignUpForm ? "Sign Up " : "Login "}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <Footer className="" />
      </div>
    </div>
  );
};

export default Login;
