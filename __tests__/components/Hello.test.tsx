import React from 'react'
import { render } from '@testing-library/react'

import Hello from '@/components/Hello'

describe('Hello', () => {
  it('should render without crashing', () => {
    render(<Hello name={''} />)
  })

  it('should render the correct text', () => {
    const { getByText } = render(<Hello name="Alice" />)
    expect(getByText('Hello, Alice!')).toBeTruthy()
  })

  it('should render the correct text when no name is given', () => {
    const { getByText } = render(<Hello name={''} />)
    expect(getByText('Hello, !')).toBeTruthy()
  })

})
