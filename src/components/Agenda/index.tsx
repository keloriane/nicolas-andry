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

const AgendaSection = styled.section`
  display: flex;
  flex-direction: column;

  padding-bottom: 75px;
  .agenda_title {
    text-align: center;
    padding: 40px 0px;
  }
  .agenda_cta {
    text-align: center;
  }
`;
const AgendaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleContainer = styled.div`
  text-align: center;
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
}: {
  playfare: string;
  agendaPage?: boolean;
  homePage?: boolean;
  agendaCreation: AgendaType[];
  agendaAtelier: AgendaType[];
  title: string;
  introductionText: [];
}) => {
  return (
    <AgendaSection>
      {homePage ? (
        <AgendaTextContainer>
          <TitleContainer className={playfare}>
            <ResponsiveText as="h2" sizes={["20", "24", "45"]}>
              {title}
            </ResponsiveText>
          </TitleContainer>

          <div className={archivo.className}>
            <div className="rich-text">
              <PortableText value={introductionText} />
            </div>
          </div>
        </AgendaTextContainer>
      ) : (
        ""
      )}
      <GridContainer colCount={24} colGap={20} rowGap={20}>
        <Col column={[2, 2, 2, 3, 3, 3]} span={[22, 22, 22, 12, 9, 9]}>
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
            <AgendaCard
              contact={agendaCreation[0].contact}
              title={agendaCreation[0].title}
              location={agendaCreation[0].location}
              date={agendaCreation[0].date}
              details={agendaCreation[0].descriptionB}
            />
          </AgendaContainer>
        </Col>
        <Col column={[2, 2, 2, 16, 14, 14]} span={[22, 22, 22, 12, 9, 9]}>
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
            <AgendaCard
              contact={agendaAtelier[0].contact}
              title={agendaAtelier[0].title}
              location={agendaAtelier[0].location}
              date={agendaAtelier[0].date}
              details={agendaAtelier[0].descriptionB}
            />
          </AgendaContainer>
        </Col>
      </GridContainer>
      {agendaPage ? (
        <GridContainer colCount={12} rowGap={75}>
          <Col column={6} span={2} className="agenda_cta">
            <div style={{ marginTop: "100px" }}>
              <Button text="Voir l'agenda" href="/agenda" />
            </div>
          </Col>
        </GridContainer>
      ) : (
        ""
      )}
    </AgendaSection>
  );
};
export default Agenda;
