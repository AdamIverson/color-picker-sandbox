import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { PopoverPicker } from "./components/PopoverPicker";
import "./App.css";

const mockTheme = {
  title: "title",
  one: "#FF0000",
  two: "#0000FF",
  three: "#008000",
};

const App = () => {
  const [title, setTitle] = useState(mockTheme.title);
  const [primary, setPrimary] = useState(mockTheme.one);
  const [secondary, setSecondary] = useState(mockTheme.two);
  const [tertiary, setTertiary] = useState(mockTheme.three);
  const [saveState, setSaveState] = useState({});
  const [selectedPalette, setSelectedPalette] = useState();
  const [colorHistory, setColorHistory] = useState([]);
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    setSaveState({
      title: title,
      primary: primary,
      secondary: secondary,
      tertiary: tertiary,
    });
  }, [title, primary, secondary, tertiary]);

  const save = () => {
    setColorHistory((colorHistory) => [...colorHistory, { saveState }]);
    setTitle("");
  };

  const setTitleFun = (e) => {
    setTitle(e.target.value);
  };

  const reset = () => {
    setTitle("");
    setPrimary(mockTheme.one);
    setSecondary(mockTheme.two);
    setTertiary(mockTheme.three);
  };

  const print = () => {
    console.log("colorHistory", colorHistory);
  };

  const handleChange = (e, newValue) => {
    {
      colorHistory.map((row, i) => {
        if (row.saveState.title === newValue) {
          setSelectedPalette(row);
        }
      });
    }
  };

  const toggleIframe = () => {
    setShowIframe(!showIframe);
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
        {showIframe && (
          <div style={{ flex: 1 }}>
            <iframe
              src="https://m2.material.io/inline-tools/color/"
              style={{
                margin: "20px",
                width: "80%",
                height: "800px",
                scrolling: "yes",
                overflow: "scroll",
              }}
            ></iframe>
          </div>
        )}
        <ul style={{ listStyleType: "none" }}>
          <li>
            <label htmlFor="title" style={{ display: "block" }}>
              Title
              <input
                style={{ display: "block" }}
                type="text"
                name="enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="enter title"
              />
            </label>
          </li>
          <li>
            <label htmlFor={primary} style={{ display: "block" }}>
              Primary
              <PopoverPicker
                color={primary}
                onChange={setPrimary}
                // presetColors={saveColors.primary}
              />
            </label>
          </li>
          <li>
            <label htmlFor={primary} style={{ display: "block" }}>
              Secondary
              <PopoverPicker
                color={secondary}
                onChange={setSecondary}
                // themeColors={saveColors.secondary}
              />
            </label>
          </li>
          <li>
            <label htmlFor="tertiary" style={{ display: "block" }}>
              Tertiary
              <PopoverPicker
                color={tertiary}
                onChange={setTertiary}
                // presetColors={saveColors.tertiary}
              />
            </label>
          </li>
        </ul>
        <div>
          <ul style={{ listStyleType: "none" }}>
            <li>Primary: {primary}</li>
            <li>Secondary: {secondary}</li>
            <li>Tertiary: {tertiary}</li>
          </ul>
        </div>
      </div>
      <div>
        <button width="20px" onClick={save}>
          save
        </button>
        <button width="20px" onClick={reset}>
          reset
        </button>
        <button width="20px" onClick={print}>
          print to console
        </button>
        <button onClick={toggleIframe}>palette generator</button>
      </div>
      <div style={{ margin: "10px" }}>
        <div style={{ display: "block" }}>
          <Autocomplete
            autoComplete
            noOptionsText="ADD SOME OPTIONS"
            onChange={handleChange}
            options={colorHistory.map((row, i) => row.saveState.title)}
            renderInput={(params) => <TextField {...params} label="palettes" />}
            value={selectedPalette}
          />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 2 }}>
            <h1 style={{ textDecoration: "underline" }}>Save History</h1>
            {colorHistory.map((row, i) => {
              // console.log("row.saveState", row.saveState);
              return (
                <div key={i}>
                  <h2>{row.saveState.title}</h2>
                  <ul key={i}>
                    <li key={i + row.saveState.primary}>
                      {row.saveState.primary}
                    </li>
                    <li key={i + row.saveState.secondary}>
                      {row.saveState.secondary}
                    </li>
                    <li key={i + row.saveState.tertiary}>
                      {row.saveState.tertiary}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div style={{ flex: 2 }}>
            <h1 style={{ textDecoration: "underline" }}>Selected Palette</h1>
            {selectedPalette && (
              <>
                <h2>{selectedPalette.saveState.title}</h2>
                <ul>
                  <li>
                    Primary: {selectedPalette.saveState.primary}
                    <div
                      style={{
                        height: "100px",
                        width: "100px",
                        backgroundColor: selectedPalette.saveState.primary,
                      }}
                    ></div>
                  </li>
                  <li>
                    Secondary: {selectedPalette.saveState.secondary}
                    <div
                      style={{
                        height: "100px",
                        width: "100px",
                        backgroundColor: selectedPalette.saveState.secondary,
                      }}
                    ></div>
                  </li>
                  <li>
                    Tertiary: {selectedPalette.saveState.tertiary}
                    <div
                      style={{
                        height: "100px",
                        width: "100px",
                        backgroundColor: selectedPalette.saveState.tertiary,
                      }}
                    ></div>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
