import { render } from '@redwoodjs/testing/web'

import ModularLayout from './ModularLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ModularLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ModularLayout />)
    }).not.toThrow()
  })
})
