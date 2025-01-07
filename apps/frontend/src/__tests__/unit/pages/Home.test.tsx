import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Home from '@/page'

const mockStore = configureStore([])

test('renders Home component with theme', () => {
  const initialState = { theme: { themeState: 'dark' } }
  const store = mockStore(initialState)

  render(
    <Provider store={store}>
      <Home />
    </Provider>
  )

  const divElement = screen.getByText('Hello').parentElement
  expect(divElement).toBeInTheDocument()
  expect(divElement).toHaveClass('text-red-500')
})

test('renders Home component without theme', () => {
  const initialState = { theme: { themeState: '' } }
  const store = mockStore(initialState)

  render(
    <Provider store={store}>
      <Home />
    </Provider>
  )

  const divElement = screen.getByText('Hello').parentElement
  expect(divElement).toBeInTheDocument()
  expect(divElement).toHaveClass('white')
})