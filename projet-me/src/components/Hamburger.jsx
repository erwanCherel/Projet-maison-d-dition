import React from "react";

export default function Hamburger({ isOpen }) {
  return (
    <>
      <div className="hamburger w-2 h-1.5 flex justify-around z-10 ">
        <div
          className="burger burger1"
          style={{ transform: isOpen ? "rotateZ(45deg)" : "rotate(0)" }}
        ></div>
        <div
          className="burger burger2"
          style={{
            transform: isOpen ? "translateX(100%)" : "translateX(0)",
            opacity: isOpen ? 0 : 1,
          }}
        ></div>
        <div
          className="burger burger3"
          style={{ transform: isOpen ? "rotateZ(-45deg)" : "rotate(0)" }}
        ></div>
      </div>
    </>
  );
}
