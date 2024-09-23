import React from "react";
import GradientGenerator from "../GradientGenerator/GradientGenerator";
import ToastProvider from "../ToastProvider/ToastProvider";
function App() {
  return (
    <>
      <ToastProvider>
        <GradientGenerator />
      </ToastProvider>
    </>
  );
}

export default App;
