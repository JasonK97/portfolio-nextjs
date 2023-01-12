import { SEO, Date } from '../../components'
import sm from '../../sm.json'
import { Text } from '@nextui-org/react'

import { createClient } from '@prismicio/client'

import {
  BlogGrid,
  BlogGridImage,
  Description,
  Main,
  Heading,
  WorkHeading,
} from '../../styles/styles'

const Blog = ({ blogPosts }) => {

  console.log(blogPosts)

  return (
    <>
      <SEO 
        page='Blog'
        description='My personal blog where I write about things I am learning and things that interest me about the Professional Programming world.'
      />

      <Main>
        <Heading>Blog</Heading>
        {blogPosts.map(post => (
          <BlogGrid key={post.id} href={`/blog/${post?.uid}`}>
            <BlogGridImage src={post.data.image.url} alt={post.data.image.alt} />
            <WorkHeading>{post.data.title?.[0]?.text}</WorkHeading>
            <Text>{post.data.content?.[0]?.text.substring(0, 190)}...</Text>
          </BlogGrid>
        ))}
      </Main>
    </>
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
