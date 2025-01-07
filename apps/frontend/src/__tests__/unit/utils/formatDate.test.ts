import { expect, test } from 'vitest'
import { formatDate } from '@/lib/utils/formatDate'

test('formats date correctly', () => {
  const date = '2023-10-01'
  const formattedDate = formatDate(date)
  expect(formattedDate).toBe('October 1, 2023')
})

test('formats date with different locale', () => {
  const date = '2023-10-01'
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  expect(formattedDate).toBe('1 October 2023')
})