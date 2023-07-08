import React from "react";
import { Droppable } from "react-beautiful-dnd";

const DropItem = ({ index, item, children }) => {
  return (
    <Droppable droppableId={"" + index} type="TASK">
      {(provided, snapShot) => (
        <div
          className="col"
          style={{
            height: "100%",
            transition: "0.3s",
            boxShadow:
              snapShot.isDraggingOver && "0px 2px 16px rgba(0,0,0,0.22)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="title">{item.title}</div>
          <div
            className="tasks"
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              flexGrow: 1,
            }}
          >
            {children}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DropItem;
