import React from "react";
import { css } from "@pigment-css/react";

const wrapper = css({
  maxWidth: "450px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  minWidth: "600px",
});

const gradientPreview = css({
  aspectRatio: "2 / 1",
  minHeight: "75px",
  borderRadius: "4px",
});

const colorSelection = css({
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  gap: "16px",
  color: "#D3D3D3",
});

const colorWrapper = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& label": {
    display: "block",
  },
  "& input[type='color']": {
    width: "75px",
    height: "75px",
  },
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
  const [colors, setColors] = React.useState([
    "#FFD500",
    "#FF0040",
    "#FF0040",
    "#FF0040",
    "#FF0040",
  ]);
  const [numOfVisibleColors, setNumOfVisibleColors] = React.useState(2);

  const visibleColors = colors.slice(0, numOfVisibleColors);

  const colorStops = visibleColors.join(", ");
  const backgroundImage = `linear-gradient(${colorStops})`;

  //replace the alerts with a toast
  function addColor() {
    if (numOfVisibleColors >= 5) {
      window.alert("There is a maximum of 5 colors");
      return;
    }

    setNumOfVisibleColors(numOfVisibleColors + 1);
  }

  function removeColor() {
    if (numOfVisibleColors <= 2) {
      window.alert("There is a minimum of 2 colors");
      return;
    }

    setNumOfVisibleColors(numOfVisibleColors - 1);
  }

  return (
    <div className={wrapper}>
      <div className={actions}>
        <button onClick={removeColor}>Remove color</button>
        <button onClick={addColor}>Add color</button>
      </div>

      <div
        className={gradientPreview}
        style={{
          backgroundImage,
        }}
      />

      <div className={colorSelection}>
        {visibleColors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className={colorWrapper}>
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={(event) => {
                    const nextColors = [...colors];
                    nextColors[index] = event.target.value;

                    setColors(nextColors);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GradientGenerator;
