import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import me from "../assets/pexels-andrea-piacquadio-3793238.jpg";
import { useState } from "react";
import { registerUser } from "../API/AuthApi";
import pix from "../assets/bg-forvo-academy-welcome.jpeg";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState("");
  const [image, setImage] = useState(me);

  const model = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
    phoneNumber: yup.number().required(),
    address: yup.string().required(),
  });

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    const realImage = URL.createObjectURL(file);
    setImage(file);
    setAvatar(realImage);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(model) });

  const onSubmit = handleSubmit(async (data: any) => {
    const { name, password, confirm, phoneNumber, email, address } = data;
    const formData = new FormData();

    formData.append("fullName", name),
      formData.append("password", password),
      formData.append("email", email),
      formData.append("confirmPassword", confirm),
      formData.append("phoneNumber", phoneNumber),
      formData.append("address", address),
      formData.append("avatar", image);

    registerUser(formData).then(() => {
      navigate("/sign-in")
    });
  });

  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-full flex justify-between">
        <div className="w-[50%] h-full ">
          <div className="text-center text-[40px] pt-[30px] text-bold">
            Create an Account
          </div>
          <div className="flex justify-center flex-col items-center">
            <img
              className="w-[100px] h-[100px] rounded-[50%] border object-cover"
              src={avatar}
            />
            <input
              type="file"
              id="me"
              className="hidden"
              onChange={handleImage}
            />
            <label
              htmlFor="me"
              className="w-[150px] h-[30px] rounded bg-green-500 mt-[10px]
        flex justify-center items-center text-white hover:cursor-pointer duration-300"
            >
              Upload image
            </label>
          </div>
          <form
            action=""
            className="flex justify-center items-center flex-col mt-[20px]
    "
            onSubmit={onSubmit}
          >
            <div className="flex justify-center items-center">
              <div className="mr-[10px] ">
                <div className="text-[18px] mb-[5px]  ">Full name</div>
                <input
                  placeholder="enter your full name"
                  className="w-[300px] h-[40px] border rounded outline-none pl-[10px]
           mb-[5px] "
                  {...register("name")}
                />
                {errors.name && (
                  <div className="text-[10px] flex justify-end text-[red] mr-[5px]">
                    enter your name
                  </div>
                )}
              </div>
              <div className="">
                <div className="text-[18px] mb-[5px]  ">Phone number</div>
                <input
                  placeholder="enter your phone number"
                  className="w-[300px] h-[40px] border rounded outline-none pl-[10px]
           mb-[5px] "
                  {...register("phoneNumber")}
                />
                {errors.phoneNumber && (
                  <div className="text-[10px] flex justify-end text-[red] mr-[5px]">
                    enter phone number
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="mr-[10px] ">
                <div className="text-[18px] mb-[5px]  ">Home address</div>
                <input
                  placeholder="enter your home address"
                  className="w-[300px] h-[40px] border rounded outline-none pl-[10px]
           mb-[5px] "
                  {...register("address")}
                />
                {errors.address && (
                  <div className="text-[10px] flex justify-end text-[red] mr-[5px]">
                    enter home address
                  </div>
                )}
              </div>
              <div className="">
                <div className="text-[18px] mb-[5px]  ">Email</div>
                <input
                  placeholder="enter your email"
                  className="w-[300px] h-[40px] border rounded outline-none pl-[10px]
           mb-[5px] "
                  {...register("email")}
                />
                {errors.email && (
                  <div className="text-[10px] flex justify-end text-[red] mr-[5px]">
                    enter your email
                  </div>
                )}
              </div>
            </div>

            <div className="flex">
              <div className=" mr-[10px]">
                <div className="text-[18px] mb-[5px]  ">Password</div>
                <input
                type="password"
                  placeholder="enter your password"
                  className="w-[300px] h-[40px] border rounded outline-none pl-[10px]
           mb-[5px] "
                  {...register("password")}
                />
                {errors.password && (
                  <div className="text-[10px] flex justify-end text-[red] mr-[5px]">
                    enter your password
                  </div>
                )}
              </div>
              <div className="">
                <div className="text-[18px] mb-[5px]  ">Confirm password</div>
                <input
                type="password"
                  placeholder="confirm your password"
                  className="w-[300px] h-[40px] border rounded outline-none pl-[10px]
           mb-[5px] "
                  {...register("confirm")}
                />
                {errors.confirm && (
                  <div className="text-[10px] flex justify-end text-[red] mr-[5px]">
                    confirm password
                  </div>
                )}
              </div>
            </div>

            <button
              className="w-[150px] h-[40px] flex justify-center items-center 
      bg-green-500 hover:cursor-pointer rounded m-[10px] text-white mr-[100px] duration-300"
              type="submit"
            >
              Register
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
            <div className="text-[50px] text-white ">Welcome Back</div>
            <div className="text-[18px] text-white mt-[20px]">
              Already have an account, enter your details and start the learning
              today
            </div>
            <Link to="/sign-in">
              <button
                className="w-[150px] h-[50px] flex justify-center items-center text-[18px] deccoration-none
      bg-white hover:cursor-pointer rounded m-[10px] text-black  duration-300 mt-[20px]"
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
