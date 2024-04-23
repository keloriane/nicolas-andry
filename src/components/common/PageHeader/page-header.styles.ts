import styled from "styled-components";

export const PageHeaderContainer = styled.div`
  margin-top: -100px;
  z-index: 10;
  position: relative;
  .header-wrapper div {
    display: flex;
    flex-direction: column;
    gap: 42px;
    text-align: center;
    p {
      line-height: 30px;
    }
  }
`;
