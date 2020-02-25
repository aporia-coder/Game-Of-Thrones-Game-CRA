import React from "react";
import { useState } from "react";

const Progress = () => {
  const [progress, setProgress] = useState(1);

  return (
    <>
      <h1>Question: {progress} out of 10</h1>
    </>
  );
};

export default Progress;
