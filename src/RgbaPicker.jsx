import React, { useCallback, useRef, useState, useMemo } from "react";
import { HexColorInput, RgbaStringColorPicker } from "react-colorful";
import "./App.css";
import { useDebounce } from "use-debounce";
import useClickOutside from "./useClickOutside";

// Color converter https://github.com/omgovich/colord
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
extend([namesPlugin]);

export const RgbaPicker = ({ color, onChange, ...rest }) => {
  const [value, setValue] = useState(color);
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);
  useDebounce(() => onChange(value), 200, [value]);

  const rgbaString = useMemo(() => {
    return color.startsWith("rgba") ? color : colord(color).toRgbString();
  }, [color]);

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
          placeholder="hope to enter rgba?"
          onChange={onChange}
        />
      </div>

      {isOpen && (
        <div className="popover" ref={popover}>
          <RgbaStringColorPicker color={rgbaString} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default RgbaPicker;
