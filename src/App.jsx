import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { PopoverPicker } from "./components/PopoverPicker";
import BarChart from "./d3/BarChart";
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
  const [quaternary, setQuaternary] = useState("");
  const [quinternary, setQuinternary] = useState("");
  const [sixth, setSixth] = useState("");
  const [saveState, setSaveState] = useState({});
  const [selectedPalette, setSelectedPalette] = useState();
  const [colorHistory, setColorHistory] = useState([]);
  const [showIframe, setShowIframe] = useState(false);
  const [showBarChart, setShowBarChart] = useState(false);

  useEffect(() => {
    setSaveState({
      title: title,
      primary: primary,
      secondary: secondary,
      tertiary: tertiary,
      quaternary: quaternary,
      quinternary: quinternary,
      sixth: sixth,
    });
  }, [title, primary, secondary, tertiary, quaternary, quinternary, sixth]);

  const save = () => {
    setColorHistory((colorHistory) => [...colorHistory, { saveState }]);
    setTitle("");
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

  const options = colorHistory.map((row) => row.saveState.title);

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
        {showBarChart && (
          <div style={{ flex: 1, margin: 20 }}>
            <BarChart colors={selectedPalette} />
          </div>
        )}
        {showIframe && (
          <div style={{ flex: 1 }}>
            <iframe
              src="https://m2.material.io/inline-tools/color/"
              style={{
                margin: "20px",
                width: "80%",
                height: "800px",
              }}
            ></iframe>
          </div>
        )}
        <div>
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
                <PopoverPicker color={primary} onChange={setPrimary} />
              </label>
            </li>
            <li>
              <label htmlFor={primary} style={{ display: "block" }}>
                <PopoverPicker color={secondary} onChange={setSecondary} />
              </label>
            </li>
            <li>
              <label htmlFor="tertiary" style={{ display: "block" }}>
                <PopoverPicker color={tertiary} onChange={setTertiary} />
              </label>
            </li>
            <li>
              <label htmlFor="quaternary" style={{ display: "block" }}>
                <PopoverPicker color={quaternary} onChange={setQuaternary} />
              </label>
            </li>
            <li>
              <label htmlFor="quinternary" style={{ display: "block" }}>
                <PopoverPicker color={quinternary} onChange={setQuinternary} />
              </label>
            </li>
            <li>
              <label htmlFor="tertiary" style={{ display: "block" }}>
                <PopoverPicker color={sixth} onChange={setSixth} />
              </label>
            </li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyleType: "none" }}>
            <li>Primary: {primary}</li>
            <li>Secondary: {secondary}</li>
            <li>Tertiary: {tertiary}</li>
            <li>Quaternary: {quaternary}</li>
            <li>Quinternary: {quinternary}</li>
            <li>Sixth: {sixth}</li>
          </ul>
        </div>
      </div>
      <div>
        <button width="20px" onClick={save}>
          save
        </button>
        <button width="20px" onClick={() => setShowBarChart(!showBarChart)}>
          bar chart
        </button>
        <button onClick={toggleIframe}>palette generator</button>
      </div>
      <div style={{ margin: "10px" }}>
        <div style={{ display: "block" }}>
          <Autocomplete
            autoComplete
            noOptionsText="ADD SOME OPTIONS"
            onChange={handleChange}
            options={options}
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
                    <li key={i + row.saveState.quaternary}>
                      {row.saveState.quaternary}
                    </li>
                    <li key={i + row.saveState.quinternary}>
                      {row.saveState.quinternary}
                    </li>
                    <li key={i + row.saveState.sixth}>{row.saveState.sixth}</li>
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
                  <li>
                    Tertiary: {selectedPalette.saveState.quaternary}
                    <div
                      style={{
                        height: "100px",
                        width: "100px",
                        backgroundColor: selectedPalette.saveState.quaternary,
                      }}
                    ></div>
                  </li>
                  <li>
                    Tertiary: {selectedPalette.saveState.quinternary}
                    <div
                      style={{
                        height: "100px",
                        width: "100px",
                        backgroundColor: selectedPalette.saveState.quinternary,
                      }}
                    ></div>
                  </li>
                  <li>
                    Tertiary: {selectedPalette.saveState.sixth}
                    <div
                      style={{
                        height: "100px",
                        width: "100px",
                        backgroundColor: selectedPalette.saveState.sixth,
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
