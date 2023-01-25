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
  BlogGridImage,
  BlogGridText,
  BlogMain,
  DateRange,
  Heading,
  Main,
  WorkHeading,
} from '../../styles/styles'
import { RxCalendar } from 'react-icons/rx'

const Blog = ({ blogPosts }) => {
  // const [blogTags, setBlogTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  let allTags = []

  blogPosts.map(post => {
    post.data.tags.map(tag => {
      allTags.push({ value: tag.tag, label: tag.tag })
    })
  })

  function removeDuplicates(allTags) {
    const jsonObject = allTags.map(JSON.stringify)
      
    const uniqueSet = new Set(jsonObject);
    const uniqueArray = Array.from(uniqueSet).map(JSON.parse)

    return uniqueArray
  }

  if (isEmpty(blogPosts)) return <FadingBalls color='blue' />

  const filteredBlogPosts = blogPosts.filter(post => {
    if (selectedTags.length === 0) {
      return true
    }
    return post.data.tags.some(tag => selectedTags.includes(tag.tag))
  })

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
        options={removeDuplicates(allTags)}
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
        // onChange={e => setBlogTags(e)}
        onChange={e => setSelectedTags(e.map(tag => tag.value))}
      />

      <BlogMain>
        {filteredBlogPosts.map(post => (
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
        {/* {!isEmpty(blogTags) && blogPosts ? (
          blogPosts.map(post => {
            post.data.tags.map(postTag => {
              blogTags.map(tag => {
                if (postTag.tag === tag.value) {
                  return (
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
                  )
                }
              })
            })
          })
        ) : isEmpty(blogTags) && blogPosts ? (
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
          null
        )} */}
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
