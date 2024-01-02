import React, { useCallback, useEffect, useRef, useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import "../App.css";
import { useDebounce } from "use-debounce";
import useClickOutside from "../utils/useClickOutside";

export const PopoverPicker = ({ color, onChange, presetColors }) => {
  const [value, setValue] = useState(color);
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  console.log("nannananan", "boboboobob")

  // useEffect(() => {
  //   setValue(color);
  // }, [color]);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);
  useDebounce(() => onChange(value), 200, [value]);

  return (
    <div className="picker" style={{ margin: "50px" }}>
      <div
        style={{ alignItems: "center", backgroundColor: color }}
        className="swatch"
        onClick={() => toggle(true)}
      />
      <div>
        <HexColorInput
          alpha
          placeholder="enter hex # (000000)"
          onChange={onChange}
          value={value}
          autoComplete="false"
        />
      </div>

      {isOpen && (
        <div className="popover" ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};
