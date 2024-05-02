'use client';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import Logo from '@/../public/logo.svg';
import Image from 'next/image';

const ContactContainer = styled.section`
  width: 100%;
  max-width: 1380px;
  margin: auto;
  padding: 50px;
  .contact-wrapper {
    width: 100%;
    margin: auto;
    border: 1px solid ${theme.colors.black};
    color: ${theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
  }
  @media (max-width: 600px) {
    .contact-wrapper {
      gap: 30px;
      justify-content: center;
    }
  }
  .contact-info {
    display: flex;
    align-items: center;
    gap: 13px;

    h4 {
      font-weight: 800;
    }
    p {
      font-size: 14px;
    }
  }
  .contact-cta {
    .cta {
      border: 1px solid ${theme.colors.black};
      font-size: 16px;
      padding: 8px 20px;
      display: block;
    }
  }
`;

const Contact = ({ archivo }: { archivo: string }) => {
  return (
    <ContactContainer>
      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="logo-container">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="contact-description">
            <h4 className={archivo}>contact@nicolas-andry.com</h4>
            <p className={archivo}>
              *Pour recevoir mes nouvelles d'activités, merci de m'envoyer un
              courriel avec mention PROJETS et/ou ATELIERS selon le(s)
              contenu(s) souhaité(s).
            </p>
          </div>
        </div>
        <div className="contact-cta">
          <Link className="cta" href={'mailto:contact@nicolas-andry.com'}>
            Me contacter
          </Link>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
