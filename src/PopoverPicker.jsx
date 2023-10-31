import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import "./App.css";
import { useDebounce } from "use-debounce";
import useClickOutside from "./useClickOutside";

export const PopoverPicker = ({ color, onChange, presetColors }) => {
  const [value, setValue] = useState(color);
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

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
        <HexColorInput alpha prefixed color={value} onChange={onChange} />
      </div>
      <div style={{ textAlign: "center" }}>{color}</div>

      {isOpen && (
        <div className="popover" ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};
