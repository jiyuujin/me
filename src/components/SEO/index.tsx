import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const SEO = () => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          title,
          titleTemplate,
          description,
          url,
          ogImage,
          twitterUsername,
        },
      },
    }) => {
      return (
        <Helmet
          title={title}
          titleTemplate={titleTemplate}
          htmlAttributes={{ lang: 'ja' }}
        >
          <meta name="description" content={description} />
          <meta property="og:site_name" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:url" content={url} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={twitterUsername} />
          <meta name="twitter:creator" content={twitterUsername} />
          <meta name="twitter:site" content={twitterUsername} />
          <meta name="twitter:image" content={ogImage} />
        </Helmet>
      )
    }}
  />
)

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        url
        ogImage
        twitterUsername
      }
    }
  }
`
