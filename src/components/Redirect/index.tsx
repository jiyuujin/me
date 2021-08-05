import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import SEO from '../SEO'

const Redirect = ({ intl }: any) => {
  return <SEO title={`${intl.formatMessage({ id: 'title' })}`} />
}

export default injectIntl(Redirect)
