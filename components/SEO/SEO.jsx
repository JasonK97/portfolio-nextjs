import React from 'react'
import Head from 'next/head'

export const SEO = ({ page, description }) => {
  return (
    <Head>
      <title>Jason Kent | {page}</title>
      <meta name="description" content={description ? description : 'Jason Kent\'s Portfolio Website'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
  )
}
