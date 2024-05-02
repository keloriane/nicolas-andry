'use client';
import React from 'react';
import ResponsiveText from '../common/ResponsiveText';
import styled from 'styled-components';
import GridContainer from '../common/Container';
import Col from '../common/Col';
import Button from '../common/Button';
import { theme } from '@/styles/theme';
import AnimatedText from '../common/AnimatedText';
const TextContainer = styled.div`
  text-align: center;
  font-weight: 100;
  p {
    line-height: 30px;
  }
`;

const HeaderContainer = styled.header`
  padding-top: 150px;
`;

const Hero = ({
  clash,
  satoshi,
  title,
  subtitle,
}: {
  clash: string;
  satoshi: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <HeaderContainer>
      <GridContainer colCount={13} rowGap={75}>
        <Col column={[2, 2, 2, 3, 3]} span={[11, 11, 12, 9, 9]}>
          <TextContainer>
            <ResponsiveText
              sizes={['45px', '85px', '85px']}
              className={clash}
              as="h1"
            >
              <AnimatedText text={title} duration={1} splitBy="word" /> <br />
              <span style={{ color: theme.colors.orange }}>
                <AnimatedText text={subtitle} duration={1} splitBy="word" />
              </span>
            </ResponsiveText>
          </TextContainer>
        </Col>
        <Col column={[2, 2, 2, 4, 4]} span={[11, 11, 12, 7, 7]}>
          <TextContainer>
            <ResponsiveText
              sizes={['13px', '16px', '18px']}
              className={satoshi}
            >
              <AnimatedText
                text={`
              Muer en gestes les questions, besoins, émotions.Pétrir ces
              matières, qui me pétrissent à leur tour.Être témoin de la forme
              qui émerge, trace sensible de l'expérience vécue et du chemin
              parcouru.La mettre au monde, pour rendre ce qui fut reçu.`}
                splitBy="phrase"
                staggerValue={0.025}
                duration={1}
              />
            </ResponsiveText>
          </TextContainer>
        </Col>
        <Col column={7} span={1}>
          <Button href="/" text="Découvrir" />
        </Col>
      </GridContainer>
    </HeaderContainer>
  );
};
export default Hero;
