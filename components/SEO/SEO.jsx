import React from 'react'
import NextHead from 'next/head'

export const SEO = ({ page, description }) => {
  return (
    <NextHead>
      <title>{page ? page : 'Page'} | Jason Kent</title>
      <meta name="description" content={description ? description : 'Jason Kent\'s Portfolio Website'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/static/favicon.ico" />
    </NextHead>
  )
}
