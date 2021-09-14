import React, { FC } from 'react'
import Header from '../Header'
import { Payment } from '../Payment'
import Introduction from '../Introduction'
import Work from '../Work'
import Product from '../Product'
import Community from '../Community'
import Slide from '../Slide'

const Home: FC<any> = ({ data }) => {
  return (
    <main>
      <Header data={data.site?.siteMetadata} />
      <Payment siteMetadata={data.site?.siteMetadata} />
      <Introduction data={data.site?.siteMetadata} />
      <Work data={data.allLinksYaml?.edges} />
      <Product data={data.allProductsYaml?.edges} />
      <Community data={data.allCommunitiesYaml?.edges} />
      <Slide data={data.allTalksYaml?.edges} />
    </main>
  )
}

export default Home
