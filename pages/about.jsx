import React from 'react'
import { Text } from '@nextui-org/react'

import { SEO, MotionReveal } from '../components'

import { 
  Container,
  Heading, 
  Main,
  Description,
  TextBodyContainer,
  StyledLink,
} from '../styles/styles'

export default function About() {
  return (
    <Container>
      <SEO 
        page='About'
        description='Everything about Jason Kent and Programming.'
      />

      <Main>
        <MotionReveal>
          <Heading>About Me</Heading>
        </MotionReveal>

        <MotionReveal>
          <Description>
            Currently, I am a Software Developer at Liberty Mutual Insurance.
          </Description>
        </MotionReveal>

        <MotionReveal>
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
              I was able to be exposed to Web Development. After an internship 
              with a small company called&nbsp;
              <StyledLink href='https://allucent.io/' target='_blank'>
                allucent
              </StyledLink>
              &nbsp;where I was exposed to the Vue.js JavaScript Library, I continued 
              work in the IT field looking for my entrance into the professional 
              programming work field. That was when, in the tail-end of 2021, I found&nbsp;
              <StyledLink href='https://leisuretimeinc.com/about-us/' target='_blank'>
                Leisure Time Inc.
              </StyledLink>
              &nbsp;I spent around a year and half there doing Full Stack Development and 
              manaing their Marketing Team before getting an offer at Liberty Mutual.
            </Text>
          </TextBodyContainer>
        </MotionReveal>
      </Main>
    </Container>
  )
}
