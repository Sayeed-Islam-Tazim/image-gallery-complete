import React from "react";

const GridItem = ({ item, index }) => {
  if (index == 0) {
    return (
      <div className="dragHandle grid-items card shadow-sm rounded-3 overflow-hidden item-first">
        <div className="card-body image-container">
          <input
            type="checkbox"
            id={item.id}
            value={item.id}
            onClick={CheckHandler}
          />
          <img
            src={item.image}
            alt={index}
            className=" h5 card-title image-design m-0"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="dragHandle grid-items card shadow-sm rounded-3 overflow-hidden">
        <div className="card-body image-container">
          <input
            type="checkbox"
            id={item.id}
            value={item.id}
            onClick={CheckHandler}
          />
          <img
            src={item.image}
            alt={index}
            className=" h5 card-title image-design m-0"
          />
        </div>
      </div>
    );
  }
};

export default GridItem;
