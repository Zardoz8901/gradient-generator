/* eslint-disable react/prop-types */
import { css } from "@pigment-css/react";
import { Plus } from "react-feather";

const colorWrapper = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
  fontSize: "14px",
  "& label": {
    display: "block",
  },
  "& input[type='color']": {
    width: "75px",
    height: "75px",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const emptyColor = css({
  width: "75px",
  height: "75px",
  backgroundColor: "lightgray",
  border: "6px solid gray",
  borderRadius: "2px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    border: "6px solid #B0B0B0",
  },
});

const plusIcon = css({
  strokeWidth: "4px",
  color: "darkgray",
});

function HandleColor({
  colors,
  setColors,
  visibleColors,
  numOfVisibleColors,
  addColor,
}) {
  return (
    <>
      {colors.map((color, index) => {
        const colorId = `color-${index}`;
        const isColorDeclared = index < numOfVisibleColors;

        return (
          <div key={colorId} className={colorWrapper}>
            <label htmlFor={colorId} />
            <div className="input-wrapper">
              {isColorDeclared ? (
                <input
                  id={colorId}
                  type="color"
                  value={visibleColors[index]}
                  onChange={(event) => {
                    const nextColors = [...colors];
                    nextColors[index] = event.target.value;
                    setColors(nextColors);
                  }}
                />
              ) : (
                <div
                  className={emptyColor}
                  onClick={index === numOfVisibleColors ? addColor : undefined}
                  style={{
                    cursor:
                      index === numOfVisibleColors ? "pointer" : "default",
                  }}
                >
                  {index === numOfVisibleColors && (
                    <Plus size={24} className={plusIcon} />
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HandleColor;
