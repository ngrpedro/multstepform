import React from "react";

const ReviewForm = ({ data, handleUpdateFild }) => {
  return (
    <div>
      <div className="flex flex-col gap-4 max-w-md  m-auto my-5 ">
        <label className="flex flex-col items-start gap-1">
          <span>Defina sua experiencia com a gente</span>
          <textarea
            rows={"5"}
            type="text"
            className="border border-slate-500 p-2 rounded-md w-full"
            value={data.comment || " "}
            onChange={(e) => handleUpdateFild("comment", e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default ReviewForm;
