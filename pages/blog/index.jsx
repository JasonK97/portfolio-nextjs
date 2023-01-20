import { useState } from 'react'
import { isEmpty } from 'lodash'
import sm from '../../sm.json'
import { Text } from '@nextui-org/react'
import Select, { StylesConfig } from 'react-select'
import { FadingBalls } from 'react-cssfx-loading'

import { SEO, Date } from '../../components'

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
  const [blogTags, setBlogTags] = useState([])

  console.log(blogPosts)

  const allTags = [
    {
      value: 'Next.js',
      label: 'Next.js'
    },
    {
      value: 'Frameworks',
      label: 'Frameworks'
    },
  ]

  if (isEmpty(blogPosts)) {
    return <FadingBalls color='blue' />
  }

  return (
    <Main>
      <SEO 
        page='Blog'
        description='My personal blog where I write about things I am learning and things that interest me about the Professional Programming world.'
      />

      <Heading
        mx='auto'
        pt='4rem'
        pb='2rem'
      >
        Blog
      </Heading>

      <Select 
        options={allTags}
        closeMenuOnSelect={false}
        isMulti
        styles={{
          control: (styles) => ({
            ...styles,
            minWidth: '300px'
          }),
          option: (styles) => ({
            ...styles,
            color: '#202020'
          }),
          multiValueRemove: (styles) => ({
            ...styles,
            color: '#202020',
          }),
        }}
        onChange={e => setBlogTags(e)}
      />

      <BlogMain>
        {/* <BlogGridContainer> */}
        {isEmpty(blogTags) ? (
          blogPosts.map(post => (
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
          ))
        ) : (
          blogPosts.map(post => {
            post.data.tags.map(postTag => {
              blogTags.map(tag => {
                (postTag.tag === tag.value) ? (
                  // console.log(postTag.tag, tag.value)
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
               ) : null;
              })
            })
          })
          // blogPosts.map(post => (
          //   // post.data.find(p => p.tags === blogTags)
          //   <BlogGrid key={post.id} href={`/blog/${post?.uid}`}>
          //     <BlogGridImage src={post.data.image.url} alt={post.data.image.alt} />
          //     <BlogGridText>
          //       <WorkHeading>{post.data.title?.[0]?.text}</WorkHeading>
          //       <DateRange>
          //         <RxCalendar /> &nbsp;
          //         Published: <Date dateString={post.data.publish_date} />
          //       </DateRange>
          //       <Text>{post.data.content?.[0]?.text.substring(0, 190)}...</Text>
          //     </BlogGridText>
          //   </BlogGrid>
          // ))
        )}
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
