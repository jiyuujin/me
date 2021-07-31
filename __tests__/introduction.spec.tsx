import React from 'react'
import renderer from 'react-test-renderer'
import Introduction from '../src/components/Introduction'
import { siteMetadata } from '../src/utils/constants'

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl')
  const intl = reactIntl.createIntl({
    locale: 'en',
  })
  return {
    ...reactIntl,
    useIntl: () => intl,
  }
})

describe('Introduction', () => {
  it('render correctly', () => {
    const tree = renderer.create(<Introduction data={siteMetadata} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
