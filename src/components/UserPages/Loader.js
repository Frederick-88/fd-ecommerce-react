import React from "react";
import "../Loader.css";

const Loader = (props) => {
  if (props.isProductLoading) {
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
