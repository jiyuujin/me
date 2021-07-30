import React from 'react'
import renderer from 'react-test-renderer'
import { IntlContextProvider } from 'gatsby-plugin-react-intl'
import messages from '../src/intl/en.json'
import Product from '../src/components/Product'

const imageData = [
    {
        node: {
            id: 'abc',
            title: 'title',
            description: 'title',
            skills: ['title'],
            image: 'title',
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
                    <Product data={imageData} />
                </IntlContextProvider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
