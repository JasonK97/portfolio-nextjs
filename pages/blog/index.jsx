import { SEO, Date } from '../../components'
import sm from '../../sm.json'
import { Text } from '@nextui-org/react'

import { createClient } from '@prismicio/client'

import {
  BlogGrid,
  BlogGridContainer,
  BlogGridImage,
  BlogGridText,
  BlogMain,
  Container,
  DateRange,
  Heading,
  Main,
  WorkHeading,
} from '../../styles/styles'
import { RxCalendar } from 'react-icons/rx'

const Blog = ({ blogPosts }) => {
  
  return (
    <Main>
      <SEO 
        page='Blog'
        description='My personal blog where I write about things I am learning and things that interest me about the Professional Programming world.'
      />

      <Heading
        mx='auto'
      >
        Blog
      </Heading>
      <BlogMain>
        {/* <BlogGridContainer> */}
          {blogPosts.map(post => (
            <BlogGrid key={post.id} href={`/blog/${post?.uid}`}>
              <BlogGridImage src={post.data.image.url} alt={post.data.image.alt} />
              <BlogGridText>
                <WorkHeading>{post.data.title?.[0]?.text}</WorkHeading>
                <DateRange>
                  <RxCalendar /> &nbsp;
                  Published: <Date dateString={post.data.publish_date} />
                </DateRange>
                <Text>{post.data.content?.[0]?.text.substring(0, 190)}...</Text>
              </BlogGridText>
            </BlogGrid>
          ))}
        {/* </BlogGridContainer> */}
      </BlogMain>
    </Main>
  )
}

export default Blog

export const getStaticProps = async () => {
  const client = createClient(sm.apiEndpoint)

  const blogPosts = await client.getAllByType('blogpost')

  return {
    props: {
      blogPosts,
    },
  }
}
