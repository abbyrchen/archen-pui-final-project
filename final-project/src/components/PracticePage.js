import React from "react";
import FluidSimulation from "fluid-simulation-react";

const PracticePage = () => {
  const config = {};
  const color = [];

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <FluidSimulation config={config} color={color} />
    </div>
  );
};

export default PracticePage;
