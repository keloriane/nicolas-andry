import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ResponsiveText from "../ResponsiveText";
import { theme } from "@/styles/theme";
import { archivo } from "@/app/font";
import { PortableText } from "next-sanity";

const AgendaContainer = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;
  border: 1px solid ${theme.colors.orange};
  width: 100%;
  max-width: 550px;
  margin: 0 auto;

  h2 {
    font-size: 20px;
    color: ${theme.colors.black};
  }
`;

const DateContainer = styled.div`
  color: #fff2e3;
  display: inline-flex;
  p {
    background-color: ${theme.colors.black};
    padding: 5px;
    font-weight: 700;
  }
`;
const LocationContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const TextContainer = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 5px;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  p {
    font-size: 15px;
  }
`;

const AgendaCard = ({
  date,
  details,
  location,
  title,
  contact,
}: {
  date: string;
  details: [];
  location: string;
  title: string;
  contact: [];
}) => {
  return (
    <AgendaContainer className={archivo.className}>
      <DateContainer>
        <ResponsiveText sizes={["12"]}>{date}</ResponsiveText>
      </DateContainer>
      <TextContainer>
        <h3>{title}</h3>
        <PortableText value={details} />
      </TextContainer>

      <InfoContainer>
        {location ? (
          <LocationContainer>
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.48615 13.2309C0.702344 7.74556 0 7.18259 0 5.16663C0 2.40519 2.23857 0.166626 5 0.166626C7.76143 0.166626 10 2.40519 10 5.16663C10 7.18259 9.29766 7.74556 5.51385 13.2309C5.26555 13.5896 4.73443 13.5896 4.48615 13.2309ZM5 7.24996C6.1506 7.24996 7.08333 6.31722 7.08333 5.16663C7.08333 4.01603 6.1506 3.08329 5 3.08329C3.8494 3.08329 2.91667 4.01603 2.91667 5.16663C2.91667 6.31722 3.8494 7.24996 5 7.24996Z"
                fill="black"
              />
            </svg>
            <p>{location}</p>
          </LocationContainer>
        ) : (
          ""
        )}
        <PortableText value={contact} />
      </InfoContainer>
    </AgendaContainer>
  );
};
export default AgendaCard;
