/* eslint-disable react/prop-types */
import React from "react";
import { css } from "@pigment-css/react";

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

function HandleColor({ colors, setColors }) {
  return (
    <>
      {colors.map((color, index) => {
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
    </>
  );
}

export default HandleColor;
