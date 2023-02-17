import React from 'react'
import { FaReact } from 'react-icons/fa'
import { 
  SiNextdotjs,
  SiJavascript,
  SiCplusplus,
  SiPostgresql,
  SiPython,
  SiCsswizardry,
  SiAndroidstudio
} from 'react-icons/si'
import { IoLogoVue } from 'react-icons/io5'
import { TiHtml5 } from 'react-icons/ti'
import { SEO, MotionReveal } from '../components'
import { 
  Main,
  Heading,
  WorkHeading,
  PictureInfoGrid,
  Container,
} from '../styles/styles'

export default function Specialties() {
  const styles = { padding: '20px', fontSize: '5em' }

  return (
    <Container>
      <SEO 
        page='Specialties'
        description='Languages and technologies I have experience with.'
      />

      <Main>
        <MotionReveal>
          <Heading>Specialties</Heading>
        </MotionReveal>

        <MotionReveal>
          <WorkHeading>Current Tools</WorkHeading>
        </MotionReveal>

        <MotionReveal>
          <PictureInfoGrid>
            <FaReact style={styles} />
            <SiNextdotjs style={styles} />
          </PictureInfoGrid>
        </MotionReveal>

        <MotionReveal>
          <WorkHeading>Tools used in University</WorkHeading>
        </MotionReveal>

        <PictureInfoGrid>
          <MotionReveal>
            <SiCplusplus style={styles} />
          </MotionReveal>
          <MotionReveal>
            <IoLogoVue style={styles} />
          </MotionReveal>
          <MotionReveal>
            <SiJavascript style={styles} />
          </MotionReveal>
          <MotionReveal>
            <TiHtml5 style={styles} />
          </MotionReveal>
          <MotionReveal>
            <SiCsswizardry style={styles} />
          </MotionReveal>
          <MotionReveal>
            <SiPostgresql style={styles} />
          </MotionReveal>
          <MotionReveal>
            <SiAndroidstudio style={styles} />
          </MotionReveal>
          <MotionReveal>
            <SiPython style={styles} />
          </MotionReveal>
        </PictureInfoGrid>
      </Main>
    </Container>
  )
}
