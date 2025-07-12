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
import NINVerify from "./NINVerify";
import ResidencePlace from "./ResidencePlace";
import Education from "./Education";
import Employment from "./Employment";

const URL = import.meta.env.VITE_PUBLIC_API_BASE_URL;

const signUpSchema = z.object({
  NINVerify: z
    .string()
    .length(11, "NIN is required and NIN must be 11 digits")
    .regex(/^[0-9]{11}$/, "NIN must be numeric"),

  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email"),
  motivation: z
    .string()
    .min(20, "Please write at least 20 characters.")
    .max(150, "Maximum 150 words allowed."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
      "Password must contain uppercase, lowercase, and a special character"
    ),
  street: z.string().min(2, "Street is required"),
  town: z.string().min(2, "Town is required"),
  lga: z.string().min(2, "LGA is required"),
  residenceState: z.string().min(2, "State is required"),
  role: z.enum(["ADMIN", "USER"], {
    errorMap: () => ({ message: "Role is required" }),
  }),
  confirmTruth: z.literal(true, {
    errorMap: () => ({ message: "You must confirm the information is true" }),
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
      <div className="flex flex-col items-center justify-center min-h-screen py-4 px-2 md:px-4">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1280px]">
          <div className="flex flex-col w-full md:w-[780px] bg-white p-2 pb-4 md:p-6 shadow-md rounded-md h-screen sm:h-[620px] overflow-y-scroll sm:overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div className="">
                <NINVerify errors={errors} register={register} />
              </div>
              <div className="flex flex-col sm:flex-row space-x-1">
                <div className="flex flex-col w-full">
                  <label className="block font-medium">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full border outline-none px-2 py-2 rounded"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className="block font-medium">Phone Number</label>
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
                <label className="block font-medium">Relationship</label>
                <select
                  {...register("role")}
                  className="w-full border outline-none px-2 py-2 rounded"
                >
                  <option value="">Select relationship</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="seperate">Seperated</option>
                </select>
                {errors.role && (
                  <p className="text-red-600 text-sm">{errors.role.message}</p>
                )}
              </div>

              <div className="">
                <ResidencePlace register={register} errors={errors} />
              </div>

              <div className="flex flex-col space-y-">
                <h1 className="text-lg font-bold">Education:</h1>
                <Education errors={errors} register={register} />
              </div>

              <div className="flex flex-col space-y-">
                <h1 className="text-lg font-bold">Employment:</h1>
                <Employment errors={errors} register={register} />
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  Why are you a strong candidate? (Max 150 words)
                </label>
                <textarea
                  {...register("motivation")}
                  rows={6}
                  placeholder="Share your motivation, skills, and how this aligns with your future goals..."
                  className="w-full border px-3 py-2 rounded outline-none"
                />
                {errors.motivation && (
                  <p className="text-red-600 text-sm">
                    {errors.motivation.message}
                  </p>
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
              <div className="flex flex-col">
                <div className="mt-4 flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="confirmTruth"
                    {...register("confirmTruth")}
                    className="mt-1"
                  />
                  <label
                    htmlFor="confirmTruth"
                    className="text-yellow-500 text-sm"
                  >
                    Note: All the information provided are real and legit.
                  </label>
                </div>
                {errors.confirmTruth && (
                  <p className="text-red-600 text-sm">
                    {errors.confirmTruth.message}
                  </p>
                )}
              </div>

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

            <div className="flex items-center space-x-2 my-4">
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
