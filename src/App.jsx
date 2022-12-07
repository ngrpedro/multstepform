import { useState } from "react";

import UserDetails from "./components/UserDetails";
import Thanks from "./components/Thanks";
import ReviewForm from "./components/ReviewForm";
import { useForm } from "./hooks/useForm";
import Steps from "./components/Steps";
import mainimage from "./assets/cool-background.png";
import DoneStep from "./components/DoneStep";

const formTemplate = {
  name: "",
  email: "",
  Comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const handleUpdateFild = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserDetails data={data} handleUpdateFild={handleUpdateFild} />,
    <ReviewForm data={data} handleUpdateFild={handleUpdateFild} />,
    <Thanks data={data} handleUpdateFild={handleUpdateFild} />,
    <DoneStep />,
  ];

  const {
    currentStep,
    currentComponent,
    changeStep,
    isLaststep,
    isFirstStep,
    isConfirmStep,
  } = useForm(formComponents);

  return (
    <div className="flex items-center gap-10">
      <div className="hidden md:block">
        <img
          src={mainimage}
          alt=""
          className="max-w-sm h-screen object-cover"
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-3 m-auto">
        <div className="md:border-b border-gray-200 pb-5">
          <Steps currentStep={currentStep} />
        </div>

        <form onSubmit={(e) => changeStep(currentStep + 1, e)} className="">
          <div className="w-[19rem] h-[19rem] md:w-[26rem] m-auto">
            {currentComponent}
          </div>

          <div className="flex items-center gap-5 border-t border-gray-300 py-5">
            {!isFirstStep && (
              <button
                type="button"
                className="border border-orange-500 hover:border-orange-700 font-bold py-2 px-8 rounded 
                  text-orange-500 hover:text-orange-700
                  focus:outline-none focus:shadow-outline transition-all"
                onClick={() => changeStep(currentStep - 1)}
              >
                Voltar
              </button>
            )}

            {isConfirmStep && (
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-8 rounded
              focus:outline-none focus:shadow-outline transition-all"
              >
                Concluir
              </button>
            )}
            {isLaststep != isConfirmStep ? (
              ""
            ) : (
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-8 rounded
                            focus:outline-none focus:shadow-outline transition-all"
              >
                Avançar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
