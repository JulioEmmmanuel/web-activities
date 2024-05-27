import '@testing-library/jest-dom/vitest'
import { afterAll, beforeAll, afterEach, vi } from 'vitest'
import { server } from '@/mocks/server'

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    refresh: vi.fn(),
  }),
}))

vi.mock('@/actions/toggleFavorite', () => ({
  toggleFavorite: vi.fn(async (isFavorite: boolean, id: string) => {}),
}))

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'bypass',
  })
})

afterAll(() => {
  server.close()
})

afterEach(() => {
  server.resetHandlers()
})
