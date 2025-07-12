import React from "react";

const Education = ({errors, register}) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row space-x-1 space-y-2">
        <div>
          <label className="block font-medium">Level</label>
          <select
            {...register("role")}
            className="w-full border outline-none px-2 py-2 rounded"
          >
            <option value="">Select level</option>
            <option value="primary">Primary education</option>
            <option value="secondary">
              Secondary education (e.g., WAEC, NECO)
            </option>
            <option value="vocational">
              Vocational/Technical training certificate (e.g., NABTEB, Trade
              Test, NVQ, or similar)
            </option>
            <option value="diploma">Diploma / NCE / HND</option>
            <option value="bachelor">
              Bachelor's degree (e.g., B.Sc, B.A, B.Ed)
            </option>
            <option value="postgraduate">
              Postgraduate degree (e.g., M.Sc, MBA, PhD)
            </option>
          </select>
          {errors.role && (
            <p className="text-red-600 text-sm">{errors.role.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label className="block font-medium">Decipline</label>
          <input
            type="text"
            {...register("fullName")}
            className="w-full border outline-none px-2 py-2 rounded"
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm">{errors.fullName.message}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Education;
