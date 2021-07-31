import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const LazyImage = ({ assetUrl, alt }: { assetUrl: string; alt: string }) => {
  const { allImageSharp } = useStaticQuery(graphql`
        query {
            allImageSharp {
                nodes {
                    fixed(width: 200) {
                        originalName
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

  return (
    <Img
      fixed={
        allImageSharp.nodes.find(
          (n: { fixed: { originalName: string } }) =>
            n.fixed.originalName === assetUrl
        ).fixed
      }
      alt={alt}
    />
  )
}

export default LazyImage
