import React from "react";

const UserDetails = ({ data, handleUpdateFild }) => {
  return (
    <div className="flex flex-col gap-4 max-w-md  m-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="flex flex-col items-start">
          <span className="block text-gray-600 text-sm font-bold mb-1">
            First Name
          </span>
          <input
            type="text"
            className="shadow appearance-none border rounded-md w-full py-2 px-3 
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={data.name || " "}
            onChange={(e) => handleUpdateFild("name", e.target.value)}
          />
        </label>

        <label className="flex flex-col items-start">
          <span className="block text-gray-600 text-sm font-bold mb-1">
            Last Name
          </span>
          <input
            type="text"
            className="shadow appearance-none border rounded-md w-full py-2 px-3 
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={data.name || " "}
            onChange={(e) => handleUpdateFild("name", e.target.value)}
          />
        </label>
      </div>

      <label className="flex flex-col items-start gap-1">
        <span className="block text-gray-600 text-sm font-bold mb-1">
          Email Adress
        </span>
        <input
          type="text"
          className="shadow appearance-none border rounded-md w-full py-2 px-3 
          text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={data.email || " "}
          onChange={(e) => handleUpdateFild("email", e.target.value)}
        />
      </label>
    </div>
  );
};

export default UserDetails;
