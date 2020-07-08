import React from "react";
import "../Loader.css";

const Loader = (loading) => {
  console.log(loading);

  if (loading) {
    return (
      <div>
        <div class="loader">Loading...</div>
      </div>
    );
  } else {
    return <> </>;
  }
};
export default Loader;
