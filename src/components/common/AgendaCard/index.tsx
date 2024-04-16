import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ResponsiveText from "../ResponsiveText";

const AgendaContainer = styled.div`
  display: flex;
  gap: 25px;
  border-bottom: 1px solid #1c1c1c;
  align-items: center;
  .date__container {
    background-color: #1e1e1e;
    padding: 50px 5px;
    color: #fff2e3;
    width: 80px;
    text-align: center;
    font-weight: 700;
  }
  .description__container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .location__container {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  a {
    color: #4c4c4c;
  }
`;
const AgendaCard = ({ date, details }: { date: string; details: string }) => {
  return (
    <AgendaContainer>
      <div className="date__container">
        <ResponsiveText sizes={["12px", "16px", "21px", "21px"]} as="h3">
          {date}
        </ResponsiveText>
      </div>
      <div className="description__container">
        <div>
          <ResponsiveText
            sizes={["12px", "12px", "16px", "16px"]}
            className="bold"
          >
            Sortie:{" "}
          </ResponsiveText>
          <ResponsiveText sizes={["12px", "12px", "16px", "16px"]}>
            Manuel pour développer l'argentique et penser la photographie
            autrement 
          </ResponsiveText>
        </div>
        <div>
          <div className="location__container">
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
            <ResponsiveText
              sizes={["12px", "12px", "16px", "16px"]}
              className="bold"
            >
              Hangar (Bruxelles)
            </ResponsiveText>
          </div>
        </div>
        <Link href="/">inscriptions:contact@nicolas-andry.be</Link>
      </div>
    </AgendaContainer>
  );
};
export default AgendaCard;
