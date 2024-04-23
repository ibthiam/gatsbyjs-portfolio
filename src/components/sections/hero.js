import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
    font-size: clamp(40px, 8vw, 40px);
  }

  p {
    margin: 20px 0 0;
    max-width: 740px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .love::selection {
    color: var(--pink);
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>👋 Hi, I'm</h1>;
  const two = <h2 className="medium-heading">Thiam E. Ibrahima</h2>;
  const three = <h3 className="medium-heading">I <span className="love">love</span> building things on the web 💻</h3>;
  const four = (
    <>
      <p>
        I'm a software developer focused on <a href="">JavaScript</a>, <a href="">Java</a> and <a href="">Python</a>, currently living in Casablanca. Right now I'm working on <a href="">React.js</a> and <a href="">Next.js</a>. 
      </p>
    </>
  );
  const five = (
    {/*<a
      className="email-link"
      href="#"
      target="_blank"
      rel="noreferrer">
      Recent contribution: &ldquo;<u>Umnia Bank - Biometrics & OCR</u>&rdquo;
    </a>*/}
    <Link className="email-link" to={navLinks[2].url}>UMNIA BANK - Biometrics & OCR</Link>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
