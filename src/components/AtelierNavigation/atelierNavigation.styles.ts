import styled from "styled-components";

export const AtelierNavigationSection = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  .atelier_item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    padding: 20px;
    gap: 20px;
    h4 {
      font-size: 18px;
      text-transform: uppercase;
      margin-top: 15px;
    }
    a {
      height: 50px;
      display: flex;
      align-items: center;
      span {
        display: flex;
        align-items: center;
        height: 100%;
      }
    }
  }
`;
