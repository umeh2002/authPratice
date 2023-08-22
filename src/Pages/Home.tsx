import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="w-full h-[100vh] bg-slate-500">
        <div className="w-[90%] h-full flex justify-center items-center flex-col">
            <div className="text-center text-white text-[30px]">
                welcome, kindly hit on the button to continue!!!
            </div>
            <Link to="/register">
            <button className="w-[150px] h-[40px] flex justify-center items-center decoration-none
      bg-green-500 hover:cursor-pointer rounded mt-[50px] text-white  duration-300">Sign up
      </button>
      </Link>
        </div>
    </div>
  )
}

export default Home