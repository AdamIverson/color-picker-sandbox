import React, { useState } from "react";
import { PopoverPicker } from "./PopoverPicker";
import "./App.css";
import { HexColorInput } from "react-colorful";

const App = () => {
  const [primary, setPrimary] = useState("#FF0000");
  const [secondary, setSecondary] = useState("#0000FF");
  const [tertiary, setTertiary] = useState("#008000");

  const presetColors = [primary, secondary, tertiary];

  return (
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
    </div>
  );
};

export default App;
