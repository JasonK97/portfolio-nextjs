import { Image } from '@nextui-org/react'
import * as prismicH from '@prismicio/helpers'
import { Date } from '../../components/Date'
import { RichText } from 'prismic-reactjs'
import sm from '../../sm.json'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

import { 
  Container,
  Heading, 
  Main,
  Description,
  TextBodyContainer,
} from '../../styles/styles'

const Page = ({ page }) => {

  console.log(page)

  return (
    <>
      <Image
        src={page.data.image.url} 
        alt={page.data.image.alt}
        width={1200}
        height={1000}
      />
      <Main>
        <Heading>{page.data.title?.[0]?.text}</Heading>
        <Description>Published: <Date dateString={page.data.publish_date} /></Description>
        <TextBodyContainer>
          <RichText render={page.data.content} />
        </TextBodyContainer>
      </Main>
    </>
  )
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('blogpost', params.uid)

  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient(sm.apiEndpoint)

  const blogPosts = await client.getAllByType('blogpost')

  return {
    paths: blogPosts.map((post) => prismicH.asLink(post)),
    fallback: false,
  }
}