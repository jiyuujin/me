import React, { FC } from 'react'
import Header from '../Header'
import { Payment } from '../Payment'
import Introduction from '../Introduction'
import Work from '../Work'
import Product from '../Product'
import Timeline from '../Timeline'
import Community from '../Community'
import Slide from '../Slide'
import Portrait from '../Portrait'

const Home: FC<any> = ({ data }) => {
  return (
    <main>
      <Header data={data.site?.siteMetadata} />
      <Payment siteMetadata={data.site?.siteMetadata} />
      <Introduction data={data.site?.siteMetadata} />
      <Work data={data.allLinksYaml?.edges} />
      <Product data={data.allProductsYaml?.edges} />
      <Timeline />
      <Community data={data.allCommunitiesYaml?.edges} />
      <Slide data={data.allTalksYaml?.edges} />
      <Portrait />
    </main>
  )
}

export default Home
