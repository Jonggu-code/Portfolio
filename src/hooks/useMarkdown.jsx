import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "github-markdown-css";

const MarkdownViewer = ({ filePath }) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((error) => console.error("Error loading Markdown file:", error));
  }, [filePath]);

  return (
    <div className="markdown-body p-4 bg-gray-100 rounded-md">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
