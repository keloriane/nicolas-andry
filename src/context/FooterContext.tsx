"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
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

const FooterProviderComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [navigationData, setNavigationData] = useState<NAVIGATION_QUERYType[]>(
    []
  );

  useEffect(() => {
    client
      .fetch(NAVIGATION_QUERY)
      .then((data) => {
        setNavigationData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const value = useMemo(() => ({ navigationData }), [navigationData]);

  return (
    <FooterContext.Provider value={value}>{children}</FooterContext.Provider>
  );
};

// Wrap FooterProviderComponent with React.memo
export const FooterProvider = React.memo(FooterProviderComponent);
