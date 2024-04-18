"use client";
import React from "react";
import AgendaCard from "../common/AgendaCard";
import styled from "styled-components";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import Button from "../common/Button";
import ResponsiveText from "../common/ResponsiveText";

const AgendaSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 75px;
  .agenda_title {
    text-align: center;
    padding: 40px 0px;
  }
`;
const AgendaContainer = styled.div`
  display: flex;
  padding: 0 20px;
  .agenda__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
`;
const Agenda = ({ playfare }: { playfare: string }) => {
  return (
    <AgendaSection>
      <GridContainer colCount={24} rowGap={75}>
        <Col column={[7, 7, 7, 7, 9]} span={[12, 12, 12, 12, 7]}>
          <TitleContainer>
            <h2 className={playfare}>Agenda recherches et créations</h2>
          </TitleContainer>
        </Col>
      </GridContainer>
      <GridContainer colCount={24} colGap={20} rowGap={20}>
        <Col column={[1, 1, 1, 5, 5, 5]} span={[24, 24, 24, 16, 8, 8]}>
          <div className="agenda_title">
            <ResponsiveText as="h3" sizes={["18px", "24px", "30px"]}>
              Agenda Creations
            </ResponsiveText>
          </div>
          <AgendaContainer>
            <div className="agenda__wrapper">
              <AgendaCard
                date={" 18/04 au 08/06 "}
                details={
                  "Manuel pour développer l'argentique et penser la photographie autrement "
                }
              />
              <AgendaCard
                date={" 18/04 au 08/06 "}
                details={
                  "Manuel pour développer l'argentique et penser la photographie autrement "
                }
              />
            </div>
          </AgendaContainer>
        </Col>
        <Col column={[1, 1, 1, 5, 13, 13]} span={[24, 24, 24, 16, 8, 8]}>
          <div className="agenda_title">
            <ResponsiveText as="h3" sizes={["18px", "24px", "30px"]}>
              Agenda Ateliers
            </ResponsiveText>
          </div>
          <AgendaContainer>
            <div className="agenda__wrapper">
              <AgendaCard
                date={" 18/04 au 08/06 "}
                details={
                  "Manuel pour développer l'argentique et penser la photographie autrement "
                }
              />
              <AgendaCard
                date={" 18/04 au 08/06 "}
                details={
                  "Manuel pour développer l'argentique et penser la photographie autrement "
                }
              />
            </div>
          </AgendaContainer>
        </Col>
      </GridContainer>
      <GridContainer colCount={12} rowGap={75}>
        <Col column={6} span={2}>
          <button>hello</button>
        </Col>
      </GridContainer>
    </AgendaSection>
  );
};
export default Agenda;
