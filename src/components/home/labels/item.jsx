import * as React from "react";

function HomeLabel({ label, onEdit }) {
  // state edit label
  const [isEdit, setIsEdit] = React.useState(false);
  // state label
  const [title, setTitle] = React.useState(label.label);

  React.useEffect(() => {
    if (!isEdit) onEdit(label.id, title);
  }, [isEdit]);

  return (
    <div
      style={{
        background: label.color,
        padding: "5px 10px",
        fontSize: 14,
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <input
        defaultValue={title}
        style={{
          background: "transparent",
          border: "transparent",
          outline: "none",
          width: "100%",
          color: label.labelColor,
        }}
        readOnly={!isEdit}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        style={{ minWidth: "50px" }}
        onClick={() => setIsEdit((crt) => !crt)}
      >
        {isEdit ? "Save" : "Edit"}
      </button>
    </div>
  );
}

export default HomeLabel;
