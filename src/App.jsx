import React, { useEffect, useState } from "react";
import { PopoverPicker } from "./components/PopoverPicker";
import ColorList from "./components/ColorList";
import "./App.css";

const mockTheme = {
  one: "#FF0000",
  two: "#0000FF",
  three: "#008000",
};

const App = () => {
  const [primary, setPrimary] = useState(mockTheme.one);
  const [secondary, setSecondary] = useState(mockTheme.two);
  const [tertiary, setTertiary] = useState(mockTheme.three);
  const [saveColors, setSaveColors] = useState([]);
  const [colorHistory, setColorHistory] = useState([]);

  const save = () => {
    setColorHistory((colorHistory) => [
      ...colorHistory,
      [primary, secondary, tertiary],
    ]);
  };

  const reset = () => {
    setPrimary(mockTheme.one);
    setSecondary(mockTheme.two);
    setTertiary(mockTheme.three);
  };

  const print = () => {
    console.log("colorHistory", colorHistory);
  };

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
            // presetColors={saveColors.primary}
          />
        </div>
        <div>
          <label htmlFor={primary} style={{ display: "block" }}>
            Secondary
          </label>
          <PopoverPicker
            color={secondary}
            onChange={setSecondary}
            // themeColors={saveColors.secondary}
          />
        </div>
        <div style={{ display: "inline" }}>
          <label htmlFor="tertiary" style={{ display: "block" }}>
            Tertiary
          </label>
          <PopoverPicker
            color={tertiary}
            onChange={setTertiary}
            // presetColors={saveColors.tertiary}
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
      <button width="20px" onClick={save}>
        save
      </button>
      <button width="20px" onClick={reset}>
        reset
      </button>
      <button width="20px" onClick={print}>
        print to console
      </button>
      <h1>Save History</h1>
      {colorHistory.map((row, i) => {
        return (
          <ul key={i}>
            {row.map((color, i) => (
              <li key={i}>{color}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
};

export default App;
