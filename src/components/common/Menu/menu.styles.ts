import { theme } from "@/styles/theme";
import styled from "styled-components";

export const MenuContainer = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
  z-index: 200;
  background-color: ${theme.colors.white};
  border-bottom: 1px solid rgba(240, 240, 240);

  select {
    border: none;
    transition: all 0.05s ease-in;
    font-size: 14px;
    &:hover {
      color: ${theme.colors.orange};
    }
  }

  .logo-container {
    svg {
      height: 55px;
    }
    &:hover {
      svg {
        rect {
          fill: ${theme.colors.orange};
          transition: all 0.2s ease-in;
        }
      }
    }
  }
  nav {
    ul {
      display: flex;
      justify-content: space-evenly;
      gap: 30px;
      align-items: center;
      .link_transition_menu {
        color: ${theme.colors.black};
        font-weight: 400;
        &:hover {
          color: ${theme.colors.orange};
        }
      }
    }
  }
  .agenda_cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .cta_container {
      padding: 0 50px;
      .cta {
        background-color: ${theme.colors.black};
        padding: 10px 25px;
        transition: all 0.2s ease-in;
        color: white;
        &:hover {
          background-color: ${theme.colors.orange};
        }
      }
    }
  }
`;
