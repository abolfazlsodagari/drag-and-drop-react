import * as React from "react";

import DragAndDrop from "./../drag-and-drop";
import HomeLabels from "./labels";

function HomeContent() {
  // generated Id for Tasks
  const generatedId = () => {
    return Math.floor(Math.random() * 10000000);
  };

  // mock data labels
  const [labelsData, setLabelsData] = React.useState([
    {
      id: generatedId(),
      color: "#333333",
      label: "black",
      labelColor: "#ffffff",
    },
    {
      id: generatedId(),
      color: "orange",
      label: "orange",
      labelColor: "#ffffff",
    },
    {
      id: generatedId(),
      color: "yellow",
      label: "yellow",
      labelColor: "#000",
    },
  ]);
  // mock data drag and drop
  const dummyData = [
    {
      title: "Do",
      tasks: [
        {
          label: labelsData.find((label) => label.label === "black"),
          id: generatedId(),
          text: "Do the well done!",
        },
        {
          id: generatedId(),
          text: "Run the workshop!",
        },
        {
          id: generatedId(),
          text: "To to the school!",
        },
      ],
    },
    {
      title: "Doing",
      tasks: [
        {
          label: labelsData.find((label) => label.label === "orange"),
          id: generatedId(),
          text: "Going to shopping center!",
        },
        {
          id: generatedId(),
          text: "Go to the cinema",
        },
      ],
    },
    {
      title: "Test",
      tasks: [
        {
          id: generatedId(),
          text: "test task",
        },
      ],
    },
    {
      title: "Check",
      tasks: [
        {
          id: generatedId(),
          text: "check task",
        },
      ],
    },
    {
      title: "Done",
      tasks: [
        {
          label: labelsData.find((label) => label.label === "yellow"),
          id: generatedId(),
          text: "done task",
        },
      ],
    },
  ];

  // on edit function
  const onEditLabel = (id, newLabel) => {
    setLabelsData((crt) => {
      const newLabels = crt.map((label) => {
        if (label.id === id) label.label = newLabel;
        return label;
      });
      return newLabels;
    });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* labels */}
      <HomeLabels items={labelsData} onEdit={onEditLabel} />
      {/* drag and drop box */}
      <DragAndDrop items={dummyData} />
    </div>
  );
}

export default HomeContent;
