import React from 'react'
import renderer from 'react-test-renderer'
import { IntlContextProvider } from 'gatsby-plugin-react-intl'
import messages from '../src/intl/en.json'
import Nav from '../src/components/Nav'

const locales = ['en', 'ja']

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

describe('HeaderBar', () => {
  it('render correctly', () => {
    const tree = renderer
      .create(
        <IntlContextProvider
          value={{
            language: 'en',
            languages: locales,
            messages,
            originalPath: '/',
            redirect: true,
            routed: true,
          }}
        >
          <Nav />
        </IntlContextProvider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
