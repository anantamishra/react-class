import React, { useRef } from "react";

export const Section = () => {
  // Create refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // Function to scroll to a specific section
  function scrollToSection(params) {
    params.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      {/* Navigation Buttons */}
      <nav style={{ position: "fixed", top: 0, left: 0, padding: "10px" }}>
        <button onClick={() => scrollToSection(section1Ref)}>
          Go to Section 1
        </button>
        <button onClick={() => scrollToSection(section2Ref)}>
          Go to Section 2
        </button>
        <button onClick={() => scrollToSection(section3Ref)}>
          Go to Section 3
        </button>
      </nav>

      {/* Sections */}
      <div
        ref={section1Ref}
        style={{
          height: "100vh",
          backgroundColor: "#ff9999",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Section 1</h1>
      </div>

      <div
        ref={section2Ref}
        style={{
          height: "100vh",
          backgroundColor: "#99ff99",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Section 2</h1>
      </div>

      <div
        ref={section3Ref}
        style={{
          height: "100vh",
          backgroundColor: "#9999ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Section 3</h1>
      </div>
    </div>
  );
};
