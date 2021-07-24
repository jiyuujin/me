import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../src/components/Footer'
import { CookieFooterWrapper } from '../src/components/Footer/cookie'

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

describe('Footer', () => {
    it('render correctly', () => {
        const tree = renderer.create(<Footer />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})

describe('Cookie Footer', () => {
    it('render correctly', () => {
        const tree = renderer.create(<CookieFooterWrapper />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
