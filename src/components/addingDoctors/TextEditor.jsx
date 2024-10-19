import { useState } from "react";
import { Box, styled } from "@mui/material";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import BIcon from "../../assets/icons/others/B.svg";
import IIcon from "../../assets/icons/others/I.svg";
import UIcon from "../../assets/icons/others/Frame.svg";
import MenuLiIcon from "../../assets/icons/others/menu-li.svg";
import MenuOlIcon from "../../assets/icons/others/menu-ol.svg";
import {
  BIcon,
  IIcon,
  UIcon,
  MenuLiIcon,
  MenuOlIcon,
} from "../../assets/icons/others";

const Toolbar = ({ editor }) => {
  if (!editor) return null;

  const toolbarItems = [
    { icon: BIcon, action: editor.chain().focus().toggleBold, label: "bold" },
    {
      icon: IIcon,
      action: editor.chain().focus().toggleItalic,
      label: "italic",
    },
    {
      icon: UIcon,
      action: editor.chain().focus().toggleUnderline,
      label: "underline",
    },
    {
      icon: MenuLiIcon,
      action: editor.chain().focus().toggleBulletList,
      label: "bulletList",
    },
    {
      icon: MenuOlIcon,
      action: editor.chain().focus().toggleOrderedList,
      label: "orderedList",
    },
  ];

  return (
    <StyledToolbar>
      {toolbarItems.map(({ icon, action, label }) => (
        <button
          key={label}
          type="button"
          onClick={() => action().run()}
          className={editor.isActive(label) ? "is-active btn" : "btn"}
          aria-label={label}
        >
          {icon}
        </button>
      ))}
    </StyledToolbar>
  );
};

export const TextEditor = ({ initialContent, onChange, error }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const editor = useEditor({
    content: initialContent,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: "Введите описание специалиста" }),
      Underline,
    ],
  });

  const events = {
    ishovered: isHovered.toString(),
    isfocused: isFocused.toString(),
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
  };

  return (
    <Box>
      <Toolbar editor={editor} />
      <StyledTextarea editor={editor} error={error?.toString()} {...events} />
    </Box>
  );
};

const StyledToolbar = styled(Box)(({ error, ishovered, isfocused }) => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  borderRadius: "4px 4px 0 0",
  padding: "24px 58px",
  height: "40px",
  border: `1px solid ${
    isfocused === "true"
      ? "#D9D9D9"
      : error === "true"
        ? "#D9D9D9"
        : ishovered === "true"
          ? "#D9D9D9"
          : "#D9D9D9"
  }`,
  borderBottom: "0px",

  "& > .btn": {
    border: "none",
    background: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "& > .is-active > svg > path": {
    fill: "#D9D9D9",
  },
}));

const StyledTextarea = styled(EditorContent)(
  ({ error, ishovered, isfocused }) => ({
    "& > .ProseMirror": {
      borderRadius: "0 0 4px 4px",
      minHeight: "300px",
      padding: "20px",
      width: "1000px",
      height: "214px",
      border: `1px solid ${
        error === "true"
          ? "#D9D9D9"
          : ishovered === "true"
            ? "#D9D9D9"
            : "#D9D9D9"
      }`,

      "&.ProseMirror-focused": {
        border: `1px solid ${isfocused === "true" && "#D9D9D9"}`,
        outline: "none",
      },

      "& > p.is-editor-empty:last-child::before": {
        color: "#adb5bd",
        content: "attr(data-placeholder)",
        float: "left",
        height: "0",
        pointerEvents: "none",
      },

      "& > *": {
        wordBreak: "break-word",
      },
    },
  })
);
