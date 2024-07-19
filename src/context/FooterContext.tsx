"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { loadQuery } from "@sanity/react-loader";
import { NAVIGATION_QUERYType } from "@/types";
import { NAVIGATION_QUERY } from "../../sanity/lib/queries";
import { client } from "../../sanity/lib/client";

interface FooterContextType {
  navigationData: NAVIGATION_QUERYType[];
}

const FooterContext = createContext<FooterContextType | undefined>(undefined);

export const useFooter = () => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error("useFooter must be used within a FooterProvider");
  }
  return context;
};

export const FooterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [navigationData, setNavigationData] = useState<NAVIGATION_QUERYType[]>(
    []
  );

  useEffect(() => {
    client
      .fetch(NAVIGATION_QUERY)
      .then((data) => {
        console.log(data);
        setNavigationData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <FooterContext.Provider value={{ navigationData }}>
      {children}
    </FooterContext.Provider>
  );
};
