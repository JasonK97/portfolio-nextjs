import * as prismicH from '@prismicio/helpers'
import { SEO, Date } from '../../components'
import { RichText } from 'prismic-reactjs'
import sm from '../../sm.json'

import { createClient } from '../../prismicio'

import {
  BlogBodyContainer,
  BlogImage,
  Heading, 
  Main,
  DateRange,
} from '../../styles/styles'
import { RxCalendar } from 'react-icons/rx'

const BlogPost = ({ page }) => {
  return (
    <>
      <SEO 
        page={page.data.title?.[0]?.text}
        description={page.data.title?.[0]?.text}
      />

      <BlogImage
        src={page.data.image.url} 
        alt={page.data.image.alt}
      />
      <Main>
        <Heading>{page.data.title?.[0]?.text}</Heading>
        <DateRange>
          <RxCalendar /> &nbsp;
          Published: <Date dateString={page.data.publish_date} />
        </DateRange>
        <BlogBodyContainer>
          <RichText render={page.data.content} />
        </BlogBodyContainer>
      </Main>
    </>
  )
}

export default BlogPost

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