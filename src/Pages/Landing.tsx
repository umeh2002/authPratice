import { useDispatch } from "react-redux"
import { logOut } from "../global/GlobalState"


const Landing = () => {
    const dispatch =useDispatch()
  return (
    <div className="w-full h-[100vh] bg-slate-500">
    <div className="w-[90%] h-full flex justify-center items-center flex-col">
        <div className="text-center text-white text-[30px]">
           We are glad to have you here
        </div>
        <button className="w-[150px] h-[40px] flex justify-center items-center decoration-none
  bg-green-500 hover:cursor-pointer rounded mt-[50px] text-white  duration-300"
  onClick={()=>{
    dispatch(logOut())
  }}>Log out
  </button>
    </div>
</div>
  )
}

export default Landing