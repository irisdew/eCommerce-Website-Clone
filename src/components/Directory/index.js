import React from "react";
import "./styles.scss";

const Directory = () => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{ backgroundImage: `url('/shopMens.jpg')` }}
        >
          <a>Show Mens</a>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url('/shopWomens.jpg')` }}
        >
          <a>Show Womens</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
