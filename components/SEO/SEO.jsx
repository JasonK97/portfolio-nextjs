import React from 'react'
import Head from 'next/head'

export const SEO = ({ page, description }) => {
  return (
    <Head>
      <title>Jason Kent | {page}</title>
      <meta name="description" content={description ? description : 'Jason Kent\'s Portfolio Website'} />
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
  )
}
