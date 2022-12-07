import React from "react";

const UserDetails = ({ data, handleUpdateFild }) => {
  return (
    <div className="flex flex-col gap-4 max-w-md  m-auto my-5 ">
      <label className="flex flex-col items-start gap-1">
        <span>Nome</span>
        <input
          type="text"
          className="border border-slate-500 p-2 rounded-md w-full"
          value={data.name || " "}
          onChange={(e) => handleUpdateFild("name", e.target.value)}
        />
      </label>

      <label className="flex flex-col items-start gap-1">
        <span>Email</span>
        <input
          type="text"
          className="border border-slate-500 p-2 rounded-md w-full"
          value={data.email || " "}
          onChange={(e) => handleUpdateFild("email", e.target.value)}
        />
      </label>
    </div>
  );
};

export default UserDetails;
