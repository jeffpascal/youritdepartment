import React from "react";
import "./but.css";

const getPercentage = (current, max) => (100 * current) / max;
const getLeft = percentage => `calc(${percentage}% - 5px)`;
const getValue = (percentage, max) => (max / 100) * percentage;

const Slider = ({
  initial,
  max,
  formatFn = number => number.toFixed(0),
  onChange
}) => {
  const initialPercentage = getPercentage(initial, max);
  const sliderRef = React.useRef();
  const thumbRef = React.useRef();
  const currentRef = React.useRef();
  const diff = React.useRef();

  const handleMouseMove = event => {
    let newX =
      event.clientX -
      diff.current -
      sliderRef.current.getBoundingClientRect().left;

    const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;
    const start = 0;
    if (newX < start) {
      newX = 0;
    }
    if (newX > end) {
      newX = end;
    }

    const newPercentage = getPercentage(newX, end);
    const newValue = getValue(newPercentage, max);
    thumbRef.current.style.left = getLeft(newPercentage);
    currentRef.current.textContent = newValue;

    onChange(newValue);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mousemove", handleMouseMove);
  };
  const handleMouseDown = event => {
    diff.current =
      event.clientX - thumbRef.current.getBoundingClientRect().left;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <div className="SliderHeader">
        <strong ref={currentRef}>{initial}</strong>
        &nbsp;/&nbsp;
        {formatFn(max)}
      </div>
      <div ref={sliderRef} className="StyledSlider">
        <div
          style={{ left: getLeft(initialPercentage) }}
          ref={thumbRef}
          onMouseDown={handleMouseDown}
          className="StyledThumb"
        />
      </div>
    </>
  );
};

const PermaScrollButton = props => {
  return (
    <div className="endlessScroll">
      <Slider
        initial={10}
        max={25}
        formatFn={number => number.toFixed(2)}
        onChange={value => console.log(value)}
      />
    </div>
  );
};

export default PermaScrollButton;
