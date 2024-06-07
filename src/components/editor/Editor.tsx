"use client";
import {
  useCreateBlockNote,
  DragHandleButton,
  SideMenu,
  SideMenuController,
} from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useState } from "react";

export default function Editor() {
  const [markdown, setMarkdown] = useState<string>("");

  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Chief Complain:",
            styles: { bold: true, underline: true },
          },
        ],
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Hopi:",
            styles: { bold: true, underline: true },
          },
        ],
      },
    ],
  });

  const onChange = async () => {
    // Converts the editor's contents from Block objects to Markdown and store to state.
    // const markdown = await editor.blocksToMarkdownLossy(editor.document);
    // setMarkdown(markdown);
  };

  console.log(markdown);
  // Renders the editor instance.
  return (
    <BlockNoteView
      editor={editor}
      sideMenu={true}
      onBlur={onChange}
      theme="light"
      style={{ height: "80vh" }}
    >
      <SideMenuController
        sideMenu={(props) => (
          <SideMenu {...props}>
            {/* Button which removes the hovered block. */}
            <DragHandleButton {...props} />
          </SideMenu>
        )}
      />
    </BlockNoteView>
  );
}
