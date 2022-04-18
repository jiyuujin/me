import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../components/Home'
import { Index as NoticeBar } from '../components/Notice'
import { Index as NavBar } from '../components/Nav'
import { Index as Footer } from '../components/Footer'

const IndexPage = ({ data }: any) => {
  return (
    <Layout>
      <SEO />
      <NoticeBar />
      <main>
        <NavBar />
        <Home data={data} />
        <Footer />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        biography
        position
        workExperience
        author
        locale
        lonlat
        url
        iconImage
        ogImage
        twitterUsername
        twitterUrl
      }
    }
    allProductsYaml {
      edges {
        node {
          id
          title
          description
          skills
          image
          url
          sub {
            title
            skills
          }
        }
      }
    }
    allCommunitiesYaml {
      edges {
        node {
          id
          text
          url
        }
      }
    }
    allTalksYaml {
      edges {
        node {
          id
          text
          host
          url
          youtubeUrl
          date
        }
      }
    }
    allLinksYaml {
      edges {
        node {
          id
          text
          url
        }
      }
    }
  }
`

export default IndexPage
