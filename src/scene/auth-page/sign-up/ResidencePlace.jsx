 
const ResidencePlace = ({ register, errors }) => {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-lg font-bold">Place of residence:</h1>
      <div className="flex flex-col sm:flex-row space-x-1 space-y-2">
        <div className="flex flex-col w-full">
          <label className="block font-medium">Street</label>
          <input
            type="text"
            {...register("street")}
            className="w-full border outline-none px-2 py-2 rounded"
          />
          {errors.street && (
            <p className="text-red-600 text-sm">{errors.street.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label className="block font-medium">Town</label>
          <input
            type="text"
            {...register("town")}
            className="w-full border outline-none px-2 py-2 rounded"
          />
          {errors.town && (
            <p className="text-red-600 text-sm">{errors.town.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row space-x-2">
        <div className="flex flex-col w-full">
          <label className="block font-medium">LGA</label>
          <input
            type="text"
            {...register("lga")}
            className="w-full border outline-none px-2 py-2 rounded"
          />
          {errors.lga && (
            <p className="text-red-600 text-sm">{errors.lga.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label className="block font-medium">State</label>
          <input
            type="text"
            {...register("residenceState")}
            className="w-full border outline-none px-2 py-2 rounded"
          />
          {errors.residenceState && (
            <p className="text-red-600 text-sm">
              {errors.residenceState.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResidencePlace;
