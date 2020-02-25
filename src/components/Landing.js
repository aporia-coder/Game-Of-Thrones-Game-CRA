import React from "react";
import Loader from "../assets/spinner.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  // Function that calls API

  // const getData = async () => {
  //   setLoading(true);
  //   const response = await fetch("https://got-quotes.herokuapp.com/quotes");
  //   const data = await response.json();
  //   setLoading(false);
  // };

  return (
    <section>
      <div className="landing">
        <h1 className="text-main">A Quiz of Ice and Fire</h1>
        <p className="text-secondary">
          Test your knowledge of the Game of Thrones universe
        </p>
        <Link to="/quiz" className="btn-light" /*onClick={getData}*/>
          Click to Start
        </Link>
      </div>
    </section>
  );
};

export default Landing;
