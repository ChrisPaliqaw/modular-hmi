import { render } from '@redwoodjs/testing/web'

import StatusPage from './StatusPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StatusPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StatusPage />)
    }).not.toThrow()
  })
})
