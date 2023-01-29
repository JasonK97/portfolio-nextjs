import Image from 'next/image'
import { Text } from '@nextui-org/react'

import { SEO } from '../components'
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
        <Image 
          src='/static/me-blackbg.png' 
          alt='Jason Kent Logo' 
          width={344}
          height={344}
          priority
        />

        <Heading>
          I'm Jason Kent.
        </Heading>

        <Description>
          <strong style={{color: '#3694FF'}}>&lt; &gt;</strong> I am a Full Stack Developer and Software Engineer. <strong style={{color: '#3694FF'}}>&lt; / &gt;</strong>
        </Description>

        <Text>
          During work hours I build and manage websites, but 
          in my free time I love hunting, soccer, playing games, 
          and hanging out with my family.
        </Text>
      </Main>
    </Container>
  )
}
