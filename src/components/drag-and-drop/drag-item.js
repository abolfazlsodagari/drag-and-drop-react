import React from "react";
import { Draggable } from "react-beautiful-dnd";

const DragItem = ({ item, index }) => {
  return (
    <Draggable draggableId={"" + item.id} key={item.id} index={index}>
      {(provided, snapShot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div
              className="task"
              style={{
                transition: "0.3s",
                opacity: snapShot.isDragging ? 0.9 : 1,
                background: snapShot.isDragging ? "#00000022" : "#ffffff",
                padding: "7px 10px",
                borderRadius: "7px",
              }}
            >
              {item?.label ? (
                <div
                  style={{
                    background: item.label.color,
                    color: item.label.labelColor,
                    width: "fit-content",
                    borderRadius: "10px",
                    padding: "3px 10px",
                    fontSize: 12,
                    fontWeight: "500",
                    boxShadow: "0px 1px 5px #00000050",
                  }}
                >
                  {item.label?.label}
                </div>
              ) : null}
              <span>{item.text}</span>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default DragItem;
