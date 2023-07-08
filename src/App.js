// import "./App.css";
// import DragAndDrop from "./components/drag-and-drop";

// function App() {
//   // data
//   const DUMMY_DATA = {
//     1: {
//       title: "Do",
//       tasks: [
//         {
//           id: 1,
//           text: "Do the well done!",
//         },
//         {
//           id: 2,
//           text: "Run the workshop!",
//         },
//         {
//           id: 3,
//           text: "To to the school!",
//         },
//       ],
//     },
//     2: {
//       title: "Doing",
//       tasks: [
//         {
//           id: 4,
//           text: "Going to shopping center!",
//         },
//         {
//           id: 5,
//           text: "Go to the cinema",
//         },
//       ],
//     },
//     3: {
//       title: "Test",
//       tasks: [
//         {
//           id: 6,
//           text: "test task",
//         },
//       ],
//     },
//     4: {
//       title: "Check",
//       tasks: [
//         {
//           id: 7,
//           text: "check task",
//         },
//       ],
//     },
//     5: {
//       title: "Done",
//       tasks: [
//         {
//           id: 8,
//           text: "done task",
//         },
//       ],
//     },
//   };

//   return (
//     <div
//       className="App"
//       style={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <DragAndDrop items={DUMMY_DATA} />
//     </div>
//   );
// }

// export default App;

import * as React from "react";
import "./App.css";
import DragAndDrop from "./components/drag-and-drop";

function App() {
  // data
  const DUMMY_DATA = [
    {
      title: "Do",
      tasks: [
        {
          id: 1,
          text: "Do the well done!",
        },
        {
          id: 2,
          text: "Run the workshop!",
        },
        {
          id: 3,
          text: "To to the school!",
        },
      ],
    },
    {
      title: "Doing",
      tasks: [
        {
          id: 4,
          text: "Going to shopping center!",
        },
        {
          id: 5,
          text: "Go to the cinema",
        },
      ],
    },
    {
      title: "Test",
      tasks: [
        {
          id: 6,
          text: "test task",
        },
      ],
    },
    {
      title: "Check",
      tasks: [
        {
          id: 7,
          text: "check task",
        },
      ],
    },
    {
      title: "Done",
      tasks: [
        {
          id: 8,
          text: "done task",
        },
      ],
    },
  ];

  const generatedId = () => {
    return Math.floor(Math.random() * 1000);
  };

  let convData = DUMMY_DATA.reduce((total, item) => {
    let id = generatedId();
    total.push([id, { ...item }]);
    return total;
  }, []);

  let convObj = [...Array(4)].reduce((total, item) => {
    let id = generatedId();
    total[id] = { id };
    return total;
  }, {});

  let newparams = [1, 2, 3, 4];

  const sum = newparams.reduce((total, item) => {
    return total + item;
  }, 0);

  console.log(sum, "SUM");

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DragAndDrop items={DUMMY_DATA} />
    </div>
  );
}

export default App;
