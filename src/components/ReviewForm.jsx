import React from "react";

const ReviewForm = ({ data, handleUpdateFild }) => {
  return (
    <div className="grid grid-cols-1 gap-4 m-auto my-5">
      <label className="flex flex-col items-start gap-1">
        <span className="block text-gray-600 text-sm font-bold mb-1">
          Defina sua experiencia com a gente
        </span>
        <textarea
          rows={"5"}
          type="text"
          className="shadow appearance-none border rounded-md w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={data.comment || " "}
          onChange={(e) => handleUpdateFild("comment", e.target.value)}
        />
      </label>
    </div>
  );
};

export default ReviewForm;
