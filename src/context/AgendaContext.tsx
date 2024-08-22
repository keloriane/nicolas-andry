"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

import {
  AGENDA_ATELIER_QUERY,
  AGENDA_CREATION_QUERY,
  AGENDA_QUERY,
} from "@/../sanity/lib/queries";
import { AgendaMain, AgendaType } from "@/types/AgendaType";
import { client } from "../../sanity/lib/client";

type AgendaDataContextType = {
  agendaMain: AgendaMain | null;
  agendaCreation: AgendaType[] | null;
  agendaAtelier: AgendaType[] | null;
};

const AgendaDataContext = createContext<AgendaDataContextType | undefined>(
  undefined
);

export const useAgendaData = () => {
  const context = useContext(AgendaDataContext);
  if (!context) {
    throw new Error("useAgendaData must be used within an AgendaDataProvider");
  }
  return context;
};

export const AgendaDataProvider = ({
  children,
  locale = "fr",
}: {
  children: React.ReactNode;
  locale: string;
}) => {
  const [agendaMain, setAgendaMain] = useState<AgendaMain | null>(null);
  const [agendaCreation, setAgendaCreation] = useState<AgendaType[] | null>(
    null
  );
  const [agendaAtelier, setAgendaAtelier] = useState<AgendaType[] | null>(null);

  useEffect(() => {
    async function fetchAgendaData() {
      const agendaData = await Promise.all([
        client.fetch<AgendaMain>(AGENDA_QUERY, { locale }),
        client.fetch<AgendaType[]>(AGENDA_CREATION_QUERY, { locale }),
        client.fetch<AgendaType[]>(AGENDA_ATELIER_QUERY, { locale }),
      ]);

      // Extract the actual data from the response and set it in state
      setAgendaMain(agendaData[0]);
      setAgendaCreation(agendaData[1]);
      setAgendaAtelier(agendaData[2]);
    }

    fetchAgendaData();
  }, [locale]);

  return (
    <AgendaDataContext.Provider
      value={{ agendaMain, agendaCreation, agendaAtelier }}
    >
      {children}
    </AgendaDataContext.Provider>
  );
};
