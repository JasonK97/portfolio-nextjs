import React from 'react'
import { MdConstruction } from 'react-icons/md'
import { SEO } from '../components'
import { Description, Main } from '../styles/styles'

export default function Specialties() {
  return (
    <div>
      <SEO 
        page='Specielties'
        description='Languages and technologies I have experience with.'
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
