import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface RTextProps {
  sizes: string[];
  fontWeights?: string[];
  lineHeights?: string[];
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
}

const breakpoints = [420, 640, 768, 1024, 1280, 1440];

type StyledTextProps = RTextProps & { as: keyof JSX.IntrinsicElements };

const StyledText = styled.p<StyledTextProps>`
  font-size: ${props => props.sizes[0]}; /* Default font size for mobile */
  ${({ fontWeights }) =>
    fontWeights &&
    css`
      font-weight: ${fontWeights[0]};
      ${breakpoints.map(
        (breakpoint, i) => css`
          @media (min-width: ${breakpoint}px) {
            font-weight: ${fontWeights[i]}; /* Font weight for mobile */
          }
        `,
      )}
    `}
  ${({ lineHeights }) =>
    lineHeights &&
    css`
      line-height: ${lineHeights[0]};
      ${breakpoints.map(
        (breakpoint, i) => css`
          @media (min-width: ${breakpoint}px) {
            line-height: ${lineHeights[i]}; /* Line height for mobile */
          }
        `,
      )}
    `}
  ${breakpoints.map((breakpoint, i) => {
    return css`
      @media (min-width: ${breakpoint}px) {
        font-size: ${props =>
          //@ts-ignore
          props.sizes[i]}; /* Font size for mobile */
      }
    `;
  })}
`;

const ResponsiveText: React.FC<RTextProps> = ({
  sizes,
  fontWeights,
  lineHeights,
  as: Component = 'p',
  children,
  className,
  ...rest
}) => {
  return (
    <StyledText
      as={Component}
      sizes={sizes}
      fontWeights={fontWeights}
      lineHeights={lineHeights}
      {...rest}
      className={className}
    >
      {children}
    </StyledText>
  );
};

export default ResponsiveText;
