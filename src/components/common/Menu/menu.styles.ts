import { theme } from "@/styles/theme";
import styled from "styled-components";

export const MenuContainer = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 200;
  color: ${theme.colors.black} !important;
  background-color: ${theme.colors.white};

  z-index: 100;
  @media screen and (max-width: 768px) {
    position: unset;
  }

  select {
    padding: 2px;
    border-radius: 30px;
    font-size: 14px;
    transition: all 0.1s ease-in;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    cursor: pointer;
    &:hover {
      color: ${theme.colors.orange};
      border: 1px solid ${theme.colors.orange};
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
      @media screen and (max-width: 768px) {
        display: none;
      }
      .link_transition_menu {
        font-weight: 400;

        &:hover {
          color: ${theme.colors.orange};
        }
      }
    }
  }
  .mobile_cta {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .fullscreen_menu {
    @media screen and (min-width: 768px) {
      display: none;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #e2e2e2;
    z-index: 100;

    .fs_menu {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
      &:hover {
        color: ${theme.colors.orange};
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;
    }
    li {
      font-size: 22px;
    }
  }

  .agenda_cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      display: none;
    }
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
