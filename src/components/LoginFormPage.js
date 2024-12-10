const LoginFormPage = ()=>{
    return (
        <div className="bg-black h-screen  justify-center items-center flex">
         
           <form onSubmit={(e)=>e.preventDefault()} className=" flex flex-col px-10 py-8 rounded-3xl shadow-md bg-zinc-900 w-[40%] h-[50%] ">
           <h1 className="text-white text-center font-bold text-2xl p-2">Login or Signup to continue</h1>
            <input type="text" placeholder="Enter your email here..." className="p-4 m-4 rounded-md"/>
            <input type="text" placeholder="Enter your email here..." className="p-4 m-4 rounded-md"/>
            <button className="px-4 py-3 m-4 bg-blue-800 rounded-md text-white font-bold">Login</button>
           </form>
        </div>  
          )
}


export default LoginFormPage