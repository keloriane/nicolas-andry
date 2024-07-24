import Menu from "@/components/common/Menu";
import Procedures from "@/components/Procedures";
import React from "react";
import { PARCOURS_QUERY } from "../../../sanity/lib/queries";
import Parcours from "@/components/Parcours";
import { loadQuery } from "../../../sanity/lib/store";
import AboutSection from "@/components/About";
import Separator from "@/components/common/Separator";

interface ParcoursData {
  parcours: [{ year: string; description: [] }];
  presentationTitle: string;
  imageProfile: string;
  presentationText: [];
}

export default async function AboutPage() {
  const parcours = await loadQuery<ParcoursData>(PARCOURS_QUERY);

  return (
    <div>
      <Menu />
      <section style={{ paddingTop: "150px" }}>
        <AboutSection
          presentationTitle={parcours.data.presentationTitle}
          imageProfile={parcours.data.imageProfile}
          presentationText={parcours.data.presentationText}
        />
        <Separator />
        <Parcours
          presentationTitle={parcours.data.presentationTitle}
          parcours={parcours.data.parcours}
          imageProfile={parcours.data.imageProfile}
          presentationText={parcours.data.presentationText}
        />
      </section>
    </div>
  );
}
