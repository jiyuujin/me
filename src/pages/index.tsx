import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Index as NoticeBar } from '../components/Notice'
import { Index as NavBar } from '../components/Nav'
import Home from '../components/Home'
import Footer from '../components/Footer'
import { CookieFooterWrapper } from '../components/Footer/cookie'
// import { Helmet } from 'react-helmet'

const IndexPage = ({ data }: any) => {
  return (
    <Layout>
      <SEO />
      <NoticeBar />
      <NavBar />
      <main>
        <Home data={data} />
        <Footer />
        <CookieFooterWrapper />
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
