import React from 'react'
import { MdConstruction } from 'react-icons/md'
import { SEO } from '../components'
import { Description, Main } from '../styles/styles'

export default function Projects() {
  return (
    <div>
      <SEO 
        page='Projects'
        description='Experience Learning Projects I have worked on that have helped in my development as a Developer.'
      />

      <Main>
        <MdConstruction fontSize='6rem'/>
        <Description>
          I'm sorry, this page is still under construction. Check in later.
        </Description>
      </Main>
    </div>
  )
}
