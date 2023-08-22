import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import pix from "../assets/bg-forvo-academy-welcome.jpeg";
import { signIn } from "../API/AuthApi";
import { useDispatch } from "react-redux";
import { createUser } from "../global/GlobalState";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const model = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
    phoneNumber: yup.number().required(),
    address: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(model) });

  const onSubmit = handleSubmit(async (res: any) => {
    signIn({
      email: res?.email,
      password: res?.password,
    }).then((res) => {
      console.log(res);
      dispatch(createUser(res));
      navigate("/home");
    });
  });

  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-full flex justify-between">
        <div className="w-[50%] h-full flex justify-center items-center flex-col">
          <div className="text-center text-[40px]  text-bold">Sign In</div>
          <form
            action=""
            className="flex justify-center items-center flex-col mt-[30px]
"
            onSubmit={onSubmit}
          >
            <div className=" ">
              <div className="text-[18px] mb-[5px]  ">Email</div>
              <input
                placeholder="enter your email"
                className="w-[400px] h-[40px] border rounded outline-none pl-[10px]
       mb-[5px] "
                {...register("address")}
              />
              {errors.address && (
                <div className="text-[10px] flex justify-end text-[red] mr-[5px]">
                  enter your email
                </div>
              )}
            </div>
            <div className="">
              <div className="text-[18px] mb-[5px]  ">Pasword</div>
              <input
              type="password"
                placeholder="enter your password"
                className="w-[400px] h-[40px] border rounded outline-none pl-[10px]
       mb-[5px] "
                {...register("email")}
              />
              {errors.email && (
                <div className="text-[10px] flex justify-end text-[red] mr-[5px]">
                  enter your password
                </div>
              )}
            </div>

            <button
              className="w-[150px] h-[40px] flex justify-center items-center 
  bg-green-500 hover:cursor-pointer rounded m-[10px] text-white  duration-300"
              type="submit"
            >
              Sign in
            </button>
            <div className="text-[13px] mr-[100px] mb-[5px]">
              By signing up, you agree to our{" "}
              <span className="underline text-green-500 hover:cursor-pointer">
                {" "}
                Term{" "}
              </span>{" "}
              of our services.
            </div>
          </form>
        </div>
        <div
          className="w-[50%] h-full"
          style={{
            backgroundImage: `url(${pix})`,
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-center items-center flex-col mt-[350px]">
            <div className="text-[50px] text-white ">Hello There, Join Us</div>
            <div className="text-[18px] text-white mt-[20px]">
              Already have an account, enter your details and start the learning
              today
            </div>
            <Link to="/register">
              <button
                className="w-[150px] h-[50px] flex justify-center items-center text-[18px] deccoration-none
  bg-white hover:cursor-pointer rounded m-[10px] text-black  duration-300 mt-[20px]"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
