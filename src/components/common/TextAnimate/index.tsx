import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

type TextAnimateProps = {
  text: string;
  as: keyof JSX.IntrinsicElements;
  className?: string;
  duration?: number;
  stagger?: number;
};

const Container = styled.div`
  font-size: 60px;
`;

const TextContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 0.15em;
  padding: -0.15em;
  vertical-align: top;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  position: relative;
  display: inline-block;
  will-change: auto;
  transform: translateY(120%) rotate(5deg);
  opacity: 0;
`;

const TextAnimate: React.FC<TextAnimateProps> = ({
  text,
  as,
  className,
  stagger = 0.05,
  duration = 0.9,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const textAnimRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElements = textRef.current?.querySelectorAll('.char');

    if (textElements) {
      gsap.to([textElements], {
        opacity: 1,
        duration: duration,
        stagger: stagger,
        y: '0%',
        rotate: 0,
        ease: 'power2.inOut',
      });
    }
  }, [text]);

  return (
    <Container as={as} ref={textRef} className={className}>
      {text.split(' ').map((char, i) => (
        <TextContainer key={i}>
          <TextWrapper ref={textAnimRef} className="char">
            {char}
          </TextWrapper>
        </TextContainer>
      ))}
    </Container>
  );
};

export default TextAnimate;
