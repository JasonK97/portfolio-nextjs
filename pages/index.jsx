import Image from 'next/image'

import { SEO, MotionReveal } from '../components'
import {
  AnimatedText,
  Container,
  HomeHeading,
  Main,
  StyledText,
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
            src='/static/me-no-bg.png' 
            alt='Jason Kent Logo' 
            width={344}
            height={344}
            priority
          />
        </MotionReveal>

        <MotionReveal>
          <HomeHeading>
            &nbsp;I am&nbsp;&nbsp;
            <b>
              <AnimatedText>
                Jason Kent.<br />
                a Software Engineer.<br />
                a Full-Stack Developer.<br />
                a husband.<br />
                a father.
              </AnimatedText>
            </b>
          </HomeHeading>
        </MotionReveal>

        <MotionReveal>
          <StyledText>
            <strong>
              &lt; &gt;&nbsp;
            </strong>
            During work hours I build and manage websites, but 
            in my free time I love hunting, soccer, playing games, 
            and hanging out with my family.
            <strong>
              &nbsp;&lt; / &gt;
            </strong>
          </StyledText>
        </MotionReveal>
      </Main>
    </Container>
  )
}
