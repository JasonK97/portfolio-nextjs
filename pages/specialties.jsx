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
import { SEO } from '../components'
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
        <Heading>Specialties</Heading>

        <WorkHeading>Current Tools</WorkHeading>

        <PictureInfoGrid>
          <FaReact style={styles} />
          <SiNextdotjs style={styles} />
        </PictureInfoGrid>

        <WorkHeading>Tools used in University</WorkHeading>

        <PictureInfoGrid>
          <SiCplusplus style={styles} />
          <IoLogoVue style={styles} />
          <SiJavascript style={styles} />
          <TiHtml5 style={styles} />
          <SiCsswizardry style={styles} />
          <SiPostgresql style={styles} />
          <SiAndroidstudio style={styles} />
          <SiPython style={styles} />
        </PictureInfoGrid>
      </Main>
    </Container>
  )
}
