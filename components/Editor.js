import React, { useRef } from "react";
import EditorJs from "react-editor-js";
import { editor_tools, editor_data } from "../utils/constants";

const Editor = () => {
  const instanceRef = useRef(null);

  async function handleSave() {
    const savedData = await instanceRef.current.save();

    console.log("savedData", savedData);
  }

  return (
    <div>
      <button onClick={handleSave}>Save your articles</button>

      {window && (
        <EditorJs
          instanceRef={(instance) => (instanceRef.current = instance)}
          data={editor_data}
          tools={editor_tools}
        />
      )}
    </div>
  );
};

export default Editor;
