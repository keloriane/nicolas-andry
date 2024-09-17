"use client";
import React from "react";
import AgendaCard from "../common/AgendaCard";
import styled from "styled-components";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import Button from "../common/Button";
import ResponsiveText from "../common/ResponsiveText";
import { archivo } from "@/app/font";
import { AgendaType } from "@/types/AgendaType";
import { PortableText } from "next-sanity";
import home from "../../../sanity/schemaTypes/home";
import { CTA } from "../common/Button/cta";

const AgendaSection = styled.section`
  display: flex;
  flex-direction: column;

  padding-bottom: 75px;
  .agenda_title {
    text-align: center;
    padding: 40px 0px;
  }
  .cta_container {
    div {
      min-width: 135px;
      text-align: center;
    }
  }
  .agenda_cta {
    text-align: center;
  }
  .agenda_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;
const AgendaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleContainer = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;

const AgendaTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
  div {
    margin-bottom: 20px;
  }
  p {
    text-align: center;
  }
`;

const Agenda = ({
  playfare,
  homePage = false,
  agendaPage = false,
  agendaCreation,
  agendaAtelier,
  title = "",
  introductionText,
  locale,
  cta,
}: {
  playfare: string;
  agendaPage?: boolean;
  homePage?: boolean;
  agendaCreation: any;
  agendaAtelier: any;
  title: string;
  introductionText: [];
  locale: string;
  cta?: string;
}) => {
  return (
    <AgendaSection>
      <AgendaTextContainer>
        <TitleContainer className={playfare}>
          <ResponsiveText as="h2" sizes={["20", "24", "45"]}>
            {title}
          </ResponsiveText>
        </TitleContainer>
        {homePage ? (
          <div className={archivo.className}>
            <div className="rich-text">
              <PortableText value={introductionText} />
            </div>
          </div>
        ) : (
          ""
        )}
      </AgendaTextContainer>

      <div className="agenda_wrapper">
        <div className="agenda_item">
          <div className="agenda_title">
            <ResponsiveText
              as="h3"
              sizes={["18px", "24px", "30px"]}
              className={archivo.className}
            >
              Agenda Creations
            </ResponsiveText>
          </div>
          <AgendaContainer>
            {homePage ? (
              <>
                <AgendaCard
                  contact={agendaCreation[0].contact}
                  title={agendaCreation[0].title}
                  location={agendaCreation[0].location}
                  date={agendaCreation[0].date}
                  details={agendaCreation[0].descriptionB}
                />
                <AgendaCard
                  contact={agendaCreation[1].contact}
                  title={agendaCreation[1].title}
                  location={agendaCreation[1].location}
                  date={agendaCreation[1].date}
                  details={agendaCreation[1].descriptionB}
                />
              </>
            ) : (
              agendaCreation.map((agenda: AgendaType, i: number) => (
                <AgendaCard
                  key={i}
                  contact={agenda.contact}
                  title={agenda.title}
                  location={agenda.location}
                  date={agenda.date}
                  details={agenda.descriptionB}
                />
              ))
            )}
          </AgendaContainer>
        </div>
        <div className="agenda_item">
          <div className="agenda_title">
            <ResponsiveText
              as="h3"
              sizes={["18px", "24px", "30px"]}
              className={archivo.className}
            >
              Agenda Atelier
            </ResponsiveText>
          </div>
          <AgendaContainer>
            {homePage ? (
              <>
                <AgendaCard
                  contact={agendaAtelier[0].contact}
                  title={agendaAtelier[0].title}
                  location={agendaAtelier[0].location}
                  date={agendaAtelier[0].date}
                  details={agendaAtelier[0].descriptionB}
                />
                {/* <AgendaCard
                  contact={agendaAtelier[1].contact}
                  title={agendaAtelier[1].title}
                  location={agendaAtelier[1].location}
                  date={agendaAtelier[1].date}
                  details={agendaAtelier[1].descriptionB}
                /> */}
              </>
            ) : (
              agendaAtelier.map((agenda: AgendaType, i: number) => (
                <AgendaCard
                  key={i}
                  contact={agenda.contact}
                  title={agenda.title}
                  location={agenda.location}
                  date={agenda.date}
                  details={agenda.descriptionB}
                />
              ))
            )}
          </AgendaContainer>
        </div>
      </div>
      {homePage ? (
        <div className="cta_container" style={{ margin: "100px auto" }}>
          <CTA href={`/${locale}/agenda`}>{cta}</CTA>
        </div>
      ) : (
        ""
      )}
    </AgendaSection>
  );
};
export default Agenda;
