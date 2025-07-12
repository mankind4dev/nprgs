import axios from "axios";
import { useState } from "react";

const URL = import.meta.env.VITE_PUBLIC_API_BASE_URL;

const NINVerify = ({ errors, register }) => {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => setShowModal((prev) => !prev);
  return (
    <>
      <div className="">
        <div className="flex flex-col mb-1">
          <label>Verify NIN</label>
          <div className="flex items-center">
            <input
              type="text"
              {...register("NINVerify")}
              className="w-full border border-r-0 outline-none px-2 py-2 rounded rounded-r-none"
            />
            <button
              onClick={toggle}
              className="px-2 py-1.5 text-xl border rounded-r bg-green-600 cursor-pointer"
            >
              <span className="text-[18px] text-white">Verify</span>
            </button>
          </div>
          {errors.NINVerify && (
            <div className="text-red-600 text-sm">
              {errors.NINVerify.message}
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row space-x-1 space-y-2">
          <div className="flex flex-col w-full">
            <label className="block font-medium">First Name</label>
            <input
              type="text"
              className="w-full border outline-none px-2 py-2 rounded"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="block font-medium">Middle Name</label>
            <input
              type="text"
              className="w-full border outline-none px-2 py-2 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="block font-medium">Last Name</label>
          <input
            type="text"
            className="w-full border outline-none px-2 py-2 rounded"
          />
        </div>
        <div className="flex flex-col sm:flex-row space-x-1">
          <div className="flex flex-col w-full">
            <label className="block font-medium">Gender</label>
            <input
              type="text"
              className="w-full border outline-none px-2 py-2 rounded"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="block font-medium">State</label>
            <input
              type="text"
              className="w-full border outline-none px-2 py-2 rounded"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="block font-medium">Date of Birth</label>
            <input
              type="text"
              className="w-full border outline-none px-2 py-2 rounded"
            />
          </div>
        </div>
        {showModal && (
          <>
            <div className="fixed inset-0 bg-[#00000070] bg-opacity-50 flex items-center justify-center z-50 px-2">
              <div className="bg-white p-4 rounded-lg shadow-xl max-w-lg w-full space-y-8">
                <h2 className="text-xl font-semibold mb-4">NIN Verification</h2>
                <div className="flex flex-col space-y-2">
                  <p className="text-gray-700 font-semibold">
                    Congratulations, Your NIN verified successfully.
                  </p>
                  <p className="text-gray-700">
                    {" "}
                    Note: Properly check your details before proceeding to the
                    next form.
                  </p>
                  <h1 className="">Thanks.</h1>
                </div>
                <button
                  onClick={toggle}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-red-600"
                >
                  Okay
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NINVerify;
