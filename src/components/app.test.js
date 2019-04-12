import React from 'react'
import { App } from './app'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'

afterEach(cleanup)

const renderApp = () => {
  const { getByText } = render(<App />)

  return { getByText }
}

test('render app without crashes', () => {
  const text = 'Hello world'
  const { getByText } = renderApp()
  const container = getByText(text)

  expect(container).toBeInTheDocument()
})
