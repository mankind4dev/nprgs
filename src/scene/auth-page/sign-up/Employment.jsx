import React from "react";

const Employment = ({errors, register}) => {
  return (
    <>
      <div className=" ">
        <label className="block font-medium">Select Stage</label>
        <select
          {...register("role")}
          className="w-full border outline-none px-2 py-2 rounded"
        >
          <option value="">Select level</option>
          <option value="myself">I work for myself</option>
          <option value="government">I work for the government</option>
          <option value="smallBusiness">I work for a small business</option>
          <option value="largeCompany">I work for a large compan</option>
          <option value="student">I’m a student</option>
          <option value="currentlyWork">I don't currently work</option>
        </select>
        {errors.role && (
          <p className="text-red-600 text-sm">{errors.role.message}</p>
        )}
      </div>
    </>
  );
};

export default Employment;
