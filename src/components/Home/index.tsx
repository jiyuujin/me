import React, { FC } from 'react'
import I18nOperation from '../I18nOperation'
import Header from '../Header'
import { Payment } from '../Payment'
import { CardWrapper } from '../Card/wrapper'
import Introduction from '../Introduction'
import Work from '../Work'
import Product from '../Product'
import Community from '../Community'
import Slide from '../Slide'

const Home: FC<any> = ({ data }) => {
  return (
    <main>
      <I18nOperation />
      <Header data={data.site?.siteMetadata} />
      <Payment />
      <CardWrapper data={data.site?.siteMetadata} />
      <Introduction data={data.site?.siteMetadata} />
      <Work data={data.allLinksYaml?.edges} />
      <Product data={data.allProductsYaml?.edges} />
      <Community data={data.allCommunitiesYaml?.edges} />
      <Slide data={data.allTalksYaml?.edges} />
    </main>
  )
}

export default Home
