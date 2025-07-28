import { ColorMenuTypes } from "@/lib/types";
import React from "react";

const colors = [
  "#93c4ff", // Bleu
  "#ff9393", // Rouge
  "#97ff93", // Vert
  "#fff493", // Jaune
  "#ffc493", // Orange
  "#c693ff", // Violet
  "#2f2f2f", // Noir presque pur
  "#e2e2e2", // Gris clair
];

export default function ColorMenu({
  onChange,
  updateColorMenu = false,
}: ColorMenuTypes) {
  return (
    <div
      className={`${
        !updateColorMenu
          ? "absolute z-10 border bg-white rounded-md p-2 -top-2 left-1/2 h-fit w-32 -translate-y-full -translate-x-1/2 grid grid-rows-2 grid-cols-4 gap-2"
          : "absolute z-10 border bg-white rounded-md p-2 -left-8 max-h-32 -translate-x-full w-full grid grid-rows-4 grid-cols-2 gap-2"
      }`}
    >
      {colors.map((color) => (
        <div
          onClick={() => onChange(color)}
          key={color}
          className={`aspect-square ${!updateColorMenu ? "w-full" : "h-full"} rounded-full cursor-pointer hover:scale-105 transition-all duration-200`}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
}
