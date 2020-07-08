import React from "react";
import "../Loader.css";

const Loader = (loading) => {
  console.log(loading);
  console.log(loading.loading);

  if (loading.loading) {
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
