"use client";
import React, { useEffect } from "react";
import AgendaCard from "../common/AgendaCard";
import styled from "styled-components";
import ResponsiveText from "../common/ResponsiveText";
import { archivo } from "@/app/font";
import { AgendaType } from "@/types/AgendaType";
import { PortableText } from "next-sanity";
import { CTA } from "../common/Button/cta";
import PrelineTitle from "../common/PrelineTitle";

const AgendaSection = styled.section`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    padding: 25px;
  }

  padding-top: 50px;
  padding-bottom: 75px;
  .agenda_title {
    text-align: center;
    padding: 30px 0px;
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
  padding-bottom: 30px;
`;

const AgendaTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 600px;
  padding: 20px;
  margin: 0 auto;

  p {
    text-align: center;
    height: 17px;
    display: inline-block;
    margin-top: 30px;
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
  titleAgendaCreation,
  titleAgendaAtelier,
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
  titleAgendaCreation: string;
  titleAgendaAtelier: string;
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <AgendaSection>
      <AgendaTextContainer>
        <TitleContainer className={playfare}>
          <ResponsiveText as="h2" sizes={["20", "24", "45"]}>
            <PrelineTitle>{title}</PrelineTitle>
          </ResponsiveText>
        </TitleContainer>

        <div className={archivo.className}>
          <div className="rich-text">
            <PortableText value={introductionText} />
          </div>
        </div>
      </AgendaTextContainer>

      <div className="agenda_wrapper">
        <div className="agenda_item">
          <div className="agenda_title">
            <ResponsiveText
              as="h3"
              sizes={["18px", "24px", "30px"]}
              className={archivo.className}
            >
              {titleAgendaCreation}
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
                  accent
                />
                <AgendaCard
                  contact={agendaCreation[1].contact}
                  title={agendaCreation[1].title}
                  location={agendaCreation[1].location}
                  date={agendaCreation[1].date}
                  details={agendaCreation[1].descriptionB}
                  accent
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
                  accent
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
              {titleAgendaAtelier}
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
                  accent={false}
                />
                <AgendaCard
                  contact={
                    agendaAtelier[1].contact ? agendaAtelier[1].contact : ""
                  }
                  title={agendaAtelier[1].title ? agendaAtelier[1].title : ""}
                  location={
                    agendaAtelier[1].location ? agendaAtelier[1].location : ""
                  }
                  date={agendaAtelier[1].date ? agendaAtelier[1].date : ""}
                  details={
                    agendaAtelier[1].descriptionB
                      ? agendaAtelier[1].descriptionB
                      : ""
                  }
                  accent={false}
                />
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
                  accent={false}
                />
              ))
            )}
          </AgendaContainer>
        </div>
      </div>
      {agendaPage ? (
        ""
      ) : (
        <div className="cta_container" style={{ margin: "100px auto" }}>
          <CTA href={`/${locale}/agenda`}>{cta}</CTA>
        </div>
      )}
    </AgendaSection>
  );
};
export default Agenda;
