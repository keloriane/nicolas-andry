"use client";
import React, { createContext, useContext, useMemo } from "react";

import { NAVIGATION_QUERYType } from "@/types";

interface FooterContextType {
  navigationData: NAVIGATION_QUERYType[];
  atelierNavData: any[];
}

const FooterContext = createContext<FooterContextType | undefined>(undefined);

export const useFooter = () => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error("useFooter must be used within a FooterProvider");
  }
  return context;
};

/**
 * Receives the footer navigation data already fetched server-side and
 * exposes it via context. No client-side fetching here on purpose.
 */
export const FooterProvider: React.FC<{
  children: React.ReactNode;
  navigationData: NAVIGATION_QUERYType[];
  atelierNavData: any[];
}> = ({ children, navigationData, atelierNavData }) => {
  const value = useMemo(
    () => ({ navigationData, atelierNavData }),
    [navigationData, atelierNavData]
  );
  return (
    <FooterContext.Provider value={value}>{children}</FooterContext.Provider>
  );
};
