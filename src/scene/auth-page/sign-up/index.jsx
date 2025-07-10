import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../../redux/user/userSlice";
import { useAppDispatch } from "../../../redux/store";
import ImageSlide from "../../../components/ImageSlide";

const URL = import.meta.env.VITE_PUBLIC_API_BASE_URL;

const signUpSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
      "Password must contain uppercase, lowercase, and a special character"
    ),
  role: z.enum(["ADMIN", "USER"], {
    errorMap: () => ({ message: "Role is required" }),
  }),
});

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/images/nprs.jpg",
    "/images/nprs1.jpg",
    "/images/nprs2.jpg",
    "/images/nprs3.jpg",
    "/images/nprs4.jpg",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    try {
      dispatch(signInStart());
      const response = await axios.post(`${URL}/api/signup`, data);
      if (response.status === 201 || response.status === 200) {
        dispatch(signInSuccess(response.data));
        navigate("/sign-in");
      } else {
        throw new Error("Sign Up failed, Try again later.");
      }
    } catch (error) {
      const message =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        "An unknown error occurred.";

      setErrorMessage(message);
      dispatch(signInFailure(message));
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="flex flex-col  items-center justify-center h-screen md:min-h-screen  py-4"> 
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-2 md:px-4 py-8">
          <div className="flex flex-col w-full md:w-[580px] h-auto sm:h-[500px] bg-white p-2 md:p-6 shadow-md rounded-md overflow-hidden sm:overflow-y-scroll">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div className="">
                <h1>Verify your NIN</h1>
                <div>
                <label className="block font-medium">NIN</label>
                <input
                  type="text"
                  {...register("fullName")}
                  className="w-full border outline-none px-2 py-2 rounded"
                />
                {errors.fullName && (
                  <p className="text-red-600 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              </div>


              <div>
                <label className="block font-medium">Full Name</label>
                <input
                  type="text"
                  {...register("fullName")}
                  className="w-full border outline-none px-2 py-2 rounded"
                />
                {errors.fullName && (
                  <p className="text-red-600 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-medium">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full border outline-none px-2 py-2 rounded"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium">Password</label>
                <div className="flex items-center">
                  <input
                    type={showPass ? "text" : "password"}
                    {...register("password")}
                    className="w-full border border-r-0 outline-none px-2 py-2 rounded rounded-r-none"
                  />
                  <button
                    onClick={() => setShowPass((prev) => !prev)}
                    type="button"
                    className="px-2 py-2 text-xl border rounded-r"
                  >
                    {showPass ? (
                      <IoEyeOff className="w-6 h-6" />
                    ) : (
                      <IoEye className="w-6 h-6" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-600 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-medium">Role</label>
                <select
                  {...register("role")}
                  className="w-full border outline-none px-2 py-2 rounded"
                >
                  <option value="">Select role</option>
                  <option value="ADMIN">Admin</option>
                  <option value="USER">User</option>
                </select>
                {errors.role && (
                  <p className="text-red-600 text-sm">{errors.role.message}</p>
                )}
              </div>

              <p className="text-yellow-400 text-sm">
                Note: Only <strong>ADMIN</strong> users will be allowed to log
                in.
              </p>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </button>
            </form>

            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}

            <div className="flex items-center space-x-2 mt-4">
              <p className="text-sm">Already have an account?</p>
              <Link
                to="/sign-in"
                className="text-blue-600 hover:underline text-sm"
              >
                Sign in here
              </Link>
            </div>
          </div>
          <ImageSlide />
        </div>
      </div>
    </>
  );
};

export default SignUp;
