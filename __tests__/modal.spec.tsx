import React from 'react'
import renderer from 'react-test-renderer'
import Modal from '../src/components/Modal'

describe('Modal', () => {
  it('render correctly', () => {
    const tree = renderer.create(<Modal onClose={() => {}}>Test</Modal>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
