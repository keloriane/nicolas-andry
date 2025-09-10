import React from "react";
import * as S from "./hamburger.styles";

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  isOpen,
  onClick,
  className,
}) => {
  return (
    <S.HamburgerButton
      className={className}
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <S.HamburgerLines $isOpen={isOpen}>
        <S.Line $isOpen={isOpen} />
        <S.Line $isOpen={isOpen} />
        <S.Line $isOpen={isOpen} />
      </S.HamburgerLines>
    </S.HamburgerButton>
  );
};

export default HamburgerIcon;
