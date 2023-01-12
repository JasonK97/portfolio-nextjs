import React from 'react'
import { Text } from '@nextui-org/react'

import { SEO } from '../components'

import { 
  Container,
  Heading, 
  Main,
  Description,
  TextBodyContainer,
} from '../styles/styles'

export default function About() {
  return (
    <Container>
      <SEO 
        page='About'
        description='Everything about Jason Kent and Programming.'
      />

      <Main>
        <Heading>About Me</Heading>

        <Description>
          Currently I am the Lead Full Stack Developer and Marketing 
          Team Manager at Leisure Time Inc. in Eastern Idaho.
        </Description>

        <TextBodyContainer>
          <Text>
            Growing up in the Pacific Northwest exposed me to a lot 
            of what technology has to offer. Having a father in Mechanical 
            Engineering at Boeing and an uncle doing the same at Microsoft 
            and now Meta, I knew early on that I wanted to something in 
            the technical field. It wasn't until 2016 when my best friend's 
            brother and I were chatting when I realized that maybe I can 
            code too. 
          </Text>

          <br />

          <Text>
            I entered College at Brigham Young University - Idaho and began 
            my major in Software Engineering. My program exposed me to C++ 
            and the basics of Software Development. After a couple semesters 
            I was able to be exposed to Web Development. From there, the rest is 
            history.
          </Text>
        </TextBodyContainer>
      </Main>
    </Container>
  )
}
