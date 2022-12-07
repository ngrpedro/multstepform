import React from "react";
import { useState } from "react";

export const useForm = (steps) => {
  const [currentStep, setCurrentstep] = useState(0);

  const changeStep = (i, e) => {
    if (e) e.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurrentstep(i);
  };

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLaststep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
    isConfirmStep: currentStep === 2 ? true : false,
  };
};
