import React from "react";

const Thanks = ({ data, handleUpdateFild }) => {
  return (
    <div className="max-w-sm m-auto my-5">
      <h1 className="text-2xl font-bold">Obrigado {data.name}</h1>
      <h1 className="text-2xl font-bold">
        Não mandaremos SPAN para o email {data.email}
      </h1>
      <h1 className="text-2xl font-bold">Seja se é isso mesmo{data.comment}</h1>
    </div>
  );
};

export default Thanks;
