import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DragItem from "./drag-item";
import DropItem from "./drop-item";

//Drag Drop Context
function onDragEnd(data, setData) {
  // Getting source and destination from data
  const { source, destination } = data;

  if(!source || !destination) {
    return null;
  }

  if (source.droppableId === destination.droppableId) {
    //We are dragging and drop in the same column
    setData((crt) => {
      const sourceColumn = crt[source.droppableId];
      let sourceColumnTasks = [...sourceColumn.tasks];
      // Remove source task from source column
      let removedSourceTask = sourceColumnTasks.splice(source.index, 1)?.[0];
      //Adding source task to destination column
      sourceColumnTasks.splice(destination.index, 0, removedSourceTask);

      return {
        ...crt,
        [source.droppableId]: {
          ...crt[source.droppableId],
          tasks: sourceColumnTasks,
        },
      };
    });
  } else {
    //We are dragging and drop in other column
    setData((crt) => {
      const sourceColumn = crt[source.droppableId];
      const destinationColumn = crt[destination.droppableId];
      let sourceColumnTasks = [...sourceColumn.tasks];

      // Remove source task from source column
      let removedSourceTask = sourceColumnTasks.splice(source.index, 1)?.[0];
      let destinationColumnTasks = [...destinationColumn.tasks];
      //Adding source task to destination column
      destinationColumnTasks.splice(destination.index, 0, removedSourceTask);

      return {
        ...crt,
        //Remove item from source column
        [source.droppableId]: {
          ...crt[source.droppableId],
          tasks: sourceColumnTasks,
        },
        //Add item to destination column
        [destination.droppableId]: {
          ...crt[destination.droppableId],
          tasks: destinationColumnTasks,
        },
      };
    });
  }
}

function DragAndDrop({ items }) {
  const [data, setData] = useState(items);

  return (
    <DragDropContext onDragEnd={(data) => onDragEnd(data, setData)}>
      <div className="kanban">
        {Object.entries(data).map(([key, item]) => (
          <DropItem key={key} index={key} item={item}>
            {item.tasks.map((task, index) => (
              <DragItem item={task} key={index} index={index} />
            ))}
          </DropItem>
        ))}
      </div>
    </DragDropContext>
  );
}

export default DragAndDrop;
