import Image from 'next/image'
import { Text } from '@nextui-org/react'

import { SEO, MotionReveal } from '../components'
import {
  Container,
  Heading,
  Main,
  Description,
  TextBodyContainer,
} from '../styles/styles'

export default function Home() {
  return (
    <Container>
      <SEO 
        page='Home'
        description='Jason Kent, Software and Full Stack Developer website built in Next.js'
      />

      <Main>
        <MotionReveal>
          <Image 
            src='/static/me-blackbg.png' 
            alt='Jason Kent Logo' 
            width={344}
            height={344}
            priority
          />
        </MotionReveal>

        <MotionReveal>
          <Heading>
            I'm Jason Kent.
          </Heading>
        </MotionReveal>

        <MotionReveal>
          <Description>
            <strong style={{color: '#3694FF'}}>&lt; &gt;</strong> I am a Full Stack Developer and Software Engineer. <strong style={{color: '#3694FF'}}>&lt; / &gt;</strong>
          </Description>
        </MotionReveal>

        <MotionReveal>
          <Text>
            During work hours I build and manage websites, but 
            in my free time I love hunting, soccer, playing games, 
            and hanging out with my family.
          </Text>
        </MotionReveal>
      </Main>
    </Container>
  )
}
