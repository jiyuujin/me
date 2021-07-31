import React from 'react'
import renderer from 'react-test-renderer'
import Card from '../src/components/Card'
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

describe('Card', () => {
  it('render correctly', () => {
    const tree = renderer.create(<Card data={siteMetadata} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
