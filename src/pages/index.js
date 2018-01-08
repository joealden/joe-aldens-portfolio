import React from 'react'
import glamorous from 'glamorous'

import './index.css'

const Page = glamorous.div({
  minHeight: '100vh',
  maxWidth: 1200,
  margin: '0 auto',
  borderLeft: '1px solid black',
  borderRight: '1px solid black'
})

const Header = glamorous.header({
  textAlign: 'center'
})

const Title = glamorous.h1({
  fontSize: '2rem',
  paddingTop: '4rem',
  marginBottom: '1rem'
})

const Subtitle = glamorous.h2({
  fontWeight: 'normal',
  margin: 0,
  textDecoration: 'underline',
  textDecorationSkip: 'ink',
  textTransform: 'uppercase'
})

const Navigation = glamorous.nav({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  margin: '4rem 0 0 0',
  borderTop: '1px solid black',
  borderBottom: '1px solid black'
})

const Link = glamorous.a({
  textDecoration: 'none',
  outline: 'none',
  padding: '1rem',
  color: 'black',
  ':hover': {
    textDecoration: 'underline',
    textDecorationSkip: 'ink'
  }
})

const LinkFactory = glamorous(Link)

const ProjectsLink = LinkFactory({
  borderLeft: '1px solid black',
  borderRight: '1px solid black'
})

const Main = glamorous.main({
  textAlign: 'center',
  paddingTop: '2rem'
})

const Section = {
  Wrapper: glamorous.section({
    padding: '2rem 4rem'
  }),
  WrapperLast: glamorous.section({
    padding: '2rem 4rem 4rem 4rem'
  }),

  Header: glamorous.h3({
    marginBottom: '1rem'
  }),

  Content: glamorous.div({
    test: 'test'
  }),

  Paragraph: glamorous.p({
    marginBottom: '1rem'
  }),
  ParagraphLast: glamorous.p({})
}

const Home = () => (
  <Page>
    <Header>
      <Title>Joe Alden</Title>
      <Subtitle>Software Developer</Subtitle>
      <Navigation>
        <Link href="#about">About</Link>
        <ProjectsLink href="#projects">Projects</ProjectsLink>
        <Link href="#contact">Contact</Link>
      </Navigation>
    </Header>
    <Main>
      <Section.Wrapper id="about">
        <Section.Header>About</Section.Header>
        <Section.Content>
          <Section.Paragraph>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </Section.Paragraph>
          <Section.ParagraphLast>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </Section.ParagraphLast>
        </Section.Content>
      </Section.Wrapper>
      <Section.Wrapper id="projects">
        <Section.Header>Projects</Section.Header>
        <Section.Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Section.Paragraph>
        <Section.Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Section.Paragraph>
        <Section.Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Section.Paragraph>
        <Section.Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Section.Paragraph>
        <Section.ParagraphLast>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </Section.ParagraphLast>
      </Section.Wrapper>
      <Section.WrapperLast id="contact">
        <Section.Header>Contact</Section.Header>
        <Section.Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Section.Paragraph>
        <Section.ParagraphLast>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </Section.ParagraphLast>
      </Section.WrapperLast>
    </Main>
  </Page>
)

export default Home
