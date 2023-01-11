import React from 'react'
import { SEO } from '../../components'

import { 
  Container,
  Heading, 
  Main,
  Description,
  TextBodyContainer,
} from '../../styles/styles'

export default function BlogPage() {
  return (
    <Container>
      <SEO 
        page='Blog'
        description='Follow me on my development journey as I write articles about things I learn.'
      />

      <Main>
        <Heading>Blog</Heading>
      </Main>
    </Container>
  )
}
