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
  margin-top: 20px;
`;

const TitleContainer = styled.div`
  text-align: center;
  padding-bottom: 10px;
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

  const renderAgendaSection = (agenda: any[], title: string, accent = true) => {
    if (!agenda || agenda.length === 0) return null;

    return (
      <div className="agenda_item">
        <div className="agenda_title">
          <ResponsiveText
            as="h3"
            sizes={["22px", "24px", "30px"]}
            className={archivo.className}
          >
            {title}
          </ResponsiveText>
        </div>
        <AgendaContainer>
          {homePage ? (
            <>
              {agenda[0] && (
                <AgendaCard
                  contact={agenda[0].contact}
                  title={agenda[0].title}
                  location={agenda[0].location}
                  date={agenda[0].date}
                  details={agenda[0].descriptionB}
                  accent={accent}
                />
              )}
              {agenda[1] && (
                <AgendaCard
                  contact={agenda[1].contact}
                  title={agenda[1].title}
                  location={agenda[1].location}
                  date={agenda[1].date}
                  details={agenda[1].descriptionB}
                  accent={accent}
                />
              )}
            </>
          ) : (
            agenda.map((item: AgendaType, i: number) => (
              <AgendaCard
                key={i}
                contact={item.contact}
                title={item.title}
                location={item.location}
                date={item.date}
                details={item.descriptionB}
                accent={accent}
              />
            ))
          )}
        </AgendaContainer>
      </div>
    );
  };

  const hasEvents =
    (agendaCreation && agendaCreation.length > 0) ||
    (agendaAtelier && agendaAtelier.length > 0);

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
            <PortableText
              value={introductionText}
              components={{
                marks: {
                  link: ({ children, value }) => {
                    const target = (value?.href || "").startsWith("http")
                      ? "_blank"
                      : undefined;
                    return (
                      <a
                        href={value?.href}
                        target={target}
                        rel={
                          target === "_blank"
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {children}
                      </a>
                    );
                  },
                },
              }}
            />
          </div>
        </div>
      </AgendaTextContainer>

      {hasEvents ? (
        <div className="agenda_wrapper">
          {renderAgendaSection(agendaCreation, titleAgendaCreation)}
          {renderAgendaSection(agendaAtelier, titleAgendaAtelier, false)}
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "50px" }}>
          aucun événement à afficher
        </p>
      )}

      {!agendaPage && cta && (
        <div className="cta_container" style={{ margin: "100px auto" }}>
          <CTA href={`/${locale}/agenda`}>{cta}</CTA>
        </div>
      )}
    </AgendaSection>
  );
};

export default Agenda;
