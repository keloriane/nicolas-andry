export interface AgendaType {
  description: string;
  descriptionB: [];
  eventType: string;
  date: string;
  title: string;
  location: string;
  contact: [];
}

export interface AgendaMain {
  agenda: AgendaType[];
  title: string;
  introductionText: [];
}
