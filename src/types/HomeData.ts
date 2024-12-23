import { NAVIGATION_QUERYType } from "./NavigationType";

export interface HomeData {
  title: string;
  subtitle: string;
  postGrid: [{ image: string; description: []; title: string; slug: string }];
  demarches: [{ title: string; description: [] }];
  parcours: [{ year: string; description: [] }];
  imageProfile: string;
  presentationText: [];
  procedureTitle: string;
  presentationTitle: string;
  navigation: NAVIGATION_QUERYType[];
  introductionText: [];
  imageHeader: [];
}
