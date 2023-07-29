import * as React from "react";
import HomeLabel from "./item";

function HomeLabels({ items, onEdit }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "start",
      }}
    >
      {items.map((label, index) => {
        return <HomeLabel label={label} key={index} onEdit={onEdit} />;
      })}
    </div>
  );
}

export default HomeLabels;
