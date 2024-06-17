"use client";

import React, { createContext, useContext } from "react";
import { AgendaMain, AgendaType } from "@/types/AgendaType";

interface HomeData {
  title: string;
  subtitle: string;
  postGrid: [{ image: string; description: []; title: string; slug: string }];
  demarches: [{ title: string; description: [] }];
  parcours: [{ year: string; description: [] }];
  imageProfile: string;
  presentationText: [];
  procedureTitle: string;
  presentationTitle: string;
}

interface HomeDataContextType {
  homeData: HomeData | null;
  agendaData: AgendaMain | null;
  agendaCreation: AgendaType[] | null;
  agendaAtelier: AgendaType[] | null;
}

const HomeDataContext = createContext<HomeDataContextType | undefined>(
  undefined
);

export const useHomeData = () => {
  const context = useContext(HomeDataContext);
  if (!context) {
    throw new Error("useHomeData must be used within a HomeDataProvider");
  }
  return context;
};

export const HomeDataProvider: React.FC<{
  children: React.ReactNode;
  value: HomeDataContextType;
}> = ({ children, value }) => {
  return (
    <HomeDataContext.Provider value={value}>
      {children}
    </HomeDataContext.Provider>
  );
};
