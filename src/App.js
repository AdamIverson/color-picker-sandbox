import React, { useState } from "react";
import { PopoverPicker } from "./PopoverPicker";
import "./App.css";
import { HexColorInput } from "react-colorful";
import RgbaPicker from "./RgbaPicker";

const App = () => {
  const [primary, setPrimary] = useState("#FF0000");
  const [secondary, setSecondary] = useState("#0000FF");
  const [tertiary, setTertiary] = useState("#008000");
  const presetColors = [primary, secondary, tertiary];

  // const [primaryRGB, setPrimaryRGB] = useState("rgba(255, 0, 0, 1)");
  // const [secondaryRGB, setSecondaryRGB] = useState("rgba(0, 0, 255, 1)");
  // const [tertiaryRGB, setTertiaryRGB] = useState("rgba(0, 128, 0, 1)");
  // const presetColorsRGB = [primaryRGB, secondaryRGB, tertiaryRGB];

  // const [genericPickerColor, setGenericPickerColor] = useState("#ffffff");
  // const genericColor = genericPickerColor;
  // export interface Color {
  //   primary: primary;
  //   secondary: secondary;
  //   tertiary: tertiary;
  // }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <label htmlFor={primary} style={{ display: "block" }}>
            Primary
          </label>
          <PopoverPicker
            color={primary}
            onChange={setPrimary}
            presetColors={presetColors}
          />
        </div>
        <div>
          <label htmlFor={primary} style={{ display: "block" }}>
            Secondary
          </label>
          <PopoverPicker
            color={secondary}
            onChange={setSecondary}
            presetColors={presetColors}
          />
        </div>
        <div style={{ display: "inline" }}>
          <label htmlFor="tertiary" style={{ display: "block" }}>
            Tertiary
          </label>
          <PopoverPicker
            color={tertiary}
            onChange={setTertiary}
            presetColors={presetColors}
          />
        </div>
        <div>
          <ul>
            <li>Primary: {primary}</li>
            <li>Secondary: {secondary}</li>
            <li>Tertiary: {tertiary}</li>
          </ul>
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          justifyContent: "space-evenly",
          marginTop: "200px",
        }}
      >
        <div>
          <label htmlFor={primaryRGB} style={{ display: "block" }}>
            Primary
          </label>
          <RgbaPicker
            color={primaryRGB}
            onChange={setPrimaryRGB}
            presetColors={presetColorsRGB}
          />
        </div>
        <div>
          <label htmlFor={primaryRGB} style={{ display: "block" }}>
            Secondary
          </label>
          <RgbaPicker
            color={secondaryRGB}
            onChange={setSecondaryRGB}
            presetColors={presetColorsRGB}
          />
        </div>
        <div style={{ display: "inline" }}>
          <label htmlFor="tertiaryRGB" style={{ display: "block" }}>
            Tertiary
          </label>
          <RgbaPicker
            color={tertiaryRGB}
            onChange={setTertiaryRGB}
            presetColors={presetColorsRGB}
          />
        </div>
        <div>
          <ul>
            <li>Primary: {primaryRGB}</li>
            <li>Secondary: {secondaryRGB}</li>
            <li>Tertiary: {tertiaryRGB}</li>
          </ul>
        </div>
      </div> */}
      {/* <div>
        <form>
          <input
            type="color"
            value={genericPickerColor}
            onChange={setGenericPickerColor}
          />
          <input type="submit" />
        </form>
        <h1>{genericColor}</h1>
      </div> */}
    </div>
  );
};

export default App;
