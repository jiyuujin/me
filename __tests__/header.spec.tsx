import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../src/components/Header'
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

describe('Header', () => {
    it('render correctly', () => {
        const tree = renderer.create(<Header data={siteMetadata} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
