import { animatePageOut } from "@/mixins/animations";
import { theme } from "@/styles/theme";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

interface TransitionLinkProps {
  href: string;
  children: string | React.ReactNode;
  className?: string;
}

const LinkWrapper = styled.span`
  cursor: pointer;
  &:hover {
    /* text-decoration: underline; */
    /* color: ${theme.colors.orange}; */
  }
`;

const TransitionLink = ({ href, children, className }: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== href) {
      animatePageOut(href, router);
      router.push(href);
    }
  };
  return (
    <LinkWrapper className={className} onClick={handleClick}>
      {children}
    </LinkWrapper>
  );
};
export default TransitionLink;
