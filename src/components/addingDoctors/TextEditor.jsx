import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const TextEditor = () => {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };

  return (
    <div>
      <a>Описание</a>

      <ReactQuill
        value={text}
        onChange={handleChange}
        modules={modules}
        placeholder="Начните вводить текст..."
        style={{
          width: "1000px",
          height: "274px",
          position: "absolute",

          borderRadius: "4px",
        }}
      />
    </div>
  );
};
