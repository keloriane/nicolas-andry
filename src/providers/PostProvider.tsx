import React, { createContext, useContext, useState, ReactNode } from "react";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";

// Define context
interface PostContextData {
  activePost: Post | null;
  setActiveSlug: React.Dispatch<React.SetStateAction<string>>;
}

const PostContext = createContext<PostContextData | null>(null);

// Custom hook to consume the post context
const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};

// Post interface
interface Post {
  title: string;
  categories: string[];
  content: [];
  images: [{ url: string; alt: string }];
}

// Post provider component
const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [activeSlug, setActiveSlug] = useState<string>("ten-weingaert-2022");

  return (
    <PostContext.Provider value={{ activePost, setActiveSlug }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider, usePostContext };
