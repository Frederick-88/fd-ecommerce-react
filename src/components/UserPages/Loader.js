import React from "react";
import "../Loader.css";

const Loader = (props) => {
  if (props.dataProduct.length === 0) {
    return (
      <div>
        <div className="loader" />
      </div>
    );
  } else {
    return <> </>;
  }
};
export default Loader;
