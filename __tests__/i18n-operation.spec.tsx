import React from 'react'
import renderer from 'react-test-renderer'
import { IntlContextProvider } from 'gatsby-plugin-intl'
import messages from '../src/intl/en.json'
import I18nOperation from '../src/components/I18nOperation'

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
          <I18nOperation />
        </IntlContextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
