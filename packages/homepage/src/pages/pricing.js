import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import PageContainer from '../components/PageContainer';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

import { Title } from '../templates/_feature.elements';
import { P } from '../components/Typography';

const Card = styled.div`
  width: 100%;
  height: 544px;

  background: ${props => (props.dark ? '#151515' : '#0971F1')};
  border-radius: 4px;
  padding: 2.5rem;
  text-align: center;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  color: ${props => props.theme.homepage.white};
`;

const Price = styled.h6`
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  text-align: center;

  color: ${props => props.theme.homepage.white};
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  font-style: normal;
  font-size: 23px;
  line-height: 27px;
  text-align: center;
  color: ${props => props.theme.homepage.muted};
  margin-top: 3rem;
`;

const Button = styled.a`
  height: 44px;
  text-decoration: none;
  background: ${props => props.theme.homepage.grey};
  border-radius: 2px;
  font-weight: 500;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.homepage.white};

  ${props =>
    props.white &&
    `
    background: ${props.theme.homepage.white};
    color: ${props.theme.homepage.blue};
  `}
`;

const FeaturesTableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 190px 190px;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 27px;

  color: ${props => props.theme.homepage.white};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #242424;
  margin-top: 5rem;

  ${props =>
    props.inside &&
    `
    margin-left: 2.5rem;
  `}
`;

const FeaturesTable = styled.ul`
  list-style: none;
  margin: 0;

  ${props =>
    props.inside &&
    `
    margin-left: 2.5rem;
  `}

  li {
    display: grid;
    grid-template-columns: 1fr 190px 190px;
    margin-bottom: 1rem;

    span {
      width: 100%;
      display: block;
      text-align: center;
      font-weight: 500;
      font-size: 23px;
      line-height: 27px;
    }
  }
`;

const FeatureTitle = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 23px;

  color: ${props => props.theme.homepage.white};
  text-align: left !important;
  padding-bottom: 0.25rem;
`;

export default () => (
  <Layout>
    <TitleAndMetaTags title="Pricing - CodeSandbox" />
    <PageContainer width={1086}>
      <Title textCenter>Pricing</Title>
    </PageContainer>
    <div
      css={`
        display: grid;
        grid-template-columns: 26rem 26rem;
        grid-gap: 2rem;
        justify-content: center;

        ${props => props.theme.breakpoints.lg} {
          grid-template-columns: 26rem;
        }
      `}
    >
      <Card dark>
        <div>
          <CardTitle>Community</CardTitle>
          <Price>Free</Price>
          <List>
            <li>✓ Development & Prototyping</li> <li>✓ Online IDE </li>
            <li>✓ Embeds </li>
            <li>✓ CodeSandbox CI </li>
            <li>✓ Teams</li>
          </List>
        </div>
        <Button href="/s">Create Sandbox, it’s free </Button>
      </Card>
      <Card>
        <div>
          <CardTitle>Pro</CardTitle>
          <Price>From $5/month</Price>
          <List
            css={`
              color: white;
            `}
          >
            <li
              css={`
                margin-bottom: 1rem;
              `}
            >
              Everything in Community, plus:
            </li>
            <li>+ Unlimited Private Sandboxes </li>
            <li>+ Private GitHub Repos</li>
          </List>
        </div>
        <Button white href="/patreon">
          Subscribe to Pro
        </Button>
      </Card>
    </div>
    <h3
      css={`
        font-weight: 500;
        font-size: 36px;
        line-height: 43px;

        color: ${props => props.theme.homepage.white};
        margin-bottom: 3.75rem;
        margin-top: 6rem;
      `}
    >
      Features
    </h3>
    <FeaturesTableHeader
      css={`
        margin-top: 0;
      `}
    >
      <span>Development & Prototyping</span>
      <span
        css={`
          text-align: center;
        `}
      >
        Community
      </span>
      <span
        css={`
          text-align: center;
        `}
      >
        Pro
      </span>
    </FeaturesTableHeader>
    <FeaturesTable>
      <li>
        <div>
          <FeatureTitle>VS Code powered Editor </FeatureTitle>
          <P muted small>
            Start from an official template, or create your own
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>

      <li>
        <div>
          <FeatureTitle>Static File Hosting</FeatureTitle>
          <P muted small>
            All static files served via CDN
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>

      <li>
        <div>
          <FeatureTitle>Public Sandboxes</FeatureTitle>
          <P muted small>
            Sandboxes, both the preview and code, are available publicly by
            default
          </P>
        </div>
        <span>50</span>
        <span>Unlimited</span>
      </li>

      <li>
        <div>
          <FeatureTitle>Unlimited Private Sandboxes</FeatureTitle>
          <P muted small>
            Set a sandbox as private or unlisted so others can't see the code
          </P>
        </div>
        <span />
        <span>✓</span>
      </li>

      <li>
        <div>
          <FeatureTitle>Private GitHub Repos</FeatureTitle>
          <P muted small>
            Import and sync repos which are private on GitHub to CodeSandbox
          </P>
        </div>
        <span />
        <span>✓</span>
      </li>
    </FeaturesTable>
    <FeaturesTableHeader>
      <span>Online IDE</span>
    </FeaturesTableHeader>
    <FeaturesTable>
      <li>
        <div>
          <FeatureTitle>VS Code powered Editor</FeatureTitle>
          <P muted small>
            Leverage the power and familiarity of VS Code
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Hot Module Reloading </FeatureTitle>
          <P muted small>
            See changes as you make them
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Keybindings & Quick Actions </FeatureTitle>
          <P muted small>
            Perform everyday tasks speedily
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Console </FeatureTitle>
          <P muted small>
            View logging and console output to see loading progress and debug
            issues
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Test Viewer</FeatureTitle>
          <P muted small>
            Showing test results alongside your code
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Problem Viewer </FeatureTitle>
          <P muted small>
            See errors clearly with our user-friendly overlay
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Zen Mode</FeatureTitle>
          <P muted small>
            Zen mode hides distracting editor elements for demos and screenshots
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Custom Themes </FeatureTitle>
          <P muted small>
            Tweak theme styles with support for all VS Code themes 
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Vim Mode </FeatureTitle>
          <P muted small>
            Vim emulation in the editor, powered by the VSCodeVim extension
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Type Acquisition </FeatureTitle>
          <P muted small>
            Typings automatically downloaded for every dependency
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>External Resources </FeatureTitle>
          <P muted small>
            Automatically include external resources, like CSS or JS files
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Session Restore </FeatureTitle>
          <P muted small>
            (Recover un-saved changes between sessions)
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>External Previews </FeatureTitle>
          <P muted small>
            (Open sandbox previews on a separate URL but with Hot Module
            Reloading)
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
    </FeaturesTable>
    <FeaturesTableHeader inside>
      <span>Dev Tool Integrations</span>
    </FeaturesTableHeader>
    <FeaturesTable inside>
      <li>
        <div>
          <FeatureTitle>NPM Packages</FeatureTitle>
          <P muted small>
            Add any of the 1M+ dependencies on npm directly from the editor
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>GitHub</FeatureTitle>
          <P muted small>
            Import and sync public repos, export a sandbox to a repo or create
            commits and open PRs
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>ZEIT Now Deploy </FeatureTitle>
          <P muted small>
            Deploy a production version of your sandbox to ZEIT Now
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Netlify Deploy</FeatureTitle>
          <P muted small>
            Deploy a production version of your sandbox to Netlify
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Jest</FeatureTitle>
          <P muted small>
            Auto-detect and run Jest tests
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>React DevTools</FeatureTitle>
          <P muted small>
            Integration of React’s own DevTools into the editor
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Prettier</FeatureTitle>
          <P muted small>
            Code gets prettified on save according to preferences
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>ESLint</FeatureTitle>
          <P muted small>
            Code is linted automatically
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Emmet</FeatureTitle>
          <P muted small>
            Expand abbreviations with Emmet.io in all JS, HTML, and CSS files
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
      <li>
        <div>
          <FeatureTitle>Stackbit</FeatureTitle>
          <P muted small>
            Import projects generated by Stackbit
          </P>
        </div>
        <span>✓</span>
        <span>✓</span>
      </li>
    </FeaturesTable>
  </Layout>
);
