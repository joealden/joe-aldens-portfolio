import React from "react";
import { Helmet } from "react-helmet";
import styled, { injectGlobal } from "styled-components";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const Home = () => (
  <Page>
    <Helmet>
      <title>Joe Alden</title>
    </Helmet>
    <Main>
      <Heading>Joe Alden</Heading>
      <Subheading>Full Stack Web Developer</Subheading>
      <SocialLinksWrapper>
        <SocialLinks>
          <a href="https://github.com/joealden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a href="https://twitter.com/joealden_">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-twitter"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
          <a href="mailto:me@joealden.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </SocialLinks>
      </SocialLinksWrapper>
    </Main>
  </Page>
);

const Page = styled.div`
  height: calc(100vh - 6vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3vw 3.5vw;
  box-shadow: 0 0 35px 3px #999;

  @media screen and (max-width: 1000px) {
    height: calc(100vh - 10vw);
    margin: 5vw;
  }
`;

const Main = styled.main``;

const Heading = styled.h1`
  text-align: center;
  font-weight: normal;
  font-size: 35px;
`;

const Subheading = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 25px;
  margin: 8px 50px;
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;

  a {
    padding: 20px;

    svg {
      stroke: black;
      fill: white;
      transition: all 0.2s ease-in-out;

      &:hover {
        fill: black;

        polyline {
          transition: stroke 0.2s ease-in-out;
          stroke: white;
        }
      }
    }

    &:hover {
      svg {
        fill: black;

        polyline {
          transition: stroke 0.2s ease-in-out;
          stroke: white;
        }
      }
    }
  }
`;

export default Home;
