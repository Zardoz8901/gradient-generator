import React from "react";
import { css } from "@pigment-css/react";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";
import HandleColor from "./HandleColor";

const wrapper = css({
  maxWidth: "450px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  minWidth: "600px",
  height: "100%",
  justifyContent: "center",
});

const gradientPreview = css({
  aspectRatio: "2 / 1",
  minHeight: "75px",
  borderRadius: "4px",
});

const colorSelection = css({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "16px",
  color: "#D3D3D3",
});

const actions = css({
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  "& button": {
    fontSize: "1.125rem",
    padding: "8px 16px",
  },
});

function GradientGenerator() {
  const { createToast } = React.useContext(ToastContext);
  const [colors, setColors] = React.useState([
    "#FFD500",
    "#FF0040",
    "#FF0000",
    "#FF0000",
    "#FF0000",
  ]);
  const [numOfVisibleColors, setNumOfVisibleColors] = React.useState(2);

  const visibleColors = colors.slice(0, numOfVisibleColors);

  const colorStops = visibleColors.join(", ");
  const backgroundImage = `linear-gradient(${colorStops})`;

  function addColor() {
    if (numOfVisibleColors >= 5) {
      createToast("Maximum of 5 colors", "warning");
      return;
    }
    setNumOfVisibleColors(numOfVisibleColors + 1);
  }

  function removeColor() {
    if (numOfVisibleColors <= 2) {
      createToast("Minimum of 2 colors", "warning");
      return;
    }
    setNumOfVisibleColors(numOfVisibleColors - 1);
  }

  return (
    <div className={wrapper}>
      <div className={actions}>
        <button onClick={removeColor}>Remove color</button>
      </div>
      <ToastShelf />
      <div
        className={gradientPreview}
        style={{
          backgroundImage,
        }}
      />

      <div className={colorSelection}>
        <HandleColor
          colors={colors}
          setColors={setColors}
          visibleColors={visibleColors}
          numOfVisibleColors={numOfVisibleColors}
          addColor={addColor}
        />
      </div>
    </div>
  );
}

export default GradientGenerator;
