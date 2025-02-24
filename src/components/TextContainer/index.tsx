import React, { useEffect, useRef, useState } from "react";
import { PortableText } from "next-sanity";

const TextContainer = ({ section }: { section: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSingleTitle, setIsSingleTitle] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateTitleCount = () => {
      const h2Count = containerRef.current?.querySelectorAll("h2").length || 0;
      setIsSingleTitle(h2Count === 1);
    };

    // Run an initial check after a slight delay to allow PortableText to render
    const timer = setTimeout(updateTitleCount, 50);

    // Set up MutationObserver to detect DOM changes
    const observer = new MutationObserver(updateTitleCount);
    observer.observe(containerRef.current, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [section]);

  return (
    <div className="text_container" ref={containerRef}>
      <h2
        style={isSingleTitle ? { textAlign: "center" } : { textAlign: "left" }}
      >
        {section.title || section.title_content}
      </h2>
      <PortableText
        value={
          section.content_text ? section.content_text : section.blockContent
        }
      />
    </div>
  );
};

export default TextContainer;
