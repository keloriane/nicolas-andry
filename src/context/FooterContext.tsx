"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { NAVIGATION_QUERYType } from "@/types";
import { ATELIER_NAV, NAVIGATION_QUERY } from "../../sanity/lib/queries";
import { client } from "../../sanity/lib/client";

interface FooterContextType {
  navigationData: NAVIGATION_QUERYType[];
  atelierNavData: any[]; // Update this type according to the structure of ATELIER_NAV data
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
  const [atelierNavData, setAtelierNavData] = useState<any[]>([]); // Adjust the type as necessary

  useEffect(() => {
    Promise.all([client.fetch(NAVIGATION_QUERY), client.fetch(ATELIER_NAV)])
      .then(([navigationDataResult, atelierNavDataResult]) => {
        setNavigationData(navigationDataResult);
        setAtelierNavData(atelierNavDataResult);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const value = useMemo(
    () => ({ navigationData, atelierNavData }),
    [navigationData, atelierNavData]
  );

  return (
    <FooterContext.Provider value={value}>{children}</FooterContext.Provider>
  );
};

// Wrap FooterProviderComponent with React.memo
export const FooterProvider = React.memo(FooterProviderComponent);
