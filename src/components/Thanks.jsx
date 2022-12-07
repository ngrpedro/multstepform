import React from "react";

const Thanks = ({ data, handleUpdateFild }) => {
  return (
    <div className="max-w-sm m-auto my-5">
      <h1 className="text-xl font-bold">Obrigado por completar o cadastro</h1>
      <p>Estamos ansiosos para nos encontrar!</p>

      <div className="mt-10">
        <span className="font-semibold text-base">
          Veja se os dados estão conrretos e confirme o envio do email
        </span>

        <div className="grid grid-cols-2 gap-2 my-4 ">
          <label className="block space-x-2">
            <span className="font-bold block">Nome:</span>
            {data.name}
          </label>

          <label className="block space-x-2">
            <span className="font-bold block">Email:</span>
            {data.email}
          </label>

          <label className="block space-x-2 col-span-2">
            <span className="font-bold block">Comentário:</span>
            {data.comment}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
