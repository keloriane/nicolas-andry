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

  @media screen and (max-width: 768px) {
    padding: 16px;
    margin: 16px auto;
  }

  @media screen and (max-width: 480px) {
    padding: 12px;
    margin: 12px auto;
  }

  h3 {
    font-weight: 700;
    @media screen and (max-width: 480px) {
      font-size: 18px;
      margin-top: 8px;
    }
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
  max-width: 320px;
  top: -30px;
  left: -30px;
  position: absolute;

  @media screen and (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    max-width: 100%;
    margin-bottom: 12px;
    align-self: flex-start;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
  }

  p {
    font-size: 24px;
    padding: 9px;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 22px;
    
    @media screen and (max-width: 768px) {
      font-size: 18px;
      padding: 8px 12px;
      margin: 0;
    }
    
    @media screen and (max-width: 480px) {
      font-size: 16px;
      padding: 6px 10px;
    }
  }
`;
const LocationContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  @media screen and (max-width: 480px) {
    gap: 4px;
    
    svg {
      width: 8px;
      height: 11px;
    }
    
    p {
      font-size: 14px;
    }
  }
`;

const ContactContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    gap: 8px;
    
    svg {
      width: 10px;
      height: 10px;
    }
    
    font-size: 14px;
  }
`;

const TextContainer = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 12px 0;
    gap: 16px;
  }

  @media screen and (max-width: 480px) {
    padding: 8px 0;
    gap: 12px;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  gap: 12px;

  @media screen and (max-width: 768px) {
    padding: 8px 0;
    gap: 10px;
  }

  @media screen and (max-width: 480px) {
    padding: 6px 0;
    gap: 8px;
  }
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
                justifyContent: "center",
              }
            : {
                backgroundColor: "#01171A",
                color: theme.colors.orangeL,
                display: "inline-flex",
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
        <ContactContainer className="rich-text">
          <svg
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 512"
            style={{ width: "12px", height: "12px" }}
          >
            <path
              fillRule="nonzero"
              d="M256 0c70.69 0 134.69 28.66 181.02 74.98C483.34 121.3 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.69 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.69 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-9.96 161.03c0-4.28.76-8.26 2.27-11.91 1.5-3.63 3.77-6.94 6.79-9.91 3-2.95 6.29-5.2 9.84-6.7 3.57-1.5 7.41-2.28 11.52-2.28 4.12 0 7.96.78 11.49 2.27 3.54 1.51 6.78 3.76 9.75 6.73 2.95 2.97 5.16 6.26 6.64 9.91 1.49 3.63 2.22 7.61 2.22 11.89 0 4.17-.73 8.08-2.21 11.69-1.48 3.6-3.68 6.94-6.65 9.97-2.94 3.03-6.18 5.32-9.72 6.84-3.54 1.51-7.38 2.29-11.52 2.29-4.22 0-8.14-.76-11.75-2.26-3.58-1.51-6.86-3.79-9.83-6.79-2.94-3.02-5.16-6.34-6.63-9.97-1.48-3.62-2.21-7.54-2.21-11.77zm13.4 178.16c-1.11 3.97-3.35 11.76 3.3 11.76 1.44 0 3.27-.81 5.46-2.4 2.37-1.71 5.09-4.31 8.13-7.75 3.09-3.5 6.32-7.65 9.67-12.42 3.33-4.76 6.84-10.22 10.49-16.31.37-.65 1.23-.87 1.89-.48l12.36 9.18c.6.43.73 1.25.35 1.86-5.69 9.88-11.44 18.51-17.26 25.88-5.85 7.41-11.79 13.57-17.8 18.43l-.1.06c-6.02 4.88-12.19 8.55-18.51 11.01-17.58 6.81-45.36 5.7-53.32-14.83-5.02-12.96-.9-27.69 3.06-40.37l19.96-60.44c1.28-4.58 2.89-9.62 3.47-14.33.97-7.87-2.49-12.96-11.06-12.96h-17.45c-.76 0-1.38-.62-1.38-1.38l.08-.48 4.58-16.68c.16-.62.73-1.04 1.35-1.02l89.12-2.79c.76-.03 1.41.57 1.44 1.33l-.07.43-37.76 124.7zm158.3-244.93c-41.39-41.39-98.58-67-161.74-67-63.16 0-120.35 25.61-161.74 67-41.39 41.39-67 98.58-67 161.74 0 63.16 25.61 120.35 67 161.74 41.39 41.39 98.58 67 161.74 67 63.16 0 120.35-25.61 161.74-67 41.39-41.39 67-98.58 67-161.74 0-63.16-25.61-120.35-67-161.74z"
            />
          </svg>
          {contact ? <PortableText value={contact} /> : ""}
        </ContactContainer>
      </InfoContainer>
    </AgendaContainer>
  );
};
export default React.memo(AgendaCard);
