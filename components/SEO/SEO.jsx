import React from 'react'
import NextHead from 'next/head'

export const SEO = ({ page, description, image, alt }) => {
  return (
    <NextHead>
      <title>{page ? page : 'Page'} | Jason Kent</title>
      <meta property="og:title" content={page ? page : 'Jason Kent Portfolio'} />
      <meta property="og:description" content={description ? description : 'Jason Kent\'s Portfolio Website'} />
      <meta property="og:image" content={image ? image : '/static/me-blackbg.png'} />
      <meta property="og:image:alt" content={alt ? alt : 'Jason Kent Logo'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page ? page : 'Jason Kent Portfolio'} />
      <meta name="twitter:description" content={description ? description : 'Jason Kent\'s Portfolio Website'} />
      <meta name="twitter:image" content={image ? image : '/static/me-blackbg.png'} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/static/favicon.ico" />
    </NextHead>
  )
}
