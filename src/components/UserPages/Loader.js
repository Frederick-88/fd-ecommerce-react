import React from "react";
import "../Loader.css";

const Loader = (loading) => {
  console.log(loading === true);

  if (loading === true) {
    return (
      <div>
        <div class="loader" />
      </div>
    );
  } else {
    return <> </>;
  }
};
export default Loader;
