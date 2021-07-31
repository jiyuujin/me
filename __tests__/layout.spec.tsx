import React from 'react'
import renderer from 'react-test-renderer'
import Layout from '../src/components/Layout'

const children: React.ReactChild = ''

describe('Layout', () => {
  it('render correctly', () => {
    const tree = renderer.create(<Layout>{children}</Layout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
