import React from "react";
import styled from "styled-components";
import ResponsiveText from "../ResponsiveText";
import { theme } from "@/styles/theme";
import { archivo } from "@/app/font";
import { PortableText } from "next-sanity";

const AgendaContainer = styled.div`
  display: flex;

  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 550px;
  margin: 20px auto;

  border: 1px solid ${theme.colors.black};
  padding: 20px;

  h3 {
    font-weight: 700;
  }

  a {
    color: #0000ee;
  }
  a:visited {
    color: #551a8b;
  }

  h2 {
    font-size: 20px;
    color: ${theme.colors.black};
  }
`;

const DateContainer = styled.div`
  max-width: 300px;
  top: -30px;
  left: -30px;

  p {
    font-size: 24px;
    padding: 9px;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 22px;
    @media screen and (max-width: 760px) {
      position: relative;
      top: 0;
      left: 0;
    }
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
  padding: 20px;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const AgendaCard = ({
  date,
  details,
  location,
  title,
  contact,
  accent,
}: {
  date: string;
  details: [];
  location: string;
  title: string;
  contact: [];
  accent: boolean;
}) => {
  return (
    <AgendaContainer className={archivo.className}>
      <DateContainer
        style={
          accent
            ? {
                backgroundColor: theme.colors.orangeL,
                color: "#01171A",
                display: "inline-flex",
                position: "relative",
                justifyContent: "center",
              }
            : {
                backgroundColor: "#01171A",
                color: theme.colors.orangeL,
                display: "inline-flex",
                position: "relative",
                justifyContent: "center",
              }
        }
      >
        <ResponsiveText sizes={["12"]}>{date}</ResponsiveText>
      </DateContainer>
      <TextContainer>
        <h3>{title}</h3>
        <div className="rich-text">
          <PortableText value={details} />
        </div>
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
        <div className="rich-text">
          {contact ? <PortableText value={contact} /> : ""}
        </div>
      </InfoContainer>
    </AgendaContainer>
  );
};
export default React.memo(AgendaCard);
