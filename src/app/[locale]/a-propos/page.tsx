import Procedures from "@/components/Procedures";
import React from "react";
import { DEMARCHE_QUERY, PARCOURS_QUERY } from "../../../../sanity/lib/queries";
import Parcours from "@/components/Parcours";
import { loadQuery } from "../../../../sanity/lib/store";
import AboutSection from "@/components/About";
import Separator from "@/components/common/Separator";
import { Metadata } from "next";
import { DEFAULT_LOCALE, getAlternates, isLocale } from "@/lib/seo";

interface ParcoursData {
  parcours: [{ year: string; description: [] }];
  presentationTitle: string;
  imageProfile: string;
  presentationText: [];
}
interface ProceduresData {
  demarches: [{ title: string; description: [] }];

  procedureTitle: string;
  procedureText: string;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  return {
    title: "A propos",
    description: "Photography",
    alternates: getAlternates(locale, "a-propos"),
  };
}

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const parcours = await loadQuery<ParcoursData>(PARCOURS_QUERY);
  const procedures = await loadQuery<ProceduresData>(DEMARCHE_QUERY);

  return (
    <div>
      <section style={{ paddingTop: "150px" }}>
        <AboutSection
          presentationTitle={parcours.data.presentationTitle}
          imageProfile={parcours.data.imageProfile}
          homePage={false}
          presentationText={parcours.data.presentationText}
        />

        <Procedures
          demarche={procedures.data.demarches}
          title={procedures.data.procedureTitle}
          text={procedures.data.procedureText}
          locale={locale}
        />

        <Parcours
          presentationTitle={parcours.data.presentationTitle}
          parcours={parcours.data.parcours}
          imageProfile={parcours.data.imageProfile}
          presentationText={parcours.data.presentationText}
        />

        <Separator size={100} />
      </section>
    </div>
  );
}
