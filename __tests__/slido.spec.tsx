import React from 'react'
import renderer from 'react-test-renderer'
import { IntlContextProvider } from 'gatsby-plugin-react-intl'
import messages from '../src/intl/en.json'
import Slide from '../src/components/Slide'

const communityData = [
    {
        node: {
            id: 'id',
            text: 'text',
            url: 'url',
            youtubeUrl: 'youtubeUrl',
            date: 'date',
        },
    },
]

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

describe('Product', () => {
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
                    <Slide data={communityData} />
                </IntlContextProvider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
